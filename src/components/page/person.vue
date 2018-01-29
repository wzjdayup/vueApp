<template>
    <div>
        <div class="headbox">
            <router-link to='/userinfo'><img src="" alt=""></router-link>
            <div class='usename'>饭小二</div>
            <router-link to='/wallet'>
                <div class="balance">
                    <div class="available">
                        <div><span>￥</span>23333</div>
                        <div>
                            可用余额
                        </div>
                    </div>
                    <b></b>
                    <div class="wait">
                        <div><span>￥</span>23333</div>
                        <div>
                            可用余额
                        </div>
                    </div>
                </div>
            </router-link>
        </div>

        <div class="bottom">
            <router-link to='/userinfo'><div class="userinfo"><b></b>用户信息<i></i></div></router-link>
            <router-link to='/goodscontrol'><div class="goodscont"><b></b>商品管理<i></i></div></router-link>
            <div class="set"><b></b>设置<i></i></div>
        </div>
    </div>
</template>

<script>

</script>

<style lang='less' src='../../less/style.less'></style>