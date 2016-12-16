<template>
  <div>
  <div>{{item}}</div>
  <div class="index-top" >
  	<img src="http://cdn.qiniu.h5.huizuche.com/image/title/a.png" class="son1">
  	<a href="###">
  		<img src="http://cdn.qiniu.h5.huizuche.com/image/title/b.png" class="son2" />
  	</a>
  </div>
   <mt-swipe :auto='4000' class='banner-home'>
   		<mt-swipe-item>
   			<a title="海外自驾搞定5步，马上出发！还送450元租车劵" href="###">
   			<img alt="海外自驾搞定5步，马上出发！还送450元租车劵" src="http://cdn.qiniu.app.huizuche.com/9月大促APP-BANNER.jpg" class="pic" />
   			</a>
   		</mt-swipe-item>
   		<mt-swipe-item>
   			<a title="全球最大租车公司Hertz特别福利，自驾爱好者专享" href="###">
   			<img alt="海外自驾搞定5步，马上出发！还送450元租车劵" src="http://cdn.qiniu.app.huizuche.com/APP-LB-BANNER-HERTZ.jpg" class="pic"/>
   			</a>
   		</mt-swipe-item>
   		<mt-swipe-item>
   			<a title="【惠租车】送你一本驾照，中国驾照，全球通行，限量申领!" href="###">
   			<img alt="【惠租车】送你一本驾照，中国驾照，全球通行，限量申领" src="http://cdn.qiniu.app.huizuche.com/0912appcdllunbo.jpg" class="pic"/>
   			</a>
   		</mt-swipe-item>
   		<mt-swipe-item>
   			<a title="全球租车领先品牌AVIS限时85折，自驾爱好者专享" href="###">
   			<img alt="全球租车领先品牌AVIS限时85折，自驾爱好者专享" src="http://cdn.qiniu.app.huizuche.com/app-banner(6).jpg" class="pic"/>
   			</a>
   		</mt-swipe-item>
   		<mt-swipe-item>
   			<a title="全球著名5租车品牌SITX限时85折，自驾爱好者专享！" href="###">
   			<img alt="全球著名5租车品牌SITX限时85折，自驾爱好者专享！" src="http://cdn.qiniu.app.huizuche.com/app-banner(7).jpg" class="pic"/>
   			</a>
   		</mt-swipe-item>
   		<mt-swipe-item>
   			<a title="【2016年度海外自驾游路线评选】投票给你最想体验的路线。" href="###">
   			<img alt="【2016年度海外自驾游路线评选】投票给你最想体验的路线。" src="http://cdn.qiniu.app.huizuche.com/app-banner1020.jpg" class="pic"/>
   			</a>
   		</mt-swipe-item>
   	</mt-swipe>

  </div>
</template>
<script type="text/ecmascript-6">
import Vue from 'vue';
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  name: 'banner',

  data() {
    return {
      msg: ''
    };
  },
  props:{
    item:{

    }
  }
};
</script>

<style lang="scss" scoped>
 .banner-home{
  	overflow:hidden;
  	text-align:center;
  	position:relative;
  	width:100%;height:160px;
  }
  .banner-home mt-swipe-item:first-child{
		z-index:1;
  }
   .pic{
  	position:absolute;
  	left:0;
  	top:0;
  	width:100%;
  	border:none;
  }
  .index-top{
  	background: rgba(0,0,0,0.5);
  	width:100%;
  	height:40px;
  	z-index:99;
  	color:#fff;
  	position:absolute;
  	top:0;
  	left:0;
  }
  .son1{
  	margin-left:10px;
  	height:40px;
  	margin-top:2px;
  	vertical-align: middle;
  }
  .son2{
  	margin-top:6px;
  	float:right;
  	margin-right:20px;
  	height:27px;
  	vertical-align:middle;
  }
</style>