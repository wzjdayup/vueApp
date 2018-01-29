<template>
    <div>
        <div class="headerwithback">
            <b @click='forward'></b>在线支付
        </div>
        <div class="ordernum">
            订单编号:&nbsp;12345678fgh678994567sf567
        </div>
        <div class='orderpt'>
            <div class="orderprice">￥23333</div>
            <div class='timeleft'>
                支付剩余时间:&nbsp;23小时32分46秒
            </div>
        </div>
        <div class="paytypetitle">选择支付方式</div>
        <div class="paytype">
            <div class="zfbpay"><b></b>支付宝支付<i v-if='choosezfb' @click='clickchoosezfb'></i><em v-if='nochoosezfb' @click='clicknochoosezfb'></em></div>
            <div class="wxpay"><b></b>微信支付<i v-if='nochoosewx' @click='clicknochoosewx'></i><em v-if='choosewx' @click='clickchoosewx'></em></div>
            <div class="yepay"><b></b>余额支付<i v-if='nochooseye' @click='clicknochooseye'></i><em v-if='chooseye' @click='clickchooseye'></em></div>
        </div>
        <div class="paybtn" @click='paybtn'>确定支付￥23333</div>\
        <paymodel v-if='isshow' :isshow='isshow' @on-close='close' @closepaymodel='closeone'></paymodel>
        <tipmodel v-if='isshowtipmodel' :isshowtipmodel='isshowtipmodel' @closetipmodel='closetwo' @showpaymodel='closethree'></tipmodel>
        <tipmodeltwo v-if='isshowtipmodeltwo' :isshowtipmodel='isshowtipmodeltwo' @closetipmodeltwo='closefour'></tipmodeltwo>
    </div>
</template>

<script>
import paymodel from '@/components/common/paymodel'
import tipmodel from '@/components/common/tipmodel'
import tipmodeltwo from '@/components/common/tipmodeltwo'
    export default{
        components:{
            paymodel,tipmodel,tipmodeltwo
        },
        data(){
            return{
                isshow:false,
                isshowtipmodel:false,
                isshowtipmodeltwo:false,
                choosezfb:true,
                nochoosezfb:false,
                nochoosewx:true,
                choosewx:false,
                nochooseye:true,
                chooseye:false
            }
        },
        methods:{
            forward(){
                this.$router.push('/filluserinfo')
            },
            paybtn(){
                this.isshow = true
            },
            close(){
                this.isshow = false
                this.$router.push('/order')
            },
            closeone(){
                this.isshow = false
                this.isshowtipmodel = true
            },
            closetwo(){
                this.isshowtipmodel = false
                 this.isshowtipmodeltwo = true
            },
            closethree(){
                this.isshow = true
                 this.isshowtipmodel = false
            },
            closefour(){
                this.isshowtipmodeltwo = false
                this.$router.push('/order')
            },
            clickchoosezfb(){
                this.choosezfb = false
                this.nochoosezfb = true
                this.nochoosewx=true
                this.choosewx=false
                this.nochooseye=true
                this.chooseye=false
            },
            clicknochoosezfb(){
                this.choosezfb = true
                this.nochoosezfb = false
                this.nochoosewx=true
                this.choosewx=false
                this.nochooseye=true
                this.chooseye=false
            },
            clicknochoosewx(){
                this.choosezfb = false
                this.nochoosezfb = true
                this.nochoosewx=false
                this.choosewx=true
                this.nochooseye=true
                this.chooseye=false
            },
            clickchoosewx(){
                this.choosezfb = false
                this.nochoosezfb = true
                this.nochoosewx=true
                this.choosewx=false
                this.nochooseye=true
                this.chooseye=false
            },
            clicknochooseye(){
                this.choosezfb = false
                this.nochoosezfb = true
                this.nochoosewx=true
                this.choosewx=false
                this.nochooseye=false
                this.chooseye=true
            },
            clickchooseye(){
                this.choosezfb = false
                this.nochoosezfb = true
                this.nochoosewx=true
                this.choosewx=false
                this.nochooseye=false
                this.chooseye=true
            }
        }
    }
</script>