<template>
  <div id="cartList-item">
     <div class="item-checked">
       <input type="checkbox">
    </div>
    <div class="item-img">
      <img :src="iteminfo.image" alt="">
    </div>
  <div class='item-info'>
    <div class='item-title'>{{iteminfo.title}}</div>
    <div class='item-desc'>商品描述：{{iteminfo.desc}}</div>
    <div class="info-bottom">
        <div class="item-price left">¥{{iteminfo.price}}</div>
        <div class="item-count right">
          <span>数量：</span>
         <input type="text" v-model="iteminfo.count">
        </div>
    </div>
  </div>
   
  </div>
</template>

<script>
export default {
name:'cartListItem',
props:{
  iteminfo:{
    type:Object,
    default(){
      return {}
    }
  }
}
}
</script>

<style scoped>
#cartList-item{
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.item-checked{
  width: 14%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-img {
  padding: 5px;
  flex: 1;
}
.item-img img{
  width: 80px;
  height: 100px;
  border-radius: 5px;
}
.item-info{
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
    flex: 2;
}
.item-title, .item-desc {
    overflow: hidden;
    /* 文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签 */
    white-space:nowrap;
    text-overflow: ellipsis;
  }
.item-info .item-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }
.info-bottom {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }
.info-bottom .item-count{
  font-size: 14px;
}
.info-bottom .item-count input{
  width:30px;
  text-align: center;
}
.info-bottom .item-price {
    color: orangered;
  }
</style>