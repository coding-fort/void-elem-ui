<template>
  <attr-table title="RuleObjectAttrs" :data="attrs"></attr-table>
</template>
<script>
  import { ruleObjectAttrs } from "./attrs";
  import AttrTable from "../utils/attr-table.vue";

  export default {
    components: {
      AttrTable,
    },
    data() {
      return {
        attrs: ruleObjectAttrs,
      };
    },
  };
</script>
