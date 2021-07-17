<template>
  <div id="add-address">
    <nav-bar>
      <template #nav-left>
        <div  @click="backClick">&#xe71a;</div>
      </template>
      <template #nav-center >
        <div class="nav-center">添加地址</div>
      </template>
    </nav-bar>
    <van-address-edit
      show-postal
      show-set-default
      show-search-result
      :area-list="areaList"
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      />
  </div>
</template>

<script>
import NavBar from 'components/common/nav-bar/NavBar.vue'
import { areaList } from '@vant/area-data';
import {addAddress} from '@/network/address.js'
import { Toast } from 'vant';
export default {
  components: { NavBar },
    data() {
    return {
      areaList:areaList,
      searchResult: [],
      userid:null,
      token:null
    }
  },
  created() {
    //获取需要得用户信息并保存
    const data = JSON.parse(window.sessionStorage.getItem('userinfo'))
    this.userid = data.userid
    this.token = data.token
  },
  methods: {
    backClick(){
      this.$router.back()
    },
    //保存添加得地址并上传
    async onSave(content){
      const info = {
       userid : this.userid,
       token : this.token,
       address:content.province+' '+content.city+' '+content.county,
       detailedAddress:content.addressDetail,
       name:content.name,
       tel:content.tel,
       postcode:content.postalCode,
       isDefault:content.isDefault == true?1:0,
       areaCode:content.areaCode
      }
      const {data:res} = await addAddress(info)
      Toast(res.msg)
      if(res.msg=="地址添加成功"){
        this.$router.back()
      }
    }

  },
}
</script>

<style scoped>
.nav-center{
    line-height: 49px;
    padding: 0 20px;
    text-align: center;
    font-size: 18px;
    background-color: #fff;
    color: #000;
}
.nav-bar{
  position: relative;
}
</style>