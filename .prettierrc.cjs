module.exports = {
  singleQuote: true,
  trailingComma: 'none',
  printWidth: 100,
  semi: false,
  useTabs: false,
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
}
