const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "void-elem-ui.js",
    library: "VoidElemUI", // 全局变量名
    libraryTarget: "umd", // 支持多种引入方式
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            // 告诉 vue-loader：解析 <style lang="scss"> 时用这三个 loader
            scss: [
              "vue-style-loader", // 替代 style-loader，专门用于 Vue 组件样式注入
              "css-loader", // 你的版本是 5.2.7，显式指定避免冲突
              "sass-loader", // 你的版本是 10.5.2，对应 sass@1.94.2
            ],
          },
        },
      },
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.css$/, use: ["style-loader", "css-loader", "sass-loader"] },
      // 2. 解析单独的 .scss 文件（如果项目中有单独引入的 SCSS）
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
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
