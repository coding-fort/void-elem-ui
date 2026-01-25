/**
 * 适配 VuePress 1.x（Vue 2 + Webpack 4）
 * 自动注册 components 目录下所有子目录的 Vue 组件
 */
export default (Vue) => {
  // 1. 利用 Webpack 的 require.context 扫描组件目录
  // 参数说明：
  // ../../components：组件根目录（相对于当前 index.js 的路径）
  // true：是否扫描子目录（含嵌套子目录）
  // /\.vue$/：匹配所有 .vue 后缀的文件
  const componentContext = require.context("../components", true, /\.vue$/);

  // 2. 遍历所有匹配的组件并全局注册
  componentContext.keys().forEach((filePath) => {
    // 2.1 获取组件模块（Vue 2 中组件通过 default 导出）
    const componentModule = componentContext(filePath);
    const component = componentModule.default || componentModule;

    // 2.2 生成组件名（保持与之前一致的规则，可自定义）
    // 示例路径：./button/Button.vue → 组件名 Button
    // 示例路径：./card/normal/CardNormal.vue → 组件名 CardNormal
    const componentName = filePath
      .split("/") // 分割路径
      .pop() // 取最后一段（文件名，如 Button.vue）
      .replace(/\.vue$/, ""); // 去掉 .vue 后缀
    // 工具类不需要注册
    let exceptComponentName = ["comp-wrap", "attr-table"];
    if (exceptComponentName.includes(componentName)) return;
    // console.log("componentName", componentName);

    // 2.3 全局注册组件（Vue 2 的全局注册 API）
    Vue.component(componentName, component);

    // 可选：调试日志
    // console.log(`[组件注册] 成功注册：${componentName}（路径：${filePath}）`);
  });
};
