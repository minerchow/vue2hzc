import Vue from 'vue';
import App from './app.vue';
import router from './router/indexRouter.js';
new Vue({ // eslint-disable-line
  el: '#app',
  router,
  render: h => h(App)
});
