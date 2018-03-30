var path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/app.ts',
  output: {
    // The bundle file is put into the webapp/resources/js folder named as "bundle.js"
    path: path.resolve('../../resources/js'),
    filename: 'bundle.js'
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
