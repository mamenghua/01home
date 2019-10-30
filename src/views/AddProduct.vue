<template>
  <div>
    <h2>新增产品</h2>
    <div class="sty">
      <el-avatar icon="el-icon-user-solid"></el-avatar>
    </div>
    <div class="sty">
      <el-input v-model="name" placeholder="请输入商品名"></el-input>
      <span class="tip" ref="name">*商品名不可为空</span>
    </div>
    <div class="sty">
      <el-input v-model="descriptions" placeholder="请输入商品简介"></el-input>
      <span class="tip" ref="descriptions">  *商品简介不可为空</span>
    </div>
    <div class="sty">
      <el-input v-model="quantity" placeholder="请输入商品数量"></el-input>
      <span class="tip" ref="quantity">  *商品数量不可为空</span>
    </div>
    <div class="sty">
      <el-input v-model="price" placeholder="请输入商品价格"></el-input>
      <span class="tip" ref="price">  *商品价格不可为空</span>
    </div>
    <div class="sty">
      <el-input v-model="productCategory" placeholder="商品分类id"></el-input>
      <span class="tip" ref="productCategory">  *商品分类id不可为空</span>
    </div>
    <div class="sty">
      <el-button type="success" @click='commit'>新增</el-button>
    </div>
  </div>
</template>

<script>
import * as api from '../api/product'
export default{
  name:'AddProduct',
  data(){
    return{
      name:'',
      descriptions:'',
      quantity:'',
      price:'',
      productCategory:''

    }
  },
  methods:{
    commit(){
      if(this.name==''){
        this.$refs.name.style.display='inline'
        this.$refs.descriptions.style.display='none'
        this.$refs.quantity.style.display='none'
      }else if(this.descriptions==''){
        this.$refs.name.style.display='none'
        this.$refs.descriptions.style.display='inline'
        this.$refs.quantity.style.display='none'
      }else if(this.quantity==''){
        this.$refs.name.style.display='none'
        this.$refs.descriptions.style.display='none'
        this.$refs.quantity.style.display='inline'
      }else{
        console.log(this.name);
        // api.addProducts(localStorage.getItem('token'),{
        //     name:this.name,
        //     descriptions:this.descriptions,
        //     quantity:this.quantity,
        //     price:this.price,
        //     coverImg:"",
        //     productCategory:this.productCategory
        // }).then((data)=>{
        //   console.log(data);
        // })
        

      }
    }
  }
}
</script>

<style scoped>
  h2{
    line-height: 20px;
    margin: 0;

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
