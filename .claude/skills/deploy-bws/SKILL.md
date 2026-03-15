---
name: deploy-bws
description: >
  Deploys the Black Women's Suffrage site (blackwomenssuffrage.dp.la) to
  production. Use this skill whenever the user wants to deploy, push, release,
  or ship changes to blackwomenssuffrage.dp.la or the "BWS site" — phrases like
  "deploy BWS", "deploy black women's suffrage", "push BWS to prod", "update
  the suffrage site", or "run the BWS pipeline".
---

## Pre-authorization

**All steps in this skill are permanently pre-authorized.** Run all checks,
triggers, pipeline starts, polling/monitoring loops, and health checks
automatically without asking permission. This includes:
`gh run watch`, `gh workflow run`, `gh run list`, `gh run view`,
`aws codepipeline list-pipeline-executions`,
`aws codepipeline get-pipeline-execution`,
`aws codepipeline get-pipeline-state`,
`aws codepipeline start-pipeline-execution`,
`aws codepipeline update-pipeline`,
`aws codebuild list-builds-for-project`,
`aws ecr describe-images`,
`curl` health checks,
and long-running `while true` poll loops with `sleep`.

---

## Overview

Deploys `dpla/black-womens-suffrage` `main` to `https://blackwomenssuffrage.dp.la`
via a 2-phase pipeline: ECR image build (GH Action) → CodePipeline blue/green ECS swap (2 tasks).

**Total typical duration: ~20–25 minutes.**
- GH Action ECR build: ~15–16 min
- Pipeline Source: ~10s
- Pipeline Build (CodeBuild): ~1–2 min
- Pipeline Production (blue/green, 2 tasks): ~5–8 min

The CodePipeline has a stale webhook — must always be started manually.

---

## Step 0: Pre-flight checks

### 0a. Check site health

```bash
curl -o /dev/null -s -w "%{http_code}" https://blackwomenssuffrage.dp.la
```

- `200` or `202` (WAF bot challenge) → healthy, proceed
- `5xx` or no response → **STOP.** Do not deploy to a broken site. Report the
  status and ask the user to investigate before deploying.

Print: `🏥 blackwomenssuffrage.dp.la health check: HTTP <status> — <healthy/WARNING>`

### 0b. Check currently deployed commit vs what will be deployed

```bash
# What's currently deployed (ECR image tag)
aws ecr describe-images \
  --repository-name dpla-bws \
  --image-ids imageTag=latest \
  --region us-east-1 \
  --query 'imageDetails[0].{pushed:imagePushedAt,tags:imageTags}' \
  --output json

# What's on main right now
gh api repos/dpla/black-womens-suffrage/commits/main \
  --jq '.sha[0:7] + " — " + (.commit.message | split("\n")[0]) + " (" + (.commit.committer.date | split("T")[0]) + ")"'
```

Print a clear summary:
```
📦 Currently deployed: <sha> (pushed <date>)
🔜 Will deploy:        <sha> — <commit message> (<date>)
```

If the deployed commit matches main, warn: "⚠️  Already up to date — are you
sure you want to redeploy?" but do not stop.

### 0c. Check for in-flight executions

```bash
aws codepipeline list-pipeline-executions \
  --pipeline-name bws-pipeline \
  --max-results 5 \
  --region us-east-1 \
  --query 'pipelineExecutionSummaries[?status==`InProgress`]' \
  --output json

gh run list --repo dpla/black-womens-suffrage \
  --workflow "Build ECR" \
  --limit 3 \
  --json status,conclusion,databaseId,createdAt
```

If a pipeline execution is InProgress or a GH Action run is in_progress, stop
and ask whether to wait or abort. Never start a new run on top of an in-flight one.

Print: `🔍 Pre-flight checks complete — proceeding with deployment`

---

## Step 1: Trigger the GitHub Action

```bash
gh api \
  --method POST \
  -H "Accept: application/vnd.github+json" \
  /repos/dpla/black-womens-suffrage/actions/workflows/35394265/dispatches \
  -f ref=main
```

Returns HTTP 204 on success. Then collect the run ID:

```bash
sleep 5 && gh run list \
  --repo dpla/black-womens-suffrage \
  --workflow "Build ECR" \
  --limit 1 \
  --json databaseId,status \
  --jq '.[0].databaseId'
```

Print: `🚀 GH Action triggered (run <ID>) — building Docker image and pushing to ECR (~15–16 min)`

---

## Step 2: Monitor the GitHub Action

```bash
gh run watch <RUN_ID> --repo dpla/black-womens-suffrage
```

Print progress as steps complete. If the run fails, stop immediately — do not
proceed to the pipeline. Provide the run URL:
`https://github.com/dpla/black-womens-suffrage/actions/runs/<RUN_ID>`

Print: `✅ ECR image built and pushed successfully`

---

## Step 3: Apply webhook fix and start the pipeline

The `bws-pipeline` has a stale webhook and will never auto-trigger.
Apply the no-op fix before starting:

```bash
aws codepipeline update-pipeline \
  --pipeline "$(aws codepipeline get-pipeline \
    --name bws-pipeline \
    --query 'pipeline' \
    --output json \
    --region us-east-1)" \
  --region us-east-1
```

Then start the pipeline:

```bash
aws codepipeline start-pipeline-execution \
  --name bws-pipeline \
  --region us-east-1
```

Save the `pipelineExecutionId` from the response.

Print: `🚀 CodePipeline started (execution: <id>)`

---

## Step 4: Monitor the pipeline

Poll every 20 seconds until all three stages succeed.

Start the Bash call with `while true` directly (no preceding variable assignment)
so the command matches the `Bash(while true*)` permission pattern. Embed the
execution ID inline:

```bash
while true; do
  STATUS=$(aws codepipeline get-pipeline-execution \
    --pipeline-name bws-pipeline \
    --pipeline-execution-id <EXECUTION_ID> \
    --query 'pipelineExecution.status' \
    --output text \
    --region us-east-1)
  STAGES=$(aws codepipeline get-pipeline-state \
    --name bws-pipeline \
    --query 'stageStates[*].{stage:stageName,status:latestExecution.status}' \
    --output json \
    --region us-east-1)
  SRC=$(echo "$STAGES" | python3 -c "import sys,json; s=json.load(sys.stdin); print(next((x['status'] for x in s if x['stage']=='Source'), '—'))" 2>/dev/null || echo "—")
  BLD=$(echo "$STAGES" | python3 -c "import sys,json; s=json.load(sys.stdin); print(next((x['status'] for x in s if x['stage']=='Build'), '—'))" 2>/dev/null || echo "—")
  PRD=$(echo "$STAGES" | python3 -c "import sys,json; s=json.load(sys.stdin); print(next((x['status'] for x in s if x['stage']=='Production'), '—'))" 2>/dev/null || echo "—")
  TS=$(date '+%H:%M:%S')
  if [ "$STATUS" = "Succeeded" ]; then
    echo "✅ [$TS] Source: $SRC | Build: $BLD | Production: $PRD"; break
  elif [ "$STATUS" = "Failed" ] || [ "$STATUS" = "Stopped" ]; then
    echo "❌ [$TS] Pipeline $STATUS — Source: $SRC | Build: $BLD | Production: $PRD"; break
  else
    echo "⏳ [$TS] Source: $SRC | Build: $BLD | Production: $PRD"
  fi
  sleep 20
done
```

Expected stage durations: **Source** (~10s), **Build** (~1–2 min), **Production** (~5–8 min).

If the pipeline fails at any stage, stop and report. CodeDeploy has auto-rollback
enabled on DEPLOYMENT_FAILURE — note this in the report. Check CodeBuild logs if
Build fails:

```bash
aws codebuild list-builds-for-project \
  --project-name bws-codebuild \
  --region us-east-1 \
  --query 'ids[0]' --output text
```

---

## Step 5: Verify the live site

```bash
curl -o /dev/null -s -w "%{http_code}" https://blackwomenssuffrage.dp.la
```

- `200` or `202` (WAF bot challenge) → success
- Non-200/202 → warn the user. ECS tasks may still be warming up — wait 30s and retry once.

Also capture the deployed commit:
```bash
gh api repos/dpla/black-womens-suffrage/commits/main --jq '.sha[0:7]'
```

Print: `✅ Site is live — https://blackwomenssuffrage.dp.la returned <status>`

---

## Summary

```
🎉 Deployment complete!
   Commit:   <sha> (main)
   Pipeline: <execution-id>
   Status:   ✅ All stages passed
   Site:     https://blackwomenssuffrage.dp.la (HTTP <status>)
   Duration: ~<X> minutes
```

---

## Key infrastructure reference

| Resource | Value |
|---|---|
| GitHub repo | `dpla/black-womens-suffrage` |
| Local path | `/Users/dominic/Documents/GitHub/black-womens-suffrage` |
| GH Action | `Build ECR` (workflow ID `35394265`) |
| GH Action ref | `main` |
| ECR repo | `283408157088.dkr.ecr.us-east-1.amazonaws.com/dpla-bws` |
| CodePipeline | `bws-pipeline` |
| CodeBuild project | `bws-codebuild` |
| CodeDeploy app | `bws-deployment` |
| CodeDeploy group | `bws-deployment-group` |
| ECS cluster/service | `bws` / `bws` |
| Desired task count | **2** (production stage takes ~5–8 min) |
| Auto-rollback | Enabled on DEPLOYMENT_FAILURE |
| Blue termination wait | 5 minutes |
| Site URL | `https://blackwomenssuffrage.dp.la` |
| AWS region | `us-east-1` |
| AWS credentials | `~/.aws/credentials` (default profile) |
