const crypto = require("crypto");
// import crypto from ("crypto");

const rsaUtils = {
  KEY_ALGORITHM: "RSA",
  CIPHER_ALGORITHM: "RSA_PKCS1_PADDING",
  MAX_ENCRYPT_BLOCK: 117,
  MAX_DECRYPT_BLOCK: 128,

  /**
   * 使用RSA公钥加密数据
   * @param {string} data 待加密的数据
   * @param {string} publicKeyStr 公钥字符串（Base64编码）
   * @returns {Promise<string>} 加密后的数据（Base64编码）
   */
  async encrypt(data, publicKeyStr) {
    try {
      // 解码公钥
      const publicKey = `-----BEGIN PUBLIC KEY-----\n${publicKeyStr}\n-----END PUBLIC KEY-----`;

      // 执行加密
      const encryptedChunks = [];
      const buffer = Buffer.from(data, "utf8");
      const chunkSize = rsaUtils.MAX_ENCRYPT_BLOCK;

      for (let i = 0; i < buffer.length; i += chunkSize) {
        const chunk = buffer.slice(i, i + chunkSize);
        const encryptedChunk = crypto.publicEncrypt(
          {
            key: publicKey,
            padding: crypto.constants.RSA_PKCS1_PADDING,
          },
          chunk,
        );
        encryptedChunks.push(encryptedChunk);
      }

      const encrypted = Buffer.concat(encryptedChunks);
      return encrypted.toString("base64");
    } catch (e) {
      console.error("RSA加密失败:", e);
      throw new Error("RSA加密失败");
    }
  },

  /**
   * 使用RSA私钥解密数据
   * @param {string} encryptedData 加密的数据（Base64编码）
   * @param {string} privateKeyStr 私钥字符串（Base64编码）
   * @returns {Promise<string>} 解密后的数据
   */
  async decrypt(encryptedData, privateKeyStr) {
    try {
      // 解码私钥
      const privateKey = `-----BEGIN PRIVATE KEY-----\n${privateKeyStr}\n-----END PRIVATE KEY-----`;

      // 执行解密
      const decryptedChunks = [];
      const buffer = Buffer.from(encryptedData, "base64");
      const chunkSize = rsaUtils.MAX_DECRYPT_BLOCK;

      for (let i = 0; i < buffer.length; i += chunkSize) {
        const chunk = buffer.slice(i, i + chunkSize);
        const decryptedChunk = crypto.privateDecrypt(
          {
            key: privateKey,
            padding: crypto.constants.RSA_PKCS1_PADDING,
          },
          chunk,
        );
        decryptedChunks.push(decryptedChunk);
      }

      const decrypted = Buffer.concat(decryptedChunks);
      return decrypted.toString("utf8");
    } catch (e) {
      console.error("RSA解密失败:", e);
      throw new Error("RSA解密失败");
    }
  },
};

// export default rsaUtils;
module.exports = rsaUtils;

// async function main() {
//   // 加密示例
//   const publicKey =
//     "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDMEvh9wvRTzB/olOKin+xdZJKDsLa0s29Jv17dVQBe7KtL0JLYIkUGPaE9pc58fSYhIAMAn2dgEdzA9nA7FzU7zVq7tQ09VQ4EcjFJh/m4S7v895TL38Svh3VrBO3DSkFp85HqAumSnKhgrDMC4IRYQ6lplF9vxs+EvHqbb7a3RwIDAQAB";
//   const privateKey =
//     "MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAMwS+H3C9FPMH+iU4qKf7F1kkoOwtrSzb0m/Xt1VAF7sq0vQktgiRQY9oT2lznx9JiEgAwCfZ2AR3MD2cDsXNTvNWru1DT1VDgRyMUmH+bhLu/z3lMvfxK+HdWsE7cNKQWnzkeoC6ZKcqGCsMwLghFhDqWmUX2/Gz4S8eptvtrdHAgMBAAECgYAc4y6Tts4ZMpLtvG2ccaDm036973zddWzydol6MTcdOMlCsSKoP6mfqYeyj078ZkbId5yVMPtUKRMjqX7XjoB1Vq/kbDLBqNawWL6s34+QiEHewD7tKNCoW3TpUJIk0opsh/R5sTzbej1O3haV7THewrW4yIZacUZP/Jj839abCQJBANCKWX59qII/Kz8XEXXNXgud1LUygvg4P9WeMf4dYC5Z44MMP8SHXp2WtTWgEKlimoJePS5qiWwr3pZA406Da7sCQQD6hGlGZUEcbBSShph7WpJiRPu+w5oDger1fx4pyr8z4LUJiXSNLhyCnvQxaHoSfbeOyAALzLHSvXF5AvUepfvlAkEAhmfUvFjCxYdvGQ+GGlXNelE0KcCvdsnSIpz9/ZjzR4x5vRmk88aHravXiQNsGa/Kg6G3bvYNMiGoKVES76R2RwJAPW6Q/lFAKT8bwF6/L6ijMvPlo/8FWozWWENG20q7nnYhDuilKyW+mg1uplsPbE9l3t6OnFYi2SHZnKor/8sGPQJAHkCuc7hkrqdpzmoE7DzABAvr+Z31j3jf6ziTYfrHlIyDCQHrK7YtOazVMwWCujhNxknL5VM6ccwpkXosZsfFmw==";
//   let data = {
//     name: "鑫华餐饮有限责任公司",
//     codeType: "9",
//     code: "987465861234567890",
//     linkman: "张鑫华",
//     mobile: "15888888888",
//     province: "广东省",
//     city: "深圳市",
//     county: "南山区",
//     address: "粤海街道科苑北路10号科兴科学园CG25A",
//     area: "600.00",
//   };

//   const encrypted = await rsaUtils.encrypt(JSON.stringify(data), publicKey);
//   console.log("加密结果:", encrypted);

//   const decrypted = await rsaUtils.decrypt(encrypted, privateKey);
//   console.log("解密结果:", decrypted);
// }

// main();
