module.exports = {
  extends: ['alloy', 'alloy/react', 'alloy/typescript', 'taro/react'],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  globals: {},
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-commonjs': 'off',
    'jsx-quotes': 'off',
    '@typescript-eslint/no-require-imports': 'off',
  },
};
