<template>
  <div class="shop-info">
    <div class="iminfo">
        <div class="logo"><img :src="data.logo" alt="" width="40"></div>
        <div class="name">{{data.name}}</div>
    </div>
    <div class="information">
        <div class="num">
            <div>
                <div>{{data.sells}}</div>
                <div>总销量</div>
            </div>
            <div>
                <div>{{data.fans}}</div>
                <div>全部宝贝</div>
            </div>
        </div>
        <div class="sud">
            <div v-for="(item,index) in data.score">
                <span v-for="(i,x) in item">{{i}}</span>
                <span class="a"><strong :class="{active1:item.isBetter}">高</strong></span>
            </div>
        </div>
    </div>
    <div class="import">
        <span><a href="javascript:;">进店逛逛</a></span>
    </div>
  </div>
</template>

<script>
export default {
 props:{
    data:{
        type:Object,
        default(){
            return {}
        }
    }
 },

}
</script>

<style scoped>
.shop-info{
    color: #000;
    padding-top: 5px;
}
.iminfo div{
    float: left;
}
.logo img{
    border:2px solid #ccc;
    border-radius: 50%;
    margin-right: 10px;
}
.name{
    font-size: 18px;
    line-height: 40px;
    height: 40px;
}
.information{
    display: flex;
    clear: both;
}
.information>div{
    flex: 1;
}
.num{
    display: flex;
    border-right: 2px solid #ccc;
}
.num>div{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.sud>div{
    display: flex;
}
.sud span{
    flex: 1;
    text-align: center;
}
.sud span:nth-child(3){
    display: none;
}
.a strong{
    background-color: red;
}
.active1{
    background-color: green !important;
}
.import{
    text-align: center;
    margin: 10px auto;
}
.import>span{    
    font-size: 18px;
    color: #000;
    padding: 3px;
    background-color: #9687eb45;
    padding: 3px 31px;
}
</style>