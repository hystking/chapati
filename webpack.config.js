const path = require('path');
const webpack = require('webpack');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
  stats: {
    colors: true,
  },
  plugins: [new webpack.optimize.UglifyJsPlugin()],
};
