<template>
  <attr-table title="RuleObjectAttrs" :data="attrs"></attr-table>
</template>
<script>
  import { ruleObjectAttrs } from "./attrs";

  export default {
    data() {
      return {
        attrs: ruleObjectAttrs,
      };
    },
  };
</script>
