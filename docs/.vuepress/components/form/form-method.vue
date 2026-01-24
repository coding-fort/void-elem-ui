<template>
  <attr-table type="method" :data="methods"></attr-table>
</template>
<script>
  import { methods } from "./attrs";

  export default {
    data() {
      return {
        methods,
      };
    },
  };
</script>
