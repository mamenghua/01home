<template>
  <div>
    <el-table
      :data="tableData"
      :cell-style="cellStyle"
      :header-cell-style="rowClass"
      stripe
      style="width: 100%"
    >
      <el-table-column prop="_id" label="商品分类id"></el-table-column>
      <el-table-column prop="name" label="产品分类名"></el-table-column>
      <el-table-column prop="descriptions" label="描述"></el-table-column>
      <el-table-column prop="createdAt" label="上架时间"></el-table-column>
      <el-table-column prop="updatedAt" label="最新更新时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="danger" icon="el-icon-delete" circle @click="open(scope.row._id)"></el-button>
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
    ></el-pagination>
  </div>
</template>

<script>
import * as api from "../api/productClassify";
import axios from "axios";
import qs from "qs";
export default {
  name: "SearchProductClassify",
  data() {
    return {
      tableData: [],
      totalCount:0,
      page:10,
      currentPage:1
    };
  },
  methods: {
    cellStyle({ row, column, rowIndex, columnIndex }) {
      return "text-align:center";
    },
    rowClass({ row, rowIndex }) {
      return "text-align:center;line-height:50px";
    },

    // 点击删除按钮，弹出提示信息
    open(index) {
      this.$confirm("此操作将永久删除该商品分类, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // 确认删除，执行删除
          axios({
            url:
              "http://api.cat-shop.penkuoer.com/api/v1/admin/product_categories/" +
              index,
            method: "delete",
            headers: {
              authorization: "Bearer " + localStorage.getItem("token")
            }
          }).then(data => {
            if (data.data) {
              this.$message({
                type: "success",
                message: "删除商品分类成功！"
              });
              api
                .getProductsClassify(localStorage.getItem("token"), {
                  per: 10,
                  page: 1,
                  name: ""
                })
                .then(data => {
                  this.tableData = data.data.categories;
                  this.totalCount = data.data.totalCount;
                });
            } else {
              this.$message({
                type: "success",
                message: "删除商品分类失败"
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    next(){
      this.currentPage++
      api.getProductsClassify(localStorage.getItem('token'),{per:this.per,page:this.currentPage,name: ""}).then((data)=>{
        this.totalCount = data.data.totalCount
        this.tableData = data.data.categories

      })
    },
    prev(){
      this.currentPage--
      api.getProductsClassify(localStorage.getItem('token'),{per:this.per,page:this.currentPage,name: ""}).then((data)=>{
        this.totalCount = data.data.totalCount
        this.tableData = data.data.categories

      })
    },
    currentChange(cpage){
      api.getProductsClassify(localStorage.getItem('token'),{per:this.per,page:cpage,name: ""}).then((data)=>{
        this.totalCount = data.data.totalCount
        this.tableData = data.data.categories

      })
    }
  },
  mounted() {
    api
      .getProductsClassify(localStorage.getItem("token"), {
        per: 10,
        page: 1,
        name: ""
      })
      .then(data => {
        this.tableData = data.data.categories;
        this.totalCount = data.data.totalCount;
      });
  }
};
</script>

<style scoped>
</style>
