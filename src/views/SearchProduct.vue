<template>
<<<<<<< HEAD
  <div>
    <el-table
      :data="tableData"
      :cell-style="cellStyle"
      :header-cell-style="rowClass"
      stripe
      style="width: 100%"
    >
      <el-table-column prop="_id" label="商品id"></el-table-column>
      <el-table-column prop="coverImg" label="商品图">
        <!-- 图片的显示 -->
       <template   slot-scope="scope">
          <img :src="scope.row.coverImg"  min-width="70" height="70" />
       </template>
      </el-table-column>
      <el-table-column prop="name" label="产品名"></el-table-column>
      <el-table-column prop="descriptions" label="描述"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column prop="quantity" label="库存"></el-table-column>
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
=======
  <el-table
    :data="tableData"
    :cell-style="cellStyle"
    :header-cell-style="rowClass"
    stripe
    style="width: 100%"
  >
    <el-table-column prop="_id" label="商品id"></el-table-column>
    <el-table-column prop="coverImg" label="商品图">
      <!-- 图片的显示 -->
       <template   slot-scope="scope">
          <img :src="scope.row.coverImg"  min-width="70" height="70" />
       </template>
    </el-table-column>
    <el-table-column prop="name" label="产品名"></el-table-column>
    <el-table-column prop="descriptions" label="描述"></el-table-column>
    <el-table-column prop="price" label="价格"></el-table-column>
    <el-table-column prop="quantity" label="库存"></el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button type="danger" icon="el-icon-delete" circle @click="open(scope.row._id)"></el-button>
      </template>
    </el-table-column>
  </el-table>
>>>>>>> yzh
</template>

<script>
import * as api from "../api/product";
import axios from "axios";
import qs from "qs";
export default {
  name: "SearchProduct",
  data() {
    return {
<<<<<<< HEAD
      tableData: [],
      totalCount: 0,
      page: 10,
      currentPage: 1
=======
      tableData: []
>>>>>>> yzh
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
      console.log(index);

      this.$confirm("此操作将永久删除该商品, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // 确认删除，执行删除

<<<<<<< HEAD
          axios({
            url:
              "http://api.cat-shop.penkuoer.com/api/v1/admin/products/" + index,
            method: "delete",
            headers: {
              authorization: "Bearer " + localStorage.getItem("token")
            }
          }).then(data => {
            console.log(data.data);
            if (data.data) {
=======


        axios({
            url:'http://api.cat-shop.penkuoer.com/api/v1/admin/products/'+index,
            method:'delete',
            headers:{
                "authorization":"Bearer "+localStorage.getItem("token")
            }
          }).then((data)=>{
            console.log(data.data);
            if(data.data){
>>>>>>> yzh
              this.$message({
                type: "success",
                message: "删除成功!"
              });
<<<<<<< HEAD
              api
                .getProducts(localStorage.getItem("token"), {
                  per: 10,
                  page: 1,
                  name: ""
                })
                .then(data => {
                  console.log(data.data.products);
                  this.tableData = data.data.products;
                  this.totalCount = data.data.totalCount;
                });
            } else {
=======
              api.getProducts(localStorage.getItem("token"), {
                per: 10,
                page: 1,
                name: ""
              })
              .then(data => {
                this.tableData = data.data.products;
              });
            }else{
>>>>>>> yzh
              this.$message({
                type: "success",
                message: "删除失败!"
              });
            }
<<<<<<< HEAD
          });
=======

          })


>>>>>>> yzh
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
<<<<<<< HEAD
    },
    next() {
      this.currentPage++;
      api
        .getProducts(localStorage.getItem("token"), {
          per: this.per,
          page: this.currentPage,

          name: ""
        })
        .then(data => {
          console.log(data.data.products);
          this.tableData = data.data.products;
          this.totalCount = data.data.totalCount;
        });
    },
    prev() {
      this.currentPage--;
      api.getProducts(localStorage.getItem("token"), {
          per: this.per,
          page: this.currentPage,

          name: ""
        })
        .then(data => {
          console.log(data.data.products);
          this.tableData = data.data.products;
          this.totalCount = data.data.totalCount;
        });
    },
    currentChange(cpage) {
      console.log(cpage);
      api
        .getProducts(localStorage.getItem("token"), {
          per: this.per,
          page: cpage,
          name: ""
        })
        .then(data => {
          this.tableData = data.data.products;
          this.totalCount = data.data.totalCount;
        });
=======




>>>>>>> yzh
    }
  },
  mounted() {
    api.getProducts(localStorage.getItem("token"), {
        per: 10,
        page: 1,
        name: ""
<<<<<<< HEAD
      }).then(data => {
        console.log(data.data.products);
        this.tableData = data.data.products;
        this.totalCount = data.data.totalCount;
=======
      })
      .then(data => {
        console.log(data.data.products);
        this.tableData = data.data.products;
        console.log(this.tableData)
>>>>>>> yzh
      });
  }
};
</script>

<style scoped>
</style>
