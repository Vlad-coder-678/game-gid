const path = require("path");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const { webpackPlugins } = require("./webpackPlugins");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`);

module.exports = {
  context: path.resolve(__dirname, "src"),
  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, "build"),
    open: true,
    compress: true,
    hot: true,
    port: 3000,
  },
  devtool: isProd ? false : "source-map",
  entry: ["@babel/polyfill", "./index.jsx"],
  mode: "development",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: `./${filename("js")}`,
    publicPath: "/",
  },
  optimization: {
    splitChunks: { chunks: "all" },
    ...(isProd ? { minimizer: [new TerserWebpackPlugin()] } : {}),
  },
  plugins: webpackPlugins(),
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(?:|gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: `./assets/${filename("[ext]")}`,
            },
          },
        ],
      },
    ],
  },
};
