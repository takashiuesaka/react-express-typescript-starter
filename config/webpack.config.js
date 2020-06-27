const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path')

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/client/index.html",
  filename: "./index.html"
});

module.exports = {  
    entry: "./src/client/index.tsx",
    output: {
      path: path.resolve('dist'),
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          // 拡張子 .ts もしくは .tsx の場合
          test: /\.tsx?$/,
          exclude: /node_modules/,
          // TypeScript をコンパイルする
          use: "ts-loader"
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
    // import 文で .ts や .tsx ファイルを解決するため
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
    plugins: [htmlWebpackPlugin]
  };