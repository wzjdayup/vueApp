<template>
    <div>
        <div class="headerwithback">
            <b @click='forward'></b>编辑联系人
        </div>
        <div class="editbox">
            <label>联系人</label>
            <input type="text" maxlength="9" v-model='linkman'>
        </div>
        <div class="makesure" @click='makesure'>确定</div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                linkman:''
            }
        },
        methods:{
            forward(){
                window.history.go(-1)
            },
            makesure(){
                this.$root.Bus.$emit('linkman',this.linkman)
                this.$router.push('/userinfo')
            }
        }
    }
</script>

<style lang='less' src='../../less/style.less'></style>