import VoIcon from "./index.vue";

/* istanbul ignore next */
VoIcon.install = function (Vue) {
  Vue.component(VoIcon.name, VoIcon);
};

export default VoIcon;
