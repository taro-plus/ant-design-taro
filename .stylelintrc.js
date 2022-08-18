module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-css-modules'],
  customSyntax: 'postcss-less',
  rules: {
    'string-quotes': null,
    'value-list-comma-newline-after': null,
    'declaration-colon-newline-after': null,
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: ['page', 'taro-button-core'],
      },
    ],
  },
};
