<template>
  <tab-bar>
    <tab-bar-item path="/home">
        <template #item-ico>
            <div>&#xe61e;</div>
        </template>
        <template #item-text>
            <div>首页</div>
        </template>
    </tab-bar-item>
    <tab-bar-item path="/classify">
        <template #item-ico>
            <div>&#xe7f9;</div>
        </template>
        <template #item-text>
            <div>分类</div>
        </template>
    </tab-bar-item>
    <tab-bar-item path="/cart">
        <template #item-ico>
            <div>&#xe62d;</div>
        </template>
        <template #item-text>
            <div>购物车</div>
        </template>
    </tab-bar-item>
    <tab-bar-item path="/profile">
        <template #item-ico>
            <div>&#xe720;</div>
        </template>
        <template #item-text>
            <div>用户</div>
        </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from './common/tab-bar/TabBar.vue'
import TabBarItem from './common/tab-bar/TabBarItem.vue'
export default {
  components: { 
      TabBar,
      TabBarItem
  },

}
</script>

<style>

</style>