<template>
  <div>
    <h2>新增商品分类</h2>
    <div class="sty">
      <el-avatar icon="el-icon-user-solid"></el-avatar>
    </div>
    <div class="sty">
      <el-input v-model="name" placeholder="请输入商品分类名"></el-input>
      <span class="tip" ref="name">*商品分类名不可为空</span>
    </div>
    <div class="sty">
      <el-input v-model="descriptions" placeholder="请输入商品分类简介"></el-input>
      <span class="tip" ref="descriptions">  *商品分类简介不可为空</span>
    </div>
    <div class="sty">
      <el-button type="success" @click='commit'>新增</el-button>
    </div>
  </div>
</template>

<script>
import * as api from '../api/productClassify'
import qs from "qs";

export default{
  name:'AddProductClassify',
  data(){
    return{
      name:'',
      descriptions:''
    }
  },
  methods:{




    commit(){
      if(this.name==''){
        this.$refs.name.style.display='inline'
        this.$refs.descriptions.style.display='none'
      }else if(this.descriptions==''){
        this.$refs.name.style.display='none'
        this.$refs.descriptions.style.display='inline'
      }else{
        api.addProductsClassify(localStorage.getItem('token'),{
            name:this.name,
            descriptions:this.descriptions,
            coverImg:"",
        }).then((data)=>{
          if(data.data){
            this.$message({
              type: 'success',
              message: "添加商品分类成功！"

            })
          }else{
            this.$message({
              type: 'info',
              message: "添加商品分类失败！"
            })
          }
        }).catch((data)=>{
          this.$message({
            type: 'info',
            message: "添加商品分类失败！"
          })
        })


      }
    }
  }
}
</script>

<style scoped>
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
