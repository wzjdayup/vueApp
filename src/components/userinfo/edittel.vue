<template>
    <div>
        <div class="headerwithback">
            <b @click='forward'></b>编辑联系电话
        </div>
        <div class="editbox">
            <label>联系电话</label>
            <input type="text" maxlength="11" v-model='tel'>
        </div>
        <div class="makesure" @click='makesure'>确定</div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                tel:''
            }
        },
        methods:{
            forward(){
                window.history.go(-1)
            },
            makesure(){
                this.$root.Bus.$emit('tel',this.tel)
                this.$router.push('/userinfo')
            }
        }
    }
</script>

<style lang='less' src='../../less/style.less'></style>