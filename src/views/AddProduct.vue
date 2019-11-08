<template>
  <div>
    <h2>新增产品</h2>
    <!-- <div class="sty"> -->
      <el-upload
        class="upload-demo"
        action="http://api.cat-shop.penkuoer.com/api/v1/common/file_upload"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :on-success="handleSuccess"
        :file-list="fileList"
        :limit=limit
        list-type="picture"
      >
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      <!-- <el-avatar icon="el-icon-user-solid"></el-avatar> -->
    <!-- </div> -->
    <div class="sty">
      <el-input v-model="name" placeholder="请输入商品名"></el-input>
      <span class="tip" ref="name">*商品名不可为空</span>
    </div>
    <div class="sty">
      <el-input v-model="descriptions" placeholder="请输入商品简介"></el-input>
      <span class="tip" ref="descriptions">*商品简介不可为空</span>
    </div>
    <div class="sty">
      <el-input v-model="quantity" placeholder="请输入商品数量"></el-input>
      <span class="tip" ref="quantity">*商品数量不可为空</span>
    </div>
    <div class="sty">
      <el-input v-model="price" placeholder="请输入商品价格"></el-input>
      <span class="tip" ref="price">*商品价格不可为空</span>
    </div>
    <div class="sty">
      <el-input v-model="productCategory" placeholder="商品分类id"></el-input>
      <span class="tip" ref="productCategory">*商品分类id不可为空</span>
    </div>
    <div class="sty">
      <el-button type="success" @click="commit">新增</el-button>
    </div>
  </div>
</template>

<script>
import * as api from "../api/product";
import qs from "qs";

export default {
  name: "AddProduct",
  data() {
    return {
      name: "",
      descriptions: "",
      quantity: "",
      price: "",
      coverImg: "",
      productCategory: "",
      fileList: [],
      limit:1
    };
  },
  methods: {
    handleRemove(file, fileList) {
    },
    handlePreview(file) {
    },
    handleSuccess(response,file,fileList){
      this.fileList=fileList;
    },
    commit() {
      if (this.name == "") {
        this.$refs.name.style.display = "inline";
        this.$refs.descriptions.style.display = "none";
        this.$refs.quantity.style.display = "none";
      } else if (this.descriptions == "") {
        this.$refs.name.style.display = "none";
        this.$refs.descriptions.style.display = "inline";
        this.$refs.quantity.style.display = "none";
      } else if (this.quantity == "") {
        this.$refs.name.style.display = "none";
        this.$refs.descriptions.style.display = "none";
        this.$refs.quantity.style.display = "inline";
      } else {
        api
          .addProducts(localStorage.getItem("token"), {
            name: this.name,
            descriptions: this.descriptions,
            quantity: parseInt(this.quantity),
            price: parseInt(this.price),
            coverImg: "http://api.cat-shop.penkuoer.com"+this.fileList[0].response.info,
            productCategory: "5d9b424efe04943d5e540943"
          })
          .then(data => {
            if (data.data) {
              this.$message({
                type: "success",
                message: "添加成功！"
              });
            } else {
              this.$message({
                type: "info",
                message: "添加失败！"
              });
            }
          })
          .catch(data => {
            this.$message({
              type: "info",
              message: "添加失败！"
            });
          });
      }
    }
  }
};
</script>

<style scoped>

.el-input {
  height: 50px;
  line-height: 50px;
  width: 20%;
}
.el-row {
  height: 50px;
}
.tip {
  color: red;
  position: absolute;
  display: none;
}
.sty {
  height: 50px;
}
.upload-demo {
  width: 380px;
  margin: 0 auto
}
</style>
