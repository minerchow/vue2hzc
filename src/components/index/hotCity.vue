<template>
	<div>
		<div class="hot-city-wrap">
			<div class="hot-citys-world">
				<div class="hot-citys-tittle">热门城市</div>		
			</div>
			<div class="national-hot-citys">
				<ul class="clearfix">
					<li class="fl" v-for="cityItem in cityList" @click="chooseCity({cityName:cityItem.detailName,englishName:cityItem.englishName,cityType:typeCity})">{{cityItem.name}}</li>
					
				</ul>
			</div>
		</div>	
	</div>
</template>
<script>

 import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'hotCity',

  data() {
    return {
      	cityList:[
      		{
      			"no":"LAX",
      			"name":"洛杉矶",
      			"detailName":"洛杉矶国际机场",
      			"englishName":"Los Angeles International Airport"
      		},
      		{
      			"no":"SFO",
      			"name":"旧金山",
      			"detailName":"旧金山国际机场",
      			"englishName":"San Francisco International Airport"
      		}
      	],
      	typeCity:0
    };
  },
  mounted:function(){
  	//console.log(this.$route.params.typeCity)
  	this.typeCity = this.$route.params.typeCity;
  },
  
  methods: mapActions([
	      'chooseCity'
	      
  ])
};
</script>
<style lang="scss" scoped>
	
	.hot-city-wrap{
		overflow:hidden;
		background:#fff;
		width:100%;
		height:100%;
	}
	.hot-citys-world{
		margin:17px 0 0 0;
		.hot-citys-tittle{
			margin:0 0 5px 7%;
			font-size:1.2rem;
		}
	}
	.national-hot-citys{
		ul{
			li{
				width:37%;
				background:#f5f5f5;
				margin:10px 0 0 6%;
				padding:0 0  0 10px;
				height:40px;
				line-height:40px;
			}
		}
	}
</style>