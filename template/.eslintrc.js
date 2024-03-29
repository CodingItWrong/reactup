module.exports = {
  extends: ['react-app', 'react-app/jest', 'prettier'],
  plugins: ['cypress', 'prettier'],
  env: {
    'cypress/globals': true,
  },
  rules: {
    'import/order': ['warn', {alphabetize: {order: 'asc'}}], // group and then alphabetize lines - https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'no-duplicate-imports': 'error',
    'prettier/prettier': 'warn',
    quotes: ['error', 'single', {avoidEscape: true}], // single quote unless using interpolation
    'sort-imports': [
      'warn',
      {ignoreDeclarationSort: true, ignoreMemberSort: false},
    ], // alphabetize named imports - https://eslint.org/docs/rules/sort-imports
  },
};
