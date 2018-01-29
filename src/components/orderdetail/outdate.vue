<template>
    <div>
        <div class="headerwithback">
            <b @click='forward'></b>订单详情
        </div>
        <div class="orderstatus">已过期</div>
        <div class="goodsinfo">
            <div class="goodsinfotitle">商品信息</div>
            <div class="goodsrefer"><span class='txt'>订单编号</span><span >{{goodsrefer}}</span><b v-clipboard:copy="goodsrefer" v-clipboard:success="onCopy" v-clipboard:error="onError"></b></div>
            <div class="commodity"><span class="txt">商品</span><img src="../../assets/团@3x.png">斐济岛+马尔代夫+塞班岛+机…</div>
            <div class="goodsnumber"><span class="txt">数量</span><span>2</span></div>
            <div class="ordertime"><span class="txt">下单时间</span><span>2017-11-11 12:00</span></div>
            <div class="ordertotal"><span class="txt">总价</span><span class='price'>￥2333</span></div>
        </div>
        <div class="passengerinfo">
            <div class="passinfotitle">旅客信息</div>
            <div class="passengerone">游客1</div>
            <div class="passengername"><span class="txt">姓名</span><span>饭小二</span></div>
            <div class="IDnumber"><span class="txt">证件号码</span><span>123456789012345678</span></div>
            <div class="passengertel"><span class="txt">联系方式</span><span>18807411763</span></div>
        </div>
    </div>
</template>

<script >
import { Toast } from 'mint-ui';
    export default{
        data(){
            return{
                goodsrefer:'12fg1435365754nf433657472'
            }
        },
        methods:{
            forward(){
                window.history.go(-1)
            },
            onCopy: function (e) {
                Toast({message:'复制成功',
                       position:'bottom'
                })
            },
            onError: function (e) {
                Toast('复制失败')
            }
        }
    }
</script>

<style lang='less' src='../../less/style.less'></style>