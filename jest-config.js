module.exports = {
  rootDir: './',
  verbose: true,
  collectCoverage: true,
  setupFiles: ['jest-canvas-mock'],
  collectCoverageFrom: ['./src/**/*.js'],
  coverageDirectory: '<rootDir>/coverage',
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js'],
};
