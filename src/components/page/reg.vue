<template>
    <div class='outbox'>
        <div class="topbg">
            <b @click='forward'></b><img src="../../assets/LOGO@3x.png" class='logo'>
        </div>
        <div class="regbottom">
            <div class="telphone"><input type="text" maxlength="11" placeholder="输入手机号" ></div>
            <div class="code"><input type="text"  placeholder="验证码" ><b></b><span class='getcode'>获取验证码</span></div>
            <div class="reginvitecode"><input type="text" placeholder="邀请码 (可不填)" ></div>
            <div class="password"><input type="text" placeholder="输入密码" name=""></div>
            <div class="useragreement"><b class='gou' v-if='gou' @click='clickgou'></b><b class='nogou' v-if='nogou' @click='clicknogou'></b><a href="#">同意用户协议</a></div>
            <div class="regbtn">注册</div>
            <div class='login'>
                <span>已有账户</span><router-link to="/login" class='tologin'>立即登录</router-link>
            </div>
        </div>
    </div>
</template>

<script >
    export default{
        data(){
            return{
                gou:true,
                nogou:false
            }
        },
        methods:{
            clickgou(){
                this.gou = false
                this.nogou = true
            },
            clicknogou(){
                this.gou = true
                this.nogou = false
            },
            forward(){
                this.$router.push('login')
            }
        }
    }
</script>

<style lang='less' src='../../less/login.less'></style>