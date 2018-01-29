<template>
    <div>
        <div class="headerwithback">
            <b @click='forward'></b>商品库
        </div>
         <div class="goodscon">
             <ul class="goodslist">
                <router-link to='/addgoodsinfo'>
                    <li class='goodsli' v-for='(item,index) in goodslist' :index=index>
                        <div class="leftbackgroundimg">
                            <img src="" class='leftimg'>
                            <span class='lefttip'>{{item.lefttip}}</span>
                        </div>
                        <div class="rightinfo">
                            <div class='infotop'>
                                <img src="../../assets/团@3x.png">{{item.goodsname}}
                            </div>
                            <div class='time'>
                                创建时间：{{item.addtime}}
                            </div>
                            <div class='infobottom'>
                                <div class="libbtn" @click='addgoods(index)'>添加</div>
                            </div>
                        </div>
                    </li>
                </router-link>
            </ul>
            <div class="nogoods" v-if='false'>
                <img src="../../assets/空盒子@3x.png" alt="">
                <div class='tips'>
                    暂无商品敬请期待
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                 goodslist:[
                    {
                        lefttip:'未上架',
                        src:require('../../assets/团@3x.png'),
                        goodsname:'长沙世界之窗1',
                        addtime:'2017-12-10'
                    },
                     {
                        lefttip:'未上架',
                        src:require('../../assets/团@3x.png'),
                        goodsname:'长沙世界之窗2',
                        addtime:'2017-12-10'
                    },
                     {
                        lefttip:'未上架',
                        src:require('../../assets/团@3x.png'),
                        goodsname:'长沙世界之窗3',
                        addtime:'2017-12-10'
                    }
                ]
            }
        },
        methods:{
            forward(){
                this.$router.push('/goodscontrol')
            },
            addgoods(index){
                 this.goodslist.splice(index,1)
                 window.event? window.event.returnValue = false : e.preventDefault()
            }
        }
    }
</script>

<style lang='less' src='../../less/style.less'></style>