<template>
  <comp-wrap title="图标按钮" :desc="desc" :code-str="codeStr">
    <vo-button type="primary" icon="el-icon-edit"></vo-button>
    <vo-button type="primary" icon="el-icon-share"></vo-button>
    <vo-button type="primary" icon="el-icon-delete"></vo-button>
    <vo-button type="primary" icon="el-icon-search">搜索</vo-button>
    <vo-button type="primary"
      >上传<i class="el-icon-upload el-icon--right"></i
    ></vo-button>
  </comp-wrap>
</template>

<script>
  export default {
    data() {
      return {
        desc: `带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。设置<code>icon</code>属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用<code>i</code>标签即可，可以使用自定义图标。`,
        codeStr: `<template>
<vo-button type="primary" icon="el-icon-edit"></vo-button>
<vo-button type="primary" icon="el-icon-share"></vo-button>
<vo-button type="primary" icon="el-icon-delete"></vo-button>
<vo-button type="primary" icon="el-icon-search">搜索</vo-button>
<vo-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></vo-button>`,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .el-row {
    margin-bottom: 20px;
  }
</style>
