import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import store from './store';
import router from './router'
Vue.use(BootstrapVue);
Vue.config.productionTip = false
axios.defaults.baseURL = 'https://localhost:7145/api/';
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
