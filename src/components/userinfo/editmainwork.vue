<template>
    <div>
        <div class="headerwithback">
            <b @click='forward'></b>编辑主营业务
        </div>
        <div class="editbox">
            <label>主营业务</label>
            <input type="text"  v-model='mainwork'>
        </div>
        <div class="makesure" @click='makesure'>确定</div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                mainwork:''
            }
        },
        methods:{
            forward(){
                window.history.go(-1)
            },
            makesure(){
                this.$root.Bus.$emit('mainwork',this.mainwork)
                this.$router.push('/userinfo')
            }
        }
    }
</script>

<style lang='less' src='../../less/style.less'></style>