<template>
  <div id="app">
      <!-- <router-view name="city"></router-view> -->
      <router-view name="appIndex"></router-view>
      <router-view name="city"></router-view>
  </div>
</template>

<script>
import store from "./store/cityStore.js";


export default {
  store
};
</script>
