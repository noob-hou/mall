<template>
  <main-tab-bar></main-tab-bar>
  <router-view v-slot="{ Component }">
    <transition>
      <div>
        <keep-alive exclude="detail">
          <component :is="Component" />
        </keep-alive>
      </div>
    </transition>
  </router-view>
</template>
<script>
import MainTabBar from "./components/MainTabBar.vue";
export default {
  components: { MainTabBar },
};
</script>
<style>
@import "assets/css/base.css";
#app {
  height: calc(100vh - var(--status-bar-height) - var(--window-bottom));
  width: 100vw;
}
</style>
