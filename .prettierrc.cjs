module.exports = {
  plugins: [require.resolve("prettier-plugin-astro")],
  singleQuote: true,
  trailingComma: "none",
  printWidth: 100,
  semi: false,
  useTabs: false,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
