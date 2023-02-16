<template>
    <div>
        作业详情
    <el-table :data="detailData" v-loading="loading" border style="width: 100%">
            <el-table-column prop="id" label="用户ID" align="center"></el-table-column>
            <el-table-column prop="userId" label="所属班级" align="center"></el-table-column>
            <el-table-column prop="title" label="作业名称" align="center"></el-table-column>
            <el-table-column prop="completed_text" label="完成情况" align="center"></el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            detailData:[],
            loading : false
        }
    },
    created() {
        console.log(this.$route.query.id);
        this.detailData = [this.$route.query.id]
    },
    mounted() {
        //this.detailData = this.$route.query.id
    },
}
</script>