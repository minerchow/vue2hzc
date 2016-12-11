<template>
  <div>
    <div class="shuttle-air clearfix">
    	<div class="self-driving fl">
    		<a class="" href="javascript:void(0)"><img class="" src="../../assets/jiesongji.png"><span>海外租车</span></a>

    	</div>
    	<div class="ariport fr">
    		<a title="海外接送机" href="http://mc.huizuche.com"><img  src="../../assets/zijiache.png"><span>海外接送机</span></a>
    	</div>
    </div>
    <div class="clearfix">
	    <div class="time-input-container fl one" v-on:click="openTakePicker">
	    	<div class="get-car-time-text">取车时间</div>
	    	<span class="absolute-element get-car-time-span value-selected">{{takeTime}}</span>
	    </div>
	    <div class="time-input-container fl" v-on:click="openReturnPicker">
	    	<div class="get-car-time-text">还车时间</div>
	    	<span class="absolute-element get-car-time-span value-selected">{{returnTime}}</span>
	    </div>
	</div>
	<mt-datetime-picker
    ref="takePicker"
	month-format="{value} 月"
	date-format="{value} 日"
    v-model="pickerValue"
	@confirm="handleConfirmTake">
  </mt-datetime-picker>
  <mt-datetime-picker
			  ref="returnPicker"
			  month-format="{value} 月"
			  date-format="{value} 日"
			  v-model="pickerValue"
			  @confirm="handleConfirmReturn">
  </mt-datetime-picker>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue';
import { DatetimePicker } from 'mint-ui';
import Util from '../../common/util.js'
//import "../ui/dateTimePciker.css"
Vue.component(DatetimePicker.name, DatetimePicker);
export default {
  name: 'choosePicker',

  data:function() {
    return {
      msg: 'choosePicker',
	  takeTime:Util.formatTime("MM月dd日 hh:mm",new Date()),
	  returnTime:Util.formatTime("MM月dd日 hh:mm",new Date(new Date().getTime()+864000*1000))
    };
  },
  methods: {
	  openTakePicker:function() {
        this.$refs.takePicker.open();

      },
	  openReturnPicker:function(){
		  this.$refs.returnPicker.open();
	  },
	  handleConfirmTake:function(value){
		  this.takeTime = Util.formatTime("MM月dd日 hh:mm",value.getTime());
		  console.log(this.takeTime)
	  },
	  handleConfirmReturn:function(value){
		  this.returnTime = value.formatTime("MM月dd日 hh:mm",value.getTime());
	  }
  }
};
</script>

<style lang="scss" scoped>

  .shuttle-air{
  	margin:6px 0 0 0;
  	height:45px;
  	background:#fff;
  	width:100%;
  	.self-driving{
  		display:inline-block;
  		width:50%;
  		text-align:center;
  		color:#28a677;
  		background:#fff;
  		height:42px;
  		font-size:1.2rem;
  		a{
  			text-decroation:none;
  			color:#28a677;
  			border-bottom:1px solid #28a677;
  			background:#fff;
  			height:40px;
  			line-heigit:40px;
  			display:inline-block;
  			width:100%;
  		}
  		img{
  			width:23px;
  			height:23px;
  			position:relative;
  			top:7px;
  		}
  		span{
  			vertical-align:sub;
  			margin-left:3px;
  		}
  	}
  	.ariport{
  		display:inline-block;
  		width:50%;
  		text-align:center;
  		color:#fff;
  		height:42px;
  		font-size:1.2rem;
  		img{
  			width:23px;
  			height:23px;
  			position:relative;
  			top:7px;
  		}
  		a{
  			width:100%;
  			color:#fff;
  			text-decroation:none;
  			display:inline-block;
  			height:40px;
  			line-height:40px;
  			span{
  				vertical-align:sub;
  				margin-left:6px;
  				color:#757575;
  			}
  		}
  	}
  }
  .time-input-container{
  	width:48.2%;
  	height:82px;
  	position:relative;
  	&.one{
  		border-right:1px solid #e4e4e4;
  	}
  	.get-car-time-text{
  		display:block;
  		margin:13px 0 0 13.3%;
  		font-size:1.4rem;
  		color:#999;
  	}
  	span.value-selected{
  		letter-spacing:1px;
  		font-weight:normal;
  		font-size:1.4rem;
  		top:48px;
  		color:#4b4b4b;
  	}
  	.absolute-element{
  		position:absolute;
  		left:13.3%;
  	}
  }
</style>