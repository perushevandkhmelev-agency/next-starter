module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    amd: true,
    node: true
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'global-require': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/no-absolute-path': 0,
    'import/prefer-default-export': 0,
    'react/jsx-no-bind': [
      'error',
      {
        ignoreDOMComponents: false,
        ignoreRefs: true,
        allowArrowFunctions: false,
        allowFunctions: false,
        allowBind: false
      }
    ],
    'prettier/prettier': ['error', {}, { usePrettierrc: true }]
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      'babel-module': {
        'babel-plugin-module-resolver': { root: ['./'] }
      }
    }
  }
}
