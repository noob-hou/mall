<template>
  <div class="edit-address">
    <nav-bar>
      <template #nav-left>
        <div @click="backClick">&#xe71a;</div>
      </template>
      <template #nav-center>
        <div class="nav-center">修改地址</div>
      </template>
    </nav-bar>
    <van-address-edit
      :address-info="editData"
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import NavBar from "components/common/nav-bar/NavBar.vue";
import { areaList } from "@vant/area-data";
import { editAddress, deleteAddress } from "@/network/address.js";
import { Toast } from "vant";
export default {
  components: { NavBar },
  data() {
    return {
      areaList: areaList,
      editData: {},
      index: null,
    };
  },
  created() {
    this.getEditData();
  },
  methods: {
    backClick() {
      this.$router.back();
    },
    getEditData() {
      const editaddress = JSON.parse(
        window.sessionStorage.getItem("editaddress")
      );
      this.editData = {
        name: editaddress.name,
        tel: editaddress.tel,
        addressDetail: editaddress.detailedAddress,
        isDefault: editaddress.isDefault == 1 ? true : false,
        postalCode: editaddress.postcode,
        aid: editaddress.aid,
        userid: editaddress.userid,
        token: window.sessionStorage.getItem("token"),
        areaCode:editaddress.areaCode
      };
    },
    async onSave(content) {
      const info = {
        userid: this.editData.userid,
        token: this.editData.token,
        aid: this.editData.aid,
        address: content.province + " " + content.city + " " + content.county,
        detailedAddress: content.addressDetail,
        name: content.name,
        tel: content.tel,
        postcode: content.postalCode,
        isDefault: content.isDefault == true ? 1 : 0,
        areaCode:content.areaCode
      };
      const { data: res } = await editAddress(info);
      if (res.code == 200) {
        Toast("修改地址成功");
        this.$router.back();
      }
    },
    async onDelete() {
      const info = {
        userid: this.editData.userid,
        token: this.editData.token,
        aid: this.editData.aid,
      };
      const { data: res } = await deleteAddress(info);
      if (res.code == 200) {
        Toast("修改地址成功");
        this.$router.back();
      }
    },
  },
};
</script>

<style scoped>
.nav-center {
  line-height: 49px;
  padding: 0 20px;
  text-align: center;
  font-size: 18px;
  background-color: #fff;
  color: #000;
}
.van-address-edit {
  margin-top: 44px;
}
</style>