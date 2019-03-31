module.exports = {
  'rootDir': './',
  'verbose': true,
  'collectCoverage': true,
  'collectCoverageFrom': ['./src/**/*.js'],
  'coverageDirectory': '<rootDir>/coverage',
  'moduleFileExtensions': [
    'js'
  ],
  'transform': {
    '^.+\\.js$': 'babel-jest'
  }
};