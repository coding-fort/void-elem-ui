<template>
  <attr-table :data="attrs"></attr-table>
</template>
<script>
  import attrs from "./attrs";
  import AttrTable from "../utils/attr-table.vue";

  export default {
    components: {
      AttrTable,
    },
    data() {
      return {
        attrs,
      };
    },
  };
</script>
