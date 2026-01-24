<template>
  <comp-wrap title="基础方法" :desc="desc" :code-str="codeStr">
    <vo-image-upload upload-url="uploadUrl"></vo-image-upload>
  </comp-wrap>
</template>

<script>
  export default {
    data() {
      return {
        desc: ``,
        codeStr: `<template>
<vo-image-upload upload-url="uploadUrl"></vo-image-upload>
        `,
        uploadUrl: "https://jsonplaceholder.typicode.com/posts/",
      };
    },
  };
</script>

<style lang="scss" scoped>
  .el-row {
    margin-bottom: 20px;
  }
</style>
