---
title: 数值处理工具集
---

# 数值处理工具集<vo-badge text="pass" type="success"/> <vo-badge text="0.0.1+"/>

<h3>1. 全局引入</h3>

如果你完整引入了 Void-Elem-UI， Vue.prototype 添加如下全局方法：`$vutil`。`$vutil` 中`number` 对象为数值处理工具集。

```js
this.$vutil.number.formatInputNumber(date);
this.$vutil.number.transformMoney(dateArr);
```

<h3>2. 单独使用</h3>

```js
import { vutil as $vutil } from "void-elem-ui";

$vutil.number.formatInputNumber(date);
$vutil.number.transformMoney(dateArr);
```

<h3>3. 日数值输入格式化（用于 input 实时控制）</h3>

<ClientOnly>
<number-utils-fn01/>
</ClientOnly>

<h3>4. 金额格式化（千分位）/ 逆向解析</h3>

<ClientOnly>
<number-utils-fn02/>
</ClientOnly>

<ClientOnly>
<number-utils-attr/>
</ClientOnly>
