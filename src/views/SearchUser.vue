<template>
  <div>
    <h2>用户查询</h2>
      <el-table
        :data="tableData"
        :cell-style="cellStyle" :header-cell-style="rowClass"
        stripe
        style="width: 100%">
        <el-table-column
          prop="_id"
          label="用户ID"
          width="320">
        </el-table-column>
        <el-table-column
          prop="userName"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="nickName"
          label="昵称">
        </el-table-column>
        <el-table-column
          prop="createdAt"
          label="创建时间">
        </el-table-column>
        <el-table-column
          label="操作"
          >
          <template slot-scope="scope">
            <el-button type="danger" icon="el-icon-delete" circle @click="handleDelete(scope.row._id)"></el-button>
          </template>
        </el-table-column>
      </el-table>
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
import * as api from '../api/user.js'
export default{
  name:'SearchUser',
  data(){
    return{
      input1:'',
      token:localStorage.getItem('token'),
      id:'',
      tableData:[],
      per:10,
      totalCount:0,
      currentPage:1
    }
  },
  mounted(){
    api.getUser(localStorage.getItem('token'),{per:this.per,page:this.currentPage}).then((data)=>{
      this.tableData=data.data.users
      this.totalCount = data.data.totalCount
    })
  },
  methods: {
    cellStyle({ row, column, rowIndex, columnIndex }){
      return 'text-align:center';
    },
    rowClass({ row, rowIndex }){
      return 'text-align:center;line-height:50px';
    },
    handleDelete(index) {
      this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
      .then(()=>{
        this.$axios.delete("http://api.cat-shop.penkuoer.com/api/v1/admin/users/"+index,{
          headers:{'authorization':'Bearer '+this.token}
        }).then((data)=>{
          //提示消息
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          //再次获取 刷新路由
          this.$axios.get("http://api.cat-shop.penkuoer.com/api/v1/admin/users?",{
            headers:{'authorization':'Bearer '+this.token}
          }).then((data)=>{
            this.tableData=data.data.users
          })
        })
      })
      .catch(()=>{
         this.$message({
          type: 'info',
          message: '已取消删除'
        });
      })


    },
    next(){
      this.currentPage++
      api.getUser(localStorage.getItem('token'),{per:this.per,page:this.currentPage}).then((data)=>{
        this.tableData=data.data.users
        this.totalCount = data.data.totalCount
      })
    },
    prev(){
      this.currentPage--
      api.getUser(localStorage.getItem('token'),{per:this.per,page:this.currentPage}).then((data)=>{
        this.tableData=data.data.users
        this.totalCount = data.data.totalCount
      })
    },
    currentChange(cpage){
      api.getUser(localStorage.getItem('token'),{per:this.per,page:cpage}).then((data)=>{
        this.tableData=data.data.users
        this.totalCount = data.data.totalCount
      })
    }
  }

}
</script>

<style scoped>
  h2 {
    line-height: 40px;
    margin: 0;
  }
  .el-input{
    height: 50px;
    line-height: 50px;
    width: 20%;
  }
  .el-input__inner{
    width: 20%;
  }
  table .el-table td,table .el-table th{
    text-align: center;
  }
  .el-row{
    height: 50px;
    position: relative;
    line-height: 10px;
  }
</style>
