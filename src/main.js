import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from "moment";
import VueMoment from 'vue-moment'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all'

import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false
require('moment/locale/es');
moment.locale('es')

Vue.use(VueMoment, {moment})

Vue.filter('formatDate', function (value) {
  if(value) {
    return moment(String(value)).format('DD-MM-YYYY')
  }
});
new Vue({
  router,
  store,

  render: h => h(App)
}).$mount('#app')
