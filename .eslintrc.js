module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:prettier/recommended",
    "plugin:tailwindcss/recommended",
  ],
  plugins: ["@typescript-eslint", "tailwindcss"],
  rules: {
    "no-var": "error",
    "no-console": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "react-hooks/rules-of-hooks": "warn",
    "react-hooks/exhaustive-deps": "error",
    "prettier/prettier": "error",
    "prefer-const": "warn",
    "prefer-arrow-callback": "warn",
    "import/no-duplicates": "error",
    "import/no-unresolved": "off",
    "import/order": [
      "error",
      {
        groups: [["external", "builtin"], "parent", ["index", "internal", "sibling"]],
        pathGroups: [
          {
            pattern: "react-dom",
            group: "external",
            position: "before",
          },
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        "newlines-between": "never",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "tailwindcss/classnames-order": "warn",
  },
};
