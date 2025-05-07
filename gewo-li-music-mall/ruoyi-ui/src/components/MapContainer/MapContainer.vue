<template>
  <div>
    <div id="container"></div>
  </div>
</template>
 
<script>
import AMapLoader from "@amap/amap-jsapi-loader";
export default {
  name: "MapDialog",
  props: ["defaultPoint", "defaultAddress"],
  data() {
    return {
      visible: false, //弹窗显隐
      center: ['116.409252','39.90325'], //地图中心点
      point: [], //经纬度-lng lat
      map: null, //地图实例
      marker: null, //地图icon
      geocoder: null, //逆解析实例
      address: null, //地址
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    //DOM初始化完成进行地图初始化
    initMap() {
      // 默认的经纬度和地址
      if (this.defaultPoint && this.defaultAddress) {
        this.address = this.defaultAddress;
        this.point = this.defaultPoint;
        this.center = this.point;
      }
      AMapLoader.load({
        key: "42f4f8e7d9bc0d45761c61f7631cf7bf", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [
          "AMap.Geocoder", // 逆向地理解码插件
          "AMap.Marker", // 点标记插件
          "AMap.ToolBar",//比例尺，显示当前地图中心的比例尺
          "AMap.Scale",//比例尺，显示当前地图中心的比例尺
          "AMap.ElasticMarker",//灵活点标记，可以随着地图级别改变样式和大小的 Marker
          "AMap.Geolocation",//定位，提供了获取用户当前准确位置、所在城市的方法
        ], // 需要使用的的插件列表
      })
        .then((AMap) => {
          this.map = new AMap.Map("container", {
            //设置地图容器id
            zoom: 12, //初始化地图级别
            center: this.center, //初始化地图中心点位置
          });
          // 如果父组件传入了有效值 回显一个icon
          if (this.point.length > 0) {
            this.addMarker();
          }
          //监听用户的点击事件
          this.map.on("click", (e) => {
            let lng = e.lnglat.lng;
            let lat = e.lnglat.lat;
            this.point = [lng, lat];
            // 增加点标记
            this.addMarker();
            // 获取地址
            this.getAddress();
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
    // 增加点标记
    addMarker() {
      // 清除其他icon
      if (this.marker) {
        this.marker.setMap(null);
        this.marker = null;
      }
      // 重新渲染icon
      this.marker = new AMap.Marker({
        icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
        position: this.point, //icon经纬度
        offset: new AMap.Pixel(-13, -30), //icon中心点的偏移量
      });
      this.marker.setMap(this.map); //设置icon
    },
    // 将经纬度转换为地址
    getAddress() {
      const self = this;
      // 这里通过高德 SDK 完成。
      this.geocoder = new AMap.Geocoder({
        city: "全国", //地理编码时，设置地址描述所在城市; 默认全国; 可选值：城市名（中文或中文全拼）、citycode、adcode
        radius: 100, //逆地理编码时，以给定坐标为中心点; 默认1000; 取值范围(0-3000)
        extensions: "all", //逆地理编码时，返回信息的详略; 默认值：base，返回基本地址信息; 默认值：base，返回基本地址信息
      });
      //调用逆解析方法 个人开发者调用量上限5000（次/日）
      this.geocoder.getAddress(this.point, function (status, result) {
        if (status === "complete" && result.info === "OK") {
          if (result && result.regeocode) {
            // this指向改变
            self.address = result.regeocode.formattedAddress;
            self.$emit('sendLoction',self.point,self.address)
          }
        }
      });
    }
  },
};
</script>
 
<style scoped>
#container {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 400px;
}
</style>