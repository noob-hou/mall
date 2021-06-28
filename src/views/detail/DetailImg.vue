<template>
  <div class="imgs" v-if="Object.keys(data).length !== 0">
      <div>{{data.desc}}</div>
      <div class="key">{{data.detailImage[0].key}}</div>
      <div class="img">
        <img alt="" v-for="item in data.detailImage[0].list" @load="imgLoad" :src="item">
      </div>
  </div>
</template>

<script>
export default {
  props:{
   data:Object
   },
  methods: {
    imgLoad(){
      this.$emit('imgLoad')
    }
  },
}
</script>

<style>
.imgs{
    margin-top: 10px;
    border-top: 3px solid #ccc;
}
.key{
    text-align: center;
    font-size: 16px;
    color: #000;
}
.img{
    width: 100%;
}
.img img{
    width: 100%;
}
</style>