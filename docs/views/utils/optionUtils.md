---
title: 枚举处理工具集
---

# 枚举处理工具集<vo-badge text="pass" type="success"/> <vo-badge text="1.0.0"/>

<h3>1. 全局引入</h3>

如果你完整引入了 Void-Elem-UI， Vue.prototype 添加如下全局方法：`$vutil`。`$vutil` 中`option` 对象为枚举处理工具集。

```js
// 函数式
const transferValue = this.$vutil.option.transformOption(
  value,
  STATUS_OPTIONS,
  options,
);
// 链式
const mapper = this.$vutil.option.enumMapper(STATUS_OPTIONS);
mapper.labelField("label");
let label = mapper.label(label);
let value = mapper.label(value);
```

<h3>2. 单独使用</h3>

```js
import { vutil as $vutil } from "void-elem-ui";

// 函数式
const transferValue = $vutil.option.transformOption(
  value,
  STATUS_OPTIONS,
  options,
);
// 链式
const mapper = $vutil.option.enumMapper(STATUS_OPTIONS);
mapper.labelField("label");
let label = mapper.label(label);
let value = mapper.label(value);
```

<h3>3. 枚举值解析/逆向解析（函数式）</h3>

<ClientOnly>
<option-utils-fn01/>
</ClientOnly>

<h3>4. 枚举解析器（链式）</h3>

<ClientOnly>
<option-utils-fn02/>
</ClientOnly>

<ClientOnly>
<option-utils-attr/>
</ClientOnly>
