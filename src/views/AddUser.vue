<template>
  <div>
    <h2>新增用户</h2>
    <div class="sty">
      <el-avatar icon="el-icon-user-solid"></el-avatar>
    </div>
    <div class="sty">
      <el-input v-model="userName" placeholder="请输入用户名"></el-input>
      <span class="tip" ref="username">*用户名不可为空</span>
    </div>
    <div class="sty">
      <el-input v-model="password" placeholder="请输入密码" show-password></el-input>
      <span class="tip"  ref="password"> *密码不可为空</span>
    </div>
    <div class="sty">
      <el-input v-model="nickName" placeholder="请输入昵称"></el-input>
      <span class="tip" ref="nickname">  *昵称不可为空</span>
    </div>
    <div class="sty">
      <el-button type="success" @click='commit'>提交</el-button>
    </div>
  </div>
</template>

<script>
import * as api from '../api/user.js'
export default{
  name:'AddUser',
  data(){
    return{
      userName:'',
      password:'',
      nickName:'',

    }
  },
  methods:{
    commit(){
      if(this.userName==''){
        this.$refs.username.style.display='inline'
        this.$refs.password.style.display='none'
        this.$refs.nickname.style.display='none'
      }else if(this.password==''){
        this.$refs.username.style.display='none'
        this.$refs.password.style.display='inline'
        this.$refs.nickname.style.display='none'
      }else if(this.nickName==''){
        this.$refs.username.style.display='none'
        this.$refs.password.style.display='none'
        this.$refs.nickname.style.display='inline'
      }else{
        api.addUser(localStorage.getItem('token'),{userName:this.userName,password:this.password,nickName:this.nickName,avatar:''}).then((data)=>{
          if(data.status==200){
            if(data.data.code=='error'){
              this.$alert(data.data.message, '系统消息', {
                confirmButtonText: '确定'
              })
            }else{
              this.$alert('添加用户成功', '系统消息', {
              callback: action => {
                this.$message({
                  type: 'info',
                  message: `系统消息: ${ '添加成功' }`
                });
              }
            });
            }

          }
        })
      }
    }
  }
}
</script>

<style scoped>
  h2{
    line-height: 30px;
  }
  .el-input{
    height: 50px;
    line-height: 50px;
    width: 20%;
  }
  .el-row{
    height: 50px;
  }
  .tip{
    color: red;
    position: absolute;
    display: none;
  }
  .sty{
    height: 50px;
  }
</style>
