// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.min.css';
Vue.use(Mint);
import 'lib-flexible/flexible.js'
import VueClipboard from 'vue-clipboard2'
import jQuery from 'jquery'
Vue.use(VueClipboard)
import wcView from 'wc-view';
import 'wc-view/style.css';
Vue.use(wcView);
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data:{
    Bus:new Vue()
  }
})
