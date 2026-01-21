<template>
  <comp-wrap title="按钮组" :desc="desc" :code-str="codeStr">
    <vo-button-group>
      <vo-button type="primary" icon="el-icon-arrow-left">上一页</vo-button>
      <vo-button type="primary"
        >下一页<i class="el-icon-arrow-right el-icon--right"></i
      ></vo-button>
    </vo-button-group>
    <vo-button-group>
      <vo-button type="primary" icon="el-icon-edit"></vo-button>
      <vo-button type="primary" icon="el-icon-share"></vo-button>
      <vo-button type="primary" icon="el-icon-delete"></vo-button>
    </vo-button-group>
  </comp-wrap>
</template>

<script>
  import VoButton from "../../../../src/components/button/index.vue";
  import VoButtonGroup from "../../../../src/components/button-group/index.vue";
  import CompWrap from "../utils/comp-wrap.vue";

  export default {
    components: {
      CompWrap,
      VoButton,
      VoButtonGroup,
    },
    data() {
      return {
        desc: `以按钮组的方式出现，常用于多项类似操作。使用<code>&lt;el-button-group&gt;</code>标签来嵌套你的按钮。`,
        codeStr: `<vo-button-group>
  <vo-button type="primary" icon="el-icon-arrow-left">上一页</vo-button>
  <vo-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></vo-button>
</vo-button-group>
<vo-button-group>
  <vo-button type="primary" icon="el-icon-edit"></vo-button>
  <vo-button type="primary" icon="el-icon-share"></vo-button>
  <vo-button type="primary" icon="el-icon-delete"></vo-button>
</vo-button-group>`,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .el-row {
    margin-bottom: 20px;
  }
</style>
