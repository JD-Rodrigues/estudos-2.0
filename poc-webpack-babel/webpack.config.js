const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: "development",
  entry: '/src/js/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        filename:'index.html',
        template: '/src/index.html'
      }
    ),
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
      },
      {
        test: /\.css$/i, 
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
  
}