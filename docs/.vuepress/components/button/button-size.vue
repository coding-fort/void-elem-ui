<template>
  <comp-wrap title="不同尺寸" :desc="desc" :code-str="codeStr">
    <el-row>
      <vo-button>默认按钮</vo-button>
      <vo-button size="medium">中等按钮</vo-button>
      <vo-button size="small">小型按钮</vo-button>
      <vo-button size="mini">超小按钮</vo-button>
    </el-row>
    <el-row>
      <vo-button round>默认按钮</vo-button>
      <vo-button size="medium" round>中等按钮</vo-button>
      <vo-button size="small" round>小型按钮</vo-button>
      <vo-button size="mini" round>超小按钮</vo-button>
    </el-row>
  </comp-wrap>
</template>

<script>
  export default {
    data() {
      return {
        desc: `Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。额外的尺寸：<code>medium</code>、<code>small</code>、<code>mini</code>，通过设置<code>size</code>属性来配置它们。`,
        codeStr: `<!-- -->
<el-row>
  <vo-button>默认按钮</vo-button>
  <vo-button size="medium">中等按钮</vo-button>
  <vo-button size="small">小型按钮</vo-button>
  <vo-button size="mini">超小按钮</vo-button>
</el-row>
<el-row>
  <vo-button round>默认按钮</vo-button>
  <vo-button size="medium" round>中等按钮</vo-button>
  <vo-button size="small" round>小型按钮</vo-button>
  <vo-button size="mini" round>超小按钮</vo-button>
</el-row>`,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .el-row {
    margin-bottom: 20px;
  }
</style>
