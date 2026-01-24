<template>
  <comp-wrap title="文字按钮" :desc="desc" :code-str="codeStr">
    <vo-button type="text">文字按钮</vo-button>
    <vo-button type="text" disabled>文字按钮</vo-button>
  </comp-wrap>
</template>

<script>
  export default {
    data() {
      return {
        desc: `没有边框和背景色的按钮。`,
        codeStr: `<!-- -->
<vo-button type="text">文字按钮</vo-button>
<vo-button type="text" disabled>文字按钮</vo-button>`,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .el-row {
    margin-bottom: 20px;
  }
</style>
