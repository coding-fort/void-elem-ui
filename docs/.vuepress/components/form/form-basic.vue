<template>
  <comp-wrap title="基础方法" :desc="desc" :code-str="codeStr">
    <vo-form :fields="formColumns" @submit="handleSubmit"> </vo-form>
  </comp-wrap>
</template>

<script>
  import VoButton from "../../../../src/components/button/index.vue";
  import VoForm from "../../../../src/components/form/index.vue";
  import CompWrap from "../utils/comp-wrap.vue";
  export default {
    components: {
      VoButton,
      VoForm,
      CompWrap,
    },
    data() {
      return {
        desc: "通过<code>fields</code> 配置查询表单字段；通过自定义事件<code>submit</code> 获取当前表单对象；",
        codeStr: `
<vo-form :fields="formColumns" @submit="handleSubmit"> </vo-form>

  export default {
    data(){
      return {
        formColumns: [
          {
            label: "活动名称",
            key: "name",
            _key: "name",
            required: true,
            col: 1,
            rules: [],
          },
          {
            label: "活动区域",
            key: "region",
            _key: "region",
            type: "select",
            required: true,
            options: [
              { label: "区域一", value: "shanghai" },
              { label: "区域二", value: "beijing" },
            ],
          },
          {
            label: "活动时间",
            key: "date",
            _key: "date",
            type: "date",
          },
          {
            label: "即时配送",
            key: "delivery",
            _key: "delivery",
            type: "switch",
            col: 1,
            required: true,
          },
          {
            label: "文件上传",
            key: "upload",
            _key: "upload",
            type: "upload",
            col: 1,
            required: true,
            uploadAction: "https://jsonplaceholder.typicode.com/posts/",
            interceptors: {
              success(response) {
                return "https://picsum.photos/200/300";
              },
            },
          },
          {
            label: "活动性质",
            key: "type",
            _key: "type",
            type: "checkbox",
            options: [
              { label: "美食/餐厅线上活动", value: "1" },
              { label: "地推活动", value: "2" },
              { label: "线下主题活动", value: "3" },
              { label: "单纯品牌曝光", value: "4" },
            ],
          },
          {
            label: "特殊资源",
            key: "resource",
            _key: "resource",
            type: "radio",
            required: true,
            options: [
              { label: "线上品牌商赞助", value: "2" },
              { label: "线下场地免费", value: "3" },
            ],
          },

          {
            label: "币种",
            key: "currency",
            _key: "currency",
            type: "autocomplete",
            options: [
              { label: "CNY", value: "CNY" },
              { label: "USD", value: "USD" },
              { label: "JPY", value: "JPY" },
            ],
          },
          {
            label: "活动形式",
            key: "desc",
            _key: "desc",
            type: "textarea",
            required: true,
          },
        ],
      }
    },
    methods: {
      handleSubmit(form) {
        this.$dialog({
          title: "表单内容",
          width: 600,
          content: JSON.stringify(form),
        });
      },
    },
  }
  `,
        formColumns: [
          {
            label: "活动名称",
            key: "name",
            _key: "name",
            required: true,
            col: 1,
            rules: [],
          },
          {
            label: "活动区域",
            key: "region",
            _key: "region",
            type: "select",
            required: true,
            options: [
              { label: "区域一", value: "shanghai" },
              { label: "区域二", value: "beijing" },
            ],
          },
          {
            label: "活动时间",
            key: "date",
            _key: "date",
            type: "date",
          },
          {
            label: "即时配送",
            key: "delivery",
            _key: "delivery",
            type: "switch",
            col: 1,
            required: true,
          },
          {
            label: "文件上传",
            key: "upload",
            _key: "upload",
            type: "upload",
            col: 1,
            required: true,
            uploadAction: "https://jsonplaceholder.typicode.com/posts/",
            interceptors: {
              success(response) {
                return "https://picsum.photos/200/300";
              },
            },
          },
          {
            label: "活动性质",
            key: "type",
            _key: "type",
            type: "checkbox",
            options: [
              { label: "美食/餐厅线上活动", value: "1" },
              { label: "地推活动", value: "2" },
              { label: "线下主题活动", value: "3" },
              { label: "单纯品牌曝光", value: "4" },
            ],
          },
          {
            label: "特殊资源",
            key: "resource",
            _key: "resource",
            type: "radio",
            required: true,
            options: [
              { label: "线上品牌商赞助", value: "2" },
              { label: "线下场地免费", value: "3" },
            ],
          },

          {
            label: "币种",
            key: "currency",
            _key: "currency",
            type: "autocomplete",
            options: [
              { label: "CNY", value: "CNY" },
              { label: "USD", value: "USD" },
              { label: "JPY", value: "JPY" },
            ],
          },
          {
            label: "活动形式",
            key: "desc",
            _key: "desc",
            type: "textarea",
            required: true,
          },
        ],
      };
    },
    methods: {
      handleSubmit(form) {
        this.$dialog({
          title: "表单内容",
          width: 600,
          content: JSON.stringify(form),
        });
      },
    },
  };
</script>

<style lang="scss" scoped></style>
