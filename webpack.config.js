/*eslint-env node */
const path = require('path');

const loaders = [
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

const config = {
  entry: {
    demo: path.join(__dirname, 'src/RichTextEditor.js'),
  },
  output: {
    path: path.join(__dirname, 'build/'),
    filename: 'react-rte-material.js'
  },
  module: {
    loaders,
  },
};

export default config;