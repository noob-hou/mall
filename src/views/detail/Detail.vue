<template>
  <div id="detail">
   <nav-bar class="bg">
      <template #nav-left>
          <div @click="BackClick">&#xe71a;</div>
      </template>
      <template #nav-center>
          <div class="nav-center">
              <span v-for="(item,index) in titles" 
               @click="spanClick(index)" :class="{navactive:index == current}">{{item}}
              </span>
            </div>
      </template>
   </nav-bar>
   <scroll ref="scroll" @scroll="scroll">
    <div class="scrollhg">
     <detail-swiper :topImg="topImg"/>
     <detail-base-info :data="classData"/>
     <shop-info :data="shopInfo"/>
     <detail-img :data="detailInfo" @imgLoad="imgLoad"/>
     <detail-size :data="params" ref="size"/>
     <detail-commenter :data="userCommenter" ref="commenter"/>
     <goods-list :goods="recommendData" ref="recommend"/>
    </div>
   </scroll>
   <detail-nav-bar @addCart="addToCart"/>
   <back-top  @click="backClick" v-show="isShow"/>
  </div>
</template>

<script>
import NavBar from 'components/common/nav-bar/NavBar.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import DetailSwiper from './DetailSwiper.vue'
import DetailBaseInfo from './DetailBaseInfo.vue'
import ShopInfo from './ShopInfo.vue'
import DetailImg from './DetailImg.vue'
import DetailSize from './DetailSize'
import DetailCommenter from './DetailCommenter.vue'
import GoodsList from '../home/GoodsList.vue'
import BackTop from 'components/BackTop.vue'
import DetailNavBar from './DetailNavBar.vue'
import {getDetail,DetailData,Shop,GoodsParam,getRcommend} from '@/network/detail.js'
import {debounce} from '@/common/common.js'
import {Toast} from 'vant'
export default {
  name:'detail',
  components: { 
      NavBar ,
      DetailSwiper,
      DetailBaseInfo,
      ShopInfo,
      DetailImg,
      Scroll,
      DetailSize,
      DetailCommenter,
      GoodsList,
      BackTop,
      DetailNavBar
      },
 data() {
     return {
         titles:['商品','详情','评论','推荐'],
         iid:null,
         activeColor:false,
         current:0,
         topImg:[],
         classData:{},
         shopInfo:{},
         detailInfo:{},
         params:{},
         userCommenter:[],
         recommendData:[],
         OffsetY:[],
         getTopY:null,
         isShow:false,
     }
 },
 created() {
     this.iid = this.$route.params.iid
     getDetail(this.iid).then(res=>{
        const data = res.result 
        //轮播图数据
        this.topImg = data.itemInfo.topImages
        //商品详情数据
        this.classData = new DetailData(data.itemInfo,data.columns,data.shopInfo.services)
        //店铺信息数据
        this.shopInfo = new Shop(data.shopInfo)
        //展示图片
        this.detailInfo = data.detailInfo
        //参数数据
        this.params = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        //用户评价
        this.userCommenter = data.rate.list||[]
     })
     getRcommend().then(res=>{
       this.recommendData = res.data.list;
     })
     this.getTopY = debounce(()=>{
        this.OffsetY = []
         this.OffsetY.push(0)
         this.OffsetY.push(this.$refs.size.$el.offsetTop)
         this.OffsetY.push(this.$refs.commenter.$el.offsetTop)
         this.OffsetY.push(this.$refs.recommend.$el.offsetTop )
         this.OffsetY.push(Number.MAX_VALUE)
     },100)
 },
 mounted() {
      this.$refs.scroll.bs.refresh()
 },
 methods: {
     BackClick(){
         this.$router.back()
     },
     spanClick(index){
         this.current = index
         //点击到对应位置
         this.$refs.scroll.bs.scrollTo(0,-this.OffsetY[index],500)
     },
     imgLoad(){
         this.getTopY()    
     },
     //监听滚动
     scroll(xy){
        this.isShow= xy.y<-750?this.isShow = true:this.isShow=false
        this.OffsetY.forEach((item,index,arr)=>{
            if(-xy.y+10>arr[index]&&-xy.y+10<arr[index+1]){
              this.current = index
            }
        })
     },
       //返回顶部
     backClick(){
        this.$refs.scroll.bs.scrollTo(0,0,500)
    },
    //填数据添加到vuex
    addToCart(){
        const cartData = {}
        cartData.iid = this.iid;
        cartData.image = this.topImg[0];
        cartData.title = this.classData.title;
        cartData.desc = this.classData.desc;
        cartData.price = this.classData.realPrice;
        this.$store.commit('xaddCart',cartData)
        Toast('加入购物车成功')
    }
 }
}
</script>

<style scoped>
.nav-center{
    display: flex;
    line-height: 49px;
    padding: 0 20px;
}
.nav-center span{
    flex: 1;
    text-align: center;
}
.navactive{
    color: red;
}
.bg{
    background-color: #fff;
}
</style>