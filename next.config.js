const { withSentryConfig } = require("@sentry/nextjs");

// CSP is set here rather than in a CloudFront response headers policy so it
// only applies to origin responses. CloudFront WAF challenge pages are served
// directly by CloudFront and are never subject to this policy.
//
// script-src uses 'unsafe-inline' because Next.js injects framework bootstrap
// scripts whose sha256 hashes change on version upgrades. Migrating to a
// nonce-based CSP via Next.js middleware would eliminate this.
const BWS_CSP = [
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  "form-action 'self'",
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
  "img-src 'self' http: https: data:",
  "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self'",
  "media-src 'self' https://*.dp.la",
  "frame-src 'self'",
  "worker-src 'self' blob:",
].join("; ");

const config = {
  poweredByHeader: false,

  async headers() {
    if (process.env.NODE_ENV !== "production") return [];
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: BWS_CSP },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/item/:id([0-9a-f]{32}).json",
        destination: "/api/items/:id?single=1",
      },
      {
        source: "/item/:id([0-9a-f]{32}).raw",
        destination: "/api/items/raw/:id",
      },
    ];
  },

  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

module.exports = withSentryConfig(config, {
  org: "dpla",
  project: "dpla-frontend",
  // Auth token is only needed for source map uploads during CI builds.
  authToken: process.env.SENTRY_AUTH_TOKEN,
  disableSourceMapUpload: !process.env.SENTRY_AUTH_TOKEN,
  silent: !process.env.CI,
  telemetry: false,
});
