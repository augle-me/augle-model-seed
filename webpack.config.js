var path = require('path');
module.exports = {
  entry: './preview/load.js',
  output: {
    path: __dirname + '/temp/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /^src\/*\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "preview"),
    compress: true,
    port: 9000
  }
};