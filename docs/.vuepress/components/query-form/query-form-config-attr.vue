<template>
  <attr-table title="ConfigObject" :data="attrs"></attr-table>
</template>
<script>
  import { configObjectAttrs } from "./attrs";
  import AttrTable from "../utils/attr-table.vue";

  export default {
    components: {
      AttrTable,
    },
    data() {
      return {
        attrs: configObjectAttrs,
      };
    },
  };
</script>
