/**
 * ESLint configuration
 * @see https://eslint.org
 */

module.exports = {
  root: true,
  globals: {
    IS_DEVELOPMENT: 'readonly',
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2017,
  },
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'no-console': 'off',
    'no-multi-spaces': [
      'error',
      {
        exceptions: {
          ImportDeclaration: true,
          Property: false,
          VariableDeclarator: true,
        },
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
      },
    ],
  },
}
