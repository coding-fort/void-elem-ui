<template>
  <comp-wrap title="加载中" :desc="desc" :code-str="codeStr">
    <vo-button type="primary" :loading="true">加载中</vo-button>
  </comp-wrap>
</template>

<script>
  export default {
    data() {
      return {
        desc: `点击按钮后进行数据加载操作，在按钮上显示加载状态。要设置为 loading 状态，只要设置<code>loading</code>属性为<code>true</code>即可。`,
        codeStr: `<!-- -->
<vo-button type="primary" :loading="true">加载中</vo-button>`,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .el-row {
    margin-bottom: 20px;
  }
</style>
