<template>
    <div class='paybox'>
        <div class="paymodelbox">
            <div class="paymodelboxtit"><b @click='cha'></b>请输入支付密码</div>
            <div class='textone'>
                支付
            </div>
            <div class='texttwo'>
                ￥23333
            </div>
            <div class='payinput'>
                <input type="password" />
                <input type="password" />
                <input type="password" />
                <input type="password" />
                <input type="password" />
                <input type="password" @keyup='makesure' />
            </div>
        </div>
    </div>
</template>

<script >
    export default{
        props:['isshow'],
        data(){
            return{

            }
        },
        methods:{
            makesure(){
                this.$emit('on-close')
            },
            cha(){
               this.$emit('closepaymodel')
            }
        }
    }
</script>

<style lang='less' src='../../less/login.less'></style>