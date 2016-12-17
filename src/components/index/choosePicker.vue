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
    <router-link :to="{name:'hotCity',params:{ typeCity:1}}">
      <div class="input-picker-form absolute-element">
          <div class="location-input-container">
              <div class="get-car">取车地点</div>
              <span class="absolute-element location-eng-name trim-text value-selected">{{takeEnName}}</span>
              <span class="absolute-element location-chi-name trim-text value-selected" style="top:70px;">{{takeName}}</span>
          </div>
      </div>
    </router-link>
    <router-link :to="{name:'hotCity',params:{ typeCity:2}}">
    <div class="location-input-container absolute-element">
      <div class="get-car">还车地点</div>
      <span class="absolute-element location-eng-name trim-text value-selected">{{returnEnName}}</span>
      <span class="absolute-element location-chi-name trim-text value-selected" style="top:70px;">{{returnName}}</span>
    </div>
    </router-link>
    <div class="datepick-wrap clearfix">
	    <div class="time-input-container fl one" v-on:click="openTakePicker">
	    	<div class="get-car-time-text">取车时间</div>
	    	<span class="absolute-element get-car-time-span value-selected">{{takeTime}}</span>
	    </div>
	    <div class="time-input-container fl" v-on:click="openReturnPicker">
	    	<div class="get-car-time-text">还车时间</div>
	    	<span class="absolute-element get-car-time-span value-selected">{{returnTime}}</span>
	    </div>
	   </div>
     <div class="get-back-car-center">
       <p class="time-period-tip">
         共<span>{{betweenTimeNum}}</span>天
       </p>
     </div>
     <div class='search-btn'>
        <div>
          <span>搜索海外租车</span>
        </div>
      </div>
    	<mt-datetime-picker
        :end-date="endDateTake"
        ref="takePicker"
        month-format="{value} 月"
    	date-format="{value} 日"
        v-model="pickerValue"
      
    	@confirm="handleConfirmTake">
      </mt-datetime-picker>
      <mt-datetime-picker
            :start-date="startDateReturn"
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
import { mapGetters, mapActions } from 'vuex';
Vue.component(DatetimePicker.name, DatetimePicker);
export default {
  name: 'choosePicker',
  
  mounted:function(){
    this.takeTimeString = new Date(),
    this.returnTimeString = new Date(new Date().getTime()+864000*1000),
    this.betweenTimeNum = Math.floor((this.returnTimeString - this.takeTimeString)/(24*3600*1000));
    this.takeTimeStringFormat = new Date().getTime();
    this.startDateReturn = this.takeTimeString;
    
    if(this.getType == 1){
      this.takeName = this.getCity;
      this.returnName = this.getCity;
      this.takeEnName = this.getEnName;
      this.returnEnName = this.getEnName;
    }
    else if(this.getType == 2){

        console.log(this.getCity);
        console.log(this.getEnName);
        this.returnName = this.getCity;
        this.returnEnName = this.getEnName;
    }
  },
  data:function() {
    var that = this;
    
    return {
      msg: 'choosePicker',
      takeTime:Util.formatTime("MM月dd日 hh:mm",new Date()),
	    returnTime:Util.formatTime("MM月dd日 hh:mm",new Date(new Date().getTime()+864000*1000)),
      nowDate : new Date(),
      takeName:"洛杉矶国际机场",
      takeEnName:"Los Angeles International Airport",
      returnName:"洛杉矶国际机场",
      returnEnName:"Los Angeles International Airport",
      betweenTimeNum:"",
      startDateReturn:new Date(),
      endDateTake:new Date()
    };
  },
 computed: mapGetters([
        'getCity','getType','getEnName'
  ]),
  methods: {
    
	  openTakePicker:function() {
        this.$refs.takePicker.open();

      },
	  openReturnPicker:function(){
		  this.$refs.returnPicker.open();
	  },
	  handleConfirmTake:function(value){
      this.takeTimeString = value;
      this.startDateReturn = this.takeTimeString;
      this.takeTimeStringFormat = value.getTime();
		  this.takeTime = Util.formatTime("MM月dd日 hh:mm",value.getTime());
		  var betweenTime = this.returnTimeStringFormat - this.takeTimeStringFormat;
      this.betweenTimeNum = Math.floor(betweenTime/(24*3600*1000))
	  },
	  handleConfirmReturn:function(value){
      this.returnTimeStringFormat= value.getTime();
      this.returnTimeString = value;
      this.endDateTake = this.returnTimeString;
		  this.returnTime = Util.formatTime("MM月dd日 hh:mm",value.getTime());
      var betweenTime = this.returnTimeStringFormat - this.takeTimeStringFormat;
      console.log(this.returnTimeStringFormat);
      console.log(this.takeTimeStringFormat);
      this.betweenTimeNum = Math.floor(betweenTime/(24*3600*1000))
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
  .datepick-wrap{
    background:#fff;
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
  .input-picker-form.absolute-element{
    position:relative;
    background:#fff;
  }
  .location-input-container.absolute-element{
    position:relative;
    background:#fff;
  }
  .location-input-container, .time-input-container{
    position:relative;
    
  }
  .location-input-container{
    height:98px;
    border-bottom:1px solid #e4e4e4;
    .get-car{
      display:block;
      font-size:1.4rem;
      color:#999;
      margin-left:3.3%;
      padding:10px 0 0 0;
    }
    span.value-selected{
      font-weight:normal;
      font-size:1.2rem;
      top:40px;
      left:3.3%;
      color:#4b4b4b;
      position:absolute;
    }
  }
  .get-back-car-center{
    font-size:1.4rem;
    margin-top:20px;
    width:100%;
    display:block;
    text-align:center;
    height:20px;
    clear:both;
    .time-period-tip{
      top:30%;
      width:100%;
      text-align:center;
      span{
        color:rgb(255,126,11)
      }
    }
  }
  .search-btn{
  font-size:1.6rem;
  width:94%;
  height:48px;
  line-height:48px;
  position:relative;
  left:3%;
  text-align:center;
  color:white;
  background:#ff8400;
  margin-top:10px;
  }
</style>