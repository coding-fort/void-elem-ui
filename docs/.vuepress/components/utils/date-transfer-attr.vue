<template>
  <div>
    <attr-table title="formatDate Options" :data="attrsFn01"></attr-table>
    <attr-table title="transformQueryDate Options" :data="attrsFn02"></attr-table>
  </div>
</template>
<script>
  import { attrsFn01, attrsFn02 } from "./date-transfer-attr";

  export default {
    data() {
      return {
        attrsFn01,
        attrsFn02,
      };
    },
  };
</script>
