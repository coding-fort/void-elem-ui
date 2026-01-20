// .vuepress/mixins/clientRootMixin.js
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// 仅在浏览器环境执行
if (typeof window !== "undefined" && window.Vue) {
  Vue.use(ElementUI);
}

export default {
  // 在客户端应用挂载前执行
  mounted() {
    Vue.use(ElementUI);
  },
};
