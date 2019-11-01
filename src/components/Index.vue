<template>
  <div>
    <h1>欢迎登录首家后台管理系统</h1>
    <p>请登录</p>
<<<<<<< HEAD
	<input type="text" v-model="username">
	<input type="text" v-model="password">
=======
<<<<<<< HEAD
=======
	<input type="text" v-model="username">
	<input type="text" v-model="password">
>>>>>>> 20f568ab2ae754579ec93c549dc2399fb1b26af7
>>>>>>> yzh
    <button @click="tap()">登录</button>
  </div>
</template>

<script>
<<<<<<< HEAD
import * as api from '../api/login.js'
import qs from 'qs'
=======
<<<<<<< HEAD
>>>>>>> yzh
export default {
  name: 'Index',
  data(){
    return{
      username:'',
      password:''
    }
  },
  methods:{
    tap(){
<<<<<<< HEAD
      api.login(qs.stringify({userName:this.username,password:this.password})).then((data)=>{
        if(data.data.code=='success'){
          localStorage.setItem("token",data.data.token);
          // console.log(data,data)
          this.$router.push('/Home')
        }
      })
=======
      this.$router.push('/Home')
=======
import * as api from '../api/login.js'
import qs from 'qs'
export default {
  name: 'Index',
  data(){
    return{
      username:'',
      password:''
    }
  },
  methods:{
    tap(){
      api.login(qs.stringify({userName:this.username,password:this.password})).then((data)=>{
        if(data.data.code=='success'){
          console.log(data.data.code)
          localStorage.setItem("token",data.data.token)
          this.$router.push('/Home')
        }else{
          alert('账号或密码错误！')
        }
      })
>>>>>>> 20f568ab2ae754579ec93c549dc2399fb1b26af7
>>>>>>> yzh
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
