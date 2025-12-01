<template>
  <div class="payment-voucher-upload">
    <div class="form-item">
      <label class="label-text">付款凭证：</label>
      <el-upload
        :action="uploadUrl"
        :before-upload="beforeUpload"
        :on-success="handleUploadSuccess"
        :on-error="handleUploadError"
        :file-list="fileList"
        :auto-upload="autoUpload"
        accept="image/jpeg,image/png"
        :disabled="disabled"
      >
        <el-button size="medium" type="primary" class="upload-btn">
          点击上传
        </el-button>
      </el-upload>
      <div class="tip-text">请上传付款方提供的付款凭证</div>
      <div class="format-tip">只能上传jpg/png文件，且不超过5MB</div>
    </div>

    <div v-if="fileList.length" class="file-item">
      <i class="el-icon-document"></i>
      <span class="file-name">{{ fileList[0].name }}</span>
      <i class="el-icon-success" style="color: #67c23a; margin-left: 8px"></i>
    </div>

    <div class="button-group">
      <el-button size="medium" type="default" @click="handleCancel"
        >取消</el-button
      >
      <el-button size="medium" type="primary" @click="handleConfirm"
        >确认结算</el-button
      >
    </div>
  </div>
</template>

<script>
  export default {
    name: "VoImageUpload",
    props: {
      uploadUrl: {
        type: String,
        required: true,
      },
      autoUpload: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      maxSize: {
        type: Number,
        default: 5,
      },
    },
    data() {
      return {
        fileList: [],
      };
    },
    methods: {
      beforeUpload(file) {
        const isImage = file.type === "image/jpeg" || file.type === "image/png";
        if (!isImage) {
          this.$message.error("只能上传 jpg/png 格式的图片");
          return false;
        }
        const isLtMaxSize = file.size / 1024 / 1024 <= this.maxSize;
        if (!isLtMaxSize) {
          this.$message.error(`图片大小不能超过 ${this.maxSize}MB`);
          return false;
        }
        return true;
      },
      handleUploadSuccess(response, file) {
        this.fileList = [file];
        this.$emit("upload-success", file);
      },
      handleUploadError(err) {
        this.$message.error("上传失败，请重试");
      },
      handleCancel() {
        this.$emit("cancel");
      },
      handleConfirm() {
        if (!this.fileList.length) {
          this.$message.warning("请先上传付款凭证");
          return;
        }
        this.$emit("confirm");
      },
    },
  };
</script>

<style scoped>
  .payment-voucher-upload {
    padding: 20px;
  }

  .form-item {
    align-items: center;
    display: flex;
    margin-bottom: 16px;
  }

  .label-text {
    color: #606266;
    font-size: 14px;
    width: 100px;
  }

  .upload-btn {
    font-size: 16px;
    height: 40px;
    width: 120px;
  }

  .tip-text {
    color: #909399;
    font-size: 14px;
    margin-left: 20px;
  }

  .format-tip {
    color: #909399;
    font-size: 14px;
    margin-left: 120px;
    margin-top: 8px;
  }

  .file-item {
    align-items: center;
    display: flex;
    margin-bottom: 24px;
    margin-left: 120px;
  }

  .file-name {
    color: #303133;
    font-size: 14px;
    margin-left: 8px;
  }

  .button-group {
    display: flex;
    gap: 20px;
    justify-content: center;
  }

  .button-group .el-button {
    font-size: 16px;
    height: 40px;
    width: 120px;
  }

  .button-group .el-button--default {
    background-color: #c0c4cc;
    border-color: #c0c4cc;
    color: #fff;
  }

  .button-group .el-button--default:hover {
    background-color: #a8abb2;
    border-color: #a8abb2;
  }
</style>
