<template>
<div class="header">
    <el-header>
        <div class="title">文档管理系统</div>
        <div style="font-size: 30px;">{{name}}</div>
    </el-header>

</div>
    
</template>
<script>
import { getToken } from '../../utils/setToken'
export default{
    data(){
        return{
            name:''
        }
    },
    created(){
        this.name = getToken('username')
    }
}
</script>


<style lang="scss" scoped>
.header{
    .el-header{
        background: #2578b5;
        color: #fff;
        line-height: 60px;
        display: flex;
        justify-content: space-between; //左右布局
        .title{
            width: 200px;
            font-size: 24px;
        }
    }
}
</style>