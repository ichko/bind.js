const path = require('path');

module.exports = {
  module: {
    rules: [{
      use: {
        loader: 'babel-loader',
        options: { presets: ['env'] }
      }
    }]
  },
  context: path.resolve(__dirname, './'),
  resolve: {
    modules: ['./node_modules', './'],
  },
  entry: {
    example: ['./src/index.js']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  devtool: '#inline-source-map',
  watch: true
};
