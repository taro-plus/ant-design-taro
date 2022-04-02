const { jsWithTs } = require('ts-jest/presets');

module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  collectCoverage: true,
  transform: {
    ...jsWithTs.transform,
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  globals: {
    window: true,
    ENABLE_INNER_HTML: true,
    ENABLE_ADJACENT_HTML: true,
    ENABLE_SIZE_APIS: true,
    ENABLE_TEMPLATE_CONTENT: true,
    ENABLE_CLONE_NODE: true,
    ENABLE_CONTAINS: true,
    ENABLE_MUTATION_OBSERVER: true,
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!@taro)', '^.+\\.(css|sass|scss|less)$'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testMatch: ['<rootDir>/taro/pages/package/components/**/__tests__/**/*.[jt]s?(x)'],
  moduleNameMapper: {
    '@tarojs/taro': '@tarojs/taro-h5',
    '@tarojs/components': '@tarojs/components/dist-h5/react',
    '^antd-taro$': '<rootDir>/taro/pages/package',
    '\\.(css|less)$': '<rootDir>/jest/style-mock.js',
  },
};
