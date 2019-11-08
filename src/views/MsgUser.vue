<template>
  <div>
    <h2>用户信息</h2>

    <el-input placeholder="请输入用户id" v-model="input"></el-input>
    <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
    <div class="sty">
      <el-avatar icon="el-icon-user-solid"></el-avatar>
    </div>
    <span class="tip">用户ID：</span>
    <el-input :placeholder="data._id" :disabled="true" class="ipt"></el-input>
    <br />
    <span class="tip">用户名：</span>
    <el-input placeholder="用户名" v-model="userName" class="ipt">{{data.userName}}</el-input>
    <br />
    <span class="tip">用户昵称：</span>
    <el-input placeholder="用户昵称" v-model="nickName" class="ipt">{{data.nickName}}</el-input>
    <br />
    <span class="tip">用户密码：</span>
    <el-input placeholder="加密后密码" v-model="password" class="ipt" @focus="shuru">{{data.password}}</el-input>
    <br />
    <span class="tip">用户地址：</span>
    <el-input :placeholder="addresses" :disabled="true" class="ipt"></el-input>
    <br />
    <div class="sty">
      <el-button type="success" class="btn" @click="save()">保存</el-button>
      <el-button type="danger" class="btn" @click="del()">删除</el-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import * as api from "../api/user.js";

export default {
  name: "MsgUser",
  data() {
    return {
      input: "",
      token: localStorage.getItem("token"),
      data: {},
      tableData: "",
      addresses: "",
      _id: "",
      userName: "",
      nickName: "",
      password: "",
      avatar: ""
    };
  },
  methods: {
    search() {
      axios
        .get(
          "http://api.cat-shop.penkuoer.com/api/v1/admin/users/" + this.input,
          {
            headers: { authorization: "Bearer " + this.token }
          }
        )
        .then(data => {
          if (data.data._id !== undefined) {
            this.data = data.data;
            this.userName = data.data.userName;
            this._id = data.data._id;
            this.nickName = data.data.nickName;
            this.password = data.data.password;
            this.avatar = data.data.avatar;
          } else {
            this.$message({
              type: "info",
              message: `系统消息: ${"用户ID格式不正确，请重新输入！"}`
            });
          }
        })
        .catch(data => {
          this.$message({
            type: "info",
            message: `系统消息: ${"用户ID格式不正确，请重新输入！"}`
          });
        });
      //获取用户收获地址

      this.$axios
        .get(
          "http://api.cat-shop.penkuoer.com/api/v1/admin/addresses/" +
            this.input,
          {
            headers: { authorization: "Bearer " + this.token }
          }
        )
        .then(data => {
          if (data.data.addresses.length == 0) {
            this.addresses = "暂无收货地址";
          } else {
            this.addresses = data.data.addresses;
          }
        });
    },
    save() {
      api
        .resetUserPassword(this.input, localStorage.getItem("token"), {
          password: this.password
        })
        .then(data => {
        });
      api
        .updataUser(this.input, localStorage.getItem("token"), {
          userName: this.userName,
          nickName: this.nickName,
          avatar: this.avatar
        })
        .then(data => {
          if (data.status == 200) {
            this.$message({
              type: "success",
              message: `系统消息: ${"用户数据修改成功"}`
            });
          }
        });
    },
    del() {
      api.deleteUser(this.input, localStorage.getItem("token")).then(data => {
        if (data.status == 200) {
          this.$message({
            type: "success",
            message: `系统消息: ${"该用户已删除"}`
          });
          this.addresses = "";
          this._id = "";
          this.userName = "";
          this.nickName = "";
          this.password = "";
        }
      });
    },
    shuru() {
      this.password = "";
    }
  }
};
</script>

<style scoped>
h2 {
  line-height: 10px;
  margin: 0;
}
.el-input {
  width: 20%;
  height: 50px;
  margin-top: 20px;
}
.sty {
  height: 50px;
}
div {
  position: relative;
}
.ipt {
  position: absolute;
  left: 0;
  right: 0;
  margin: 10px auto;
}
.tip {
  display: inline-block;
  height: 40px;
  margin: 10px 320px 10px 0;
  text-align: left;
  line-height: 40px;
}
button {
  line-height: 0px;
}
* {
  line-height: 40px;
}
.btn {
  margin-top: 30px;
  height: 40px;
}
</style>
