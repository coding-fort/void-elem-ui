<template>
  <comp-wrap
    title="Dialog 弹框"
    :desc="desc"
    code-type="js"
    :code-str="codeStr"
    class="icon-basic"
  >
    <vo-button primary @click="handleClick" text="点击打开组件弹窗" />
  </comp-wrap>
</template>

<script>
  export default {
    data() {
      return {
        desc: "<code>content</code> 属性还可以传入一个组件，直接渲染。",
        codeStr: `<!-- -->
<vo-button @click="handleClick" text="点击打开组件弹窗" />

import { dialog as $vdialog } from "void-elem-ui";

export default {
  methods: {
      handleClick() {
        // 极简组件：仅显示文本 + 接收 initData 回显
        const SimpleComponent = {
          props: ["initData"], // 仅接收弹窗传递的回显数据（可选）
          // render 函数渲染最简单的 DOM
          render(h) {
            return h("div", [
              h("p", "✅ 组件传入成功！"),
              h("p", \`接收的回显数据：\${JSON.stringify(this.initData)}\`),
            ]);
          },
        };
        $vdialog({
          title: "渲染组件",
          content: SimpleComponent,
          initData: { id: 1, name: "测试数据" }, // 可选：传递回显数据
          width: 500, // 可选：配置弹窗宽度
        });
      },
  },
}
        `,
      };
    },
    methods: {
      handleClick() {
        // 极简组件：仅显示文本 + 接收 initData 回显
        const SimpleComponent = {
          props: ["initData"], // 仅接收弹窗传递的回显数据（可选）
          // render 函数渲染最简单的 DOM
          render(h) {
            return h("div", [
              h("p", "✅ 组件传入成功！"),
              h("p", `接收的回显数据：${JSON.stringify(this.initData)}`),
            ]);
          },
        };
        this.$vdialog({
          title: "渲染组件",
          content: SimpleComponent,
          initData: { id: 1, name: "测试数据" }, // 可选：传递回显数据
          width: 500, // 可选：配置弹窗宽度
        });
      },
    },
  };
</script>
