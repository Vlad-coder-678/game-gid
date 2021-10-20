const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`);

const optimization = () => {
  const configObj = {
    splitChunks: {
      chunks: 'all',
    },
  };

  if (isProd) {
    configObj.minimizer = [new TerserWebpackPlugin()];
  }

  return configObj;
};

const plugins = () => {
  const basePlugins = [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets'),
          to: path.resolve(__dirname, 'build'),
          noErrorOnMissing: true,
        },
      ],
    }),
    new EslintWebpackPlugin({
      extensions: ['js', 'jsx'],
      failOnError: true,
    }),
  ];

  return basePlugins;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: ['@babel/polyfill', './index.jsx'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: `./${filename('js')}`,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, 'build'),
    open: true,
    compress: true,
    hot: true,
    port: 3000,
  },
  optimization: optimization(),
  plugins: plugins(),
  devtool: isProd ? false : 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      //   {
      //     test: /\.(?:|gif|png|jpe?g|svg)$/i,
      //     use: [
      //       {
      //         loader: 'file-loader',
      //         options: {
      //           name: `./assets/${filename('[ext]')}`,
      //         },
      //       },
      //     ],
      //   },
      //   {
      //     test: /\.(?:|woff2)$/i,
      //     use: [
      //       {
      //         loader: 'file-loader',
      //         options: {
      //           name: `./fonts/${filename('[ext]')}`,
      //         },
      //       },
      //     ],
      //   },
    ],
  },
};
