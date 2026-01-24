---
title: 日期处理工具集
---

# 日期处理工具集<vo-badge text="pass" type="success"/> <vo-badge text="0.0.1+"/>

## 1. 全局引入

如果你完整引入了 Void-Elem-UI， Vue.prototype 添加如下全局方法：`$vutil`。`$vutil` 中`date` 对象为日期处理工具集。

```js
this.$vutil.date.formatDate(date);
this.$vutil.date.transformQueryDate(dateArr);
```

## 2. 单独使用

```js
import { vutil as $vutil } from "void-elem-ui";

$vutil.date.formatDate(date);
$vutil.date.transformQueryDate(dateArr);
```

## 3. 日期格式化

<ClientOnly>
<date-transfer-fn01/>
</ClientOnly>

## 4. 日历字段数组转换

<ClientOnly>
<date-transfer-fn02/>
</ClientOnly>

<ClientOnly>
<date-transfer-attr/>
</ClientOnly>
