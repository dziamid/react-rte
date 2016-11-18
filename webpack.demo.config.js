/*eslint-env node */

import path from 'path';
import baseConfig from './webpack.config';

const config = {
  ...baseConfig,
  entry: {
    demo: path.join(__dirname, 'demo/index.js'),
  },
  output: {
    path: __dirname,
    publicPath: '/demo',
    filename: 'bundle.js',
  },
};

console.log(config);

export default config;
