<template>
  <div class="container">
    <div class="loginBox">
      <h2>欢迎登录首家后台管理系统</h2>
      <div class="inputBox">
    		<i class="el-icon-user-solid"></i>
    		<input type="text" class="inputArea" v-model="username" placeholder="username" autocomplete="off">
    	</div>
      <div class="inputBox">
    		<i class="el-icon-unlock"></i>
    		<input type="password" class="inputArea" v-model="password" placeholder="password" autocomplete="off" ref="password">
    		<i class="el-icon-view" @click="lookPwd()"></i>
    	</div>

      <button class="loginBtn" @click="tap()">登录</button>
    </div>
  </div>
</template>

<script>
import * as api from "../api/login.js";
import qs from "qs";

export default {
  name: "Index",
  data() {
    return {
      username: "",
      password: "",
      timeout:null
    };
  },

  methods: {
    tap() {
      // console.log(this.timeout);
      if(this.timeout){
        // console.log("this.timeout不为空"+this.timeout)
        clearTimeout(this.timeout);
        this.timeout = null
      }else{
        // console.log("this.timeout为空"+this.timeout)
        this.timeout = setTimeout(()=>{



          api.login(
          qs.stringify({ userName: this.username, password: this.password })
        )
        .then(data => {
          if (data.data.code == "success") {
            console.log(data.data.code);
            localStorage.setItem("token", data.data.token);
            this.$router.push("/Home");
          } else {
            this.$message({
              type: 'danger',
              message: `系统消息: ${ '账号或密码错误' }`
            });
          }
        }).catch(data =>{
          this.$message({
            type: 'danger',
            message: `系统消息: ${ '账号或密码错误' }`
          });
        });
          clearTimeout(this.timeout);
          this.timeout = null;

        },500);
      }


    },
    lookPwd(){
      if(this.$refs.password.type == "password"){
        this.$refs.password.type = "text";
      }else{
        this.$refs.password.type = "password";
      }
    },

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  height: 100%;
  background: url(../assets/bg.jpg) no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
}

.loginBox {
  width: 400px;
  padding: 50px;
  margin: 100px auto;
  border-radius: 30px;
  background: rgba(242, 242, 242, 0.5);
}

.loginBox h2{
  text-align: center;
}
.loginBox .loginBtn{
  width: 100%;
  line-height: 50px;
  border-radius: 24px;
  background: rgba(2, 2, 34, 0.3);
  border: 0;
  font-size: 16px;
  color: #fff;
  outline: none;
}
.loginBtn{
  cursor: pointer;
}
.inputBox {
    background: rgba(255,255,255,0.6);
    margin: 20px auto;
    padding: 10px;
    border-radius: 24px;
    font-size: 24px;
}
.inputArea {
    width: 280px;
    border: 0;
    outline: none;
    background: none;
    font-size: 16px;
    line-height: 26px;
    vertical-align: middle;
}
</style>
