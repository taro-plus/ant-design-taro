module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  customSyntax: 'postcss-less',
  rules: {
    'color-function-notation': 'off',
    'custom-property-no-missing-var-function': 'off',
    'selector-type-no-unknown': null,
    'selector-class-pattern': null,
  },
};
