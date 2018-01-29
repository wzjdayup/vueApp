<template>
    <div >
        <div class="searchbox">
            <div class="search" @click='tosearch'>
            <b></b>搜索
            </div>
        </div>
       <div class="container">
            <div class="topnav">
             <router-link to='/line'>
                 <div class="one">
                    <div class="onetext">线路</div>
                    <img src="../../assets/线路@3x.png" >
                </div>
             </router-link>
             <div class="two">
                <router-link to='/oneday'>
                    <div class="twotop">一日游</div>
                </router-link>
                <router-link to='/around'>
                    <div class="twobottom">周边游</div>
                </router-link>
             </div>
             <div class="three">
               <router-link to='/manyday'> <div class="threetop">多日游</div></router-link>
                <router-link to='/weitour'>
                    <div class="threebottom">尾团</div>
                </router-link>
             </div>
        </div>
        <div class="new">
            <div class="newtitle">
                <b></b>最新
            </div>
            <router-link to='/buygoods'>
                <div class="backgroundimg">
                    <img src="../../assets/girl.jpg"  class='bigimg'>
                    <span class="tiptop">一日游</span>
                    <div class="tipbottom">
                        <span class="left"><img src="../../assets/团@3x.png" class='tipimg'>马尔代夫一日游</span>
                        <span class="price">￥23333起</span>
                    </div>
                </div>
            </router-link>
            <div class="backgroundimg">
                <img src="" class='bigimg'>
                <span class="tiptop">一日游</span>
                <div class="tipbottom">
                    <span class="left"><img src="../../assets/团@3x.png" class='tipimg'>马尔代夫一日游</span>
                    <span class="price">￥23333起</span>
                </div>
            </div>
            <div class="backgroundimg">
                <img src="" class='bigimg'>
                <span class="tiptop">一日游</span>
                <div class="tipbottom">
                    <span class="left"><img src="../../assets/团@3x.png" class='tipimg'>马尔代夫一日游</span>
                    <span class="price">￥23333起</span>
                </div>
            </div>
            <div class="backgroundimg">
                <img src="" class='bigimg'>
                <span class="tiptop">一日游</span>
                <div class="tipbottom">
                    <span class="left"><img src="../../assets/团@3x.png" class='tipimg'>马尔代夫一日游</span>
                    <span class="price">￥23333起</span>
                </div>
            </div>
            </div>
            <div class="homenogoods" v-if='false'>
                <img src="../../assets/空盒子@3x.png" alt="">
                <div class='tips'>
                    暂无商品，快去商品库挑选吧
                </div>
                <router-link to='/goodslibrary'>
                    <div class="homechoose">
                    <b></b>去商品库挑选
                    </div>
                </router-link>
            </div>
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
            tosearch(){
                this.$router.push('/search')
            }
        }
    }
</script>

<style lang='less' src='../../less/style.less'></style>