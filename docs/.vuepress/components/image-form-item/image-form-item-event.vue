<template>
  <attr-table type="event" :data="events"></attr-table>
</template>
<script>
  import { events } from "./attrs";
  import AttrTable from "../utils/attr-table.vue";

  export default {
    components: {
      AttrTable,
    },
    data() {
      return {
        events,
      };
    },
  };
</script>
