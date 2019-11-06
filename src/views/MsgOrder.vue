<template>
  <div>
    <h2>订单信息</h2>
     <el-input placeholder="请输入订单ID" v-model="input"> </el-input>
     <el-button type="primary" icon="el-icon-search" @click="getMsg">搜索</el-button>
      <el-divider></el-divider>
      <ul>
        <li>订单号</li>
        <li>创建时间</li>
        <li>收货人</li>
        <li>地址</li>
        <li>价格</li>
        <li>状态</li>
        <li>操作</li>
      </ul>
      <ul>
        <li>{{no}}</li>
        <li>{{createdAt}}</li>
        <li>{{receiver}}</li>
        <li>{{regions}}{{address}}</li>
        <li>{{price}}</li>
        <li>{{ispayed}}</li>
        <li><span class="change" @click="changeSta">{{chgTxt}}</span>{{xiegang}}<span class="delOrder" @click="del">{{delTxt}}</span></li>
      </ul>
  </div>
</template>

<script>
  import * as api from '../api/order.js'
export default{
  name:'SearchOrder',
  data(){
    return{
      input:'',
      token:localStorage.getItem('token'),
      no:'',
      regions:'',
      _id:'',
      price:'',
      createdAt:'',
      ispayed:'',
      receiver:'',
      address:'',
      delTxt:'',
      chgTxt:'',
      xiegang:''
    }
  },
  methods:{
    getMsg(){
      let btn = document.querySelectorAll(".btn")[0];
      if(this.input!=""){
        this.$axios.get("http://api.cat-shop.penkuoer.com/api/v1/admin/orders/"+this.input,{
          headers:{'authorization':'Bearer '+this.token}
        }).then((data)=>{
          this.no = data.data.no
          this._id = data.data._id
          this.address = data.data.address
          this.regions = data.data.regions
          this.price = data.data.price
          this.receiver = data.data.receiver
          this.createdAt = data.data.createdAt
          this.delTxt="删除此订单"
          this.chgTxt="更改状态"
          this.xiegang="/"
          if(data.data.isPayed==false){
            this.ispayed='未支付'
          }else{
            this.ispayed='已支付'
          }
        }).catch((data)=>{
          this.$notify.error({
            title: '错误',
            message: '订单ID输入错误'
          });
        })
      }
    },
    del(){
      this.$axios.delete("http://api.cat-shop.penkuoer.com/api/v1/admin/orders/"+this.input,{
        headers:{'authorization':'Bearer '+this.token}
      }).then((data)=>{
        if(data.status==200){
          this.input=''
          this.no=''
          this.regions=''
          this._id=''
          this.createdAt=''
          this.ispayed=''
          this.receiver=''
          this.delTxt=''
          this.$message({
            type: 'success',
            message: `系统消息: ${ '订单删除成功' }`
          });
        }
      })
    },
    changeSta(){
      if(this.ispayed=='未支付'){
        api.changeOrder(this._id,localStorage.getItem('token'),{isPayed:true}).then((data)=>{
          this.$message({
            type: 'success',
            message: `系统消息: ${ '此订单已支付' }`
          });
        })
        this.ispayed='已支付'
      }else{
        api.changeOrder(this._id,localStorage.getItem('token'),{isPayed:false}).then((data)=>{
          this.$message({
            type: 'warning',
            message: `系统消息: ${ '此订单未支付' }`
          });
        })
        this.ispayed='未支付'
      }

    }
  }

}
</script>


<style scoped>
  h2{
    line-height: 10px;
    margin: 0;
  }
  .el-input{
    width: 20%;
    height: 50px;
    margin-top: 20px;
  }
  button{
    line-height: 0px;
  }
  *{
    line-height: 10px;
  }
  ul{
    width: 100%;
    height: 40px;
    line-height: 20px;
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;
  }
  li{
    float: left;
    list-style: none;
    text-align: center;
    line-height: 30px;
    width: 15%;
  }
  li:nth-child(2){
    width: 250px;
  }
  .transition-box {
    width: 80%;
    height: 100px;
    border-radius: 4px;
    background-color: #F2F6FC;
    color: black;
    padding: 40px 20px;
    box-sizing: border-box;
    margin: 0 auto;
  }
  .delOrder{
    color: #FF0000;
    cursor: pointer;
  }
  .change{
    color: #e6a23c;
    cursor: pointer;
  }
</style>
