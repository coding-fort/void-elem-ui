<template>
  <attr-table type="slot" :data="slots"></attr-table>
</template>
<script>
  import { slots } from "./attrs";
  import AttrTable from "../utils/attr-table.vue";

  export default {
    components: {
      AttrTable,
    },
    data() {
      return {
        slots,
      };
    },
  };
</script>
