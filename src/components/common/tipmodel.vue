<template>
    <div>
        <div class="tipbox">
            <div class="tipmodelbox">
                <img src="../../assets/logo 拷贝@3x.png" class='imglogo'>
                <div class='texttip'>
                    尚未完成付款，是否取消支付
                </div>
                 <div class='decidebtn'>
                    <span @click='exitpay'>取消付款</span><span @click='continuepay'>继续付款</span>
                </div>
            </div>

        </div>
    </div>
</template>

<script >
    export default{
        props:['isshowtipmodel'],
        methods:{
            exitpay(){
                this.$emit('closetipmodel')
            },
            continuepay(){
                this.$emit('showpaymodel')
            }
        }
    }
</script>

<style lang='less' src='../../less/login.less'></style>