<template>
    <div>
        <div class="headerwithback">
            <b @click='forward'></b>添加银行卡
        </div>
        <div class="editpasswordbox bankcardbox">
            <div class="oldpassword">
                <label>所属银行</label><input type="text"  name="" placeholder="填写所属银行" v-model='bank.bankbelongs'>
            </div>
            <div class="newpassword"><label>银行卡卡号</label><input type="text" name="" placeholder="填写银行卡号" v-model='bank.banknumber'></div>
            <div class="makesurepassword"><label>户主</label><input type="text" name="" placeholder="填写持卡人姓名" v-model='bank.bankname'></div>
        </div>
        <div class="makesure" @click='makesure'>确定</div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                bank:{
                    bankbelongs:'',
                    banknumber:'',
                    bankname:''
                }
            }
        },
        methods:{
            forward(){
                this.$router.push('/bankcardcontrol')
            },
            makesure(){
                this.$router.push('bankcardcontrol')
            }
        }
    }
</script>

<style lang='less' src='../../less/style.less'></style>