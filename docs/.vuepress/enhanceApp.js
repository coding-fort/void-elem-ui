// docs/.vuepress/enhanceApp.js
// 导入 Vue 和组件
// import Vue from "vue";
// import ElementUI from "element-ui"; // 依赖 Element 基础组件
// import "element-ui/lib/theme-chalk/index.css"; // Element 样式
import "./public/index.scss";
// import hljs from "highlight.js";
//样式文件,这里我选的是sublime样式，文件里面还有其他样式可供选择
// import "highlight.js/styles/color-brewer.css";

// import LaunchComponent from "./components/index.js";
// import DialogPlugin from "../../src/components/dialog/index.js";

// 导入子文件夹中的组件（路径要写对）
// import ButtonDemo from "./components/button/button-demo.vue";

export default ({ Vue, options, router, siteData, isServer }) => {
  console.log("[Client] Registering components...");
  // 注入 process（防错）
  if (isServer) return;
  // 只在客户端注册插件和组件
  // if (typeof window !== "undefined") {
  // console.log("✅ enhanceApp.js is running：typeof window !== undefined");
  // 注册 Element UI
  const ElementUI = require("element-ui");
  require("element-ui/lib/theme-chalk/index.css");
  Vue.use(ElementUI);
  //
  const LaunchComponent = require("./components/index.js").default;
  LaunchComponent(Vue);
  //
  const DialogPlugin = require("../../src/components/dialog/index.js").default;
  Vue.use(DialogPlugin);
  // Vue.component("button-demo", ButtonDemo);
  const cryptoPolyfill = require("crypto-browserify");
  // 手动补充 crypto.constants（复刻 Node.js crypto 的常量）
  cryptoPolyfill.constants = {
    RSA_PKCS1_PADDING: 1, // Node.js 中 RSA_PKCS1_PADDING 的值就是 1
    RSA_SSLV23_PADDING: 2,
    RSA_NO_PADDING: 3,
    RSA_PKCS1_OAEP_PADDING: 4,
  };
  // 注入全局对象
  window.process = require("process");
  window.Buffer = require("buffer").Buffer;
  // window.crypto = crypto;
  window.__cryptoPolyfill = cryptoPolyfill;
  window.global = window;
  // }
  console.log("[Client] Components ready");
};
