<template>
  <comp-wrap title="基础方法" :code-str="codeStr" class="icon-basic">
    <vo-button type="text" @click="handleClick" text="普通弹窗" />
    <vo-button
      type="text"
      @click="handleOpenDialogWithComponent"
      text="渲染组件弹窗"
    />
  </comp-wrap>
</template>

<script>
  import VoButton from "../../../../src/components/button/index.vue";
  import CompWrap from "../utils/comp-wrap.vue";
  export default {
    components: {
      VoButton,
      CompWrap,
    },
    data() {
      return {
        codeStr: `
<vo-button @click="handleClick" text="普通弹窗" />
<vo-button @click="handleOpenDialogWithComponent" text="渲染组件弹窗" />

import DialogPlugin from "@/src/components/dialog/index.js";
Vue.use(DialogPlugin);

export default {
  methods: {
      handleClick() {
        this.$dialog({
          title: "提示",
          content: "这是一段信息",
        });
      },
      handleOpenDialogWithComponent() {
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
        this.$dialog({
          title: "渲染组件",
          content: SimpleComponent,
          initData: { id: 1, name: "测试数据" }, // 可选：传递回显数据
          width: 500,
        });
      },
  },
}
        `,
      };
    },
    methods: {
      handleClick() {
        this.$dialog({
          title: "提示",
          content: `这是一段信息`,
        });
      },
      handleOpenDialogWithComponent() {
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
        this.$dialog({
          title: "渲染组件",
          content: SimpleComponent,
          initData: { id: 1, name: "测试数据" }, // 可选：传递回显数据
          width: 500,
        });
      },
    },
  };
</script>
