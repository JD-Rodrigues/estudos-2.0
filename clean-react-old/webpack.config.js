const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack');


module.exports = {
  mode: 'development',
  entry: './src/main/index.tsx',
  output: {
    path:path.resolve(__dirname, './dist'), 
    filename:'bundle.js',
  }, 
  resolve: {
    extensions: ['.js', '.ts', '.tsx', 'scss'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  }, 
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],        
      }
    ],
  },
  devServer: {
    historyApiFallback:true,
    devMiddleware: {
      writeToDisk: true,
    },
    static: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/main/index.html'
    })
  ]
}