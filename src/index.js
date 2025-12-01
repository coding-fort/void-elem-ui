// src/index.js
import DialogPlugin, { $dialog } from "./components/dialog";
// 导入其他组件（如按钮、输入框等）
import Button from "./components/button";
import ButtonGroup from "./components/button-group";
import ImageFormItem from "./components/image-form-item";

// 组件库对象（支持 Vue.use() 全局注册所有组件）
const VoidElemUI = {
  install(Vue) {
    // 注册弹窗插件（含 $dialog 方法）
    Vue.use(DialogPlugin);

    // 注册其他组件（示例）
    const components = [Button, ButtonGroup, ImageFormItem];
    components.forEach((component) => {
      //   Vue.component(component.name, component);
      Vue.use(component);
    });
  },
};

// 导出：全局引入入口 + 按需引入入口
export default VoidElemUI;
export {
  DialogPlugin, // 弹窗插件（按需引入时使用）
  $dialog, // 弹窗方法（按需引入时使用）
  // 其他组件按需导出
  Button,
  ButtonGroup,
  ImageFormItem,
};
