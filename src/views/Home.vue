<template>
  <div>
      <el-container>
        <el-header>欢迎使用首家后台管理系统<span class="el-icon-toilet-paper" @click="out">注销</span></el-header>
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
                  <el-menu-item index="3-1">查询商品分类</el-menu-item>
                  <el-menu-item index="3-2">新增商品分类</el-menu-item>
                  <el-menu-item index="3-3">商品信息</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

              <el-submenu index="4">
                <template slot="title"><i class="el-icon-s-order icon"></i>订单管理</template>
                <el-menu-item-group>
                  <el-menu-item index="4-1">查询订单</el-menu-item>
                  <el-menu-item index="4-2">订单信息</el-menu-item>
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
  methods:{
    out(){
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
    }
  }
}


</script>

<style scoped>
  span{
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
    line-height: 160px;
    min-height: 450px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }


</style>
