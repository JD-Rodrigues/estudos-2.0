const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main/index.tsx',
  output: {
    path:path.join(__dirname, 'public/js'), 
    publicPath: '/public/js',
    filename:'bundle.js',
  }, 
  resolve: {
    extensions: ['.js', '.ts', '.tsx', 'scss'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  }, 
  rules: [
    {
      test: /\.ts(x?)$/,
      loader: 'ts-loader',
      exclude: 'node_modules'
    },
    {
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            modules: true
          }
        },
        {
          loader: 'sass-loader'
        }
      ],
      
    }
  ],
  devServer: {
    historyApiFallback:true,
    devMiddleware: {
      writeToDisk: true,
    },
    static: {
      directory: path.join(__dirname, "./public")
    },
  }, 
  externals: {
    react: 'React',
    'react-dom':'ReactDOM'
  },
  plugins: [new CleanWebpackPlugin()]
}