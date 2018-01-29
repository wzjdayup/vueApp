<template>
    <div>
        <div class="headerwithback">
            <b @click='forward'></b>修改密码
        </div>
        <div class="editpasswordbox">
            <div class="oldpassword">
                <label>原密码</label><input type="text"  name="" placeholder="输入原密码">
            </div>
            <div class="newpassword"><label>新密码</label><input type="" name="" placeholder="输入新密码"></div>
            <div class="makesurepassword"><label>确定密码</label><input type="" name="" placeholder="再次输入新密码"></div>
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
                window.history.go(-1)
            },
            makesure(){
                this.$router.push('/userinfo')
            }
        }
    }
</script>

<style lang='less' src='../../less/style.less'></style>