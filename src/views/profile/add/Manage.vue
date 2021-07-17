<template>
  <div class="manage">
    <nav-bar>
      <template #nav-left>
        <div @click="backClick">&#xe71a;</div>
      </template>
      <template #nav-center>
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
import NavBar from "components/common/nav-bar/NavBar.vue";
import { address } from "@/network/address.js";
import { areaList } from "@vant/area-data";
export default {
  components: { NavBar },
  data() {
    return {
      addressData: {},
      chosenAddressId: "1",
      list: [],
      areaList: areaList,
      disabledList: [
        {
          id: "3",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号",
        },
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          isDefault: false,
        },
      ],
      editData: {},
    };
  },
  created() {
    this.getAddressData();
  },
  methods: {
    backClick() {
      this.$router.back();
    },
    //跳转到添加地址
    onAdd() {
      this.$router.push("/addlocation");
    },
    //挑战到修改地址
    onEdit(item, index) {
      window.sessionStorage.setItem('editaddress',JSON.stringify(this.list[index]))   
      this.$router.push('/editaddress')
    },
    // 获取地址列表并做处理
    async getAddressData() {
      this.addressData = JSON.parse(window.sessionStorage.getItem("userinfo"));
      const queryInfo = {
        userid: this.addressData.userid,
        token: this.addressData.token,
      };
      const { data: res } = await address(queryInfo);
      res.data.addresslist.forEach((item) => {
        item.address = item.address+' ' + item.detailedAddress;
        item.isDefault = item.isDefault=='1'?true:false
      });
      this.list = res.data.addresslist;
      
    },
  },
};
</script>

<style scoped>
.nav-bar {
  position: relative;
}
.nav-center {
  line-height: 49px;
  padding: 0 20px;
  text-align: center;
  font-size: 18px;
  background-color: #fff;
  color: #000;
}
</style>