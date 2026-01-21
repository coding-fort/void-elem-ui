const { autoGenerateSidebarChildren } = require("./public/utils");
const path = require("path");

module.exports = {
  title: "VoidElementUI",
  description: "二次封装 Element UI 组件库",
  base: "/void-elem-ui/", // 基础路径（根据实际部署路径调整）
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/" }, // 新增 MyButton 文档入口
    ],
    sidebarDepth: 2,
    sidebar: [
      {
        title: "入门",
        collapsable: false,
        children: ["/install/", "/get-started/"],
      },
      {
        title: "组件",
        collapsable: false,
        // 调用函数：自动生成 views 目录下的所有 md 文件路径
        // 参数 1：项目根目录（若你的 md 文件都在 docs 下，填 'docs'；若在项目根目录直接填 ''）
        // 参数 2：要扫描的目录（'views'）
        children: autoGenerateSidebarChildren("views/components"),
        // children: [
        //   "/views/icon",
        //   "/views/button",
        // ],
      },
      {
        title: "工具函数",
        collapsable: false,
        // 调用函数：自动生成 views 目录下的所有 md 文件路径
        // 参数 1：项目根目录（若你的 md 文件都在 docs 下，填 'docs'；若在项目根目录直接填 ''）
        // 参数 2：要扫描的目录（'views'）
        children: autoGenerateSidebarChildren("views/utils"),
        // children: [
        //   "/views/icon",
        //   "/views/button",
        // ],
      },
    ],
  },
  plugins: [
    // 代码复制功能
    [
      "code-copy",
      {
        copyText: "复制",
        tip: {
          content: "已复制",
        },
      },
    ],
  ],
  // 核心：禁用服务端渲染，仅客户端构建
  ssr: {
    enable: false,
    // 兼容旧版 VuePress（如果上面配置无效，用这个）
    devServerRender: false,
  },
  // 可选：关闭预渲染，避免 SSR 扫描代码
  build: {
    prerender: false,
  },
  // 关键：添加自定义入口文件，提前注入 global
  entry: path.resolve(__dirname, "./entry.js"),
  chainWebpack: (config) => {
    // 1. 替换 Node.js 原生模块为浏览器 polyfill（必须）
    config.resolve.alias
      .set("crypto", "crypto-browserify")
      .set("stream", "stream-browserify")
      .set("buffer", "buffer"); // 明确指定 buffer  polyfill

    // 2. 强制开启 Node.js 全局对象模拟（覆盖默认关闭的配置）
    config.node
      .set("global", true)
      .set("process", true)
      .set("Buffer", true)
      .set("__dirname", true)
      .set("__filename", true);

    // 3. 全局注入 polyfill，确保所有模块都能访问
    config.plugin("provide").use(require("webpack").ProvidePlugin, [
      {
        process: "process/browser",
        Buffer: ["buffer", "Buffer"],
        global: "global",
        crypto: "crypto-browserify",
      },
    ]);

    // 4. 排除 Node.js 原生模块（避免冗余报错）
    config.externals({
      fs: "false",
      path: "false",
      tls: "false",
      net: "false",
      child_process: "false",
    });

    // 5. 注入环境变量，标记为浏览器环境
    config.plugin("define").use(require("webpack").DefinePlugin, [
      {
        "process.env": JSON.stringify({ NODE_ENV: process.env.NODE_ENV }),
        "process.browser": JSON.stringify(true),
        global: "window", // 直接映射 global 到 window
      },
    ]);

    // 6. 可选：添加 source-map 方便调试（出错时能定位到原文件）
    // config.devtool("source-map");
  },
};
