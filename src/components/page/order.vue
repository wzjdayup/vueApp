<template>
    <div>
        <div class='header'>
            订单管理
        </div>
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">全部</mt-tab-item>
          <mt-tab-item id="2">待付款</mt-tab-item>
          <mt-tab-item id="3">已成功</mt-tab-item>
          <mt-tab-item id="4">已过期</mt-tab-item>
        </mt-navbar>

        <div class='con'>
            <!-- tab-container -->
            <mt-tab-container v-model="selected">
              <mt-tab-container-item id="1">
                <router-link to='/ordersuccess'>
                    <div class="order">
                        <div class="ordernumber">
                            <b></b>
                            <span>订单编号：12345678fgh678994567s</span>
                            <span class='status'>已成功</span>
                        </div>
                        <div class="orderinfo">
                            <div class='one'>
                                <span class="address"><img src="../../assets/团@3x.png" class='tipimg'>马尔代夫一日游</span>
                                <span class='number'>X2</span>
                            </div>
                            <div class='two'>
                                <span class='time'>2017-11-11  12:00</span>
                                <span class="price">￥23333</span>
                            </div>
                        </div>
                        <img src="../../assets/锯齿@3x.png" class='bottomImg' alt="">
                    </div>
                </router-link>
                <router-link to='/orderobligation'>
                    <div class="order">
                        <div class="ordernumber">
                            <b></b>
                            <span>订单编号：12345678fgh678994567s</span>
                            <span class='status'>已成功</span>
                        </div>
                        <div class="orderinfo">
                            <div class='one'>
                                <span class="address"><img src="../../assets/团@3x.png" class='tipimg'>马尔代夫一日游</span>
                                <span class='number'>X2</span>
                            </div>
                            <div class='two'>
                                <span class='time'>2017-11-11  12:00</span>
                                <span class="price">￥23333</span>
                            </div>
                        </div>
                        <img src="../../assets/锯齿@3x.png" class='bottomImg' alt="">
                    </div>
                </router-link>
                <router-link to='/outdate'>
                    <div class="order">
                        <div class="ordernumber">
                            <b></b>
                            <span>订单编号：12345678fgh678994567s</span>
                            <span class='status'>已成功</span>
                        </div>
                        <div class="orderinfo">
                            <div class='one'>
                                <span class="address"><img src="../../assets/团@3x.png" class='tipimg'>马尔代夫一日游</span>
                                <span class='number'>X2</span>
                            </div>
                            <div class='two'>
                                <span class='time'>2017-11-11  12:00</span>
                                <span class="price">￥23333</span>
                            </div>
                    </div>
                    <img src="../../assets/锯齿@3x.png" class='bottomImg' alt="">
                </div>
                </router-link>
                <div class="order">
                    <div class="ordernumber">
                        <b></b>
                        <span>订单编号：12345678fgh678994567s</span>
                        <span class='status'>已成功</span>
                    </div>
                    <div class="orderinfo">
                        <div class='one'>
                            <span class="address"><img src="../../assets/团@3x.png" class='tipimg'>马尔代夫一日游</span>
                            <span class='number'>X2</span>
                        </div>
                        <div class='two'>
                            <span class='time'>2017-11-11  12:00</span>
                            <span class="price">￥23333</span>
                        </div>
                    </div>
                    <img src="../../assets/锯齿@3x.png" class='bottomImg' alt="">
                </div>
                <div class="order">
                    <div class="ordernumber">
                        <b></b>
                        <span>订单编号：12345678fgh678994567s</span>
                        <span class='status'>已成功</span>
                    </div>
                    <div class="orderinfo">
                        <div class='one'>
                            <span class="address"><img src="../../assets/团@3x.png" class='tipimg'>马尔代夫一日游</span>
                            <span class='number'>X2</span>
                        </div>
                        <div class='two'>
                            <span class='time'>2017-11-11  12:00</span>
                            <span class="price">￥23333</span>
                        </div>
                    </div>
                    <img src="../../assets/锯齿@3x.png" class='bottomImg' alt="">
                </div>
              </mt-tab-container-item>
              <mt-tab-container-item id="2">
                <div class="order">
                    <div class="ordernumber">
                        <b></b>
                        <span>订单编号：2</span>
                        <span class='status'>已成功</span>
                    </div>
                    <div class="orderinfo">
                        <div class='one'>
                            <span class="address"><img src="../../assets/团@3x.png" class='tipimg'>马尔代夫一日游</span>
                            <span class='number'>X2</span>
                        </div>
                        <div class='two'>
                            <span class='time'>2017-11-11  12:00</span>
                            <span class="price">￥23333</span>
                        </div>
                    </div>
                    <img src="../../assets/锯齿@3x.png" class='bottomImg' alt="">
                </div>
                <div class="order">
                    <div class="ordernumber">
                        <b></b>
                        <span>订单编号：12345678fgh678994567s</span>
                        <span class='status'>已成功</span>
                    </div>
                    <div class="orderinfo">
                        <div class='one'>
                            <span class="address"><img src="../../assets/团@3x.png" class='tipimg'>马尔代夫一日游</span>
                            <span class='number'>X2</span>
                        </div>
                        <div class='two'>
                            <span class='time'>2017-11-11  12:00</span>
                            <span class="price">￥23333</span>
                        </div>
                    </div>
                    <img src="../../assets/锯齿@3x.png" class='bottomImg' alt="">
                </div>
                <div class="order">
                    <div class="ordernumber">
                        <b></b>
                        <span>订单编号：12345678fgh678994567s</span>
                        <span class='status'>已成功</span>
                    </div>
                    <div class="orderinfo">
                        <div class='one'>
                            <span class="address"><img src="../../assets/团@3x.png" class='tipimg'>马尔代夫一日游</span>
                            <span class='number'>X2</span>
                        </div>
                        <div class='two'>
                            <span class='time'>2017-11-11  12:00</span>
                            <span class="price">￥23333</span>
                        </div>
                    </div>
                    <img src="../../assets/锯齿@3x.png" class='bottomImg' alt="">
                </div>
                <div class="order">
                    <div class="ordernumber">
                        <b></b>
                        <span>订单编号：12345678fgh678994567s</span>
                        <span class='status'>已成功</span>
                    </div>
                    <div class="orderinfo">
                        <div class='one'>
                            <span class="address"><img src="../../assets/团@3x.png" class='tipimg'>马尔代夫一日游</span>
                            <span class='number'>X2</span>
                        </div>
                        <div class='two'>
                            <span class='time'>2017-11-11  12:00</span>
                            <span class="price">￥23333</span>
                        </div>
                    </div>
                    <img src="../../assets/锯齿@3x.png" class='bottomImg' alt="">
                </div>
                <div class="order">
                    <div class="ordernumber">
                        <b></b>
                        <span>订单编号：12345678fgh678994567s</span>
                        <span class='status'>已成功</span>
                    </div>
                    <div class="orderinfo">
                        <div class='one'>
                            <span class="address"><img src="../../assets/团@3x.png" class='tipimg'>马尔代夫一日游</span>
                            <span class='number'>X2</span>
                        </div>
                        <div class='two'>
                            <span class='time'>2017-11-11  12:00</span>
                            <span class="price">￥23333</span>
                        </div>
                    </div>
                    <img src="../../assets/锯齿@3x.png" class='bottomImg' alt="">
                </div>
              </mt-tab-container-item>
              <mt-tab-container-item id="3">
                <div class="order">
                    <div class="ordernumber">
                        <b></b>
                        <span>订单编号：3</span>
                        <span class='status'>已成功</span>
                    </div>
                    <div class="orderinfo">
                        <div class='one'>
                            <span class="address"><img src="../../assets/团@3x.png" class='tipimg'>马尔代夫一日游</span>
                            <span class='number'>X2</span>
                        </div>
                        <div class='two'>
                            <span class='time'>2017-11-11  12:00</span>
                            <span class="price">￥23333</span>
                        </div>
                    </div>
                    <img src="../../assets/锯齿@3x.png" class='bottomImg' alt="">
                </div>
                <div class="order">
                    <div class="ordernumber">
                        <b></b>
                        <span>订单编号：12345678fgh678994567s</span>
                        <span class='status'>已成功</span>
                    </div>
                    <div class="orderinfo">
                        <div class='one'>
                            <span class="address"><img src="../../assets/团@3x.png" class='tipimg'>马尔代夫一日游</span>
                            <span class='number'>X2</span>
                        </div>
                        <div class='two'>
                            <span class='time'>2017-11-11  12:00</span>
                            <span class="price">￥23333</span>
                        </div>
                    </div>
                    <img src="../../assets/锯齿@3x.png" class='bottomImg' alt="">
                </div>
                <div class="order">
                    <div class="ordernumber">
                        <b></b>
                        <span>订单编号：12345678fgh678994567s</span>
                        <span class='status'>已成功</span>
                    </div>
                    <div class="orderinfo">
                        <div class='one'>
                            <span class="address"><img src="../../assets/团@3x.png" class='tipimg'>马尔代夫一日游</span>
                            <span class='number'>X2</span>
                        </div>
                        <div class='two'>
                            <span class='time'>2017-11-11  12:00</span>
                            <span class="price">￥23333</span>
                        </div>
                    </div>
                    <img src="../../assets/锯齿@3x.png" class='bottomImg' alt="">
                </div>
                <div class="order">
                    <div class="ordernumber">
                        <b></b>
                        <span>订单编号：12345678fgh678994567s</span>
                        <span class='status'>已成功</span>
                    </div>
                    <div class="orderinfo">
                        <div class='one'>
                            <span class="address"><img src="../../assets/团@3x.png" class='tipimg'>马尔代夫一日游</span>
                            <span class='number'>X2</span>
                        </div>
                        <div class='two'>
                            <span class='time'>2017-11-11  12:00</span>
                            <span class="price">￥23333</span>
                        </div>
                    </div>
                    <img src="../../assets/锯齿@3x.png" class='bottomImg' alt="">
                </div>
                <div class="order">
                    <div class="ordernumber">
                        <b></b>
                        <span>订单编号：12345678fgh678994567s</span>
                        <span class='status'>已成功</span>
                    </div>
                    <div class="orderinfo">
                        <div class='one'>
                            <span class="address"><img src="../../assets/团@3x.png" class='tipimg'>马尔代夫一日游</span>
                            <span class='number'>X2</span>
                        </div>
                        <div class='two'>
                            <span class='time'>2017-11-11  12:00</span>
                            <span class="price">￥23333</span>
                        </div>
                    </div>
                    <img src="../../assets/锯齿@3x.png" class='bottomImg' alt="">
                </div>
              </mt-tab-container-item>
              <mt-tab-container-item id="4">
                <div class="order">
                    <div class="ordernumber">
                        <b></b>
                        <span>订单编号：4</span>
                        <span class='status'>已成功</span>
                    </div>
                    <div class="orderinfo">
                        <div class='one'>
                            <span class="address"><img src="../../assets/团@3x.png" class='tipimg'>马尔代夫一日游</span>
                            <span class='number'>X2</span>
                        </div>
                        <div class='two'>
                            <span class='time'>2017-11-11  12:00</span>
                            <span class="price">￥23333</span>
                        </div>
                    </div>
                    <img src="../../assets/锯齿@3x.png" class='bottomImg' alt="">
                </div>
                <div class="order">
                    <div class="ordernumber">
                        <b></b>
                        <span>订单编号：12345678fgh678994567s</span>
                        <span class='status'>已成功</span>
                    </div>
                    <div class="orderinfo">
                        <div class='one'>
                            <span class="address"><img src="../../assets/团@3x.png" class='tipimg'>马尔代夫一日游</span>
                            <span class='number'>X2</span>
                        </div>
                        <div class='two'>
                            <span class='time'>2017-11-11  12:00</span>
                            <span class="price">￥23333</span>
                        </div>
                    </div>
                    <img src="../../assets/锯齿@3x.png" class='bottomImg' alt="">
                </div>
                <div class="order">
                    <div class="ordernumber">
                        <b></b>
                        <span>订单编号：12345678fgh678994567s</span>
                        <span class='status'>已成功</span>
                    </div>
                    <div class="orderinfo">
                        <div class='one'>
                            <span class="address"><img src="../../assets/团@3x.png" class='tipimg'>马尔代夫一日游</span>
                            <span class='number'>X2</span>
                        </div>
                        <div class='two'>
                            <span class='time'>2017-11-11  12:00</span>
                            <span class="price">￥23333</span>
                        </div>
                    </div>
                    <img src="../../assets/锯齿@3x.png" class='bottomImg' alt="">
                </div>
                <div class="order">
                    <div class="ordernumber">
                        <b></b>
                        <span>订单编号：12345678fgh678994567s</span>
                        <span class='status'>已成功</span>
                    </div>
                    <div class="orderinfo">
                        <div class='one'>
                            <span class="address"><img src="../../assets/团@3x.png" class='tipimg'>马尔代夫一日游</span>
                            <span class='number'>X2</span>
                        </div>
                        <div class='two'>
                            <span class='time'>2017-11-11  12:00</span>
                            <span class="price">￥23333</span>
                        </div>
                    </div>
                    <img src="../../assets/锯齿@3x.png" class='bottomImg' alt="">
                </div>
                <div class="order">
                    <div class="ordernumber">
                        <b></b>
                        <span>订单编号：12345678fgh678994567s</span>
                        <span class='status'>已成功</span>
                    </div>
                    <div class="orderinfo">
                        <div class='one'>
                            <span class="address"><img src="../../assets/团@3x.png" class='tipimg'>马尔代夫一日游</span>
                            <span class='number'>X2</span>
                        </div>
                        <div class='two'>
                            <span class='time'>2017-11-11  12:00</span>
                            <span class="price">￥23333</span>
                        </div>
                    </div>
                    <img src="../../assets/锯齿@3x.png" class='bottomImg' alt="">
                </div>
              </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                selected:'1'
            }
        }
    }
</script>

<style lang='less' src='../../less/style.less'>

</style>