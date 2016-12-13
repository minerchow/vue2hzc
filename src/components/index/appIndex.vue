<template>
		<div>
			<banner></banner>
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

export default {
  name: 'appIndex',
  components: {
    Banner,
    ChoosePicker,
    BookDrive,
    helpNav,
    destination,
    why,
    next,
    talk
    
  }
};
</script>