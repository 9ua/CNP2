<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view />

    <div v-if="!isScreenHorizontal" class="vertical_block_div">
      Vertical Screen Block Div
    </div>

    <div v-if="isLoadingImages" class="vertical_block_div">
      Loading Images...
    </div>

    <image-preloader
      :srcs="cover"
      @loaded-all="loadedAll"
    />
  </div>
</template>

<script>
import { Base64 } from "js-base64";
import { imagePreloader } from 'vue-image-preloader'

export default {
  name: "App",
  data() {
    return {
      websock: null,
      isScreenHorizontal: false,
      isLoadingImages: true,
      cover: [
        // First Layer
        require('@/assets/0.png'),
        require('@/assets/1.png'),
        require('@/assets/2.png'),
        require('@/assets/3.png'),
        require('@/assets/4.png'),
        require('@/assets/5.png'),
        require('@/assets/6.png'),
        require('@/assets/111.png'),
        require('@/assets/999999.png'),
        require('@/assets/champbtn.png'),
        require('@/assets/clubbtn.png'),
        require('@/assets/confirm.png'),
        require('@/assets/girl.png'),
        require('@/assets/jointable.png'),
        require('@/assets/jointbtn.png'),
        require('@/assets/light0.png'),
        require('@/assets/light1.png'),
        require('@/assets/light4.png'),
        require('@/assets/light6.png'),
        require('@/assets/lobbybg.png'),
        require('@/assets/logo.png'),
        require('@/assets/table.png'),
        require('@/assets/tablebtn.png'),
        //pattern
        require('@/assets/pattern/2.png'),
        require('@/assets/pattern/3.png'),
        require('@/assets/pattern/4.png'),
        require('@/assets/pattern/5.png'),
        require('@/assets/pattern/6.png'),
        require('@/assets/pattern/7.png'),
        require('@/assets/pattern/8.png'),
        require('@/assets/pattern/9.png'),
        require('@/assets/pattern/10.png'),
        require('@/assets/pattern/11.png'),
        require('@/assets/pattern/12.png'),
        require('@/assets/pattern/13.png'),
        require('@/assets/pattern/14.png'),
        require('@/assets/pattern/15.png'),
        require('@/assets/pattern/16.png'),
        require('@/assets/pattern/17.png'),
        require('@/assets/pattern/18.png'),
        require('@/assets/pattern/19.png'),
        require('@/assets/pattern/20.png'),
        require('@/assets/pattern/21.png'),
        require('@/assets/pattern/22.png'),
        require('@/assets/pattern/23.png'),
        require('@/assets/pattern/24.png'),
        require('@/assets/pattern/25.png'),
        require('@/assets/pattern/26.png'),
        //poker_card
        require('@/assets/poker_card/0.png'),
        require('@/assets/poker_card/000.png'),
        require('@/assets/poker_card/101.png'),
        require('@/assets/poker_card/102.png'),
        require('@/assets/poker_card/103.png'),
        require('@/assets/poker_card/104.png'),
        require('@/assets/poker_card/105.png'),
        require('@/assets/poker_card/106.png'),
        require('@/assets/poker_card/107.png'),
        require('@/assets/poker_card/108.png'),
        require('@/assets/poker_card/109.png'),
        require('@/assets/poker_card/110.png'),
        require('@/assets/poker_card/111.png'),
        require('@/assets/poker_card/112.png'),
        require('@/assets/poker_card/113.png'),
        require('@/assets/poker_card/201.png'),
        require('@/assets/poker_card/202.png'),
        require('@/assets/poker_card/203.png'),
        require('@/assets/poker_card/204.png'),
        require('@/assets/poker_card/205.png'),
        require('@/assets/poker_card/206.png'),
        require('@/assets/poker_card/207.png'),
        require('@/assets/poker_card/208.png'),
        require('@/assets/poker_card/209.png'),
        require('@/assets/poker_card/210.png'),
        require('@/assets/poker_card/211.png'),
        require('@/assets/poker_card/212.png'),
        require('@/assets/poker_card/213.png'),

        require('@/assets/poker_card/301.png'),
        require('@/assets/poker_card/302.png'),
        require('@/assets/poker_card/303.png'),
        require('@/assets/poker_card/304.png'),
        require('@/assets/poker_card/305.png'),
        require('@/assets/poker_card/306.png'),
        require('@/assets/poker_card/307.png'),
        require('@/assets/poker_card/308.png'),
        require('@/assets/poker_card/309.png'),
        require('@/assets/poker_card/310.png'),
        require('@/assets/poker_card/311.png'),
        require('@/assets/poker_card/312.png'),
        require('@/assets/poker_card/313.png'),
        require('@/assets/poker_card/401.png'),
        require('@/assets/poker_card/402.png'),
        require('@/assets/poker_card/403.png'),
        require('@/assets/poker_card/404.png'),
        require('@/assets/poker_card/405.png'),
        require('@/assets/poker_card/406.png'),
        require('@/assets/poker_card/407.png'),
        require('@/assets/poker_card/408.png'),
        require('@/assets/poker_card/409.png'),
        require('@/assets/poker_card/410.png'),
        require('@/assets/poker_card/411.png'),
        require('@/assets/poker_card/412.png'),
        require('@/assets/poker_card/413.png'),

        require('@/assets/poker_card/900.png'),
        require('@/assets/poker_card/901.png'),
      ]
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
    },
    loadedAll(e) {
      this.isLoadingImages = false;
      console.log('loadedAllloadedAllloadedAllloadedAll done!',e)  // ImagePreloader id or boolean
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
  },
  components: {
    imagePreloader
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
