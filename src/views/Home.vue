<template>
  <div>
      <el-container>
        <el-header><h1>欢迎使用首家后台管理系统</h1><span class="el-icon-toilet-paper" @click="out">注销</span> <span class="name">{{nickName}}</span></el-header>
        <el-container>
          <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu>
              <el-submenu index="1">
                <template slot="title"><i class="el-icon-s-custom icon"></i>用户管理</template>
                <el-menu-item-group>
                  <el-menu-item index="1-1" @click="SearchUser()">用户查询</el-menu-item>
                  <el-menu-item index="1-2" @click="AddUser()">新增用户</el-menu-item>
                  <el-menu-item index="1-3" @click="MsgUser()">用户信息</el-menu-item>
                </el-menu-item-group>

              </el-submenu>
              <el-submenu index="2">
                <template slot="title"><i class="el-icon-s-goods icon"></i>商品管理</template>
                <el-menu-item-group>
                  <el-menu-item index="2-1" @click="SearchProduct()">商品查询</el-menu-item>
                  <el-menu-item index="2-2" @click="AddProduct()">新增商品</el-menu-item>
                  <el-menu-item index="2-3" @click="MsgProduct()">商品信息</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

              <el-submenu index="3">
                <template slot="title"><i class="el-icon-s-unfold icon"></i>商品分类管理</template>
                <el-menu-item-group>
                  <el-menu-item index="3-1" @click="SearchProductClassify()">查询商品分类</el-menu-item>
                  <el-menu-item index="3-2" @click="AddProductClassify()">新增商品分类</el-menu-item>
                  <el-menu-item index="3-3" @click="MsgProductClassify()">商品分类信息</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

              <el-submenu index="4">
                <template slot="title"><i class="el-icon-s-order icon"></i>订单管理</template>
                <el-menu-item-group>
                  <el-menu-item index="4-1" @click="SearchOrder()">查询订单</el-menu-item>
                  <el-menu-item index="4-2" @click="MsgOrder()">订单信息</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

            </el-menu>
          </el-aside>
          <el-container>
            <el-main>
              <router-view></router-view>
            </el-main>
          </el-container>
        </el-container>
      </el-container>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data(){
    return{
      nickName:''
    }
  },
  methods:{
    out(){
      localStorage.removeItem('token')
      this.$router.push('/')
    },
    SearchUser(){
      this.$router.push('/SearchUser')
    },
    AddUser(){
      this.$router.push('/AddUser')
    },
    MsgUser(){
      this.$router.push('/MsgUser')
    },
    SearchProduct(){
      this.$router.push('/SearchProduct')
    },
    AddProduct(){
      this.$router.push('/AddProduct')
    },
    MsgProduct(){
      this.$router.push('/MsgProduct')
    },
    SearchProductClassify(){
      this.$router.push('/SearchProductClassify')
    },
    AddProductClassify(){
      this.$router.push('/AddProductClassify')
    },
    MsgProductClassify(){
      this.$router.push('/MsgProductClassify')
    },
    MsgOrder(){
      this.$router.push('/MsgOrder')
    },
    SearchOrder(){
      this.$router.push('/SearchOrder')
    }
  },
  mounted(){
    if(localStorage.getItem('token')==null){
      this.$notify({
        title: '警告',
        message: '您暂未登录,5秒后为您返回登陆页面',
        type: 'warning'
      });

      var timer = setTimeout(()=>{
        this.$router.push('/')
      },5000)
      timer()
      clearInterval(timer)
    }else{
      this.$axios.get("http://api.cat-shop.penkuoer.com/api/v1/users/manager_info",{
        headers:{'authorization':'Bearer '+localStorage.getItem('token')}
      }).then((data)=>{
        this.nickName=data.data.nickName
      })
    }
  }
}


</script>

<style scoped>
  h1{
    margin: 0;
    line-height: 60px;
    display: inline;
  }
  .name{
    float: right;
    margin-right: 30px;
  }
  .el-icon-toilet-paper{
    float: right;
    color: #333333;
    line-height: 60px;
    cursor: pointer;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-menu-item{
    text-align: center;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: left;
    line-height: 200px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /* line-height: 160px; */
    min-height: 450px;
    padding-bottom: 80px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
</style>
