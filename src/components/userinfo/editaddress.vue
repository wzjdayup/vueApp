<template>
    <div>
        <div class="headerwithback">
            <b @click='forward'></b>编辑地址<span class='dingwei'>定位</span>
        </div>
        <div class="editbox">
            <label>地址</label>
            <input type="text"  v-model='address'>
        </div>
        <div class="makesure" @click='makesure'>确定</div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                address:''
            }
        },
        methods:{
            forward(){
                window.history.go(-1)
            },
            makesure(){
                this.$root.Bus.$emit('address',this.address)
                this.$router.push('/userinfo')
            }
        }
    }
</script>

<style lang='less' src='../../less/style.less'></style>