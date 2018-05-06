module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  rules: {
    'import/prefer-default-export': 'off',
    'no-case-declarations': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
  }
};
