/*eslint-env node */
var path = require('path');

var loaders = [
  {
    test: /\.js$/,
    loader: 'babel',
    exclude: /node_modules/,
  },
  {
    test: /\.css$/,
    exclude: /\.global\.css$/,
    loaders: [
      'style?sourceMap',
      'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
    ],
  },
  { test: /\.global\.css$/, loader: 'style!raw' },
];

module.exports = [{
  entry: {
    demo: './demo/index.js',
  },
  output: {
    path: path.join(__dirname, '/'),
    filename: 'bundle.js'
  },
  module: { loaders: loaders },
}];
