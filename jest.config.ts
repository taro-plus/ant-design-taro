const { jsWithTs } = require('ts-jest/presets');
const fs = require('fs');
const path = require('path');

const dirUtils = path.join(__dirname, '/src/utils');
const files = fs.readdirSync(dirUtils);
const moduleNameMapperUtils = files.reduce(
  (pre, cur) => ({ ...pre, [`lib-utils/${cur.split('.')[0]}`]: path.join(__dirname, '/src/utils/', cur) }),
  {},
);

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
  testMatch: ['<rootDir>/src/components/**/tests/**/*.[jt]s?(x)'],
  moduleNameMapper: {
    '@tarojs/taro': '@tarojs/taro-h5',
    '@tarojs/components': '@tarojs/components/dist-h5/react',
    '^antd-taro$': '<rootDir>/src/index.ts',
    '\\.(css|less)$': '<rootDir>/jest/style-mock.js',
    ...moduleNameMapperUtils,
  },
};
