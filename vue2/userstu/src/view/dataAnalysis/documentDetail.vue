<template>
  <div>
    <el-row>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="14"
        ><div class="grid-content bg-purple-light">
          <el-card class="box-card">
            <div class="all">
              <div class="title">{{ detailData.title }}</div>
              <div class="flex">
                <div class="time">{{ detailData.date }}</div>
                <div class="number">
                  {{
                    detailData.type == 0
                      ? "word"
                      : detailData.type == 1
                      ? "excel"
                      : "ppt"
                  }}
                </div>
              </div>
              <div class="content">{{ detailData.content }}</div>
            </div>
          </el-card> 
        </div></el-col
      >
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script>
import { reqDetailData } from "../../api/mock";
export default {
  data() {
    return {
      detailData: [],
      loading: false,
    };
  },
  created() {
    console.log(this.$route.query.id);
    this.getDetails(this.$route.query.id);
  },
  mounted() {
    //this.detailData = this.$route.query.id
  },
  methods: {
    //对应文件详情
    getDetails(id) {
      reqDetailData(id).then((res) => {
        console.log(res);
        if (res.code === 200) {
          this.detailData = res.data.detaliList[id - 1];
          console.log(this.detailData);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.box-card {
  height: 100vh;
  width: 100vh;
  .all {
    display: block;
    height: 100%;
    width: 100%;
    .title {
      height: 50px;
      width: 100%;
      text-align: center;
      font-size: 25px;
    }
    .flex {
      display: flex;
      justify-content: space-between;
      .time {
        font-size: 10px;
        color: rgb(142, 130, 130);
      }
      .number {
        font-size: 10px;
        color: rgb(142, 130, 130);
      }
      margin-bottom: 30px;
    }
    .content {
      display: block;
      font-size: 15px;
      line-height: 30px;
    }
  }
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #ffffff;
}
.bg-purple {
  background: #ffffff;
}
.bg-purple-light {
  background: #ffffff;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #ffffff;
}
</style>