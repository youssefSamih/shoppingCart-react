module.exports = {
  moduleDirectories: ['node_modules', '__tests__', 'src'],
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*{!(styles|style|docsData|__coverage__|global_style),}.(ts|tsx)',
  ],
  coverageThreshold: {
    global: {
      functions: 60,
      lines: 70,
      statements: 70,
    },
  },
};
