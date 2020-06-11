const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "examples/nodes/index.html"),
  filename: "./index.html"
});

module.exports = {
  entry: path.join(__dirname, "examples/nodes/index.tsx"),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [htmlWebpackPlugin],
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  }
}