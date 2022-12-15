module.exports = {
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  env: {
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    defineAppConfig: false,
    definePageConfig: false,
  },
  rules: {
    '@typescript-eslint/no-require-imports': 'warn',
    '@typescript-eslint/consistent-type-imports': 'error',
  },
};
