<template>
  <div class="hello">
    <game-lobby v-if="inLobby"></game-lobby>
    <game-table v-if="inRoom"></game-table>
  </div>
</template>

<script>
import GameLobby from "./gameLobby";
import GameTable from "./gameTable";
// import axios from 'axios';
import { mapGetters, mapState, mapActions } from "vuex";


export default {
  components: {
    GameLobby,
    GameTable
  },
  computed: {
    ...mapGetters("socket", ["inLobby", "inRoom"]),
  },
  data () {
    return {
  
    }
  },
  created() {
    // let that = this;
    // this.hash();
    // console.log(that.global.ws,"999");
  },
  mounted() {
    this.wsConnect();
      // that.global.websocketsend(actions);
    // console.log(that.global.ws,"999");

  },
  methods: {
    wsConnect(){
      // this.$axios
      // .get('http://13.230.92.57:8080/health/ping')
      // .then(response => (console.log(response)))

      let config = {
        headers:{'vendor_token':'qqqq'},
        // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        withCredentials: false
      };
      let formData = new FormData();
      formData.append('member_account', 'test999');
      this.$axios
        .post('http://13.230.92.57:8080/v1/apis/vendor/integration/member/login' , formData, config)
        .then(res => {
          console.log(res)
          // this.token = res.data;
          this.$store.state.socket.token = res.data.data;
          this.logWs();
        })
        .catch(error => {
          console.log(error);
        });
        
      // let gameServer =`ws://13.230.92.57:8081/ws`;
      // this.$store.dispatch("socket/connect", { gameServer });
    },
    logWs(){
      console.log('logWs');
      let gameServer =`ws://13.230.92.57:8081/ws`;
      this.$store.dispatch("socket/connect", { gameServer });
    },


  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  height: 100%;
  overflow:hidden;
}
.hello:after{
  min-height: 100%;
  clear: both; 
}
</style>
