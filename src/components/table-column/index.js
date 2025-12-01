import VoTableColumn from "./index.vue";

/* istanbul ignore next */
VoTableColumn.install = function (Vue) {
  Vue.component(VoTableColumn.name, VoTableColumn);
};

export default VoTableColumn;
