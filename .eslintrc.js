module.exports = {
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  env: {
    jest: true
  },
  globals: {
    defineAppConfig: true,
    definePageConfig: true,
  },
  rules: {
    '@typescript-eslint/no-require-imports': 'warn',
    '@typescript-eslint/consistent-type-imports': 'error',
  },
};
