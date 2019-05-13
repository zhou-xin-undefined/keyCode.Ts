const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
module.exports = {
  entry: './index.js',
  mode: 'production',
  output: {
    filename: 'keyCode.min.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
};