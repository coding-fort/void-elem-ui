<template>
  <comp-wrap title="反向转换（前端>后端）" :desc="desc" :code-str="codeStr">
    <p class="mt-0 mb-10">1.映射配置表：key=前端字段，value=后端字段</p>
    <el-input
      class="demo"
      v-model="calcReverseUserMap"
      type="textarea"
      :rows="2"
      disabled
    ></el-input>
    <p class="mt-10 mb-10">2.提交表单对象</p>
    <el-input
      class="demo"
      v-model="calcFormData"
      type="textarea"
      :rows="2"
      disabled
    ></el-input>
    <p class="mt-10 mb-10">3.转换后结果</p>
    <el-input
      class="demo"
      v-model="transferData"
      type="textarea"
      :rows="2"
      disabled
    ></el-input>
    <vo-button class="mt-10" @click="handleTransfer" type="primary" size="mini">
      转换
    </vo-button>
  </comp-wrap>
</template>

<script>
  import VoButton from "../../../../src/components/button/index.vue";
  import CompWrap from "../utils/comp-wrap.vue";
  import { reverseTransformData } from "../../../../src/utils/fieldTransfer";
  export default {
    components: {
      CompWrap,
      VoButton,
    },
    data() {
      return {
        desc: ``,
        codeStr: `
<p>1.映射配置表：key=前端字段，value=后端字段</p>
<el-input class="demo" v-model="calcReverseUserMap" type="textarea" :rows="2" disabled />
<p>2.提交表单对象</p>
<el-input class="demo" v-model="calcFormData" type="textarea" :rows="2" disabled />
<p>3.转换后结果</p>
<el-input class="demo" v-model="transferData" type="textarea" :rows="2" disabled />
<vo-button class="mt-10" @click="handleTransfer" type="primary" size="mini">转换</vo-button>

import { reverseTransformData } from "@/src/utils/fieldTransfer";

export default {
    data(){
      return {
        reverseUserMap: {
          username: "user_name",
          age: "user_age",
          registerTime: "reg_time",
        },
        formData: {
          username: "张三",
          age: 20,
          registerTime: "2000-10-10 08:00:00",
        },
        transferData: "",
      }
    },
    computed: {
      calcReverseUserMap() {
        return JSON.stringify(this.reverseUserMap);
      },
      calcFormData() {
        return JSON.stringify(this.formData);
      },
    },
    methods: {
      handleTransfer() {
        let _data = reverseTransformData(this.formData, this.reverseUserMap);
        this.transferData = JSON.stringify(_data);
      },
    }
  }
          `,
        reverseUserMap: {
          username: "user_name",
          age: "user_age",
          registerTime: "reg_time",
        },
        formData: {
          username: "张三",
          age: 20,
          registerTime: "2000-10-10 08:00:00",
        },
        transferData: "",
      };
    },
    computed: {
      calcReverseUserMap() {
        return JSON.stringify(this.reverseUserMap);
      },
      calcFormData() {
        return JSON.stringify(this.formData);
      },
    },
    methods: {
      handleTransfer() {
        let _data = reverseTransformData(this.formData, this.reverseUserMap);
        this.transferData = JSON.stringify(_data);
        this.$message.success(`转换成功`);
      },
    },
  };
</script>

<style lang="scss" scoped></style>
