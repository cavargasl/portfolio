/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: 'lf',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  quoteProps: 'preserve',
  printWidth: 140,
  importOrder: ['^@core/([^/]+)/domain$', '^@core/(.*)$', '', '^[./]', '<THIRD_PARTY_MODULES>'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
}
