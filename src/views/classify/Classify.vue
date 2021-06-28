<template>
 <div class="classify">
 <nav-bar class="nav-bar">
    <template #nav-center>
      <div>
        商品分类
      </div>
    </template>
 </nav-bar>
 <tab-menu :data="tabMenuItem" @itemClick="ListItemClick"/>
 <scroll ref="srcoll">
  <div class="scrollhg">
   <tab-menu-classify :data="TabMenuData"/>
   <tab-control :titles="['综合','新品','销量']" @tabClick="tabClick"/>
   <classify-goods :data="showCategoryDetail"/>
  </div>
 </scroll>
 </div>
</template>

<script>
import NavBar from 'components/common/nav-bar/NavBar.vue'
import TabMenu from './TabMenu.vue'


import Scroll from 'components/common/scroll/Scroll.vue'
import TabMenuClassify from './TabMenuClassify.vue'
import TabControl from 'views/home/TabControl.vue'
import ClassifyGoods from './ClassifyGoods.vue'
import {classify,getSubcategory,getCategoryDetail} from '@/network/classify.js'
  import {POP, SELL, NEW} from "@/common/const";
  import {tabControlMixin} from "@/common/mixin";
export default {
 components:{
   NavBar,
   Scroll,
   TabMenu,
   TabMenuClassify,
   TabControl,
  ClassifyGoods,
 },
 mixins: [tabControlMixin],
 data() {
   return {
     tabMenuItem:[],
     MenuItemData:{},
     listItemIndex:-1,
     goodsData:{},
     TabControlIndex : 'pop'
   }
 },
 computed:{
   TabMenuData(){
     if (this.listItemIndex === -1) return []
     return this.MenuItemData[this.listItemIndex].itemData.list
   },
   showCategoryDetail() {
       if (this.listItemIndex === -1) return []
		    return this.MenuItemData[this.listItemIndex].goodListsData[this.TabControlIndex]
      }
 },
 created() {
    //拉取数据方法
   this.getData()
 },
 activated() {
  this.$refs.srcoll.bs.refresh()
 },
 methods: {
   //LIst点击切换
   ListItemClick(index){
     //获取对应的数据
      this.getListData(index)
   },
   getData(){
      //tablist列表数据
   classify().then(res=>{
     const data = res.data.category
     this.tabMenuItem = data.list
     for (let i = 0; i < this.tabMenuItem.length; i++) {
       this.MenuItemData[i] = {
         //添加对象属性
            itemData:{},
            goodListsData:{
                'pop': [],
                'new': [],
                'sell': []
            }
       }
     }
     //页面初始化自动显示第一个List数据，所以先请求
        this.getListData(0)
   })
   },
   getListData(index){
     //保存index的值
     this.listItemIndex = index
     const mailKey = this.tabMenuItem[index].maitKey;
     getSubcategory(mailKey).then(res=>{
       this.MenuItemData[index].itemData = res.data
       this.MenuItemData = {...this.MenuItemData}
       this.getGoodsData(POP)
       this.getGoodsData(NEW)
       this.getGoodsData(SELL)
     })
   },
   getGoodsData(type){
      const nimiWallkey = this.tabMenuItem[this.listItemIndex].miniWallkey;
      //发送请求
      getCategoryDetail(nimiWallkey,type).then(res=>{
        this.MenuItemData[this.listItemIndex].goodListsData[type]=res
        this.MenuItemData = {...this.MenuItemData}
      })
   },
   tabClick(i){
     switch (i) {
       case 0:
         this.TabControlIndex = 'pop'
         break;
       case 1:
         this.TabControlIndex = 'new'
         break;
       case 2:
         this.TabControlIndex = 'sell'
         break;
       default:
         break;
     }
     console.log(this.MenuItemData[this.listItemIndex].goodListsData[this.TabControlIndex]);
   }
 },
}
</script>

<style scoped>
.nav-bar{
  background-color: #ff919c;
  text-align: center;
    color: #fff;
  font-size: 18px;
}
.scrollhg{
    padding: 49px 0;
    position: absolute;
    left: 25%;
    right: 0;  
}
</style>