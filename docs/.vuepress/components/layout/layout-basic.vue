<template>
  <comp-wrap :code-str="codeStr">
    <vo-row>
      <vo-col :span="24">
        <div class="grid-content bg-purple-dark"></div>
      </vo-col>
    </vo-row>
    <vo-row>
      <vo-col :span="12">
        <div class="grid-content bg-purple"></div>
      </vo-col>
      <vo-col :span="12">
        <div class="grid-content bg-purple-light"></div>
      </vo-col>
    </vo-row>
    <vo-row>
      <vo-col :span="8">
        <div class="grid-content bg-purple"></div>
      </vo-col>
      <vo-col :span="8">
        <div class="grid-content bg-purple-light"></div>
      </vo-col>
      <vo-col :span="8">
        <div class="grid-content bg-purple"></div>
      </vo-col>
    </vo-row>
    <vo-row>
      <vo-col :span="6">
        <div class="grid-content bg-purple"></div>
      </vo-col>
      <vo-col :span="6">
        <div class="grid-content bg-purple-light"></div>
      </vo-col>
      <vo-col :span="6">
        <div class="grid-content bg-purple"></div>
      </vo-col>
      <vo-col :span="6">
        <div class="grid-content bg-purple-light"></div>
      </vo-col>
    </vo-row>
    <vo-row>
      <vo-col :span="4">
        <div class="grid-content bg-purple"></div>
      </vo-col>
      <vo-col :span="4">
        <div class="grid-content bg-purple-light"></div>
      </vo-col>
      <vo-col :span="4">
        <div class="grid-content bg-purple"></div>
      </vo-col>
      <vo-col :span="4">
        <div class="grid-content bg-purple-light"></div>
      </vo-col>
      <vo-col :span="4">
        <div class="grid-content bg-purple"></div>
      </vo-col>
      <vo-col :span="4">
        <div class="grid-content bg-purple-light"></div>
      </vo-col>
    </vo-row>
  </comp-wrap>
</template>
<script>
  import VoRow from "../../../../src/components/row/index.vue";
  import VoCol from "../../../../src/components/col/index.vue";
  import CompWrap from "../utils/comp-wrap.vue";
  export default {
    components: {
      VoRow,
      VoCol,
      CompWrap,
    },
    data() {
      return {
        codeStr: `
<vo-row>
    <vo-col :span="24">
        <div class="grid-content bg-purple-dark"></div>
    </vo-col>
</vo-row>
<vo-row>
    <vo-col :span="12">
        <div class="grid-content bg-purple"></div>
    </vo-col>
    <vo-col :span="12">
        <div class="grid-content bg-purple-light"></div>
    </vo-col>
</vo-row>
<vo-row>
    <vo-col :span="8">
        <div class="grid-content bg-purple"></div>
    </vo-col>
    <vo-col :span="8">
        <div class="grid-content bg-purple-light"></div>
    </vo-col>
    <vo-col :span="8">
        <div class="grid-content bg-purple"></div>
    </vo-col>
</vo-row>
<vo-row>
    <vo-col :span="6">
        <div class="grid-content bg-purple"></div>
    </vo-col>
    <vo-col :span="6">
        <div class="grid-content bg-purple-light"></div>
    </vo-col>
    <vo-col :span="6">
        <div class="grid-content bg-purple"></div>
    </vo-col>
    <vo-col :span="6">
        <div class="grid-content bg-purple-light"></div>
    </vo-col>
</vo-row>
<vo-row>
    <vo-col :span="4">
        <div class="grid-content bg-purple"></div>
    </vo-col>
    <vo-col :span="4">
        <div class="grid-content bg-purple-light"></div>
    </vo-col>
    <vo-col :span="4">
        <div class="grid-content bg-purple"></div>
    </vo-col>
    <vo-col :span="4">
        <div class="grid-content bg-purple-light"></div>
    </vo-col>
    <vo-col :span="4">
        <div class="grid-content bg-purple"></div>
    </vo-col>
    <vo-col :span="4">
        <div class="grid-content bg-purple-light"></div>
    </vo-col>
</vo-row>
            `,
      };
    },
  };
</script>
<style lang="scss">
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    background-color: #f9fafc;
    padding: 10px 0;
  }
</style>
