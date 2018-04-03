var path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    home: './src/home.ts'
  },
  output: {
    // The bundle file is put into the webapp/resources/js folder
    path: path.resolve('../../resources/js'),
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        // ts-loader allows webpack to process TypeScript files
        test: /\.ts$/,
        use: [{loader: 'ts-loader'}]
      }
    ]
  }
};
