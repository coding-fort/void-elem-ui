import VoBadge from "./index.vue";

/* istanbul ignore next */
VoBadge.install = function (Vue) {
  Vue.component(VoBadge.name, VoBadge);
};

export default VoBadge;
