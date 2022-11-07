module.exports = {
  'rootDir': './',
  'verbose': true,
  'collectCoverage': false,
  "setupFiles": ["jest-canvas-mock"],
  'collectCoverageFrom': ['./src/**/*.js'],
  'coverageDirectory': '<rootDir>/coverage',
  'moduleFileExtensions': [
    'js'
  ]
};