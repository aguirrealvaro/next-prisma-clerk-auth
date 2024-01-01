const path = require("path");

const checkESLint = (filenames) =>
  `next lint --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(" --file ")}`;

const checkTypes =
  "eslint --fix --plugin tsc --rule 'tsc/config: [2, {configFile: ./tsconfig.json}]'";

module.exports = {
  "*.{js,jsx,ts,tsx}": [checkESLint, checkTypes],
};
