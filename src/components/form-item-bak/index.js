import VoComponent from "./index.vue";

/* istanbul ignore next */
VoComponent.install = function (Vue) {
  Vue.component(VoComponent.name, VoComponent);
};

export default VoComponent;
