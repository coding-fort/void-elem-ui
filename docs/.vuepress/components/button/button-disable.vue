<template>
  <comp-wrap title="禁用状态" :desc="desc" :code-str="codeStr">
    <el-row>
      <vo-button disabled>默认按钮</vo-button>
      <vo-button type="primary" disabled>主要按钮</vo-button>
      <vo-button type="success" disabled>成功按钮</vo-button>
      <vo-button type="info" disabled>信息按钮</vo-button>
      <vo-button type="warning" disabled>警告按钮</vo-button>
      <vo-button type="danger" disabled>危险按钮</vo-button>
    </el-row>

    <el-row>
      <vo-button plain disabled>朴素按钮</vo-button>
      <vo-button type="primary" plain disabled>主要按钮</vo-button>
      <vo-button type="success" plain disabled>成功按钮</vo-button>
      <vo-button type="info" plain disabled>信息按钮</vo-button>
      <vo-button type="warning" plain disabled>警告按钮</vo-button>
      <vo-button type="danger" plain disabled>危险按钮</vo-button>
    </el-row>
  </comp-wrap>
</template>

<script>
  export default {
    data() {
      return {
        desc: `按钮不可用状态。你可以使用<code>disabled</code>属性来定义按钮是否可用，它接受一个<code>Boolean</code>值。`,
        codeStr: `<template>
<el-row>
  <vo-button disabled>默认按钮</vo-button>
  <vo-button type="primary" disabled>主要按钮</vo-button>
  <vo-button type="success" disabled>成功按钮</vo-button>
  <vo-button type="info" disabled>信息按钮</vo-button>
  <vo-button type="warning" disabled>警告按钮</vo-button>
  <vo-button type="danger" disabled>危险按钮</vo-button>
</el-row>

<el-row>
  <vo-button plain disabled>朴素按钮</vo-button>
  <vo-button type="primary" plain disabled>主要按钮</vo-button>
  <vo-button type="success" plain disabled>成功按钮</vo-button>
  <vo-button type="info" plain disabled>信息按钮</vo-button>
  <vo-button type="warning" plain disabled>警告按钮</vo-button>
  <vo-button type="danger" plain disabled>危险按钮</vo-button>
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
