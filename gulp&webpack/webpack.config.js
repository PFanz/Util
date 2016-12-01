const path = require('path')
const webpack = require('webpack')

module.exports = {
  // entry: path.join(__dirname, '/src/js/Lunbo.js'),
  output: {
    path: path.join(__dirname, '/dist/js/'),
    filename: 'index.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}
