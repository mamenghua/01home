<template>
  <div>
    <h2>商品分类信息</h2>
    <div class="sty">
      <el-input placeholder="请输入商品分类id" v-model="input"></el-input>
      <el-button type="primary" icon="el-icon-search" @click="search()">搜索</el-button>
    </div>
    <div class="touxiang">
      <el-avatar icon="el-icon-user-solid"></el-avatar>
    </div>

    <div class="sty">
      <span class="tip">商品分类ID：</span>
      <el-input v-model="data._id" :disabled="true" class="ipt"></el-input>
    </div>
    <div class="sty">
      <span class="tip">商品分类名：</span>
      <el-input v-model="name" class="ipt"></el-input>
    </div>
    <div class="sty">
      <span class="tip">商品分类描述：</span>
      <el-input v-model="descriptions" class="ipt"></el-input>
    </div>

    <div class="sty">
      <span class="tip">分类上架时间：</span>
      <el-input v-model="createdAt" :disabled="true" class="ipt"></el-input>
    </div>
    <div class="sty">
      <span class="tip">分类更新时间：</span>
      <el-input v-model="updatedAt" :disabled="true" class="ipt"></el-input>
    </div>

    <div class="sty"></div>
    <div class="sty">
      <el-button type="success" class="btn" @click="open()">保存</el-button>
      <el-button type="danger" class="btn">删除</el-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MsgProductClassify",
  data() {
    return {
      input: "",
      token: localStorage.getItem("token"),
      data: {},

      coverImg: "",
      createdAt: "",
      descriptions: "",
      name: "",
      updatedAt: "",
      _id: ""
    };
  },
  methods: {
    search() {
      axios
        .get(
          "http://api.cat-shop.penkuoer.com/api/v1/admin/product_categories/" +this.input,
          {
            headers: {
              authorization: "Bearer " + localStorage.getItem("token")
            }
          }
        )
        .then(data => {
          if (data.data._id !== undefined) {
            this.data = data.data;
            this.coverImg = data.data.coverImg;
            this.createdAt = data.data.createdAt;
            this.descriptions = data.data.descriptions;
            this.name = data.data.name;
            this.updatedAt = data.data.updatedAt;
            this._id = data.data._id;
          } else {
            this.$message({
              type: "info",
              message: `系统消息: ${"商品ID不能为空，请输入！"}`
            });
          }
        })
        .catch(data => {
          this.$message({
            type: "info",
            message: `系统消息：${"该商品ID不存在，请重新输入！"}`
          });
        });
    },
    // 点击保存按钮
    open() {
      if (this.data._id) {
        this.$confirm("此操作将保存该商品分类, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            // 确认保存，执行保存
            axios({
              url:
                "http://api.cat-shop.penkuoer.com/api/v1/admin/product_categories/" +
                this.data._id,
              method: "put",
              headers: {
                authorization: "Bearer " + localStorage.getItem("token")
              },
              data: {
                name: this.name,
                descriptions: this.descriptions,
                coverImg: this.data.coverImg
              }
            }).then(data => {
              if (data.data) {
                this.$message({
                  type: "success",
                  message: "保存成功！"
                });
              } else {
                this.$message({
                  type: "success",
                  message: "保存失败！"
                });
              }
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消保存"
            });
          });
      } else {
        this.$message({
          type: "info",
          message: "请先根据id搜索商品分类！"
        });
      }
    }
  }
};
</script>

<style scoped>
h2 {
  line-height: 20px;
  margin: 0;
}
.el-input {
  width: 20%;
  height: 50px;
  margin-top: 20px;
}
.sty {
  height: 50px;
  line-height: 50px;
}
.touxiang {
  height: 80px;
  line-height: 120px;
}

.tip {
  display: inline-block;
  width: 120px;
  text-align: center;
  line-height: 40px;
}
</style>
