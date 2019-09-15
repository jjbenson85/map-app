const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const envPlugin =
  process.env.NODE_ENV === "production"
    ? new webpack.EnvironmentPlugin({ ...process.env })
    : new Dotenv();

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve("dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      { test: /\.jsx?$/, loader: "babel-loader", exclude: /node-modules/ },
      { test: /\.css?$/, loader: ["style-loader", "css-loader"] },
      {
        test: /\.s(a|c)ss?$/,
        loader: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve("src"),
    hot: true,
    open: false,
    port: 8000,
    watchContentBase: true,
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        secure: false
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
      inect: "body"
    }),
    envPlugin
  ]
};
