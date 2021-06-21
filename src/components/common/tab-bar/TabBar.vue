<template>
  <div class="tab-bar">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.tab-bar{
  display: flex;
  align-items: center;
  background-color: #f6f6f6;
  height: 49px;
  position: fixed;
  bottom: 0;right: 0;left: 0;
  box-shadow: 0 -3px 1px rgba(100, 100, 100, .1);
}
</style>