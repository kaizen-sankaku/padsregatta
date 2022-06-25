module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:node/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'no-process-exit': 'off',
    'object-shorthand': 'off',
    'node/no-unsupported-features/es-syntax': [
      'warn',
      {
        version: 'latest',
        ignores: ['modules'],
      },
    ],
  },
};
