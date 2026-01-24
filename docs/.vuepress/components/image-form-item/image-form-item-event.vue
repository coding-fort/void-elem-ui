<template>
  <attr-table type="event" :data="events"></attr-table>
</template>
<script>
  import { events } from "./attrs";

  export default {
    data() {
      return {
        events,
      };
    },
  };
</script>
