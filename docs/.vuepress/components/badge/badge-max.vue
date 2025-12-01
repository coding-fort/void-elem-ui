<template>
  <comp-wrap title="最大值" :desc="desc" :code-str="codeStr">
    <vo-badge :value="200" :max="99" class="item">
      <el-button size="small">评论</el-button>
    </vo-badge>
    <vo-badge :value="100" :max="10" class="item">
      <el-button size="small">回复</el-button>
    </vo-badge>
  </comp-wrap>
</template>

<script>
  import VoBadge from "../../../../src/components/badge/index.vue";
  import CompWrap from "../utils/comp-wrap.vue";
  export default {
    components: {
      VoBadge,
      CompWrap,
    },
    data() {
      return {
        desc: `可自定义最大值。由<code>max</code>属性定义，它接受一个<code>Number</code>，需要注意的是，只有当<code>value</code>为<code>Number</code>时，它才会生效。`,
        codeStr: `
<vo-badge :value="200" :max="99" class="item">
  <el-button size="small">评论</el-button>
</vo-badge>
<vo-badge :value="100" :max="10" class="item">
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
