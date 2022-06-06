const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html',
  })],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'docs'),
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }],
  },
};