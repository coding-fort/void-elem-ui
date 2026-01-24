<template>
  <comp-wrap
    title="RSA 解密（decrypt）"
    :desc="desc"
    :code-str="codeStr"
  >
    <p class="mt-0 mb-10">
      1.RSA 私钥
      <span style="font-size: 12px; color: red; margin-left: 20px">
        注意：私钥与公钥是配对的，最好不要修改。
      </span>
    </p>
    <el-input v-model="privateKey" type="textarea" :rows="8"></el-input>
    <p class="mt-10 mb-10">2.RSA 密文</p>
    <el-input v-model="encrypted" type="textarea" :rows="5"></el-input>
    <p class="mt-10 mb-10">3.解密结果</p>
    <el-input
      class="rsa-input"
      v-model="decrypted"
      type="textarea"
      :rows="3"
      disabled
    ></el-input>
    <vo-button class="mt-10" @click="handleDecrypt" type="primary" size="mini">
      解密
    </vo-button>
    <vo-button class="mt-10" @click="handleReset" type="danger" size="mini">
      重置
    </vo-button>
  </comp-wrap>
</template>

<script>
  export default {
    data() {
      return {
        desc: ``,
        codeStr: `
import { vutil as $vutil } from "void-elem-ui";

/* this.privateKey 私钥必须与公钥匹配 */

this.encrypted = await $vutil.rsa.decrypt(this.encrypted, this.privateKey);
          `,
        privateKey: `MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAMwS+H3C9FPMH+iU4qKf7F1kkoOwtrSzb0m/Xt1VAF7sq0vQktgiRQY9oT2lznx9JiEgAwCfZ2AR3MD2cDsXNTvNWru1DT1VDgRyMUmH+bhLu/z3lMvfxK+HdWsE7cNKQWnzkeoC6ZKcqGCsMwLghFhDqWmUX2/Gz4S8eptvtrdHAgMBAAECgYAc4y6Tts4ZMpLtvG2ccaDm036973zddWzydol6MTcdOMlCsSKoP6mfqYeyj078ZkbId5yVMPtUKRMjqX7XjoB1Vq/kbDLBqNawWL6s34+QiEHewD7tKNCoW3TpUJIk0opsh/R5sTzbej1O3haV7THewrW4yIZacUZP/Jj839abCQJBANCKWX59qII/Kz8XEXXNXgud1LUygvg4P9WeMf4dYC5Z44MMP8SHXp2WtTWgEKlimoJePS5qiWwr3pZA406Da7sCQQD6hGlGZUEcbBSShph7WpJiRPu+w5oDger1fx4pyr8z4LUJiXSNLhyCnvQxaHoSfbeOyAALzLHSvXF5AvUepfvlAkEAhmfUvFjCxYdvGQ+GGlXNelE0KcCvdsnSIpz9/ZjzR4x5vRmk88aHravXiQNsGa/Kg6G3bvYNMiGoKVES76R2RwJAPW6Q/lFAKT8bwF6/L6ijMvPlo/8FWozWWENG20q7nnYhDuilKyW+mg1uplsPbE9l3t6OnFYi2SHZnKor/8sGPQJAHkCuc7hkrqdpzmoE7DzABAvr+Z31j3jf6ziTYfrHlIyDCQHrK7YtOazVMwWCujhNxknL5VM6ccwpkXosZsfFmw==`,
        encrypted: "",
        decrypted: "",
      };
    },
    computed: {
      calcData() {
        return JSON.stringify(this.data);
      },
      calcResData() {
        return JSON.stringify(this.resData);
      },
    },
    methods: {
      async handleDecrypt() {
        if (!this.encrypted) {
          this.$message.error("密文为空");
          return;
        }

        try {
          this.decrypted = await this.$vutil.rsa.decrypt(
            this.encrypted,
            this.privateKey,
          );
          this.$message.success(`解密成功`);
        } catch (error) {
          this.$message.error(`解密失败`);
        }
      },
      handleReset() {
        this.encrypted = "";
        this.decrypted = "";
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
