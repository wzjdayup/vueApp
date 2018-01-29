<template>
    <div class='outbox'>
        <div class="headerwithback">
            <b @click='forward'></b>
            <span class='searchdiv'>
                <i></i><input type="text" name="" placeholder="请输入关键词" autocomplete="on"  @focus='showhistory' @keyup.enter='getsearchresult'>
            </span>
            <span class='cancle' @click='cancle'>取消</span>
        </div>
        <router-link to='/buygoods'>
             <div class="seachresult" v-if='isshowresult' @getsearchresult='getsearchresult'><b></b><i></i>天门山<span class='price'>￥23333起</span></div>
        </router-link>
        <historyrecord :historylist='historylist' :isshow='isshow' v-if='isshow' @clear='clearrecord'></historyrecord>
    </div>
</template>


<script >
import historyrecord from '@/components/common/historyrecord'
    export default{
        components:{historyrecord},
        data(){
            return{
                historylist:[
                    {historyrecord:'天门山1'},
                    {historyrecord:'天门山2'},
                    {historyrecord:'天门山3'}
                ],
                isshow:false,
                isshowresult:false
            }
        },
        computed:{

        },
        methods:{
            forward(){
                this.$router.push('/home')
            },
            showhistory(){
                    this.isshow = true
            },
            cancle(){
                this.isshow = false
            },
            clearrecord(){
                this.isshow = false
                this.historylist = []
            },
            getsearchresult(){
                this.isshowresult = true
                this.isshow = false
            }
        }
    }
</script>


<style lang='less' src='../../less/login.less'></style>