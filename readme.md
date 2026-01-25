<!-- README.md -->

<!-- # void-elem-ui -->

![Logo](/logo.svg)

[![npm version](https://img.shields.io/npm/v/void-elem-ui.svg?style=flat-square)](https://www.npmjs.com/package/void-elem-ui)
[![license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)

一个基于 **Element UI**（v2.6+）封装的 Vue 2 组件库，提供若干业务中常用的组合组件，用于减少重复代码。

> ⚠️ 本库依赖 `element-ui`，不包含其源码，请确保项目中已安装。

## 📦 安装

```bash
# 安装 Element UI（必需）
npm install element-ui@^2.6.14

# 安装本组件库
npm install void-elem-ui
```

## 🔌 使用方式

### 全局注册

```js
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import VoidElemUI from "void-elem-ui";

Vue.use(ElementUI);
Vue.use(VoidElemUI); // 需在 ElementUI 之后注册
```

### 按需引入（示例）

```js
import { QueryForm, Table } from "void-elem-ui";
export default {
  components: { QueryForm, Table },
};
```

## 🧩 当前包含的组件

| 组件名          | 说明                                              |
| --------------- | ------------------------------------------------- |
| `QueryForm`     | 基于 `el-form` 封装的搜索表单，支持字段配置与重置 |
| `Table`         | 基于 `el-table` + `el-pagination` 的表格组合      |
| `Dialog`        | 基于 `el-dialog` 的弹窗，含确认/取消按钮          |
| `ImageUpload`   | 基于 `el-upload` 的图片上传组件                   |
| `ImageFormItem` | 用于表单中的图片上传字段                          |

> 所有组件均直接使用 Element UI 原生组件构建，props 可透传至底层组件。

## 📄 相关文档

- [变更日志](./CHANGELOG.md)

## ❓ 常见问题

**Q：是否支持 Vue 3？**  
A：不支持。本库仅适用于 Vue 2.6 + Element UI。

**Q：能否与原生 Element UI 组件混用？**  
A：可以。所有组件未修改 Element UI 内部逻辑，可安全共存。

**Q：如何自定义样式？**  
A：可通过覆盖 CSS 类名或使用 Element UI 主题变量调整。
