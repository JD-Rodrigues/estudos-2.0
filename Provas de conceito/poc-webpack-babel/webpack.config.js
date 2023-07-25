const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
require('dotenv').config()


module.exports = {
  mode: process.env.NODE_ENV,
  entry: '/src/js/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'dist')
  },
  optimization: {
    minimize: process.env.NODE_ENV === 'production'
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        filename:'index.html',
        template: '/src/index.html',
      }
    ),
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader' ]
      },
      {
        test:/\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
     },
     {
      test: /\.(jpeg|jpg|png|webp|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]'
      }
     }
    ]
  }
  
}