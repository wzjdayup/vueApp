<template>
    <div class='historybox' >
        <div class="history" v-if='isshow'>
            <ul>
                <li v-for='(item,index) in historylist' @click='clickrecord'>{{item.historyrecord}}</li>
            </ul>
            <div class="clearrecord" @click='clearrecord' v-if='empty'>清空搜索记录</div>
        </div>
    </div>
</template>


<script>
    export default{
        props:['historylist','isshow'],
        methods:{
            clearrecord(){
                this.$emit('clear')
            },
            clickrecord(){
                this.$emit('getsearchresult')
            }
        },
        computed:{
            empty(){
                return this.historylist !=0
            }
        }
    }
</script>

<style lang='less' src='../../less/login.less'></style>