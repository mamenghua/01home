<template>
  <div>
    <h1>欢迎登录首家后台管理系统</h1>
    <p>请登录</p>
    <button @click="tap()">登录</button>
  </div>
</template>

<script>
export default {
  name: 'Index',
  methods:{
    tap(){
      this.$router.push('/Home')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
