const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/main/index.tsx',
  output: {
    path:path.join(__dirname, 'public/js'), 
    publicPath: '/public/js',
    filename:'bundle.js',
  }, 
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  }, 
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
  }
}