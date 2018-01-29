<template>
    <div class='outbox'>
        <div class="topcity ">
            <div class="topcitytitle">
                <b @click='forward'></b>城市选择
            </div>
            <div class="inputbox">
                <b></b><input type="text" name="">
            </div>

        </div>
            <div class="citybox">
                <div class='nowcity'>
                当前城市
                </div>
                <div class='nowcityname'>
                    <span :class='{nowspan:nowcityname.length ==1}' v-for='(item,index) in nowcityname'>{{item}}</span>
                </div>
                <div class='hasopened'>
                    已开通城市
                </div>
                <div class="hasopenedname">
                    <span v-for='(item,index) in hasopenedcity' :class="{nowspan:nowindex == index}" @click='choosecity(index)'>{{item}}</span>
                </div>
            </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                nowcityname:['默认'],
                hasopenedcity:[
                    '长沙','福建','厦门','重庆','哈尔滨'
                ],
                nowindex:null
            }
        },
        methods:{
            forward(){
                window.history.go(-1)
            },
            choosecity(index){
                this.nowindex = index
                this.nowcityname.splice(0,1,this.hasopenedcity[index])
                setTimeout(()=>{
                    this.$root.Bus.$emit('nowcityname',this.nowcityname.join(''))
                    window.history.go(-1)
                },2000)
            }
        }
    }
</script>

<style lang='less' src='../../less/login.less'></style>