const path = require("path");
// eslint-disable-next-line import/no-extraneous-dependencies
const dotenv = require("dotenv").config();
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const EslintWebpackPlugin = require("eslint-webpack-plugin");
const webpack = require("webpack");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const webpackPlugins = () => ([
  new HTMLWebpackPlugin({
    template: path.resolve(__dirname, "src/index.html"),
    filename: "index.html",
    minify: {
      collapseWhitespace: isProd,
    },
  }),
  new CleanWebpackPlugin(),
  new CopyWebpackPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, "src/assets"),
        to: path.resolve(__dirname, "build"),
        noErrorOnMissing: true,
      },
    ],
  }),
  new EslintWebpackPlugin({
    extensions: ["js", "jsx"],
    failOnError: true,
  }),
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    "process.env": JSON.stringify(dotenv.parsed),
  }),
]);

module.exports = { webpackPlugins };
