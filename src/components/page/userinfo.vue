<template>
    <div>
        <div class="headerwithback">
            <b @click='forward'></b>个人信息
        </div>
        <div class="userinfocon">
            <div class="shoplogo"><span class='lefttext'>店铺LOGO</span><img src="" alt=""></div>
            <router-link to='/editshopname'><div class="shopname"><span class='lefttext'>店铺名称</span><span class='righttext'>{{shopname}}</span><b class='rigtharrow'></b></div></router-link>
            <div class="invitecode"><span class='lefttext'>邀请码</span><span class='righttext' v-text='invitecode'></span><i class='clone' v-clipboard:copy="invitecode" v-clipboard:success="onCopy" v-clipboard:error="onError"></i></div>
            <router-link to='/editlinkman'><div class="linkman"><span class='lefttext'>联系人</span><span class='righttext'>{{linkman}}</span><b class='rigtharrow'></b></div></router-link>
            <router-link to='/edittel'><div class="tel"><span class='lefttext'>联系电话</span><span class='righttext'>{{tel}}</span><b class='rigtharrow'></b></div></router-link>
            <router-link to='/editmainwork'><div class="mainwork"><span class='lefttext'>主营业务</span ><span class='righttext'>{{mainwork}}</span><b class='rigtharrow'></b></div></router-link>
            <router-link to='/editintro'><div class="intro"><span class='lefttext'>介绍</span><span class='righttext'>{{intro}}</span><b class='rigtharrow'></b></div></router-link>
            <router-link to='/editaddress'><div class="useraddress"><span class='lefttext'>地址</span><span class='righttext'>{{address}}</span><b class='rigtharrow'></b></div></router-link>
        </div>
        <router-link to='/editpassword'><div class="editpassword"><span class='lefttext'>修改密码</span><b class='rigtharrow'></b></div></router-link>
        <div class="exit" @click='exit'>退出当前账号</div>
    </div>
</template>

<script >
import { Toast } from 'mint-ui';
    export default{
        data(){
            return{
                shopname:'',
                invitecode:5432,
                linkman:'',
                tel:'',
                mainwork:'',
                intro:'',
                address:''
            }
        },
        methods:{
            forward(){
                this.$router.push('/person')
            },
            exit(){
                this.$router.push('/login')
            },
             onCopy: function (e) {
                Toast({message:'复制成功',
                       position:'bottom'
                })
            },
            onError: function (e) {
                Toast('复制失败')
            }
        },
        mounted(){
                this.$root.Bus.$on('shopname',shopname =>{
                    this.shopname = shopname
                })
                this.$root.Bus.$on('linkman',linkman =>{
                    this.linkman = linkman
                })
                this.$root.Bus.$on('tel',tel =>{
                    this.tel = tel
                })
                this.$root.Bus.$on('mainwork',mainwork =>{
                    this.mainwork = mainwork
                })
                this.$root.Bus.$on('intro',intro =>{
                    this.intro = intro
                })
                this.$root.Bus.$on('address',address =>{
                    this.address = address
                })
        }
    }
</script>

<style lang='less' src='../../less/style.less'></style>