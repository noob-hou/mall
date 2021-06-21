<template>
  <div class="nav-bar">
      <div class="nav-left"><slot name="nav-left"></slot></div>
      <div class="nav-center"><slot name="nav-center"></slot></div>
      <div class="nav-right"><slot name="nav-right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.nav-bar{
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 44px;
    z-index: 9;
}
.nav-left,
.nav-right{
    width: 44px;
    line-height: 44px;
    text-align: center;
    color:#fff;
}
.nav-center{
    flex: 1;
    padding: 0 5px;
}

</style>