/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
    {
      files: "*.mdx",
      options: {
        parser: "markdown",
      },
    },
    {
      files: "*.md",
      options: {
        parser: "markdown",
      },
    },
  ],
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: "all",
  printWidth: 100,
  arrowParens: "always",
};
