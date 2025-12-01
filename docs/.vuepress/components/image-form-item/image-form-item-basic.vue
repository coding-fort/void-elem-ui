<template>
  <comp-wrap title="基础方法" :desc="desc" :code-str="codeStr">
    <vo-image-form-item
      title="上传图片"
      :upload-action="uploadAction"
      :interceptors="interceptors"
      @clear="handleClear"
    ></vo-image-form-item>
    <vo-button
      text="提交"
      primary
      @click="handleSubmit"
      class="d-flex m-auto"
    />
  </comp-wrap>
</template>

<script>
  import CompWrap from "../utils/comp-wrap.vue";
  import VoButton from "../../../../src/components/button/index.vue";
  import VoImageFormItem from "../../../../src/components/image-form-item/index.vue";
  export default {
    components: {
      CompWrap,
      VoButton,
      VoImageFormItem,
    },
    data() {
      return {
        desc: `表单用图片上传控件。`,
        codeStr: `
<vo-image-form-item title="上传图片" :upload-action="uploadAction" :interceptors="interceptors" @clear="handleClear" />
<vo-button text="提交" @click="handleSubmit" />

  export default {
    data(){
      return {
        form: {
          avatar: "",
        },
        uploadAction: "https://jsonplaceholder.typicode.com/posts/",
        interceptors: {},
      },
      created() {
        this.interceptors.success = this.handleUploadSuccess;
      },
      methods: {
        handleSubmit(form) {
          if (!this.form.avatar) {
            this.$message.error("请上传图片");
            return;
          }
          this.$dialog({
            title: "上传内容",
            content: JSON.stringify(this.form),
          });
        },
        handleUploadSuccess(response) {
          this.form.avatar = "https://picsum.photos/200/300";
        },
        handleClear() {
          this.form.avatar = "";
        },
      },
    }
  }
    `,
        form: {
          avatar: "",
        },
        uploadAction: "https://jsonplaceholder.typicode.com/posts/",
        interceptors: {},
      };
    },
    created() {
      this.interceptors.success = this.handleUploadSuccess;
    },
    methods: {
      handleSubmit(form) {
        if (!this.form.avatar) {
          this.$message.error("请上传图片");
          return;
        }
        this.$dialog({
          title: "上传内容",
          content: JSON.stringify(this.form),
        });
      },
      handleUploadSuccess(response) {
        this.form.avatar = "https://picsum.photos/200/300";
      },
      handleClear() {
        this.form.avatar = "";
      },
    },
  };
</script>

<style lang="scss" scoped></style>
