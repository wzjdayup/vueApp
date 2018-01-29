<template>
    <div>
        <div class='header'>
        商品管理
        </div>
        <router-link to='/goodslibrary'>
            <div class="choose">
            <b></b>去商品库挑选
            </div>
        </router-link>
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">全部</mt-tab-item>
          <mt-tab-item id="2">已上架</mt-tab-item>
          <mt-tab-item id="3">未上架</mt-tab-item>
        </mt-navbar>

<!-- tab-container -->
    <div class="con">
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <ul class="goodslist">
                <router-link to='/goodsinfo'>
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
                                <div :class="item.btnname === '下架' ? 'redbtn' : 'bluebtn'" @click='updown(index)'>{{item.btnname}}</div>
                            </div>
                        </div>
                    </li>
                </router-link>
            </ul>
            <div class="nogoods" v-if='empty'>
                <img src="../../assets/空盒子@3x.png" alt="">
                <div class='tips'>
                    暂无商品，快去商品库挑选吧
                </div>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
           <!--  <ul class="goodslist">
                <li class='goodsli'>
                    <div class="leftbackgroundimg">
                        <img src="" class='leftimg'>
                        <span class='lefttip'>未上架</span>
                    </div>
                    <div class="rightinfo">
                        <div class='infotop'>
                            <img src="../../assets/团@3x.png">长沙世界之窗aa
                        </div>
                        <div class='time'>
                            创建时间：2017-12-10
                        </div>
                        <div class='infobottom'>
                            <div class="btn">下架</div>
                        </div>
                    </div>
                </li>
                <li class='goodsli'>
                    <div class="leftbackgroundimg">
                        <img src="" class='leftimg'>
                        <span class='lefttip'>未上架</span>
                    </div>
                    <div class="rightinfo">
                        <div class='infotop'>
                            <img src="../../assets/团@3x.png">长沙世界之窗
                        </div>
                        <div class='time'>
                            创建时间：2017-12-10
                        </div>
                        <div class='infobottom'>
                            <div class="btn">下架</div>
                        </div>
                    </div>
                </li>
                <li class='goodsli'>
                    <div class="leftbackgroundimg">
                        <img src="" class='leftimg'>
                        <span class='lefttip'>未上架</span>
                    </div>
                    <div class="rightinfo">
                        <div class='infotop'>
                            <img src="../../assets/团@3x.png">长沙世界之窗
                        </div>
                        <div class='time'>
                            创建时间：2017-12-10
                        </div>
                        <div class='infobottom'>
                            <div class="btn">下架</div>
                        </div>
                    </div>
                </li>
                <li class='goodsli'>
                    <div class="leftbackgroundimg">
                        <img src="" class='leftimg'>
                        <span class='lefttip'>未上架</span>
                    </div>
                    <div class="rightinfo">
                        <div class='infotop'>
                            <img src="../../assets/团@3x.png">长沙世界之窗
                        </div>
                        <div class='time'>
                            创建时间：2017-12-10
                        </div>
                        <div class='infobottom'>
                            <div class="btn">下架</div>
                        </div>
                    </div>
                </li>
                <li class='goodsli'>
                    <div class="leftbackgroundimg">
                        <img src="" class='leftimg'>
                        <span class='lefttip'>未上架</span>
                    </div>
                    <div class="rightinfo">
                        <div class='infotop'>
                            <img src="../../assets/团@3x.png">长沙世界之窗
                        </div>
                        <div class='time'>
                            创建时间：2017-12-10
                        </div>
                        <div class='infobottom'>
                            <div class="btn">下架</div>
                        </div>
                    </div>
                </li>
            </ul> -->
            <div class="nogoods" v-if='true'>
                <img src="../../assets/空盒子@3x.png" alt="">
                <div class='tips'>
                    暂无商品，快去商品库挑选吧
                </div>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="3">
            <!-- <ul class="goodslist">
                <li class='goodsli'>
                    <div class="leftbackgroundimg">
                        <img src="" class='leftimg'>
                        <span class='lefttip'>未上架</span>
                    </div>
                    <div class="rightinfo">
                        <div class='infotop'>
                            <img src="../../assets/团@3x.png">长沙世界之窗bb
                        </div>
                        <div class='time'>
                            创建时间：2017-12-10
                        </div>
                        <div class='infobottom'>
                            <div class="btn">下架</div>
                        </div>
                    </div>
                </li>
                <li class='goodsli'>
                    <div class="leftbackgroundimg">
                        <img src="" class='leftimg'>
                        <span class='lefttip'>未上架</span>
                    </div>
                    <div class="rightinfo">
                        <div class='infotop'>
                            <img src="../../assets/团@3x.png">长沙世界之窗
                        </div>
                        <div class='time'>
                            创建时间：2017-12-10
                        </div>
                        <div class='infobottom'>
                            <div class="btn">下架</div>
                        </div>
                    </div>
                </li>
                <li class='goodsli'>
                    <div class="leftbackgroundimg">
                        <img src="" class='leftimg'>
                        <span class='lefttip'>未上架</span>
                    </div>
                    <div class="rightinfo">
                        <div class='infotop'>
                            <img src="../../assets/团@3x.png">长沙世界之窗
                        </div>
                        <div class='time'>
                            创建时间：2017-12-10
                        </div>
                        <div class='infobottom'>
                            <div class="btn">下架</div>
                        </div>
                    </div>
                </li>
                <li class='goodsli'>
                    <div class="leftbackgroundimg">
                        <img src="" class='leftimg'>
                        <span class='lefttip'>未上架</span>
                    </div>
                    <div class="rightinfo">
                        <div class='infotop'>
                            <img src="../../assets/团@3x.png">长沙世界之窗
                        </div>
                        <div class='time'>
                            创建时间：2017-12-10
                        </div>
                        <div class='infobottom'>
                            <div class="btn">下架</div>
                        </div>
                    </div>
                </li>
                <li class='goodsli'>
                    <div class="leftbackgroundimg">
                        <img src="" class='leftimg'>
                        <span class='lefttip'>未上架</span>
                    </div>
                    <div class="rightinfo">
                        <div class='infotop'>
                            <img src="../../assets/团@3x.png">长沙世界之窗
                        </div>
                        <div class='time'>
                            创建时间：2017-12-10
                        </div>
                        <div class='infobottom'>
                            <div class="btn">下架</div>
                        </div>
                    </div>
                </li>
            </ul> -->
            <div class="nogoods" v-if='true'>
                <img src="../../assets/空盒子@3x.png" alt="">
                <div class='tips'>
                    暂无商品，快去商品库挑选吧
                </div>
            </div>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
</template>

<script>
import jQuery from 'jquery'
    export default{
        data(){
            return{
                selected:'1',
                goodslist:[
                    {
                        lefttip:'未上架',
                        src:require('../../assets/团@3x.png'),
                        goodsname:'长沙世界之窗',
                        addtime:'2017-12-10',
                        btnname:'上架',
                    },
                     {
                        lefttip:'未上架',
                        src:require('../../assets/团@3x.png'),
                        goodsname:'长沙世界之窗',
                        addtime:'2017-12-10',
                        btnname:'下架'
                    },
                     {
                        lefttip:'未上架',
                        src:require('../../assets/团@3x.png'),
                        goodsname:'长沙世界之窗',
                        addtime:'2017-12-10',
                        btnname:'上架'
                    }
                ]
            }
        },
         computed:{
            empty(){
                 return this.goodslist.length ===0
            }
        },
        methods:{
            updown(index,e){
                if(this.goodslist[index].btnname === '上架'){
                    this.goodslist[index].btnname = '下架'
                    window.event? window.event.returnValue = false : e.preventDefault()
                }
                else if(this.goodslist[index].btnname === '下架'){
                     this.goodslist[index].btnname = '上架'
                     window.event? window.event.returnValue = false : e.preventDefault()
                }
            }
        }
    }
</script>

<style lang='less' src='../../less/style.less'>

</style>