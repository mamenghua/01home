<template>
  <el-table :data="tableData" :cell-style="cellStyle" :header-cell-style="rowClass" stripe style="width: 100%" >
     
    <el-table-column prop="_id" label="商品id"></el-table-column>
    <el-table-column prop="name" label="产品名"></el-table-column>
    <el-table-column prop="descriptions" label="描述"></el-table-column>
    <el-table-column prop="price" label="价格"></el-table-column>
    <el-table-column prop="quantity" label="库存"></el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button type="danger" icon="el-icon-delete" circle @click="handleDelete(scope.row._id)"></el-button>
      </template>
    </el-table-column>
     
  </el-table>
</template>

<script>
import * as api from "../api/product";
import axios from "axios";
import qs from "qs";
export default {
  name: "SearchProduct",
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    cellStyle({ row, column, rowIndex, columnIndex }){
      return 'text-align:center';
    },
    rowClass({ row, rowIndex }){
      return 'text-align:center;line-height:50px';
    },
    handleDelete(index) {
      console.log(index);
    }

  },
  mounted() {
    api.getProducts(localStorage.getItem("token"), {
        per: 10,page: 1,name: ""
      })
      .then(data => {
        console.log(data.data.products);
        this.tableData = data.data.products ;
      });
  }
};
</script>

<style scoped>


</style>
