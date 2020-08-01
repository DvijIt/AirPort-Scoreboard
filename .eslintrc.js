module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'airbnb'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    semi: 'off',
    'comma-dangle': ['error', 'never'],
    'arrow-parens': 'off',
    'arrow-body-style': 'off',
    'import/no-unresolved': 'off',
    'object-curly-newline': 'off',
    'react/jsx-props-no-spreading': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
