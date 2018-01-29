import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/page/login'
import reg from '@/components/page/reg'
import forgetpassword from '@/components/page/forgetpassword'
import home from '@/components/page/home'
import search from '@/components/page/search'
import line from '@/components/triptype/line'
import oneday from '@/components/triptype/oneday'
import manyday from '@/components/triptype/manyday'
import around from '@/components/triptype/around'
import weitour from '@/components/triptype/weitour'
import choosecity from '@/components/common/choosecity'
import buygoods from '@/components/page/buygoods'
import goodsinfo from '@/components/page/goodsinfo'
import addgoodsinfo from '@/components/page/addgoodsinfo'
import filluserinfo from '@/components/page/filluserinfo'
import onlinepay from '@/components/page/onlinepay'
import paymodel from '@/components/common/paymodel'
import tipmodel from '@/components/common/tipmodel'
import tipmodeltwo from '@/components/common/tipmodeltwo'
import map from '@/components/common/map'
import order from '@/components/page/order'
import ordersuccess from '@/components/orderdetail/ordersuccess'
import orderobligation from '@/components/orderdetail/orderobligation'
import outdate from '@/components/orderdetail/outdate'
import goodscontrol from '@/components/page/goodscontrol'
import person from '@/components/page/person'
import goodslibrary from '@/components/page/goodslibrary'
import userinfo from '@/components/page/userinfo'
import wallet from '@/components/page/wallet'
import bankcardcontrol from '@/components/wallet/bankcardcontrol'
import addbankcard from '@/components/wallet/addbankcard'
import tradingrecord from '@/components/wallet/tradingrecord'
import paymentcode from '@/components/wallet/paymentcode'
import tocash from '@/components/wallet/tocash'
import editshopname from '@/components/userinfo/editshopname'
import editlinkman from '@/components/userinfo/editlinkman'
import edittel from '@/components/userinfo/edittel'
import editmainwork from '@/components/userinfo/editmainwork'
import editintro from '@/components/userinfo/editintro'
import editaddress from '@/components/userinfo/editaddress'
import editpassword from '@/components/userinfo/editpassword'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path:'/',
        redirect:'/home',
        meta:{
            tabbarShow:true
        }
    },
    {
        path:'/line',
        component:line,
        meta:{
            tabbarShow:false
        }
    },
    {
        path:'/oneday',
        component:oneday,
        meta:{
            tabbarShow:false
        }
    },
    {
        path:'/manyday',
        component:manyday,
        meta:{
            tabbarShow:false
        }
    },
    {
        path:'/around',
        component:around,
        meta:{
            tabbarShow:false
        }
    },
    {
        path:'/weitour',
        component:weitour,
        meta:{
            tabbarShow:false
        }
    },
    {
        path:'/choosecity',
        component:choosecity,
        meta:{
            tabbarShow:false
        }
    },
    {
        path:'/login',
        component:login,
         meta:{
            tabbarShow:false
        }
    },
    {
        path:'/reg',
        component:reg,
         meta:{
            tabbarShow:false
        }
    },
    {
        path:'/forgetpassword',
        component:forgetpassword,
         meta:{
            tabbarShow:false
        }
    },
    {
        path:'/home',
        component:home,
         meta:{
            tabbarShow:true
        }
    },
    {
        path:'/search',
        component:search,
         meta:{
            tabbarShow:false
        }
    },
    {
        path:'/buygoods',
        component:buygoods,
         meta:{
            tabbarShow:false
        }
    },
    {
        path:'/goodsinfo',
        component:goodsinfo,
         meta:{
            tabbarShow:false
        }
    },
    {
        path:'/addgoodsinfo',
        component:addgoodsinfo,
         meta:{
            tabbarShow:false
        }
    },
    {
        path:'/filluserinfo',
        component:filluserinfo,
         meta:{
            tabbarShow:false
        }
    },
     {
        path:'/onlinepay',
        component:onlinepay,
         meta:{
            tabbarShow:false
        }
    },
    {
        path:'/paymodel',
        component:paymodel,
         meta:{
            tabbarShow:false
        }
    },
     {
        path:'/tipmodel',
        component:tipmodel,
         meta:{
            tabbarShow:false
        }
    },
    {
        path:'/map/:cityname',
        component:map,
         meta:{
            tabbarShow:false
        }
    },
    {
        path:'/tipmodeltwo',
        component:tipmodeltwo,
         meta:{
            tabbarShow:false
        }
    },
    {
        path:'/order',
        component:order,
         meta:{
            tabbarShow:true
        }
    },
    {
        path:'/ordersuccess',
        component:ordersuccess,
         meta:{
            tabbarShow:false
        }
    },
    {
        path:'/orderobligation',
        component:orderobligation,
         meta:{
            tabbarShow:false
        }
    },
    {
        path:'/outdate',
        component:outdate,
         meta:{
            tabbarShow:false
        }
    },
    {
        path:'/goodscontrol',
        component:goodscontrol,
         meta:{
            tabbarShow:true
        }
    },
    {
        path:'/person',
        component:person,
         meta:{
            tabbarShow:true
        }
    },
    {
        path:'/goodslibrary',
        component:goodslibrary,
         meta:{
            tabbarShow:false
        }
    },
     {
        path:'/userinfo',
        component:userinfo,
         meta:{
            tabbarShow:false
        }
    },
    {
        path:'/wallet',
        component:wallet,
         meta:{
            tabbarShow:false
        }
    },
    {
        path:'/bankcardcontrol',
        component:bankcardcontrol,
         meta:{
            tabbarShow:false
        }
    },
    {
        path:'/addbankcard',
        component:addbankcard,
         meta:{
            tabbarShow:false
        }
    },
    {
        path:'/tradingrecord',
        component:tradingrecord,
         meta:{
            tabbarShow:false
        }
    },
    {
        path:'/paymentcode',
        component:paymentcode,
         meta:{
            tabbarShow:false
        }
    },
    {
        path:'/tocash',
        component:tocash,
         meta:{
            tabbarShow:false
        }
    },
    {
        path:'/editshopname',
        component:editshopname,
         meta:{
            tabbarShow:false
        }
    },
    {
        path:'/editlinkman',
        component:editlinkman,
         meta:{
            tabbarShow:false
        }
    },
    {
        path:'/edittel',
        component:edittel,
         meta:{
            tabbarShow:false
        }
    },
    {
        path:'/editmainwork',
        component:editmainwork,
         meta:{
            tabbarShow:false
        }
    },
    {
        path:'/editintro',
        component:editintro,
         meta:{
            tabbarShow:false
        }
    },
    {
        path:'/editaddress',
        component:editaddress,
         meta:{
            tabbarShow:false
        }
    },
    {
        path:'/editpassword',
        component:editpassword,
         meta:{
            tabbarShow:false
        }
    }
  ]
})
