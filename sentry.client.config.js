import * as Sentry from "@sentry/nextjs";

// The DSN is dpla-frontend's on purpose. All DPLA front-end sites report into
// one Sentry project -- they share the API and the /search and /item code, so
// issues are usually shared too -- and are told apart by `environment`.
Sentry.init({
  dsn: "https://9a96f55c94d9e0f332251d903fbb60aa@o4508229092769792.ingest.us.sentry.io/4508229094080512",
  // Matches SENTRY_ENVIRONMENT=bws on the ECS task, so browser events land in
  // the same bucket as this site's server events. Hardcoded rather than read
  // from the environment because sentry.client.config.js is bundled into the
  // browser, where Next.js inlines only NODE_ENV and NEXT_PUBLIC_* vars.
  environment: process.env.NODE_ENV === "production" ? "bws" : "development",
  tracesSampleRate: 1,
  debug: false,
});
