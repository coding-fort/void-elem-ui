<template>
  <attr-table title="QueryFormItem Attributes" :data="attrs"></attr-table>
</template>
<script>
  import { queryFormItemAttrs } from "./attrs";
  import AttrTable from "../utils/attr-table.vue";

  export default {
    components: {
      AttrTable,
    },
    data() {
      return {
        attrs: queryFormItemAttrs,
      };
    },
  };
</script>
