const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "examples/nodes/index.html"),
  filename: "./index.html"
});


const config = {
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
  
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  }
}

module.exports = (_, argv) => { // first argument is env
  console.log('============= MODE:' , argv.mode, '======================')
  if (argv.mode === 'development') {
    config.entry = path.join(__dirname, "examples/nodes/index.tsx")
    config.plugins = [htmlWebpackPlugin]
  } else if (argv.mode === 'production') {
    config.entry = path.join(__dirname, "src/index.ts") // TODO: set 'src/index.tsx' to config file and same as import in examples/index.tsx
  }

  return config
}