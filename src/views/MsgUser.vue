<template>
  <div>
    <h2>用户信息</h2>
    <div>
        <el-input placeholder="请输入用户id" v-model="input">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
    </div>
  </div>
</template>

<script>
export default{
  name:'MsgUser',
  data(){
    return{
      input:''
    }
  }
}
</script>

<style scoped>
</style>
