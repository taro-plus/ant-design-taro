module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-css-modules', 'stylelint-config-recess-order'],
  customSyntax: 'postcss-less',
  rules: {
    'color-function-notation': 'off',
    'custom-property-no-missing-var-function': 'off',
  },
};
