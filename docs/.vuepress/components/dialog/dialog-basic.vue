<template>
  <comp-wrap
    title="基础用法"
    :desc="desc"
    code-type="js"
    :code-str="codeStr"
    class="icon-basic"
  >
    <vo-button primary @click="handleClick" text="点击打开弹窗" />
  </comp-wrap>
</template>

<script>
  export default {
    data() {
      return {
        desc: "通过<code>content</code> 属性可以设置提示信息。",
        codeStr: `<template>
<vo-button primary @click="handleClick" text="点击打开弹窗" />

import { dialog as $vdialog } from "void-elem-ui";

export default {
  methods: {
      handleClick() {
        $vdialog({
          content: "这是一段信息",
        })
        .then(() => {
          this.$message.success("点击了确认按钮");
        })
        .catch(() => {
          this.$message.error("点击了取消按钮");
        });
      },
  },
}
        `,
      };
    },
    methods: {
      handleClick() {
        this.$vdialog({
          content: `这是一段信息`,
        })
          .then(() => {
            this.$message.success("点击了确认按钮");
          })
          .catch(() => {
            this.$message.error("点击了取消按钮");
          });
      },
    },
  };
</script>
