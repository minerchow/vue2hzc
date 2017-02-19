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
  mode: 'history',	
  base: __dirname,
  routes: [
  	{
  		 path: '/', redirect: '/appIndex' 
  	},
    { 
    	path: '/appIndex',name:'appIndex',meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
				components:
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

router.beforeEach((to, from, next) => {
	if (to.meta.requireAuth) {
			//这里写登陆的ajax方法
			next();
	}else{
		next();
	}
})

export default router;