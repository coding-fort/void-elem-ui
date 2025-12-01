<template>
  <div class="image-form-item">
    <p v-if="title" class="title">{{ title }}</p>
    <!-- 上传区域 -->
    <div class="upload-container">
      <el-upload
        :action="uploadAction"
        :headers="headers"
        :show-file-list="false"
        :on-success="handleSuccess"
        :on-error="handleError"
        :before-upload="beforeUpload"
        :disabled="disabled"
      >
        <el-button size="small" type="primary" :disabled="disabled">
          <i class="el-icon-upload"></i> 选择图片
        </el-button>
      </el-upload>

      <!-- 预览区域 -->
      <div v-if="fileList.length > 0" class="preview-control">
        <el-button
          size="small"
          type="success"
          plain
          @click="handlePreview"
          :disabled="disabled"
        >
          <i class="el-icon-view"></i> 预览
          <span v-if="limit > 1">({{ fileList.length }}/{{ limit }})</span>
        </el-button>
        <el-button
          size="small"
          type="danger"
          plain
          @click="handleClearImage"
          :disabled="disabled"
        >
          <i class="el-icon-refresh"></i>清空
        </el-button>
      </div>
      <div class="upload-tips">
        <p>只能上传 {{ acceptList }} 文件，且不超过{{ size }}MB</p>
      </div>
    </div>
    <!-- 单张图片时预览 -->
    <image-viewer
      v-if="showViewer"
      :url-list="[fileList[0].blob]"
      :initial-index="0"
      :on-close="handleClosePreview"
    />
    <!-- 预览弹窗 -->
    <el-dialog
      title="图片预览"
      :visible.sync="showPreviewDialog"
      append-to-body
      width="800"
      class="preview-dialog"
    >
      <div class="image-item" v-for="(file, index) in fileList" :key="index">
        <el-image
          style="width: 100px; height: 100px"
          :src="file.blob"
          :preview-src-list="[file.blob]"
        />
        <!-- 图片删除按钮 -->
        <div class="image-ctrl">
          <el-button
            size="small"
            type="danger"
            @click="removeImage(file.index)"
          >
            <i class="el-icon-delete"></i>
          </el-button>
        </div>
        <!-- 图片信息 -->
        <div clsss="image-info">
          <p class="file-name">
            <el-tooltip
              v-if="file.name.length > 8"
              class="item"
              effect="dark"
              :content="file.name"
              placement="bottom"
            >
              <span>{{ file.name.substring(0, 8) + "..." }}</span>
            </el-tooltip>
            <span v-else>{{ file.name }}</span>
          </p>

          <p class="file-type primary">{{ file.type }}</p>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showPreviewDialog = false">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
  <!-- </el-form-item> -->
</template>

<script>
  import { previewLocalFile } from "../../utils/filePreview";
  // 引入ImageViewer组件（Element内部组件）
  import ImageViewer from "element-ui/packages/image/src/image-viewer";
  export default {
    name: "ImageFormItem",
    components: {
      ImageViewer,
    },
    props: {
      title: String,
      // 上传接口地址
      uploadAction: {
        type: String,
        required: true,
      },
      // 上传请求头
      headers: {
        type: Object,
        default: () => ({}),
      },
      // TODO: 初始图片URL
      value: {
        type: String,
        default: "",
      },
      // 是否禁用
      disabled: {
        type: Boolean,
        default: false,
      },
      // 最多上传图片数量
      limit: {
        type: Number,
        default: 1,
      },
      // 图片大小限制（MB）
      size: {
        type: Number,
        default: 2,
      },
      accept: {
        type: String,
        // default: "image/png",
        default: "image/png,image/jpg",
      },
      // 上传成功/失败拦截，Object<{success:Function, error:Function}>
      interceptors: {
        type: Object,
        default: null,
      },
    },
    data() {
      return {
        url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        srcList: [
          "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
          "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
        ],
        imageUrl: this.value,
        fileName: "",
        showViewer: false, // 单张图片时是否显示预览弹窗
        showPreviewDialog: false, // 多图预览弹窗是否显示
        errorMsg: "",
        fileListIndex: 0, // 上传文件列表索引
        fileList: [], // 上传文件列表，Array({blob: File, url: String, name: String, index: Number, type: String})
      };
    },
    watch: {
      value(newVal) {
        this.imageUrl = newVal;
        // 从URL中提取文件名
        if (newVal) {
          this.fileName = newVal.split("/").pop().split("?")[0];
        } else {
          this.fileName = "";
        }
      },
    },
    computed: {
      // 处理accept属性，将"image/"前缀去掉
      acceptList() {
        return this.accept.replaceAll("image/", "").replaceAll(",", "、");
      },
      acceptTypes() {
        let _types = this.accept
          .split(",")
          .map((type) => type.trim().toLowerCase());
        // 处理jpeg、jpg格式
        if (_types.includes("image/jpeg") && !_types.includes("image/jpg")) {
          _types.push("image/jpg");
        }
        if (_types.includes("image/jpg") && !_types.includes("image/jpeg")) {
          _types.push("image/jpeg");
        }
        return _types.join(",");
      },
    },
    mounted() {
      // 初始化文件名
      if (this.imageUrl) {
        this.fileName = this.imageUrl.split("/").pop().split("?")[0];
      }
    },
    methods: {
      // 预览图片
      handlePreview() {
        if (this.limit == 1) {
          this.showViewer = true;
        } else {
          this.showPreviewDialog = true;
        }
      },
      // 关闭预览弹窗
      handleClosePreview() {
        // console.log("关闭预览弹窗");
        this.showViewer = false;
        this.showPreviewDialog = false;
      },
      // 删除图片
      removeImage(index) {
        this.fileList.splice(index, 1);
        if (this.fileList.length == 0) {
          this.$emit("clear", true);
        }
      },
      // 上传前校验
      beforeUpload(file) {
        // 校验文件数量是否超过限制
        if (this.fileList.length >= this.limit) {
          this.$message.error(`最多只能上传 ${this.limit} 张图片`);
          return false;
        }

        const isImage = file.type.startsWith("image/");
        const isLtSize = file.size / 1024 / 1024 < this.size;

        if (!isImage) {
          this.$message.error("上传文件只能是图片格式!");
          return false;
        }
        // console.log(file.type, this.accept);
        if (!this.acceptTypes.includes(file.type)) {
          this.$message.error(`上传文件只能是 ${this.acceptList} 格式!`);
          return false;
        }
        if (!isLtSize) {
          this.$message.error(`上传图片大小不能超过 ${this.size}MB!`);
          return false;
        }

        // 清除之前的错误
        this.errorMsg = "";
        // 预览图片
        this.fileList.push({
          blob: previewLocalFile(file),
          url: "",
          type: file.type.replace("image/", "").toUpperCase(),
          name: file.name,
          index: this.fileListIndex++,
        });
        return true;
      },

      // 上传成功处理
      handleSuccess(response) {
        // 上传成功拦截
        if (
          this.interceptors &&
          Object.hasOwn(this.interceptors, "success") &&
          this.interceptors.success instanceof Function
        ) {
          // console.log("handlesuccess:", response);
          let url = this.interceptors.success(response);
          this.$emit("change", url);
          return;
        }
        // 假设接口返回格式为 { code: 200, data: { url: '图片地址' } }
        if (response.code === 200 && response.data.url) {
          //   console.log(response.data);
          this.imageUrl = response.data.url;
          this.fileName = response.data.url.split("/").pop().split("?")[0];
          // 更新文件列表中对应项的URL
          const index = this.fileList.findIndex(
            (item) => item.index === this.fileListIndex - 1
          );
          if (index !== -1) {
            this.fileList[index].url = this.imageUrl;
            // this.fileList[index].name = this.fileName;
          }
          this.$emit("input", this.imageUrl);
          this.$emit("change", this.imageUrl);
          this.$emit("success", this.fileList);
          this.$message.success("上传成功");
        } else {
          this.$message.error("上传失败: " + (response.msg || "未知错误"));
        }
      },

      // 上传失败处理
      handleError(error) {
        // 上传失败拦截
        if (
          this.interceptors &&
          Object.hasOwn(this.interceptors, "error") &&
          this.interceptors.error instanceof Function
        ) {
          this.interceptors.error(response);
          return;
        }
        this.$message.error("上传失败，请稍后重试");
        console.error("上传错误:", error);
      },

      // 删除图片
      handleClearImage() {
        this.fileList = [];
        this.fileListIndex = 0;
        this.$emit("input", "");
        this.$emit("change", "");
        this.$emit("clear", true);
      },
      reset() {
        this.handleClearImage();
      },
    },
  };
</script>

<style lang="scss">
  // $base-color: #537df3;
  .image-form-item {
    display: flex;
    .title {
      line-height: 44px;
      margin: 0;
      margin-right: 20px;
    }
    .upload-container {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      /* gap: 12px; */
      // width: 600px;
      .el-button {
        &--primary {
          // background: $base-color;
          // border-color: $base-color;
          color: #fff;
          &:hover {
            opacity: 0.8;
          }
        }
      }
    }

    .preview-control {
      align-items: center;
      color: #606266;
      display: flex;
      flex-wrap: wrap;
      margin-left: 10px;
      /* gap: 12px; */
    }

    .upload-tips {
      font-size: 12px;
      line-height: 10px;
      margin-left: 20px;
    }

    .file-name {
      color: #606266;
      max-width: 200px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .delete-btn {
      color: #f56c6c;
    }

    .preview-image {
      object-fit: contain;
      width: 100%;
    }

    /* 错误状态样式与Element UI保持一致 */
    ::v-deep .upload-error .el-form-item__error {
      display: block;
    }
  }
  .preview-dialog {
    width: auto;
    .el-dialog {
      border-radius: 8px;
      &__header {
        // background: $base-color;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        padding: 10px;
        padding-left: 20px;
      }
      &__title {
        color: #fff;
        font-size: 16px;
        font-weight: bold;
      }
      &__headerbtn {
        top: 14px;
        i.el-icon-close {
          color: #fff;
          font-size: 20px;
        }
      }
      &__body {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        justify-content: center;
      }
      &__footer {
        // padding: 10px 20px;
        text-align: center;
      }
    }
    // .el-dialog__body {
    //   display: flex;
    //   flex-wrap: wrap;
    //   gap: 12px;
    // }
    .el-image {
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      overflow: hidden;
      padding: 5px;
      transition: all 0.1s ease-in-out;
      img {
        // height: fit-content;
        object-fit: cover;
      }
      &:hover {
        transform: scale(1.05);
      }
    }
    .image-item {
      position: relative;
      .image-ctrl {
        position: absolute;
        right: 5px;
        top: 5px;
        button {
          padding: 3px;
        }
      }
      .image-info {
      }
      p.file-name {
        margin: 5px 0;
        padding: 0 5px;
        width: 100px;
      }
      .file-type {
        background: rgb(245, 247, 250);
        border: 1px solid rgb(158, 165, 176);
        border-radius: 3px;
        box-sizing: content-box;
        color: rgb(158, 165, 176);
        font-size: 12px;
        height: 10px;
        line-height: 10px;
        margin: 0;
        padding: 3px 3px;
        position: absolute;
        right: 6px;
        top: 76px;
        &.danger {
          background: rgb(254, 240, 240);
          border: 1px solid rgb(245, 108, 108);
          color: rgb(245, 108, 108);
        }
        &.success {
          background: rgb(240, 253, 244);
          border: 1px solid rgb(103, 194, 58);
          color: rgb(103, 194, 58);
        }
        &.primary {
          background: rgb(236, 245, 255);
          border: 1px solid rgb(179, 216, 255);
          color: rgb(64, 158, 255);
        }
      }
    }
  }
</style>
