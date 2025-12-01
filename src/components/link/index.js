import VoLink from "./index.vue";

/* istanbul ignore next */
VoLink.install = function (Vue) {
  Vue.component(VoLink.name, VoLink);
};

export default VoLink;
