const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");
const {
  webpack: { mode }
} = require("./config.json");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/js")
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["env"] }
          }
        ]
      },
      {
        test: /\.(scss)$/,
        use: ExtractTextPlugin.extract([
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins() {
                return [autoprefixer({ browsers: "last 3 versions" })];
              }
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ])
      }
    ]
  },
  mode,
  devtool: "source-map",
  plugins: [new ExtractTextPlugin("css/style.css")]
};
