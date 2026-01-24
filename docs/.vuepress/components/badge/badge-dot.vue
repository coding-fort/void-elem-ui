<template>
  <comp-wrap title="小红点" :desc="desc" :code-str="codeStr">
    <vo-badge is-dot class="item">数据查询</vo-badge>
    <vo-badge is-dot class="item">
      <el-button
        class="share-button"
        icon="el-icon-share"
        type="primary"
      ></el-button>
    </vo-badge>
  </comp-wrap>
</template>

<script>

  export default {
    data() {
      return {
        desc: `以红点的形式标注需要关注的内容。除了数字外，设置<code>is-dot</code>属性，它接受一个<code>Boolean</code>。`,
        codeStr: `<template>
<vo-badge is-dot class="item">数据查询</vo-badge>
<vo-badge is-dot class="item">
  <el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
</vo-badge>
`,
      };
    },
  };
</script>

<style>
  .item {
    margin-right: 40px;
    margin-top: 10px;
  }
</style>
