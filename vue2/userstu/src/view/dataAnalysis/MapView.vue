<template>
  <div>
    <div class="data-view">
      <el-card>
        <div id="main1" ref="main1"></div>
      </el-card>
      <el-card>
        <div id="main2" ref="main2"></div>
      </el-card>
    </div>
  </div>
</template>
<script>
import { students } from "../../api/api";
export default {
  data() {
    return {
      resData: [],
      tableData: [],
    };
  },
//   computed: {
//     computeData() {
//       return this.tableData.slice(0, 10);
//     },
//   },
  created() {
    this.getData();
  },
  mounted() {},
  methods: {
    draw(series) {
      let studentChart = this.$echarts.init(this.$refs.main1);
      let option = {
        title: {
          text: "Referer of a Website",
          subtext: "Fake Data",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: series,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      studentChart.setOption(option)
    },
    getData(params) {
      students(params).then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          //   this.tableData = res.data.data;
          //   //this.total = res.data.total;
          //   this.tableData.forEach((item) => {
          //     item.sex === 1 ? (item.sex_text = "男") : (item.sex_text = "女");
          //     item.state === "1"
          //       ? (item.state_text = "已入学")
          //       : item.state === "2"
          //       ? (item.state_text = "未入学")
          //       : (item.state_text = "休学中");
          //   });
          this.tableData = res.data.data;
          let arr = [];
          let girl = 0;
          let boy = 0;
          this.tableData.forEach((item) => {
            if (item.sex == 2) {
              girl++;
              let obj = {
                value:girl,
                name:'女'
              }
              arr.push(obj)
            } else {
              boy++;
              let obj = {
                value:boy,
                name:'男'
              }
              arr.push(obj)
            }
          });
           console.log(arr);
           this.draw(arr.slice(0,10));
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.data-view {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .el-card {
    width: 50%;
    #main1,
    #main2 {
      height: 800px;
    }
    // background-color: red;
  }
}
</style>