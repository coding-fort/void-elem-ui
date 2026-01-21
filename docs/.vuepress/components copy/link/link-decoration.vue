<template>
  <comp-wrap :title="title" :desc="desc" :code-str="codeStr">
    <div>
      <vo-link :underline="false">无下划线</vo-link>
      <vo-link>有下划线</vo-link>
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
        title: `下划线`,
        desc: `文字链接下划线。`,
        codeStr: `
<div>
  <vo-link :underline="false">无下划线</vo-link>
  <vo-link>有下划线</vo-link>
</div>
`,
      };
    },
  };
</script>

