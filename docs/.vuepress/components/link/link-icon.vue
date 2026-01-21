<template>
  <comp-wrap :title="title" :desc="desc" :code-str="codeStr">
    <div>
      <vo-link icon="el-icon-edit">编辑</vo-link>
      <vo-link>查看<i class="el-icon-view el-icon--right"></i> </vo-link>
    </div>
  </comp-wrap>
</template>

<script>
  import VoLink from "../../../../src/components/link/index.vue";
  import CompWrap from "../utils/comp-wrap.vue";
  export default {
    components: {
      VoLink,
      CompWrap,
    },
    data() {
      return {
        title: `图标`,
        desc: `带图标的文字链接可增强辨识度。`,
        codeStr: `
<div>
  <vo-link icon="el-icon-edit">编辑</vo-link>
  <vo-link>查看<i class="el-icon-view el-icon--right"></i> </vo-link>
</div>
`,
      };
    },
  };
</script>
