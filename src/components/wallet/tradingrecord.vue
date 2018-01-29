<template>
    <div class='outbox'>
        <div class="headerwithback">
            <b @click='forward'></b>交易记录
        </div>
        <div class="tradinginfo">
            <div class="tradingtime">2018-01-04</div>
            <div class="tradingdetail">
                <b></b>
                <div class="tradingtype">
                    <span class='tradingtext'>提现</span>
                    <span class='price'>-666</span>
                </div>
            </div>
            <div class="tradingdetail">
                <b></b>
                <div class="tradingtype">
                    <span class='tradingtext'>提现</span>
                    <span class='price'>-666</span>
                </div>
            </div>
            <div class="tradingdetail">
                <b></b>
                <div class="tradingtype">
                    <span class='tradingtext'>提现</span>
                    <span class='price'>-666</span>
                </div>
            </div>
        </div>
        <div class="tradinginfo">
            <div class="tradingtime">2018-01-05</div>
            <div class="tradingdetail">
                <b></b>
                <div class="tradingtype">
                    <span class='tradingtext'>提现</span>
                    <span class='price'>-666</span>
                </div>
            </div>
            <div class="tradingdetail">
                <b></b>
                <div class="tradingtype">
                    <span class='tradingtext'>提现</span>
                    <span class='price'>-666</span>
                </div>
            </div>
            <div class="tradingdetail">
                <b></b>
                <div class="tradingtype">
                    <span class='tradingtext'>提现</span>
                    <span class='price'>-666</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{

            }
        },
        methods:{
            forward(){
                this.$router.push('/wallet')
            }
        }
    }
</script>

<style lang='less' src='../../less/login.less'></style>