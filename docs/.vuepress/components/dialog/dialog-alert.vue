<template>
  <comp-wrap
    title="Alert 弹窗"
    :desc="desc"
    code-type="js"
    :code-str="codeStr"
    class="icon-basic"
  >
    <vo-button primary @click="handleClick" text="点击打开Alert 弹窗" />
  </comp-wrap>
</template>

<script>
  export default {
    data() {
      return {
        desc: "通过<code>showCancelButton = false</code>，可以将取消按钮隐藏。",
        codeStr: `<!-- -->
<vo-button primary @click="handleClick" text="点击打开弹窗" />

import { dialog as $vdialog } from "void-elem-ui";

export default {
  methods: {
      handleClick() {
        $vdialog({
          content: "这是一段信息",
          showCancelButton: false,
        })
        .then(() => {
          this.$message.info("点击了确认按钮");
        })
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
          showCancelButton: false,
        }).then(() => {
          this.$message.info("点击了确认按钮");
        });
      },
    },
  };
</script>
