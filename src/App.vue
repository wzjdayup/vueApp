<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <mt-tabbar v-model="selected" fixed v-if='this.$route.meta.tabbarShow'>
        <router-link to='/home'>
          <mt-tab-item id="homepage">
                <img slot="icon" :src="this.$route.path ==='/home' ? active[0]: noActive[0]">
                首页
          </mt-tab-item>
        </router-link>
        <router-link to='/order'>
          <mt-tab-item id="order">
                <img slot="icon" :src="this.$route.path ==='/order' ? active[1]: noActive[1]">
                订单
          </mt-tab-item>
        </router-link>
        <router-link to='/goodscontrol'>
          <mt-tab-item id="goodsControl">
                <img slot="icon" :src="this.$route.path ==='/goodscontrol' ? active[2]: noActive[2]">
                商品管理
          </mt-tab-item>
        </router-link>
        <router-link to='/person'>
          <mt-tab-item id="my">
                <img slot="icon" :src="this.$route.path ==='/person' ? active[3]: noActive[3]">
                我的
          </mt-tab-item>
        </router-link>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      selected:'homepage',
      noActive:[require('./assets/主页-未选择@3x.png'),require('./assets/订单未选择@3x.png'),require(
        './assets/商品-未选中@3x.png'),require('./assets/我的-未选择@3x.png')],
      active:[require('./assets/首页-选中@3x.png'),require('./assets/订单-选中@3x.png'),require(
        './assets/管理-选中@3x.png'),require('./assets/我的-选中@3x.png')]
    }
  },
  methods:{

  }
}
</script>

<style  lang='less' src='./less/style.less'>

</style>
