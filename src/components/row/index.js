import VoRow from "./index.vue";

/* istanbul ignore next */
VoRow.install = function (Vue) {
  Vue.component(VoRow.name, VoRow);
};

export default VoRow;
