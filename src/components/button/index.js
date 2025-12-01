import VoButton from "./index.vue";

/* istanbul ignore next */
VoButton.install = function (Vue) {
  Vue.component(VoButton.name, VoButton);
};

export default VoButton;
