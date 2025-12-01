<template>
  <attr-table type="method" :data="methods"></attr-table>
</template>
<script>
  import { methods } from "./attrs";
  import AttrTable from "../utils/attr-table.vue";

  export default {
    components: {
      AttrTable,
    },
    data() {
      return {
        methods,
      };
    },
  };
</script>
