<template>
  <div class="good-list-item">
    <img :src="goodsitem.show.img" alt="" @load='imgLoad' />
    <div class="goods-info">
      <p>{{ goodsitem.title }}</p>
      <span class="price">{{ goodsitem.price }}</span>
      <span class="favorite">{{ goodsitem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods:{
    //每次图片刷新执行一侧refresh，但是现在listitem与scroll之间没有联系，使用事件总线来解决这一问题
    imgLoad(){
      //此处$bus还未定义，我们可以在vue原型中给它赋予vue实例，对此建立组件之间的联系
      this.$bus.$emit('imgLoadItem')
    }
  }
};
</script>

<style>
.good-list-item {
  padding-bottom: 40px;
  padding-top: 20px;
  position: relative;
  width: 48%;
  
}
.good-list-item img {
  width: 100%;
  height: 100%;
  border-radius:20px ;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .favorite {
  position: relative;
}
.goods-info .favorite::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>