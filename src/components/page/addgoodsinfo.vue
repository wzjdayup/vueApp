<template>
    <div class='outbox'>
        <mt-navbar v-model="selected">
               <b @click='forward'></b>
              <mt-tab-item id="1">信息</mt-tab-item>
              <mt-tab-item id="2">交通</mt-tab-item>
              <mt-tab-item id="3">简介</mt-tab-item>
        </mt-navbar>

<!-- tab-container -->
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <div class="linename"><span>线路名称</span><span>长沙-张家界—凤凰1日游</span></div>
            <div class="picture">
                <span>图片</span>
                  <img class="wc-preview-img" :src="item.src" v-for="(item, key) in list" :key="key" @click="$preview($event, list, key,'src')">
            </div>
            <div class="property"><span>团散性质</span><span>团购</span></div>
            <div class='listprice'>
                <span>挂牌价</span><span>￥2333</span>
            </div>
            <div class="arrowbuy">
                <span>提前购买时间</span><span>提前一天20:00点之前</span>
            </div>
            <div class="fromcity"><span>出发城市</span><span>长沙</span></div>
            <div class="contactperson"><span>联系人</span><span>饭小二</span></div>
            <div class="contacttel"><span>联系电话</span><span>18877778888</span></div>
            <div class="lookfor"><span>查看价格日历</span><b></b></div>
            <div class="route">
                <div class="routetitle">行程安排</div>
                <b></b>
                <div class="routedetail">
                    <div class="thatday">第一天</div>
                    <div class="routeadress clearfix">
                        <span>行程</span>
                        <span>
                            全国各地-上海-宿雾
                        </span>
                    </div>
                    <div class="dinner clearfix">
                        <span>用餐</span>
                        <span>
                             早餐: 酒店内。午餐: 欢迎午餐。为欢迎您抵 达美丽的菲律宾第二大城市--宿雾，特地排 了一顿午餐给您享用。
                         </span>
                    </div>
                    <div class="scenic clearfix">
                        <span>景点</span>
                        <span>
                            自由活动、麦哲伦十字架、圣婴教堂、圣佩 特罗堡、自由活动
                        </span>
                    </div>
                    <div class="hotel clearfix">
                        <span>酒店</span>
                        <span>
                            宿雾金皇冠丽晶大酒店(Crown Regency Ho tel & Towers Cebu City)或宿务梅苏酒店(M ezzo Hotel Cebu)
                        </span>
                    </div>
                </div>
                <div class="cost">
                    <div>
                        费用说明
                    </div>
                    <div>这里填写说明</div>
                </div>
                <div class="reserve">
                    <div>
                        预定须知
                    </div>
                    <div>
                        这里填写说明
                    </div>
                </div>
                <div class="change">
                    <div>
                        退改规则
                    </div>
                    <div>
                        这里填写说明
                    </div>
                </div>
                <div class="contactway">
                    <div>
                        联系方式
                    </div>
                    <div class="linkpeple">
                        <span>
                            联系人
                        </span>
                        <span>
                            饭小二
                        </span>
                    </div>
                    <div class="linktel">
                        <span>
                            联系电话
                        </span>
                        <span>
                            15112351234
                        </span>
                    </div>
                </div>
            </div>
            <div class="addbtn" @click='add'>添加</div>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <div class='traffic '>
                发车地点根据时间情况而定。由工作人员通知
            </div>
            <div class="addbtn" @click='add'>添加</div>
          </mt-tab-container-item>
          <mt-tab-container-item id="3">
            <div class='abstract'></div>
            <div class="addbtn" @click='add'>添加</div>
          </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>


<script>
import choosenumber from  '@/components/common/choosenumber'
    export default{
        components:{
            choosenumber
        },
        data(){
            return{
                selected:'1',
                 list:[
                    {
                        src:require('../../assets/背景图@3x.png'),
                    },
                     {
                        src:require('../../assets/背景图@3x.png'),
                    }
                ]
            }
        },
        methods:{
            forward(){
                this.$router.push('/goodslibrary')
            },
            add(){
                this.$router.push('/goodslibrary')
            }
        }
    }
</script>

<style lang='less' src='../../less/login.less'></style>