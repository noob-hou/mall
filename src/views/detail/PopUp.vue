<template>
  <div class="pop-up">
    <div>
     <van-card
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      />
    </div>
    <div>
        <div class="color">颜色</div>
        <div>
           <van-button type="primary">白色 </van-button>
           <van-button  type="primary">红色 </van-button>
           <van-button type="primary">粉色</van-button>
        </div>
    </div>
    <div>
        <div class="color">尺码</div>
        <div>
           <van-button type="primary">M</van-button>
           <van-button type="primary">L</van-button>
           <van-button  type="primary">XL</van-button>
           <van-button  type="primary">XLL</van-button>
        </div>
    </div>
    <div>
        <div class="color">款式</div>
        <div>
           <van-button  type="primary">网红同款</van-button>
           <van-button  type="primary">短款</van-button>
           <van-button  type="primary">中长款</van-button>
        </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
 .pop-up{
     display: flex;
     margin: 10px 10px 49px 10px;
     height: 100%;
     flex-direction: column;
 }
 .pop-up>div{
     flex: 1;
     border-bottom: 2px solid #f7f8fa;
 }
 .color{
     margin: 5px 0;
     font-size: 18px;
 }
 .van-button--primary{
     background-color: #f7f8fa;
     border: 1px solid #f7f8fa;
     margin-right: 30px;
     color: #000;
 }
</style>