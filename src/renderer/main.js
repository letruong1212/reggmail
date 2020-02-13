import Vue from 'vue'
import axios from 'axios'
import Vuetify from "vuetify";
import App from './App'
import router from './router'
import store from './store'
import moment from 'moment';
// require ('./database.js');
import "vuetify/dist/vuetify.min.css";
import '@fortawesome/fontawesome-free/css/all.css'

//  import vuetify from '@/plugins/vuetify'
Vue.use(Vuetify, {
  iconfont: 'icon',
  iconfont: 'mid',
  iconfont: 'fa'
 });
 Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY')
  }
});
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
