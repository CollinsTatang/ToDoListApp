const path = require('path');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const options = {};
module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new WebpackManifestPlugin(options),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[id].[chunkhash].js',
    publicPath: '/ToDoListApp/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};