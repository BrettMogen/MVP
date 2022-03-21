var path = require('path');
var SRC_DIR = path.join(__dirname, '/front-end');
var DIST_DIR = path.join(__dirname, '/front-end/distribution');

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ]
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|jfif)$/i,
        type: 'asset/resource',
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};