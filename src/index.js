// src/index.js
// 组件（如按钮、输入框等）
import Badge from "./components/badge";
import Button from "./components/button";
import ButtonGroup from "./components/button-group";
import Col from "./components/col";
import DialogPlugin, { dialog } from "./components/dialog";
import Form from "./components/form";
import Icon from "./components/icon";
import ImageFormItem from "./components/image-form-item";
import ImageUpload from "./components/image-upload";
import Link from "./components/link";
import Pager from "./components/pager";
import QueryForm from "./components/queryForm";
import Row from "./components/row";
import Table from "./components/table";
import TableColumn from "./components/table-column";
// 工具方法
import copyToClipboard from "./utils/copyToClipboard";
import dateUtils from "./utils/dateUtils";
import numberUtils from "./utils/numberUtils";
import optionUtils from "./utils/optionUtils";
import RSATool from "./utils/rsaUtils";
import { transformData, reverseTransformData } from "./utils/fieldTransfer";

const components = [
  Badge,
  Button,
  ButtonGroup,
  Col,
  Form,
  Icon,
  ImageFormItem,
  ImageUpload,
  Link,
  Pager,
  QueryForm,
  Row,
  Table,
  TableColumn,
];
const utils = {
  copyToClipboard,
  date: dateUtils,
  number: numberUtils,
  option: optionUtils,
  rsa: RSATool,
  data: {
    transformData,
    reverseTransformData,
  },
};

const install = function (Vue, options = {}) {
  components.forEach((component) => {
    // console.log("[Component Name Check]", component.name, component); // 👈 打印 name
    // Vue.component(component.name, component);
    Vue.use(component);
  });
  Vue.prototype.$vdialog = dialog;
  Vue.prototype.$vutil = utils;
};

/* istanbul ignore if */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

// 导出：全局引入入口 + 按需引入入口
export default {
  install,
  Badge,
  Button,
  ButtonGroup,
  DialogPlugin,
  dialog,
  Col,
  Form,
  Icon,
  ImageFormItem,
  ImageUpload,
  Link,
  Pager,
  QueryForm,
  Row,
  Table,
  TableColumn,
  vutil: utils,
};
