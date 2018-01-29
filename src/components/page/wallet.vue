<template>
    <div>
        <div class="wallettopbg">
            <b @click='forward'></b>
            <div>可用余额</div>
            <div>￥23333</div>
            <router-link to='/tocash'><div class='tocash'>提现申请</div></router-link>
            <div class='dai'>待结算余额:&nbsp;￥23333</div>
        </div>
        <div class="walletbottom">
            <router-link to='/bankcardcontrol'><div class="bankcard"><b></b>银行卡管理<i></i></div></router-link>
            <router-link to='/tradingrecord'><div class="tradingrecord"><b></b>交易记录<i></i></div></router-link>
            <router-link to='/paymentcode'><div class="paycode"><b></b>支付密码<i></i></div></router-link>
        </div>
    </div>
</template>

<script >
    export default{
        data(){
            return{

            }
        },
        methods:{
            forward(){
                this.$router.push('person')
            }
        }
    }
</script>