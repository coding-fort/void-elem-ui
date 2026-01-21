import VoButton from "./index.vue";

/* istanbul ignore next */
const ComponentPlugin = {
  install(Vue) {
    Vue.component(VoButton.name, VoButton);
  },
};

// 兼容 CommonJS
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(ComponentPlugin);
}

export default ComponentPlugin;
