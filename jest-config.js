module.exports = {
  'rootDir': './',
  'verbose': true,
  'collectCoverage': false,
  'collectCoverageFrom': ['./**/*.js'],
  'coverageDirectory': '<rootDir>/coverage',
  'moduleFileExtensions': [
    'js'
  ],
  'transform': {
    '^.+\\.js$': 'babel-jest'
  }
};