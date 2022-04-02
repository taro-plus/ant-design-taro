/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jest-environment-jsdom',

  testMatch: ['<rootDir>/taro/pages/package/**/__tests__/**/*.[jt]s?(x)'],
  setupFilesAfterEnv: ['@testing-library/jest-dom', '@testing-library/jest-dom/extend-expect'],

  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
    window: true,
    ENABLE_INNER_HTML: true,
    ENABLE_ADJACENT_HTML: true,
    ENABLE_SIZE_APIS: true,
    ENABLE_TEMPLATE_CONTENT: true,
    ENABLE_CLONE_NODE: true,
    ENABLE_CONTAINS: true,
    ENABLE_MUTATION_OBSERVER: true,
  },
  moduleNameMapper: {
    '^@tarojs/taro$': '@tarojs/taro-h5',
    '^@tarojs/components$': '@tarojs/components/dist-h5/react',
    '\\.(css|less)$': '<rootDir>/jest/style-mock.js',
    '^antd-taro$': '<rootDir>/taro/pages/package',
  },
};
