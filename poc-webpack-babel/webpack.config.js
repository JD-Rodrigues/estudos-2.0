const path = require('path')

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'main.js',
    pathname: path.join(__dirname, 'dist')
  }
  
}