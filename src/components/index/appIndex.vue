<template>
		<div>
			<banner :item='items'></banner>
            <choose-picker></choose-picker>
            <book-drive></book-drive>
            <help-nav></help-nav>
            <destination></destination>
            <why></why>
          <next></next>
          <talk></talk>
    	</div>
</template>
<script>
import Banner from './banner.vue';
import ChoosePicker from './choosePicker.vue';
import BookDrive from './bookDrive.vue';
import helpNav from './helpNav.vue';
import destination from './destination.vue';
import why from './why.vue';
import next from './next.vue';
import talk from './talk.vue';
import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);
export default {
  name: 'appIndex',
  mounted:function(){
    Vue.http.options.emulateJSON = true;
    this.$http.post('/Api/Car/GetBaners/').then((response) => {
    // success callback
    this.items = response.body.Bans
    //传递数据到子模块

  }, (response) => {
    // error callback
  })
},
 data:function(){
      return{
        items:[]
      }
        
 },
  
  components: {
    Banner,
    ChoosePicker,
    BookDrive,
    helpNav,
    destination,
    why,
    next,
    talk
    
  },
  //传递数据到子模块中
  // Vue.components('banner',{
  //   props:['msg'],
  //   template:'<div>msg:{{msg}}</div>'

  // })

};
</script>