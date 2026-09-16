import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://9a96f55c94d9e0f332251d903fbb60aa@o4508229092769792.ingest.us.sentry.io/4508229094080512",
  tracesSampleRate: 1,
  debug: false,
});
