import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const city = resolve => {
  require.ensure([], () => resolve(require('../components/index/hotCity.vue')), '/hotCity')
}
const appIndex = resolve => {
  require.ensure([], () => resolve(require('../components/index/appIndex.vue')), '/appIndex')
}
const router = new VueRouter({

  base: __dirname,
  routes: [
    { path: '/hotCity',components:{city:city}},
    // Just use them normally in the route config
    {path: '/appIndex',components:{appIndex:appIndex}}

  ]
})

export default router;