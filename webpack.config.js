const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = () => {
  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "source.[hash].js",
      publicPath: "/component/",
    },
    module: {
      rules: [
        { test: /\.(js)$/, use: "babel-loader" },
        {
          test: /\.module\.s(a|c)ss$/,
          loader: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                modules: true,
                sourceMap: false,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: false,
              },
            },
          ],
        },
        {
          test: /\.(css)$/,
          exclude: /\.module.(s(a|c)ss)$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jp(e*)g|svg|gif)$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8000, // Convert images < 8kb to base64 strings
                name: "images/[hash]-[name].[ext]",
              },
            },
          ],
        },
      ],
    },
    mode: "production",
    plugins: [
      new HtmlWebpackPlugin({
        template: "public/index.html",
      }),
      new MiniCssExtractPlugin({
        filename: "[name].[hash].css",
        chunkFilename: "[id].[hash].css",
      }),
    ],
  };
};
