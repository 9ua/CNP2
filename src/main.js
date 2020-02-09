// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Base64 } from 'js-base64'
import store from './store'
import axios from 'axios'
// import * as socketApi from './websocket'
// Vue.prototype.socketApi = socketApi
Vue.config.productionTip = false
// axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios;
window.axios= axios;
// Vue.use(axios);
// console.log(store)

axios.defaults.timeout = 20000






/* eslint-disable no-new */
new Vue({
  el: '#app',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    // let config = {
    //   headers: {'vendor_token' : 'qqqq'},
    //   withCredentials: true
    // };
    // let formData = new FormData();
    // formData.append('member_account', 'chase1');
    // axios
    //   .post('http://13.230.92.57:8080/v1/apis/vendor/integration/member/login' , formData, config)
    //   .then(res => {
    //     console.log(res)
    //   })
    //   .catch(error => {
    //     console.log('錯誤',error);
    //   });
    // axios
    //   .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    //   .then(response => (this.info = response))
  },
  router,
  store,
  components: { App },
  template: '<App/>'
})



