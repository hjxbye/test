<template>
  <div class="document">
    <el-form
      :inline="true"
      :model="formInline"
      size="small"
      class="demo-form-inline"
    >
      <el-form-item label="姓名">
        <el-input
          v-model="formInline.documentName"
          placeholder="请输入姓名查询"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-select
          v-model="formInline.value"
          filterable
          placeholder="请选择文件类型"
        >
          <el-option
            v-for="item in documentType"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            @click.native="getTableDataByType(item.value)"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="find">查询</el-button>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" v-loading="loading" border style="width: 100%">
      <el-table-column
        prop="label"
        label="文件名"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="value"
        label="文件类型"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="size"
        label="文件大小"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="date"
        label="创建时间"
        align="center"
      ></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            type="danger"
            size="mini"
            icon="el-icon-edit"
            @click="getDetails(scope.row.id)"
            >查看详情</el-button
          >
        </template>
      </el-table-column>
    </el-table>

        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page"
            :page-sizes="[5, 10, 20, 50, 100]" :page-size="size" layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination> 
  </div>
</template>
 <script>
import { showDocument } from "../../api/api";
import { reqTypeData, reqTableData,reqDetailData } from "../../api/mock";
export default {
  data() {
    return {
      tableData: [],
      loading: false,
      total: 0,
      page: 1,
      size: 10,
      documentType: [
        // {
        //   value: "1",
        //   label: ".wps",
        // },
        // {
        //   value: "2",
        //   label: ".excel",
        // },
        // {
        //   value: "3",
        //   label: ".ppt",
        // },
        // {
        //   value: "4",
        //   label: ".jpg",
        // },
        // {
        //   value: "5",
        //   label: ".html",
        // },
      ],
      formInline: {
        value: "",
        documentName: "",
      },
    };
  },
  computed: {
    // compData() {
    //   return this.tableData.filter()
    // },
  },
  created() {
    reqTypeData().then((res) => {
      // console.log(res);
      if (res.code === 200) {
        this.documentType = res.data.typeList;
      }
    });
    this.getData(-1);
  },
  methods: {
    getData(params) {
      // console.log(params);
      //console.log('11111'+$route.matched);
      reqTableData().then((res) => {
        console.log(res);
        if (res.code === 200) {
          this.tableData = res.data.tableList;
          console.log(this.tableData);

          if (typeof params != "string") {
            console.log("类别");
            if (params != -1) {
              this.tableData = this.tableData.filter((item) => {
                return params == item.value;
              });
            }
          } else {
            console.log("查找");
            this.tableData = this.tableData.filter((item) => {
              return item.label.indexOf(params) != -1;
            });
          }
          this.tableData.forEach((item) => {
            item.value == 0
              ? (item.value = "word")
              : item.value == 1
              ? (item.value = "excel")
              : (item.value = "ppt");
          });
        }
      });
    },
    //文件搜索查询
    find() {
      console.log(11111 + this.formInline.documentName);
      if (this.formInline.documentName == "") {
        this.$message({
          message: "查找内容为空，请输入要查找的文件名",
          type: "success",
        });
      } else {
        this.getData(this.formInline.documentName);
      }
    },
    //文件重置恢复
    reset(){
       this.formInline.documentName = ''
       this.getData(-1)
    },
    //文件类别查询
    getTableDataByType(value) {
      console.log("type" + value);
      this.getData(Number(this.formInline.value));
    },
    //对应文件详情
    getDetails(id){
      //console.log('*****'+JSON.stringify(id));
      this.$router.push({
          path: "/documentDetail",
          query:{ id: id }
      }
      )
    },
    handleSizeChange(val) {
            this.size = val
            this.page = 1
            getData()
            // console.log(`每页 ${val} 条`);
        },
    handleCurrentChange(val) {
            // console.log(`当前页: ${val}`);
            this.page = val
            getData()
        },
  },
};
</script>
 <style lang="scss">
.document {
  .el-pagination {
    text-align: left;
    margin-top: 20px;
  }

  .demo-form-inline,
  .el-form-item {
    text-align: left;
  }
  // .el-dropdown{
  //   margin-top: 8px;
  // }
}
</style>