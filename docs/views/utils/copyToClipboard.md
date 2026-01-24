---
title: 复制到剪贴板
---

# 复制到剪贴板<vo-badge text="pass" type="success"/> <vo-badge text="0.0.1+"/>

<h3>全局引入</h3>

如果你完整引入了 Void-Elem-UI， Vue.prototype 添加如下全局方法：`$vutil`。

```js
this.$vutil.copyToClipboard("hello void-elem-ui");
```

<h3>单独使用</h3>

```js
import { vutil as $vutil } from "void-elem-ui";

$vutil.copyToClipboard("hello void-elem-ui");
```

<ClientOnly>
<copy-to-clipboard-basic/>
</ClientOnly>
