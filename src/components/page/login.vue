<template>
    <div class='outbox'>
        <div class="topbg">
            <img src="../../assets/LOGO@3x.png" class='logo'>
        </div>
        <div class="loginbottom">
            <div class="telphone"><input type="text" maxlength="11" placeholder="输入手机号" v-model.number='telnumber'><b @click='removetel'></b></div>
            <div class="password"><input type="password" name="" placeholder="输入密码" v-model='password'><b @click='removepassword'></b></div>
            <router-link to='/forgetpassword' class='toforgetpass'>忘记密码</router-link>
            <div class="loginbtn" @click='login'>登录</div>
            <div class='reg'>
                <span>还没有账号?</span>
                <router-link to='/reg' class='toreg'>立即注册</router-link>
            </div>
        </div>

    </div>
</template>

<script>
    export default{
        data(){
            return{
                telnumber:'' ,
                password:''
            }
        },
        methods:{
            removetel(){
                this.telnumber = ''
            },
            removepassword(){
                this.password = ''
            },
            login(){
                this.$router.push('home')
            }
        }
    }
</script>

<style  lang='less' src='../../less/login.less' >

</style>