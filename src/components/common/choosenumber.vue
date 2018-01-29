<template>
    <div class='modelbox'>
        <div class="choosenumberbox">
            <div class="choosenumbertitle">选择购买数量</div>
            <div class='count'>
                <span class='minus' @click='minus'>-</span><input type="number" name=""  v-model='inputnumber'><span class='plus' @click='plus'>+</span>
            </div>
            <div class="surebtn" @click='makesure'>确定</div>
        </div>
    </div>
</template>


<script>
    export default{
        props: {
            isshow: {
              type: Boolean,
              default: false
            }
        },
        data(){
            return{
                inputnumber:1
            }
        },
        methods:{
            makesure(){
                this.$emit('on-close',this.inputnumber)
                this.$router.push('/filluserinfo')
            },
            minus(){
                if(this.inputnumber ==1){
                    return
                }
                this.inputnumber--
            },
            plus(){
                this.inputnumber++
            }
        }
    }
</script>

<style lang='less' src='../../less/login.less'>

</style>