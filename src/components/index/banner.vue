<template>
  <div>
  
  <div class="index-top" >
  	<img src="http://cdn.qiniu.h5.huizuche.com/image/title/a.png" class="son1">
  	<a href="###">
  		<img src="http://cdn.qiniu.h5.huizuche.com/image/title/b.png" class="son2" />
  	</a>
  </div>
   <mt-swipe :auto='4000' class='banner-home'>
   		<mt-swipe-item v-for="i in item">
   			<a v-bind:href="i.lnkurl">
   			<img  v-bind:src="i.imgurl" class="pic" />
   			</a>
   		</mt-swipe-item>
   		
   	</mt-swipe>

  </div>
</template>
<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  name: 'banner',
  mounted:function(){

  },
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