<template>
    <div class="login" @keydown.enter="login('form')">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>通用后台管理系统</span>
            </div>

            <el-form label-width="80px" :model="form" ref="form" :rules="rules" >
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login('form')">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import { nameRule, passRule } from '../utils/vaildata.js'
import { login } from '@/api/api.js'
import { setToken } from '@/utils/setToken.js'

export default {
    data() {
        return {
            form: {
                username: '',
                password: ''
            },
            rules: {
                username: [{ validator: nameRule, trigger: 'blur' }],
                password: [{ validator: passRule, trigger: 'blur' }]
            }
        };
    },
    methods: {
        login(form) {
            console.log('11111');
            this.$refs[form].validate((valid) => {
                if (valid) {
                    console.log(this.form)
                    // this.service.post('/login',this.form)
                    login(this.form).then(res => {
                        if (res.data.status === 200) {
                            setToken('username', res.data.username)
                            setToken('token', res.data.token)
                            this.$message({ message: res.data.message, type: 'success' })
                            // console.log(3333333)
                            this.$router.push('/home')
                        }
                    });

                    // this.axios.post('https://rapserver.sunmi.com/app/mock/340/login', this.form)
                    // this.service.post('/login',this.form)
                    //     .then((res)=>{
                    //         // console.log(res)
                    //         if (res.data.status === 200) {
                    //             // localStorage.setItem('username', res.data.username)
                    //             setToken('username', res.data.username)
                    //             this.$message({ message: res.data.message, type: 'success' })
                    //             this.$router.push('/home')
                    //         }

                    //     })
                    // .then(res => {
                    //     console.log(res)
                    //     if (res.data.status === 200) {
                    //         // localStorage.setItem('username', res.data.username)
                    //         setToken('username', res.data.username)
                    //         setToken('token', res.data.token)
                    //         this.$message({ message: res.data.message, type: 'success' })
                    //         this.$router.push('/home')
                    //     }
                    // })
                    // .catch(err => {
                    //     console.error(err)
                    // })
                    // login(this.form).then(res => {
                    //     if (res.data.status === 200) {
                    //             setToken('username', res.data.username)
                    //             this.$message({ message: res.data.message, type: 'success' })
                    //             this.$router.push('/home')
                    //     }   
                    // });
                } else {
                    console.error(this.form)
                }
            })
        }
    }

}

</script>

<style lang="scss">
.login {
    width: 100%;
    height: 100%;
    position: absolute;
    background: url('../assets/tp.jpg') center no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;

    .el-card {
        background: #65768557;
    }

    .box-card {
        width: 450px;
        margin: 400px auto;
        color: #fff;

        .el-form .el-form-item__label {
            color: #fff;
        }

        .el-card_header {
            font-size: 34px;
        }

        .el-button {
            width: 100%;
        }
    }
}
</style>

