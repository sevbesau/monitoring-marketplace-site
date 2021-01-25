import Vue from 'vue';
import App from './App.vue';

import router from './router/index';
import store from './helpers/store';

import './assets/styles/style.css';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
