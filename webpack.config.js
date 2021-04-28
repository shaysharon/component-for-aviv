const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = () => {
  return {
    entry: "./wrapper.js",
    output: {
      libraryTarget: 'var',
      library: 'augmentedC',
      path: path.resolve(__dirname, "dist"),
      filename: "augmentedC.min.js",
    },
    module: {
      rules: [
        {
            test:   /\.js/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                // localIdentName: '[name]__[local]___[hash:base64:5]',
                // camelCase: true,
                sourceMap: false
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: false
              }
            }
          ]
        }
      ],
    },
    mode: "production",
    plugins: [
    ],
  };
};
