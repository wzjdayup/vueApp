<template>
    <div class='outbox'>
        <div class="topbg">
            <b @click='forward'></b><img src="../../assets/LOGO@3x.png" class='logo'>
        </div>
        <div class="editpasswordbottom">
            <div class="telphone"><input type="text" maxlength="11" placeholder="输入手机号" ></div>
            <div class="code"><input type="text"  placeholder="验证码" ><b></b><span class='getcode'>获取验证码</span></div>
             <div class="newpassword"><input type="text" placeholder="新密码" name=""></div>
            <div class="againpassword"><input type="text" placeholder="再次输入密码" name=""></div>
            <div class="reset">重置密码</div>
        </div>
    </div>
</template>

<script >
    export default{
        data(){
            return{

            }
        },
        methods:{
            forward(){
                this.$router.push('login')
            }
        }
    }
</script>

<style lang='less' src='../../less/login.less'></style>