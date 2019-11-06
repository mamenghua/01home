<template>
  <div>
      <template>
        <el-table
          :data="tableData"
          :cell-style="cellStyle" :header-cell-style="rowClass"
          stripe
          style="width: 100%">
          <el-table-column
            prop="_id"
            label="用户"
            width="300">
          </el-table-column>
          <el-table-column
            prop="no"
            label="订单号">
          </el-table-column>
          <el-table-column
            prop="isPayed"
            label="订单状态"
            width="180">
          </el-table-column>
          <el-table-column
            prop="price"
            label="价格"
            width="180">
          </el-table-column>
          <el-table-column
            prop="createdAt"
            label="创建时间">
          </el-table-column>

          <!-- <el-table-column
            label="操作"
            >
            <template slot-scope="scope">
              <el-button type="danger" icon="el-icon-delete" circle @click="handleDelete(scope.row._id)"></el-button>
            </template>
          </el-table-column> -->
        </el-table>
      </template>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="totalCount"
        @next-click="next"
        @prev-click="prev"
        @current-change="currentChange"
        >
      </el-pagination>
  </div>
</template>

<script>
import * as api from '../api/order.js'
export default{
  name:'MsgOrder',
  data(){
    return{
      token:localStorage.getItem('token'),
      id:'',
      tableData:[],
      state:'',
      totalCount:0,
      page:10,
      currentPage:1
    }
  },
  mounted(){
    this.$axios.get("http://api.cat-shop.penkuoer.com/api/v1/admin/orders?",{
      headers:{'authorization':'Bearer '+this.token}
    }).then((data)=>{
      this.totalCount = data.data.totalCount
      this.tableData = data.data.orders
      for(let item in data.data.orders){
        if(data.data.orders[item].isPayed==false){
           this.tableData[item].isPayed="未支付"
        }else{
          this.tableData[item].isPayed="已支付"
        }
      }
    })
  },
  methods:{
    cellStyle({ row, column, rowIndex, columnIndex }){
      return 'text-align:center';
    },
    rowClass({ row, rowIndex }){
      return 'text-align:center;line-height:50px';
    },
    next(){
      this.currentPage++
      api.getOrder(localStorage.getItem('token'),{per:this.per,page:this.currentPage}).then((data)=>{
        this.totalCount = data.data.totalCount
        this.tableData = data.data.orders
        for(let item in data.data.orders){
          if(data.data.orders[item].isPayed==false){
             this.tableData[item].isPayed="未支付"
          }else{
            this.tableData[item].isPayed="已支付"
          }
        }
      })
    },
    prev(){
      this.currentPage--
      api.getOrder(localStorage.getItem('token'),{per:this.per,page:this.currentPage}).then((data)=>{
        this.totalCount = data.data.totalCount
        this.tableData = data.data.orders
        for(let item in data.data.orders){
          if(data.data.orders[item].isPayed==false){
             this.tableData[item].isPayed="未支付"
          }else{
            this.tableData[item].isPayed="已支付"
          }
        }
      })
    },
    currentChange(cpage){
      api.getOrder(localStorage.getItem('token'),{per:this.per,page:cpage}).then((data)=>{
        this.totalCount = data.data.totalCount
        this.tableData = data.data.orders
        for(let item in data.data.orders){
          if(data.data.orders[item].isPayed==false){
             this.tableData[item].isPayed="未支付"
          }else{
            this.tableData[item].isPayed="已支付"
          }
        }
      })
    }
  }
}
</script>


<style scoped>


</style>
