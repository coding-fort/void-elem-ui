import VoCol from "./index.vue";

/* istanbul ignore next */
VoCol.install = function (Vue) {
  Vue.component(VoCol.name, VoCol);
};

export default VoCol;
