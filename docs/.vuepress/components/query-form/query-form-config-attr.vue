<template>
  <attr-table title="ConfigObject" :data="attrs"></attr-table>
</template>
<script>
  import { configObjectAttrs } from "./attrs";

  export default {
    data() {
      return {
        attrs: configObjectAttrs,
      };
    },
  };
</script>
