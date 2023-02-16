<template>
  <div class="workList">
    <el-table :data="tableData" v-loading="loading" border style="width: 100%">
      <el-table-column
        prop="id"
        label="用户ID"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="userId"
        label="所属班级"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="title"
        label="作业名称"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="completed_text"
        label="完成情况"
        align="center"
      ></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            type="danger"
            size="mini"
            icon="el-icon-edit"
            @click="getDetails(scope.row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[5, 10, 20, 50, 100]"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
// import { getTableData } from '../../utils/table'
import { getTableData } from "@/utils/table";
export default {
  name:'ScoreMap', 
  beforeRouteLeave(to, from, next) {
    if (to.name == "detail") {
      this.$store.dispatch("setKeepAliveInclude", ["ScoreMap"]);
    } else {
      this.$store.dispatch("setKeepAliveInclude", []);
    }
    // next();
    setTimeout(() => {
      next();
    }, 10); // next()需用定时器包裹，否则多次切换无法缓存
  },
  data() {
    return {
      tableData: [],
      total: 0,
      page: 1,
      size: 10,
      loading: true,
    };
  },
  created() {
    getTableData(this, "/works", { page: this.page, size: this.size }, [
      "completed",
    ]);
  },
  methods: {
    getDetails(id) {
      console.log(id);
      this.$router.push({
        path: "/detail",
        query: { id: id },
      });
    },
    handleSizeChange(val) {
      this.size = val;
      this.page = 1;
      getTableData(this, "/works", { page: this.page, size: val }, [
        "completed",
      ]);
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.page = val;
      getTableData(this, "/works", { page: this.page, size: this.size }, [
        "completed",
      ]);
    },
  },
};
</script>


<style lang="scss">
.workList {
  .el-pagination {
    text-align: left;
    margin-top: 20px;
  }

  .demo-form-inline,
  .el-form-item {
    text-align: left;
  }
}
</style>
