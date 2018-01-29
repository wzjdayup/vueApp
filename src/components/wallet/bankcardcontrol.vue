<template>
    <div>
        <div class="headerwithback">
            <b @click='forward'></b>银行卡管理
        </div>
            <div class="bankcardinfo" v-for='(item,index) in bankArray' v-if='empty'>
              <router-link to='/tocash'>
                <img src="../../assets/建设银行@3x.png" >
                <div class="bankcardtext">
                    <div>
                        {{item.bankname}}
                    </div>
                    <div>
                        <span>{{item.bankbelongs}}</span>&nbsp;<span>{{item.banknumber.replace(/^\d{15}/, '**** **** ****')}}</span>
                    </div>
                </div>
              </router-link>
                <div class="unbind" @click='unbind()'>解绑</div>
            </div>
         <router-link to='/addbankcard'><div class="addbankcard"><b></b>添加银行卡</div></router-link>
    </div>
</template>

<script >
    export default{
        data(){
            return{
                bankArray:[
                    {
                        bankbelongs:'建设银行',
                        banknumber:'6227002951120625624',
                        bankname:'万梓君'
                    }
                ]
            }
        },
        computed:{
            empty(){
                 return this.bankArray.length !=0
            }
        },
        methods:{
            forward(){
                 this.$router.push('wallet')
            },
            unbind(index){
                this.bankArray.splice(index,1)
                this.$router.push('/bankcardcontrol')
            }
        },
        mounted(){

        }
    }
</script>

<style>

</style>