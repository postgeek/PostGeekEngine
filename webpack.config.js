const path = require('path');

module.exports = {
  entry: {
    app: './examples/demoGame/main.js',
  },
  resolve: {
    modules: [
      path.resolve(`${__dirname}/src`),
      path.resolve(`${__dirname}/node_modules`),
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    port: 3000,
  },
};
