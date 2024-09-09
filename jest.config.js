module.exports = {
  preset: 'react-native',
  setupFiles: [
    './jest/setup.js', // For additional setup, including mocks and environment initialization
  ],
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect', // For better matchers from jest-native
  ],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native|react-clone-referenced-element|react-navigation|@react-navigation|@react-native-community))',
  ],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgMock.js', // Mock SVGs if using them in your components
  },
  coverageDirectory: './coverage',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
};
