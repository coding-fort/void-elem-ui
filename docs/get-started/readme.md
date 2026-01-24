---
title: 快速上手
---

# 快速上手

本节将介绍如何在项目中使用 `void-elem-ui`。

### 引入 Element

#### 完整引入

在 main.js 中写入以下内容：

```js
import Vue from "vue";
import VoidElemUI from "void-elem-ui";
import App from "./App.vue";

Vue.use(VoidElemUI);

new Vue({
  el: "#app",
  render: (h) => h(App),
});
```

以上代码便完成了 `void-elem-ui` 的引入。

#### 按需引入

如果你只希望引入部分组件，比如 `Button` 和 `Table`，那么需要在 main.js 中写入以下内容

```js
import Vue from "vue";
import { Button, Table } from "void-elem-ui";
import App from "./App.vue";

Vue.component(Button.name, Button);
Vue.component(Table.name, Table);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
  el: "#app",
  render: (h) => h(App),
});
```
