<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
    <div v-if="!isScreenHorizontal" class="vertical_block_div">
      Vertical Screen Block Div
    </div>
  </div>
</template>

<script>
import { Base64 } from "js-base64";
export default {
  name: "App",
  data() {
    return {
      websock: null,
      isScreenHorizontal: false
    };
  },
  created() {
    // let that = this;
    // that.global.initWebSocket();
    // that.global.initWebSocket();
    window.addEventListener("resize", this.myEventHandler);
    this.myEventHandler();
  },
  destroyed() {
    // this.websock.close() //离开路由之后断开websocket连接
  },

  methods: {
    myEventHandler(e) {
      // your code for handling resize...
      var mediaQuery = window.matchMedia("(orientation: portrait)");
      if (mediaQuery.matches) {
        console.log("竖屏");
        this.isScreenHorizontal = false;
      } else {
        console.log("横屏");
        this.isScreenHorizontal = true;
      }
    }
    // localSocket() {
    //   let that = this;
    //   if ("WebSocket" in window) {
    //     console.log("您的瀏覽器支援 WebSocket!");

    //     that.ws = new WebSocket(`ws://13.230.92.57:8081/ws`);
    //     that.global.setWs(that.ws);
    //     console.log(that.global.ws);
    //     that.global.onopen();

    //     that.ws.onclose = function() {
    //       // 關閉 websocket
    //       console.log("連線已關閉...");
    //       setTimeout(() => {
    //         that.localSocket();
    //       }, 2000);
    //     };
    //   } else {
    //     // 瀏覽器不支援 WebSocket
    //     console.log("您的瀏覽器不支援 WebSocket!");
    //   }
    // }
  }
};

</script>

<style lang="scss">
@import "./assets/style.scss";
/* #app {
font-family: 'Avenir', Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 60px;
width:100%;
height:100%;
}
body {
width:100%;
height:100vh;
margin:0;
} */

.vertical_block_div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: red;
  z-index: 2;
  font-size: 20px;
}
</style>
