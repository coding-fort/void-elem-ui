// docs/.vuepress/enhanceApp.js
// import "../../public/index.scss";
// import VoidElemUI from '../../src';
import "./public/index.scss";
export default ({ Vue, options, router, siteData, isServer }) => {
  console.log("[Client] Registering components...");
  if (!isServer) {
    // 注册 Element UI
    const ElementUI = require("element-ui");
    require("element-ui/lib/theme-chalk/index.css");
    Vue.use(ElementUI);
    // 注册 void-elem-ui
    const VoidElemUI = require("../../src").default;
    Vue.use(VoidElemUI);
    // 注册FormItem
    const VoidFormItem =
      require("../../src/components/form/formItem.vue").default;
    Vue.component(VoidFormItem.name, VoidFormItem);
    // 注册QueryFormItem
    const VoidQueryFormItem =
      require("../../src/components/queryForm/formItem.vue").default;
    Vue.component(VoidQueryFormItem.name, VoidQueryFormItem);
    // 注册md 组件
    const LaunchComponent = require("./components/index.js").default;
    LaunchComponent(Vue);
    // 注册CompWrap
    const CompWrapComp = require("./components/utils/comp-wrap.vue").default;
    Vue.component(CompWrapComp.name, CompWrapComp);
    // 注册AttrTable
    const AttrTableComp = require("./components/utils/attr-table.vue").default;
    Vue.component(AttrTableComp.name, AttrTableComp);
    // 加密组件
    const cryptoPolyfill = require("crypto-browserify");
    // 手动补充 crypto.constants（复刻 Node.js crypto 的常量）
    cryptoPolyfill.constants = {
      RSA_PKCS1_PADDING: 1, // Node.js 中 RSA_PKCS1_PADDING 的值就是 1
      RSA_SSLV23_PADDING: 2,
      RSA_NO_PADDING: 3,
      RSA_PKCS1_OAEP_PADDING: 4,
    };
    // 注入全局对象
    window.process = require("process");
    window.Buffer = require("buffer").Buffer;
    // window.crypto = crypto;
    window.__cryptoPolyfill = cryptoPolyfill;
    window.global = window;
    // }
    console.log("[Client] Components ready");
  }
};
