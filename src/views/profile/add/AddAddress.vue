<template>
  <div id="add-address">
    <nav-bar>
      <template #nav-left>
        <div  @click="backClick">&#xe71a;</div>
      </template>
      <template #nav-center >
        <div class="nav-center">我的地址</div>
      </template>
    </nav-bar>
    <van-address-edit
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"/>
  </div>
</template>

<script>
import NavBar from 'components/common/nav-bar/NavBar.vue'
export default {
  components: { NavBar },
    data() {
    return {
      searchResult: [],
    }
  },
    methods: {
    backClick(){
      this.$router.back()
    }
  },
}
</script>

<style scoped>
.nav-center{
    line-height: 49px;
    padding: 0 20px;
    text-align: center;
    font-size: 18px;
    background-color: #fff;
    color: #000;
}
.nav-bar{
  position: relative;
}
</style>