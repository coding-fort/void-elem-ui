<template>
  <comp-wrap title="type=upload" :desc="desc" :code-str="codeStr">
    <vo-form :fields="formColumns" @submit="handleSubmit"> </vo-form>
  </comp-wrap>
</template>

<script>
  export default {
    data() {
      return {
        desc: `
        <li>属性<code>uploadAction</code>，必需属性，上传服务器地址；</li>
        <li>属性<code>headers</code>，上传请求头对象；</li>
        <li>属性<code>limit</code>，最多上传图片数量，默认为<b>1</b>；</li>
        <li>属性<code>size</code>，图片大小限制（MB），默认为<b>2M</b>；</li>
        <li>属性<code>accept</code>，图片格式限制，默认为<b>image/png,image/jpg</b>；</li>
        <li>属性<code>interceptors</code>，拦截器对象，包含<code>success: Function(response)</code>和<code>error: Function(response)</code></li>
        `,
        codeStr: `<template>
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
      ],
    }
  },
  methods: {
    handleSubmit(form) {
      this.$vdialog({
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
        ],
      };
    },
    methods: {
      handleSubmit(form) {
        this.$vdialog({
          title: "表单内容",
          width: 600,
          content: JSON.stringify(form),
        });
      },
    },
  };
</script>
