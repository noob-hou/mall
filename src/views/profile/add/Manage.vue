<template>
  <div class="manage">
    <nav-bar>
      <template #nav-left>
        <div  @click="backClick">&#xe71a;</div>
      </template>
      <template #nav-center >
        <div class="nav-center">我的地址</div>
      </template>
    </nav-bar>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
import { Toast } from 'vant';
import NavBar from 'components/common/nav-bar/NavBar.vue';
export default {
  components: { NavBar },
  data() {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          isDefault: true,
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号',
        },
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号',
        },
      ],
    };
  },
  methods: {
    backClick(){
      this.$router.back()
    },
    onAdd() {
      this.$router.push('/addlocation')
    },
    onEdit(item, index) {
      Toast('编辑地址:' + index);
    },
  },
};
</script>

<style scoped>
.nav-bar{
  position: relative;
}
.nav-center{
    line-height: 49px;
    padding: 0 20px;
    text-align: center;
    font-size: 18px;
    background-color: #fff;
    color: #000;
}
</style>