const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-element-ui.js",
    library: "MyElementUI", // 全局变量名
    libraryTarget: "umd", // 支持多种引入方式
    umdNamedDefine: true,
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: "vue-loader" },
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  externals: {
    // 排除 Vue 和 Element UI（避免打包重复依赖）
    vue: { root: "Vue", commonjs: "vue", commonjs2: "vue", amd: "vue" },
    "element-ui": {
      root: "ELEMENT",
      commonjs: "element-ui",
      commonjs2: "element-ui",
      amd: "element-ui",
    },
  },
};
