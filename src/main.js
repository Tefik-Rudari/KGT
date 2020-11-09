import Vue from 'vue';
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import AOS from 'aos'
import 'aos/dist/aos.css'
import vuetify from './plugins/vuetify';
import VueSmoothScroll from 'vue2-smooth-scroll'

Vue.use(VueSmoothScroll, {
  duration: 400,
  updateHistory: false,
})

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(Vuetify);

new Vue({
  created() {
    AOS.init()
  },

  router,
  store,
  Vuetify,
  vuetify,
  render: h => h(App)
}).$mount('#app')
