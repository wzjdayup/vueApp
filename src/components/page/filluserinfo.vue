<template>
    <div>
        <div class="headerwithback">
            <b @click='forward'></b>填写信息
        </div>
        <div class="userinfodetail">
            <div class="userinfotip">旅客信息可不填写</div>
            <div class="passengerinfo" v-for='item in passengerlist'>
                <div class="passengerone userone">游客1<b></b></div>
                <div class="passengername"><span class='leftspan'>姓名</span><input type="text" name="" placeholder="请输入游客姓名" v-text='item.passengername'></div>
                <div class="IDnumber">
                    <span class='leftspan'>证件号码</span>
                    <input type="text" name="" placeholder="请输入证件号码" v-text='item.IDnumber'>
                    <b></b>
                    <span class="scan">
                       <i></i>扫描证件
                    </span>
                </div>
                <div class="passengertel">
                    <span class='leftspan'>联系方式</span>
                    <input type="text" name="" placeholder="请输入电话号码" v-text='item.passengertel'>
                </div>
            </div>
             <div class="addpassenger" @click='addpassenger'><b></b>添加旅客</div>
        </div>
        <router-link to='/onlinepay'>
            <div class="buybtn">前往付款</div>
        </router-link>
    </div>
</template>


<script>
    export default{
        data(){
            return{
                passengerlist:[
                    {
                        passengername:'',
                        IDnumber:'',
                        passengertel:''
                    }

                ]
            }
        },
        methods:{
            forward(){
                this.$router.push('/buygoods')
            },
            addpassenger(){
                this.passengerlist.push({
                        passengername:'',
                        IDnumber:'',
                        passengertel:''
                })
            }
        }
    }
</script>


<style lang='less' src='../../less/style.less'></style>