const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/js/index.js',
  },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: `[name].bundle.js`,
    chunkFilename: `[name].bundle.js`
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }],
      },
      {
        test: /.hbs$/,
        use: [{
          loader: 'handlebars-loader'
        }]
      }
    ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: true,
    //   minimize: true
    // }),
    new HtmlWebpackPlugin({
      inject: 'body'
    })
  ]
};
