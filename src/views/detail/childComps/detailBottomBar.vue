<template>
  <div class='buttom-bar'>
 <div class='bar-item bar-left'>
   <div>
     <i class='icon serive'></i>
     <p class='text'>客服</p>
   </div>
   <div>
     <i class='icon shop'></i>
     <p class='text'>店铺</p>
   </div>
   <div>
     <i class='icon select'></i>
     <p class='text'>收藏</p>
   </div>
 </div>
 <div class='bar-item bar-right'>
   <div class='cart' @click='addCart'>加入购物车</div>
   <div class='buy'>购买</div>
 </div>
  </div>
</template>

<script>
export default {
name:'detaiBottomBar',
methods:{
  addCart(){
    this.$emit('addCart')
  }
}

}
</script>

<style scoped>
.buttom-bar{
  height: 49px;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 9;
  
  display: flex;
}

.bar-item{
  flex: 1;
  display: flex;
}
.bar-left>div{
  flex: 1;
  text-align: center;
}
.bar-left .icon{
  /* i标签通常用来放icon
     i标签会行内元素
   */
  display: block;
  height: 22px;
  width: 22px;
  margin: 6px auto 4px  ;
  background: url("~assets/img/detail/detail_bottom.png")0 0/100%;
}
.bar-left .text{
  font-size: 13px;
}
.bar-left .serive{
 background-position: 0 -52px;
}
.bar-left .shop {
   background-position: 0 -98px;
  }
.bar-right>div{
  flex: 1;
  font-size: 13px;
  color: #fff;
  text-align: center;
  line-height: 52px;
}
.bar-right .cart{
    background-color: #ffe817;
    color: #333;
}
.bar-right .buy{
  background-color: #f69;
}
</style>