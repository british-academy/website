/** @type {import("prettier").Config} */
export default {
  printWidth: 120,
  useTabs: false,
  trailingComma: "es5",
  tabWidth: 2,
  singleQuote: false,
  semi: false,
  plugins: ["prettier-plugin-astro"],
  overrides: [{ files: "*.astro", options: { parser: "astro" } }],
}
