import Vue from 'vue';
import App from './app.vue';
import router from './router/indexRouter.js';
import Vuex from 'vuex';
Vue.use(Vuex);
new Vue({ // eslint-disable-line
  el: '#app',
  router,
  render: h => h(App)
});
