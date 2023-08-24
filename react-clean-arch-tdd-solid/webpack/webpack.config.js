/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line import/no-unused-modules
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
// eslint-disable-next-line import/no-unused-modules
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { EnvironmentPlugin } = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const EslintWebpackPlugin = require('eslint-webpack-plugin')
const { dependencies } = require('../package.json')
const path = require('path')
const sharedLibsPaths = Object.keys(dependencies)

const isDevelopment = process.env.MODE === 'development'
const isProduction = process.env.MODE === 'production'

module.exports = {
  mode: process.env.MODE,
  entry: {
    main: {
      import: './src/main/main.tsx',
      dependOn: 'shared'
    },
    shared: [...sharedLibsPaths]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    clean: true
  },
  resolve: {
    alias: {
      '@images': path.resolve(__dirname, '../src/presentation/assets/images'),
      '@data': path.resolve(__dirname, '../src/data'),
      '@domain': path.resolve(__dirname, '../src/domain'),
      '@infra': path.resolve(__dirname, '../src/infra')
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxSize: 24000,
      maxInitialRequests: 1
    }
  },
  performance: {
    maxEntrypointSize: 300000,
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith('.js')
    }
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader']
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/images'
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'swc-loader',
          options: {
            parseMap: true,
            jsc: {
              parser: { syntax: 'typescript', tsx: true },
              target: 'es2021',
              minify: { compress: isProduction },
              transform: {
                react: {
                  runtime: 'automatic',
                  refresh: isDevelopment
                }
              }
            },
            minify: true
          }
        }
      }
    ]
  },
  devServer: {
    static: ['dist']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/main/index.html'
    }),
    new EnvironmentPlugin({ ...process.env }),
    new MiniCssExtractPlugin(),
    new EslintWebpackPlugin({
      failOnWarning: true
    }),
    isDevelopment && new ReactRefreshWebpackPlugin()
  ]
}
