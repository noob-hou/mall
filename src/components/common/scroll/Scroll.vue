<template>
  <div class="wrapper" ref="wrapper">
     <slot></slot>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
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
       click:true,
       pullUpLoad:true
    })
    this.bs.on('scroll',xy=>{
        this.$emit('scroll',xy)
    })
    this.bs.on('pullingUp' ,()=>{
        this.$emit('pullingUp')
    })
    },
    methods: {
        // scrollTo(x,y,time=300){
        //    this.bs.scrollTo(x,y,time)
        // }
    },

}
</script>

<style>
.wrapper{
    height: 100px;
}

</style>