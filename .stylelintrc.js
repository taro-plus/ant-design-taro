module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-css-modules'],
  customSyntax: 'postcss-less',
  rules: {
    'string-quotes': false,
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: ['page'],
      },
    ],
  },
};
