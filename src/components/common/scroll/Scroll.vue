<template>
  <div class="wrapper" ref="wrapper">
     <slot></slot>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import {Bus,debounce} from '@/common/common.js'
export default {
    data() {
        return {
           bs:null,
        }
    },
    mounted(){   
      this.bs = new Bscroll(this.$refs.wrapper,{
       probeType: 3,
       ObserveDOM:true,
       observeImage:true,
       click:true,
       pullUpLoad:true,
       useTransition:true,
    })
    this.bs.on('scroll',xy=>{
        this.$emit('scroll',xy)
    })
    this.bs.on('pullingUp' ,()=>{
        this.$emit('pullingUp')
    })
    const refresh = debounce(this.refresh,500)
    Bus.on('imgLoad',data=>{
       refresh()
    })
    },
    methods: {
        refresh(){
           this.bs && this.bs.refresh()
        }
        // scrollTo(x,y,time=300){
        //    this.bs.scrollTo(x,y,time)
        // }
    },
    updated() {
       this.$nextTick(()=>{
           this.bs && this.bs.refresh()
       }) 
    },
}
</script>

<style>
.wrapper{
    height:100vh;
    width: 100vw
}

</style>