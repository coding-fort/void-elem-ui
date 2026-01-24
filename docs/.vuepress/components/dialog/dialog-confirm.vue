<template>
  <comp-wrap
    title="Confirm 弹窗"
    :desc="desc"
    code-type="js"
    :code-str="codeStr"
    class="icon-basic"
  >
    <vo-button primary @click="handleClick" text="点击打开Confirm 弹窗" />
  </comp-wrap>
</template>

<script>
  export default {
    data() {
      return {
        desc: "<code>type</code>字段表明消息类型，可以为<code>success</code>，<code>error</code>，<code>info</code>和<code>warning</code>。对应类型在标题左侧会有对应的<code>Icon</code> 图标。",
        codeStr: `<template>
<vo-button primary @click="handleClick" text="点击打开弹窗" />

import { dialog as $vdialog } from "void-elem-ui";

export default {
  methods: {
      handleClick() {
        $vdialog({
          content: "这是一段信息",
          type: "warning",
        })
        .then(() => {
          this.$message.success("点击了确认按钮");
        })
        .catch(() => {
          this.$message.info("点击了取消按钮");
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
          type: "warning",
        })
          .then(() => {
            this.$message.success("点击了确认按钮");
          })
          .catch(() => {
            this.$message.info("点击了取消按钮");
          });
      },
    },
  };
</script>
