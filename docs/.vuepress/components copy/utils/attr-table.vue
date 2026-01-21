<template>
  <div class="attrs-table">
    <section>
      <h2>{{ calcTitle }}</h2>
      <div class="attr">
        <el-table :data="data" style="width: 100%">
          <el-table-column
            v-for="(col, colIdx) in comCols"
            :key="colIdx"
            :prop="col.key"
            :label="col.name"
            :width="col.width"
          >
          </el-table-column>
        </el-table>
      </div>
    </section>
  </div>
</template>
<script>
  import VoTable from "../../../../src/components/table/index.vue";
  import VoTableColumn from "../../../../src/components/table-column/index.vue";

  export default {
    components: {
      VoTable,
      VoTableColumn,
    },
    props: {
      title: {
        type: String,
        default: "",
      },
      type: {
        type: String,
        default: "attr", // attr / event/ method
      },
      data: {
        type: Array,
        default: () => [],
      },
      cols: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        attrCols: [
          { key: "config", name: "参数", width: 150 },
          { key: "desc", name: "说明", width: "" },
          { key: "type", name: "类型", width: "" },
          { key: "optional", name: "可选值", width: "" },
          { key: "default", name: "默认值", width: "" },
        ],
        eventCols: [
          { key: "name", name: "方法名", width: 150 },
          { key: "desc", name: "说明", width: "" },
          { key: "params", name: "参数", width: "" },
        ],
        methodCols: [
          { key: "name", name: "方法名", width: 150 },
          { key: "desc", name: "说明", width: "" },
          { key: "params", name: "参数", width: "" },
        ],
        slotCols: [
          { key: "name", name: "插槽名", width: 150 },
          { key: "desc", name: "说明", width: "" },
          { key: "params", name: "插槽回传参数", width: "" },
        ],
      };
    },
    computed: {
      calcTitle() {
        if (this.title) return this.title;
        if (this.type == "attr") return "Attributes";
        if (this.type == "event") return "Events";
        if (this.type == "method") return "Methods";
        if (this.type == "slot") return "Slots";
      },
      comCols() {
        if (this.type == "attr") return this.attrCols;
        if (this.type == "event") return this.eventCols;
        if (this.type == "method") return this.methodCols;
        if (this.type == "slot") return this.slotCols;
        return this.cols;
      },
    },
  };
</script>
<style lang="scss">
  .attrs-table {
    .el-table .cell {
      word-break: break-word;
    }
  }
</style>
