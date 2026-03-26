#!/usr/bin/env node
/**
 * Generates public/sitemap.xml at build time from static routes and constants.
 * Run via the postbuild npm script.
 */
import { readFileSync, writeFileSync } from "fs";
import { keyFigures } from "../constants/key-figures.js";
import { timelineOptions } from "../constants/timeline-options.js";

const BASE = "https://blackwomenssuffrage.dp.la";

const staticRoutes = [
  "/",
  "/about",
  "/timeline",
  "/collections",
  "/collections/ida-b-wells",
  "/partners",
  "/harmful-language-statement",
];

const keyFigureRoutes = Object.keys(keyFigures).map((k) => `/key-figures/${k}`);
const timelineRoutes = timelineOptions.map((r) => `/timeline/${r}`);

const ibwData = JSON.parse(readFileSync("constants/ida-b-wells.js", "utf8"));
const ibwRoutes = Object.keys(ibwData).map((k) => `/collections/ida-b-wells/${k}`);

const allUrls = [
  ...staticRoutes,
  ...keyFigureRoutes,
  ...timelineRoutes,
  ...ibwRoutes,
].map((path) => `${BASE}${path}`);

const now = new Date().toISOString();

const entries = allUrls
  .map((url) => `  <url>\n    <loc>${url}</loc>\n    <lastmod>${now}</lastmod>\n  </url>`)
  .join("\n");

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  entries +
  `\n</urlset>\n`;

writeFileSync("public/sitemap-pages.xml", xml);
console.log(`generate-sitemap: wrote ${allUrls.length} URLs to public/sitemap-pages.xml`);
