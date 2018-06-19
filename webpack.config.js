const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [path.join(__dirname, 'src/js/app.js')],
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: 'app.js',
  },
  resolve: {
    modules: [path.join(__dirname, 'node_modules'), path.resolve('./src/js')],
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
  stats: {
    colors: true,
  },
};
