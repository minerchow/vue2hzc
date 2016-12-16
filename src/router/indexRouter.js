import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const city = resolve => {
  require.ensure([], () => resolve(require('../components/index/hotCity.vue')))
}
const appIndex = resolve => {
  require.ensure([], () => resolve(require('../components/index/appIndex.vue')))
}
const router = new VueRouter({

  base: __dirname,
  routes: [
  	{
  		 path: '/', redirect: '/appIndex' 
  	},
    { 
    	path: '/appIndex',components:
	    {
	    	appIndex:appIndex
	    }
	},
	{
		path: '/hotCity/:typeCity',name:'hotCity',components:
	    {
	    	city:city
	    }
	}

  ]
})

export default router;