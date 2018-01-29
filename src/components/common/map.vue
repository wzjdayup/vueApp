<template>
　　<div id="div1" :style="style"></div>
</template>
<script>
　　export default{
　　　　data(){
　　　　　　return{
　　　　　　　　style:{
　　　　　　　　　　width:'100%',
　　　　　　　　　　height:'100%',
　　　　　　　　}
　　　　　　}
　　　　},
　　　　mounted(){
            var cityname = this.$route.params.cityname
　　　　　　var map = new BMap.Map("div1");
            var point = new BMap.Point(112.884028,28.22733);
            map.centerAndZoom(point, 15);
            var marker = new BMap.Marker(point);  // 创建标注
            map.addOverlay(marker);              // 将标注添加到地图中
            marker.addEventListener("click",getAttr);
            function getAttr(){
                var p = marker.getPosition();       //获取marker的位置
            }
            // 创建地址解析器实例
            var myGeo = new BMap.Geocoder();
            // 将地址解析结果显示在地图上，并调整地图视野
            myGeo.getPoint(cityname, function(point){
            if (point) {
                // console.log(point)
                map.centerAndZoom(point, 15);
                map.addOverlay(new BMap.Marker(point));
            }
          },"长沙市");
        }
　　}
</script>

<style lang='less' src='../../less/login.less'></style>