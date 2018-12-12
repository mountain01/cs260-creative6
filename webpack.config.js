const path = require('path');
const HtmlWebackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    app: ['./src/index.ts']
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devServer: {
    contentBase: './public',
    host: '0.0.0.0',
    port: 4200,
    hot: true,
    noInfo: true,
    proxy: {
      '/api': 'http://localhost:3000'
    },
    watchContentBase: true
  },
  module: {
    rules: [{
        test: /\.ts$/,
        use: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader'
        ]
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new HtmlWebackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(['dist', 'public']),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
