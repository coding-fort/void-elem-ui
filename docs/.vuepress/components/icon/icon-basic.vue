<template>
  <comp-wrap title="基础方法" :code-str="codeStr" class="icon-basic">
    <vo-icon class="el-icon-edit" />
    <vo-icon class="el-icon-share" />
    <vo-icon class="el-icon-delete" />
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
  </comp-wrap>
</template>

<script>
  export default {
    data() {
      return {
        codeStr: `<template>
<vo-icon class="el-icon-share" />
<vo-icon class="el-icon-delete" />
<vo-icon class="el-icon-edit" />
<vo-icon class="el-icon-share" />
<el-button type="primary" icon="el-icon-search">搜索</el-button>`,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .icon-basic {
    .component-wrapper-demo {
      align-items: center;
      display: flex;

      .void-icon {
        font-size: 20px;
        margin: 0 20px;
        &:last-of-type {
          margin-right: 40px;
        }
      }
    }
  }
</style>
