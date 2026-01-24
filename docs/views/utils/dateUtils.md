---
title: 日期处理工具集
---

# 日期处理工具集<vo-badge text="pass" type="success"/> <vo-badge text="0.0.1+"/>

<h3>1. 全局引入</h3>

如果你完整引入了 Void-Elem-UI， Vue.prototype 添加如下全局方法：`$vutil`。`$vutil` 中`date` 对象为日期处理工具集。

```js
this.$vutil.date.formatDate(date);
this.$vutil.date.transformQueryDate(dateArr);
```

<h3>2. 单独使用</h3>

```js
import { vutil as $vutil } from "void-elem-ui";

$vutil.date.formatDate(date);
$vutil.date.transformQueryDate(dateArr);
```

<h3>3. 日期格式化</h3>

<ClientOnly>
<date-utils-fn01/>
</ClientOnly>

<h3>4. 日历字段数组转换</h3>

<ClientOnly>
<date-utils-fn021/>
<date-utils-fn022/>
<date-utils-attr :num="2" />
</ClientOnly>
