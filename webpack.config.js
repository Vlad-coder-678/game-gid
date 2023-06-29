const path = require("path");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const { webpackPlugins } = require("./webpackPlugins");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`);

const optimization = () => {
  const configObj = {
    splitChunks: {
      chunks: "all",
    },
  };

  if (isProd) configObj.minimizer = [new TerserWebpackPlugin()];

  return configObj;
};

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: ["@babel/polyfill", "./index.jsx"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: `./${filename("js")}`,
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, "build"),
    open: true,
    compress: true,
    hot: true,
    port: 3000,
  },
  optimization: optimization(),
  plugins: webpackPlugins(),
  devtool: isProd ? false : "source-map",
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
