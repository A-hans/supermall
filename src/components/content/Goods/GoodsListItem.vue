<template>
  <div class="good-list-item">
    <img v-lazy='showImg' alt="" @load='imgLoad' @click='itemClick' />
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
  computed:{
    showImg(){
      /* 
      逻辑或表达式可以判断第一个变量是否为空，show.img由home组件请求数据，在进入
      detail组件前已经存在，当进入detail组件后网络请求返回image，根据或表达式第一个式子有值将会做回返回值
      所以在这里判断时不可以反这些
       */ 
      return this.goodsitem.image || this.goodsitem.show.img
      // return this.goodsitem.show.img || this.goodsitem.image (X)
    }
  },
  methods:{
    //每次图片刷新执行一侧refresh，但是现在listitem与scroll之间没有联系，使用事件总线来解决这一问题
    imgLoad(){
      //此处$bus还未定义，我们可以在vue原型中给它赋予vue实例，对此建立组件之间的联系
      /* 
      1.通过路由判断进行操作
        为了防止进入detail后重新发送请求给home在此做一层判断，使请求相互独立
      */
    if(this.$route.path.indexOf('/home')!==-1){
       this.$bus.$emit('homeimgLoadItem')
     }else if(this.$route.path.indexOf('/detail')!==-1){
        this.$bus.$emit('detailimgLoadItem')
     }
     /* 
     2.通过取消全局事件监听,涉及混入抽取所有事件(貌似不行)
     */
    // this.$bus.$emit('imgLoadItem')
      
    },
    itemClick(){
     if(this.$route.path.indexOf('/home')!==-1){
        this.$router.push('/detail/'+this.goodsitem.iid) 
     }
      
          
    }
  },
};
</script>

<style scoped>

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