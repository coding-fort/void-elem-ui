<template>
  <comp-wrap title="基础方法" :desc="desc" :code-str="codeStr">
    <el-row>
      <vo-button>默认按钮</vo-button>
      <vo-button type="primary">主要按钮</vo-button>
      <vo-button type="success">成功按钮</vo-button>
      <vo-button type="info">信息按钮</vo-button>
      <vo-button type="warning">警告按钮</vo-button>
      <vo-button type="danger">危险按钮</vo-button>
    </el-row>

    <el-row>
      <vo-button plain>朴素按钮</vo-button>
      <vo-button type="primary" plain>主要按钮</vo-button>
      <vo-button type="success" plain>成功按钮</vo-button>
      <vo-button type="info" plain>信息按钮</vo-button>
      <vo-button type="warning" plain>警告按钮</vo-button>
      <vo-button type="danger" plain>危险按钮</vo-button>
    </el-row>

    <el-row>
      <vo-button round>圆角按钮</vo-button>
      <vo-button type="primary" round>主要按钮</vo-button>
      <vo-button type="success" round>成功按钮</vo-button>
      <vo-button type="info" round>信息按钮</vo-button>
      <vo-button type="warning" round>警告按钮</vo-button>
      <vo-button type="danger" round>危险按钮</vo-button>
    </el-row>

    <el-row>
      <vo-button icon="el-icon-search" circle></vo-button>
      <vo-button type="primary" icon="el-icon-edit" circle></vo-button>
      <vo-button type="success" icon="el-icon-check" circle></vo-button>
      <vo-button type="info" icon="el-icon-message" circle></vo-button>
      <vo-button type="warning" icon="el-icon-star-off" circle></vo-button>
      <vo-button type="danger" icon="el-icon-delete" circle></vo-button>
    </el-row>
  </comp-wrap>
</template>

<script>
  export default {
    data() {
      return {
        desc: `基础的按钮用法。使用<code>type</code>、<code>plain</code>、<code>round</code>和<code>circle</code>属性来定义 <b>Button</b> 的样式。`,
        codeStr: `<template>
<el-row>
  <vo-button>默认按钮</vo-button>
  <vo-button type="primary">主要按钮</vo-button>
  <vo-button type="success">成功按钮</vo-button>
  <vo-button type="info">信息按钮</vo-button>
  <vo-button type="warning">警告按钮</vo-button>
  <vo-button type="danger">危险按钮</vo-button>
</el-row>

<el-row>
  <vo-button plain>朴素按钮</vo-button>
  <vo-button type="primary" plain>主要按钮</vo-button>
  <vo-button type="success" plain>成功按钮</vo-button>
  <vo-button type="info" plain>信息按钮</vo-button>
  <vo-button type="warning" plain>警告按钮</vo-button>
  <vo-button type="danger" plain>危险按钮</vo-button>
</el-row>

<el-row>
  <vo-button round>圆角按钮</vo-button>
  <vo-button type="primary" round>主要按钮</vo-button>
  <vo-button type="success" round>成功按钮</vo-button>
  <vo-button type="info" round>信息按钮</vo-button>
  <vo-button type="warning" round>警告按钮</vo-button>
  <vo-button type="danger" round>危险按钮</vo-button>
</el-row>

<el-row>
  <vo-button icon="el-icon-search" circle></vo-button>
  <vo-button type="primary" icon="el-icon-edit" circle></vo-button>
  <vo-button type="success" icon="el-icon-check" circle></vo-button>
  <vo-button type="info" icon="el-icon-message" circle></vo-button>
  <vo-button type="warning" icon="el-icon-star-off" circle></vo-button>
  <vo-button type="danger" icon="el-icon-delete" circle></vo-button>
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
