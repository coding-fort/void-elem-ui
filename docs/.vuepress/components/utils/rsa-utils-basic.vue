<template>
  <comp-wrap title="RSA 加密（RSATool.encrypt）" :desc="desc" :code-str="codeStr">
    <p class="mt-0 mb-10">
      1.RSA 公钥
      <span style="font-size: 12px; color: red; margin-left: 20px">
        注意：私钥与公钥是配对的，最好不要修改。
      </span>
    </p>
    <el-input v-model="publicKey" type="textarea" :rows="2"></el-input>
    <p class="mt-10 mb-10">2.待加密对象</p>
    <el-input v-model="data.name"></el-input>
    <el-input
      class="rsa-input"
      v-model="calcData"
      type="textarea"
      :rows="3"
      disabled
    ></el-input>
    <p class="mt-10 mb-10">3.加密结果</p>
    <el-input
      class="rsa-input"
      v-model="encrypted"
      type="textarea"
      :rows="5"
      disabled
    ></el-input>
    <vo-button class="mt-10" @click="handleEncrypt" type="primary" size="mini">
      加密
    </vo-button>
    <vo-button class="mt-10" @click="handleCopy" type="success" size="mini">
      复制密文
    </vo-button>
    <vo-button class="mt-10" @click="handleReset" type="danger" size="mini">
      重置
    </vo-button>
  </comp-wrap>
</template>

<script>
  import VoButton from "../../../../src/components/button/index.vue";
  import CompWrap from "../utils/comp-wrap.vue";
  import RSATool from "../../../../src/utils/rsaUtils";
  import copyToClipboard from "../../../../src/utils/copyToClipboard";

  export default {
    components: {
      CompWrap,
      VoButton,
    },
    data() {
      return {
        desc: ``,
        codeStr: `
import RSATool from "@/src/utils/rsaTool";

/* this.calcData 为JSON 字符串，不是像JSON 字符串的字符串 */
this.encrypted = await RSATool.encrypt(this.calcData, this.publicKey);
          `,
        publicKey: `MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDMEvh9wvRTzB/olOKin+xdZJKDsLa0s29Jv17dVQBe7KtL0JLYIkUGPaE9pc58fSYhIAMAn2dgEdzA9nA7FzU7zVq7tQ09VQ4EcjFJh/m4S7v895TL38Svh3VrBO3DSkFp85HqAumSnKhgrDMC4IRYQ6lplF9vxs+EvHqbb7a3RwIDAQAB`,
        data: {
          name: "百度科技有限公司",
          codeType: "9",
          code: "987465861234567890",
          linkman: "张三",
          mobile: "13000000000",
          province: "北京市",
          city: "市辖区",
          county: "海淀区",
        },
        encrypted: "",
      };
    },
    computed: {
      calcData() {
        return JSON.stringify(this.data);
      },
    },
    methods: {
      async handleEncrypt() {
        try {
          this.encrypted = await RSATool.encrypt(this.calcData, this.publicKey);
          this.$message.success(`加密成功`);
        } catch (error) {
          this.$message.error(`加密失败`);
        }
      },
      handleCopy() {
        copyToClipboard(this.encrypted);
        this.$message.success(`密文复制成功`);
      },
      handleReset() {
        this.encrypted = "";
      },
    },
  };
</script>

<style lang="scss">
  .rsa-input textarea {
    // background-color: #fff !important;
    color: #606266 !important;
  }
</style>
