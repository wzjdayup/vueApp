<template>
    <div>
        <div class="topsearch">
            <div class="headertitle"><b @click='forward'></b>线路</div>
            <div class="searchcon">
                <router-link to='/choosecity'>
                    <div class="searchleft">
                        <img src="../../assets/定位-1@3x.png">
                        <div class='text'>
                            {{nowcityname}}
                        </div>
                    </div>
                </router-link>
                <div class="searchright">
                    <b></b><input type="text" placeholder="搜索">
                </div>
            </div>
        </div>
        <div class="goodscon">
             <ul class="goodslist">
                <router-link to='/buygoods'>
                    <li class='goodsli goodsone clearfix'>
                        <div class="leftbackgroundimg">
                            <img src="#" class='leftimg'>
                        </div>
                        <div class="rightinfo righttext">
                            <div class='infotop'>
                                <img src="../../assets/团@3x.png">长沙世界之窗
                            </div>
                            <div class='grade'>
                                高档型
                            </div>
                            <div class='infobottom infoprice'>
                               <span class='sale'>月销量:&nbsp;1200</span> <span class='price'>￥2333起</span>
                            </div>
                        </div>
                        <div class="bottomaddress"><b></b>湖南省长沙市三一大道485号</div>
                    </li>
                </router-link>
                <li class='goodsli goodsone clearfix'>
                    <div class="leftbackgroundimg">
                        <img src="#" class='leftimg'>
                    </div>
                    <div class="rightinfo righttext">
                        <div class='infotop'>
                            <img src="../../assets/团@3x.png">长沙世界之窗
                        </div>
                        <div class='grade'>
                            高档型
                        </div>
                        <div class='infobottom infoprice'>
                           <span class='sale'>月销量:&nbsp;1200</span> <span class='price'>￥2333起</span>
                        </div>
                    </div>
                    <div class="bottomaddress"><b></b>湖南省长沙市三一大道485号</div>
                </li>
                <li class='goodsli goodsone clearfix'>
                    <div class="leftbackgroundimg">
                        <img src="#" class='leftimg'>
                    </div>
                    <div class="rightinfo righttext">
                        <div class='infotop'>
                            <img src="../../assets/团@3x.png">长沙世界之窗
                        </div>
                        <div class='grade'>
                            高档型
                        </div>
                        <div class='infobottom infoprice'>
                           <span class='sale'>月销量:&nbsp;1200</span> <span class='price'>￥2333起</span>
                        </div>
                    </div>
                    <div class="bottomaddress"><b></b>湖南省长沙市三一大道485号</div>
                </li>
                <li class='goodsli goodsone clearfix'>
                    <div class="leftbackgroundimg">
                        <img src="#" class='leftimg'>
                    </div>
                    <div class="rightinfo righttext">
                        <div class='infotop'>
                            <img src="../../assets/团@3x.png">长沙世界之窗
                        </div>
                        <div class='grade'>
                            高档型
                        </div>
                        <div class='infobottom infoprice'>
                           <span class='sale'>月销量:&nbsp;1200</span> <span class='price'>￥2333起</span>
                        </div>
                    </div>
                    <div class="bottomaddress"><b></b>湖南省长沙市三一大道485号</div>
                </li>
                <li class='goodsli goodsone clearfix'>
                    <div class="leftbackgroundimg">
                        <img src="#" class='leftimg'>
                    </div>
                    <div class="rightinfo righttext">
                        <div class='infotop'>
                            <img src="../../assets/团@3x.png">长沙世界之窗
                        </div>
                        <div class='grade'>
                            高档型
                        </div>
                        <div class='infobottom infoprice'>
                           <span class='sale'>月销量:&nbsp;1200</span> <span class='price'>￥2333起</span>
                        </div>
                    </div>
                    <div class="bottomaddress"><b></b>湖南省长沙市三一大道485号</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                nowcityname:'默认'
            }
        },
        methods:{
            forward(){
                this.$router.push('/home')
            }
        },
        mounted(){
            this.$root.Bus.$on('nowcityname',nowcityname =>{
                this.nowcityname = nowcityname
            })
        }
    }
</script>