<template>
  <attr-table :data="attrs" title="Options"></attr-table>
</template>
<script>
  import { attrs } from "./attrs";

  export default {
    data() {
      return {
        attrs,
      };
    },
  };
</script>
