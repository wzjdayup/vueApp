<template>
    <div>
        <div class="headerwithback">
            <b @click='forward'></b>支付密码
        </div>
        <div class="editpasswordbox">
            <div class="oldpassword">
                <label>设置密码</label><input type="text"  name="" placeholder="输入支付密码">
            </div>
            <div class="makesurepassword"><label>确定密码</label><input type="" name="" placeholder="再次输入支付密码"></div>
            <div class="vercode"><label>确定密码</label><input type="text"  placeholder="验证码" ><b></b><span class='getcode'>获取验证码</span></div>

        </div>
        <div class="makesure" @click='makesure'>确定</div>
    </div>
</template>


<script>
    export default{
        data(){
            return{

            }
        },
        methods:{
            forward(){
                this.$router.push('/wallet')
            }
        }
    }
</script>

<style lang='less' src='../../less/style.less'>

</style>