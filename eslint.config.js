import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import { defineConfig, globalIgnores } from "eslint/config";

// Sub-modules are internal; consumers must go through the owning module's own barrel
const noDeepSubModuleImport = {
  group: ["@modules/**/sub-modules/**"],
  message:
    "Do not deep-import a module's sub-modules; import from the module's own barrel (e.g. @modules/xxx or @modules/xxx/navigation) instead.",
};

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^react$", "^react"],

            ["^@?\\w"],

            [
              "^@contexts",
              "^@hooks",
              "^@features",
              "^@components",
              "^@services",
              "^@utils",
              "^@constants",
              "^@assets",
            ],

            ["^\\."],

            ["^\\u0000"],
          ],
        },
      ],

      "simple-import-sort/exports": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "no-restricted-imports": ["error", { patterns: [noDeepSubModuleImport] }],
    },
  },
  {
    files: ["src/modules/*/navigation/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            noDeepSubModuleImport,
            {
              group: ["@shared/navigation", "@shared/navigation/*"],
              message:
                "modules/*/navigation must not import @shared/navigation (causes circular deps). Keep only route key/path/title config here.",
            },
          ],
        },
      ],
    },
  },
  {
    files: [
      "src/shared/avatar/types/**/*.{ts,tsx}",
      "src/shared/theme/types.{ts,tsx}",
    ],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@shared/storage", "@shared/storage/**"],
              message:
                "shared/avatar/types and shared/theme/types must not import anything from @shared/storage.",
            },
          ],
        },
      ],
    },
  },
]);
