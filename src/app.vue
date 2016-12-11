<template>
  <div id="app">
    	<banner></banner>
    	<choose-picker></choose-picker>
    	<book-drive></book-drive>
    	<help-nav></help-nav>
    	<destination></destination>
    	<why></why>
  </div>
</template>

<script>
import Banner from './components/index/banner.vue';
import ChoosePicker from './components/index/choosePicker.vue';
import BookDrive from './components/index/bookDrive.vue';
import helpNav from './components/index/helpNav.vue';
import destination from './components/index/destination.vue';
import why from './components/index/why.vue';
export default {
  components: {
    Banner,
    ChoosePicker,
    BookDrive,
    helpNav,
    destination,
    why
  }
};
</script>
