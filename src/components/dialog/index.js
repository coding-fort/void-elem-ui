import Vue from "vue";
import MainDialog from "./index.vue";

const DialogConstructor = Vue.extend(MainDialog); // 新增这行

function openDialog(options = {}) {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("$dialog 仅支持客户端环境"));
  }

  // 优化校验：content 支持 String/Object，不再强制要求组件
  if (!options.content && options.content !== "") {
    return Promise.reject(
      new Error("$dialog 必须传入 content（字符串或组件）")
    );
  }

  // 合并默认配置（字符串模式默认宽度已在组件内处理）
  const defaultOptions = {
    title: "提示",
    mode: "add",
    initData: {},
    extra: {},
    confirmText: "确定",
    cancelText: "取消",
    showClose: true,
    showFooter: true,
    closeOnClickMask: true,
    zIndex: 2000,
  };
  const mergedOptions = { ...defaultOptions, ...options };

  // 修复：使用转换后的构造器创建实例
  const dialogInstance = new DialogConstructor({
    // 改为 DialogConstructor
    parent: this,
    el: document.createElement("div"),
  });

  document.body.appendChild(dialogInstance.$el);

  return new Promise((resolve, reject) => {
    dialogInstance.init(mergedOptions, resolve, reject);
  });
}

const DialogPlugin = {
  install(Vue) {
    Vue.prototype.$vdialog = openDialog;
  },
};

export default DialogPlugin;
export { openDialog as dialog };
