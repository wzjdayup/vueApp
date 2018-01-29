<template>
    <div>
        <div class="tipbox">
            <div class="tipmodelbox">
                <img src="../../assets/logo 拷贝@3x.png" class='imglogo'>
                <div class='texttip'>
                    尚未完成付款，是否取消支付
                </div>
                <div class='decide' @click='decide'>
                    确定
                </div>
            </div>
        </div>
    </div>
</template>

<script >
    export default{
        props:['isshowtipmodel'],
        methods:{
            decide(){
                this.$emit('closetipmodeltwo')
            }
        }
    }
</script>

<style lang='less' src='../../less/login.less'></style>