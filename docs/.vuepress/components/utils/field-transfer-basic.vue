<template>
  <comp-wrap title="正向转换（后端>前端）" :desc="desc" :code-str="codeStr">
    <p class="mt-0 mb-10">1.映射配置表：key=前端字段，value=后端字段</p>
    <el-input
      class="demo"
      v-model="calcUserMap"
      type="textarea"
      :rows="2"
      disabled
    ></el-input>
    <p class="mt-10 mb-10">2.接口返回对象</p>
    <el-input
      class="demo"
      v-model="calcResData"
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
  import { transformData } from "../../../../src/utils/fieldTransfer";
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
<el-input class="demo" v-model="calcUserMap" type="textarea" :rows="2" disabled/>
<p>2.接口返回对象</p>
<el-input class="demo" v-model="calcResData" type="textarea" :rows="2" disabled/>
<p>3.转换后结果</p>
<el-input class="demo" v-model="transferData" type="textarea" :rows="2" disabled/>
<vo-button class="mt-10" @click="handleTransfer" type="primary" size="mini">转换</vo-button>

import { transformData } from "@/src/utils/fieldTransfer";

export default {
    data(){
      return {
        userMap: {
          username: "user_name",
          age: "user_age",
          registerTime: "reg_time",
        },
        formData: {
          user_name: "张三",
          user_age: 20,
          reg_time: "2000-10-10 08:00:00",
        },
        transferData: "",
      }
    },
    computed: {
      calcUserMap() {
        return JSON.stringify(this.userMap);
      },
      calcResData() {
        return JSON.stringify(this.formData);
      },
    },
    methods: {
      handleTransfer() {
        let _data = transformData(this.formData, this.userMap);
        this.transferData = JSON.stringify(_data);
      },
    }
  }
          `,
        userMap: {
          username: "user_name",
          age: "user_age",
          registerTime: "reg_time",
        },
        resData: {
          user_name: "张三",
          user_age: 20,
          reg_time: "2000-10-10 08:00:00",
        },
        transferData: "",
      };
    },
    computed: {
      calcUserMap() {
        return JSON.stringify(this.userMap);
      },
      calcResData() {
        return JSON.stringify(this.resData);
      },
    },
    methods: {
      handleTransfer() {
        let _data = transformData(this.resData, this.userMap);
        this.transferData = JSON.stringify(_data);
        this.$message.success(`转换成功`);
      },
    },
  };
</script>

<style lang="scss" scoped></style>
