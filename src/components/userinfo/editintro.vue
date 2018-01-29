<template>
    <div>
        <div class="headerwithback">
            <b @click='forward'></b>编辑简介
        </div>
        <div class="editintrobox">
            <label>简介</label>
            <textarea name="intro" v-model='intro' rows='10' cols='46' ></textarea>
        </div>
        <div class="makesure" @click='makesure'>确定</div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                intro:''
            }
        },
        methods:{
            forward(){
                window.history.go(-1)
            },
            makesure(){
                this.$root.Bus.$emit('intro',this.intro)
                this.$router.push('/userinfo')
            }
        }
    }
</script>

<style lang='less' src='../../less/style.less'></style>