const path=require("path")
const webpack = require("webpack")
const HtmlWebPackPlugin = require("html-webpack-plugin")
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin

module.exports = {
  mode: "development",
  devtool: 'source-map',
  entry: './src/client/index.js',
  module: {
    rules: [{
      test: '/\.js$/',
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/views/index.html",
      filename: "index.html"
    }),
    // new BundleAnalyzerPlugin({
    //   analyzerPort: "3002",
    //   openAnalyzer: "false"
    // })
  ]
}
