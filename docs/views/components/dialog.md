---
title: Dialog 弹窗
---

# Dialog 弹窗 <vo-badge text="pass" type="success"/> <vo-badge text="0.0.1+"/>

采用 Element-UI 中的`MessageBox` 的代码驱动模式，整合了`alert`，`confirm`，`prompt`，`dialog` 组件；

## 全局引入

如果你完整引入了 Void-Elem-UI， Vue.prototype 添加如下全局方法：`$vdialog`。因此在 Vue instance 中可以采用本页面中的方式调用 Dialog 弹窗。调用参数为：

```js
this.$vdialog(options);
```

## 单独引用

如果单独引入 Dialog 弹窗：

```js
import { dialog as $vdialog } from "void-elem-ui";
```

<ClientOnly>
<dialog-basic/>
<dialog-alert/>
<dialog-confirm/>
<dialog-dialog/>
<dialog-attr/>
</ClientOnly>
