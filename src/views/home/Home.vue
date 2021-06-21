<template>
  <nav-bar class="home-nav-bar">
    <template #nav-left>
      <div class="home-nav-left">&#xe6b8;</div>
    </template>
    <template #nav-center>
      <div class="home-nav-center">
        <div><input type="sreah" placeholder="搜索你喜欢的商品"></div>
      </div>
    </template>
    <template #nav-right>
      <div>登录</div>
    </template>
  </nav-bar>
<scroll  ref="scroll"  @scroll="contentScroll">
 <div class="scrollhg">
    <swiper :banners="banners"></swiper>
  <recommend-view :recommend="recommend"></recommend-view>
  <apply>
  <apply-item v-for="item in applyData">
      <template #item-img>
        <div>
          <img :src="item.img" alt="">
        </div>
      </template>
      <template #item-txt>
        <div>{{item.txt}}</div>
      </template>
  </apply-item>
  </apply>
  <feature-view></feature-view>
  <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="gettop"/>
  <goods-list :goods="goods[currentType].list"/>
 </div>
</scroll>
<back-top  @click="backClick" v-show="isShow"/>
</template>

<script>
//滚动区域
import scroll from 'components/common/scroll/Scroll.vue'
//头部导航
import NavBar from 'components/common/nav-bar/NavBar.vue'
//轮播图
import swiper from 'components/common/swiper/swiper.vue'
//推荐
import recommendView from './RecommendView.vue'
//应用功能
import apply from './Apply.vue'
import applyItem from './ApplyItem.vue'
//本周流行
import featureView from './featureView.vue'
//商品推荐
import TabControl from './TabControl.vue'
import GoodsList from './GoodsList.vue'
//返回顶部
import BackTop from 'components/BackTop.vue'
//首页axios封装网络请求
import {getHomeMultData,getHomeGoodsData} from '@/network/home.js'
import Scroll from '../../components/common/scroll/Scroll.vue'
export default {
 components:{
   NavBar,
   swiper,
   recommendView,
   apply,
   applyItem,
   featureView,
   TabControl,
   GoodsList,
   BackTop,
   scroll,
  Scroll
},
 data() {
    return {
      banners:[],
      dKeyword:[],
      keywords:[],
      recommend:[],
      applyData:[{
        img:require('assets/img/nav3.png'),
        txt:'手机充值'
      },{
        img:require('assets/img/nav1.webp'),
        txt:'超市购物'
      },{
        img:require('assets/img/nav6.png'),
        txt:'急速到家'
      },{
        img:require('assets/img/nav2.webp'),
        txt:'全球代购'
      },{
        img:require('assets/img/nav4.png'),
        txt:'美容仪器'
      },{
        img:require('assets/img/nav5.png'),
        txt:'网红同款'
      },{
        img:require('assets/img/nav7.png'),
        txt:'9.9元拼'
      },{
        img:require('assets/img/nav8.png'),
        txt:'领卷'
      },{
        img:require('assets/img/nav9.png'),
        txt:'领津贴'
      },{
        img:require('assets/img/nav0.png'),
        txt:'加入会员'
      },],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      currentType:'pop',
      isShow:false,
      times:null
    }
  },
 created(){
   this.getHomeMultData()
   this.getHomeGoodsData('pop')
   this.getHomeGoodsData('new')
   this.getHomeGoodsData('sell')
  
 },
 methods: {
  //网络请求home组件数据
  getHomeMultData(){
    getHomeMultData().then(res=>{
     this.banners = res.data.banner.list;
     this.dKeyword = res.data.dKeyword.list;
     this.keywords = res.data.keywords.list;
     this.recommend = res.data.recommend.list;
   })
  },
  //请求商品底部商品数据
  getHomeGoodsData(type){
    const page = this.goods[type].page+1
   getHomeGoodsData(type,page).then(res=>{
     this.goods[type].list.push(...res.data.list)
    
   },err=>{
     console.log(err);
   })
  },
  //事件监听
  tabClick(index){
    switch (index) {
      case 0:
        this.currentType = 'pop'
        break;
      case 1:
        this.currentType = 'new'
        break;
      case 2:
        this.currentType = 'sell'
        break;
    }
  },
  //返回顶部
  backClick(){
        this.$refs.scroll.bs.scrollTo(0,0,500)
  },
  //显示隐藏返回顶部按钮
  contentScroll(xy){
   this.isShow= xy.y<-750?this.isShow = true:this.isShow=false
  }
  //返回顶部点击
//   backClick(){
//       this.times = setInterval(() => {
//        if(document.documentElement.scrollTop>0){
//            document.documentElement.scrollTop-=document.documentElement.scrollTop/100
//        }else{
//          clearInterval(this.times)
//        }
//        }, 1)
//   },
//   showBackTop(){
//     if(document.documentElement.scrollTop > 772){
//       this.isShow = true
//     }else{
//       this.isShow =false
//     }
//   }
//  },
//  mounted(){
//  window.addEventListener('scroll',this.showBackTop,true)
// },
}}
</script>

<style>
.home-nav-bar{
  background-color: #ffc001;
}
.home-nav-left{
   font-family: "iconfont";
    font-size: 20px;
}
.home-nav-center input{
  height: 30px;
  width: 100%;
  border-radius: 15px;
  margin: 7px 5px;
  padding-left:20px;
}
.scrollhg{
  height: calc(100%-90px);
  overflow: hidden;
}
</style>