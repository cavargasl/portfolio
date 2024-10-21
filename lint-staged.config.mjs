export default {
  '*.{js,mjs,cjs,ts,json,md}': ['prettier --write'],
  '*.{js,mjs,cjs,ts}': ['eslint --fix'],
}
