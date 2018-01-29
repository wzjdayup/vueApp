<template>
    <div>
        <div class="headerwithback">
            <b @click='forward'></b>编辑店铺名称
        </div>
        <div class="editbox">
            <label>店铺名称</label>
            <input type="text" maxlength="9" v-model='shopname'>
        </div>
        <div class="makesure" @click='makesure'>确定</div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                shopname:''
            }
        },
        methods:{
            forward(){
                window.history.go(-1)
            },
            makesure(){
                this.$root.Bus.$emit('shopname',this.shopname)
                this.$router.push('/userinfo')
            }
        }
    }
</script>

<style lang='less' src='../../less/style.less'></style>