<template>
  <attr-table title="ColumnObject" :data="attrs"></attr-table>
</template>
<script>
  import { columnObjectAttrs } from "./attrs";
  import AttrTable from "../utils/attr-table.vue";

  export default {
    components: {
      AttrTable,
    },
    data() {
      return {
        attrs: columnObjectAttrs,
      };
    },
  };
</script>
