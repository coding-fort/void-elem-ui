import VoTable from "./index.vue";

/* istanbul ignore next */
VoTable.install = function (Vue) {
  Vue.component(VoTable.name, VoTable);
};

export default VoTable;
