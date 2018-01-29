<template>
    <div class='outbox'>
         <div class="headerwithback">
            <b @click='forward'></b>提现申请
        </div>
        <div class="tobankcard">提现到银行卡 <router-link to='/bankcardcontrol' class='bankname'>招商银行 (6555)</router-link></div>
        <div class="cashnumber">
            <div>
                提现金额
            </div>
            <div>
                ￥
            </div>
            <input type="" name="" v-model='cash' class='number'>
            <div>
                可用余额: {{available}} <span class='cashall' @click='alltocash'>全部提现</span>
            </div>
        </div>
        <div class="makesure" >申请提现</div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                available:23333,
                cash:777
            }
        },
        methods:{
            forward(){
                this.$router.push('/wallet')
            },
            alltocash(){
                this.cash =  this.available
            }
        }
    }
</script>

<style lang='less' src='../../less/login.less'></style>