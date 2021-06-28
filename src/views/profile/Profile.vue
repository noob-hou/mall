<template>
  <div class="profile">
      <nav-bar>
          <template #nav-center>
              <div> noob-hou个人商城</div>
          </template>
      </nav-bar>
      <user/>
      <money/>
      <add/>
      <list-view :list-data="orderList" class="order-list"/>
      <list-view :list-data="serviceList" class="service-list"/>
  </div>
</template>

<script>
import NavBar from 'components/common/nav-bar/NavBar.vue'
import User from './User.vue'
import Money from './Money.vue'
import ListView from './ListView.vue'
import Add from './UserAdd.vue'
export default {
  components: { 
    NavBar,
    User,
    Money,
    ListView,
    Add
   },
   data: function () {
		  return {
		    orderList: [
          {icon: '#icon-message-01', iconColor: '&#xe6df;', info: '我的消息'},
          {icon: '#icon-gouwu', iconColor: '&#xeead;', info: '积分商城'},
          {icon: '#icon-huiyuanka', iconColor: '&#xee92;', info: '会员卡'},
        ],
        serviceList: [
          {icon: '#icon-gouwuche2', iconColor: '&#xe62d;', info: '我的购物车'},
          {icon: '#icon-xiazai', iconColor: '&#xe615;', info: '下载购物APP'},
        ]
      }
    },
}
</script>

<style scoped>
.profile{
    padding-top: 44px;
}
.nav-bar{
  background-color: #ff919c;
  text-align: center;
    color: #fff;
  font-size: 18px;
}
  .order-list, .service-list {
    margin-top: 12px;
  }
.order-list{
    border-bottom: 15px solid #f2f2f2;
}

</style>