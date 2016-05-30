var path = require('path');
var webpack = require('webpack');

var loaders = [
  {
    "test": /\.js?$/,
    "exclude": /node_modules/,
    "loader": "babel",
    "query": {
      "presets": [
        "es2015",
        "react"
      ],
      "plugins": []
    }
  }
];

module.exports = {
  devtool: 'eval-source-map',
  entry: path.resolve('src', 'app.js'),
  output: {
    path: path.resolve('build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: loaders
  }
};
