// Minimal, deliberately narrow. The point is to stop unused imports and
// variables accumulating again -- 115 of them had built up unnoticed because
// this repo had no linting at all. Broader React/Next rule sets would fail
// immediately on a codebase that has never been linted; widening the rules is
// a separate exercise.
import react from "eslint-plugin-react";

export default [
  {
    ignores: [
      "public/static/pdf-js/**", // vendored pdf.js build, not ours to fix
      ".next/**",
      "node_modules/**",
      "snapshots.js", // generated Cypress snapshot fixtures
      // Raw JSON that happens to carry a .js extension. Never imported as a
      // module -- pages/api/dpla/pdf/[collectionId]/[pdfId].js reads these with
      // fs.readFileSync + JSON.parse at runtime. Linting them as JavaScript is
      // a category error; they do not parse as JS and never will.
      "constants/claire-collins-harvey.js",
      "constants/ida-b-wells.js",
      "constants/mary-church-terrell.js",
      "constants/womans-era.js",
    ],
  },
  {
    files: ["**/*.js", "**/*.mjs"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: {
        window: "readonly", document: "readonly", navigator: "readonly",
        console: "readonly", fetch: "readonly", process: "readonly",
        setTimeout: "readonly", clearTimeout: "readonly",
        setInterval: "readonly", clearInterval: "readonly",
        localStorage: "readonly", sessionStorage: "readonly",
        URL: "readonly", URLSearchParams: "readonly", Buffer: "readonly",
        __dirname: "readonly", module: "writable", require: "readonly",
      },
    },
    plugins: { react },
    settings: { react: { version: "detect" } },
    rules: {
      // Without these two, every component used only as a JSX tag reads as an
      // unused import -- 382 false positives on this codebase.
      "react/jsx-uses-vars": "error",
      "react/jsx-uses-react": "error",
      // MainLayout provides the single <main id="main"> landmark. A page adding
      // its own recreates the nested-landmark bug this rule exists to prevent,
      // and CI runs `npm run lint`, so this is enforced for free.
      "no-restricted-syntax": [
        "error",
        {
          selector: 'JSXOpeningElement[name.name="main"]',
          message:
            "Don't render <main> here -- MainLayout already provides the page's single <main id=\"main\"> landmark. Render this as its children instead.",
        },
      ],
      // React 19 removes these outright, and nothing else here would catch a
      // reintroduction: the build compiles fine and the failure is at runtime.
      // eslint-plugin-react is already a dependency; its rule also catches the
      // class-property form (componentWillMount = () => {}), which a
      // hand-rolled MethodDefinition selector misses.
      "react/no-deprecated": "error",
      "no-unused-vars": [
        "error",
        { args: "none", ignoreRestSiblings: true, varsIgnorePattern: "^_" },
      ],
    },
  },
];
