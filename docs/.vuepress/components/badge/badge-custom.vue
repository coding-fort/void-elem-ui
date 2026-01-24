<template>
  <comp-wrap title="自定义内容" :desc="desc" :code-str="codeStr">
    <vo-badge value="new" class="item">
      <el-button size="small">评论</el-button>
    </vo-badge>
    <vo-badge value="hot" class="item">
      <el-button size="small">回复</el-button>
    </vo-badge>
  </comp-wrap>
</template>

<script>
  export default {
    data() {
      return {
        desc: `可以显示数字以外的文本内容。定义<code>value</code>为<code>String</code>类型是时可以用于显示自定义文本。`,
        codeStr: `<!-- -->
<vo-badge value="new" class="item">
  <el-button size="small">评论</el-button>
</vo-badge>
<vo-badge value="hot" class="item">
  <el-button size="small">回复</el-button>
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
