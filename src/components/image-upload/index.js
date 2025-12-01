import VoUpload from "./index.vue";

/* istanbul ignore next */
VoUpload.install = function (Vue) {
  Vue.component(VoUpload.name, VoUpload);
};

export default VoUpload;
