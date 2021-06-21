<template>
 <main-tab-bar></main-tab-bar>
  <router-view/>
</template>
<script>
import MainTabBar from './components/MainTabBar.vue'
export default {
  components: { MainTabBar },
  
}
</script>
<style>
@import "assets/css/base.css";
</style>
