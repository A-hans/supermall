<template>
  <div id="cart"> 
    <div class='text' v-show='isShow'>
      <img src="~assets/img/cart/cart.svg" alt="">
      <i>还没有商品哦~</i>
      </div>
    <!-- 导航 -->
    <nav-bar class="cart-nav">
      <template v-slot:center>
        <h3>购物车({{ length }})</h3>
      </template>
    </nav-bar>
    <!-- 内容 -->
    <scroll class='content' ref='Scroll'>
      <cart-list />
    </scroll>
    <!-- 工具栏 -->
    <bottom-tool @showText='showText'/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "views/cart/childComps/cartList";
import BottomTool from "views/cart/childComps/bottomTool";
import scroll from "components/common/scroll/Scroll";

import { mapGetters } from "vuex";
export default {
  name: "Cart",
  data(){
    return{
      isShow:true
    }
  },
  computed: {
    //使用辅助函数
    // ...mapGetters(['cartLength'])
    // 可设置别名
    ...mapGetters({
      length: "cartLength",
      list:'cartList'
    }), 
  },
  methods:{
    showText(){
      //判断购物车是否为空
      if(this.list.length===0){
        this.isShow=true
      }
    }
  },
  components: {
    NavBar,
    CartList,
    BottomTool,
    scroll,
  },
  activated(){
    this.$refs.Scroll.Refresh()
    //购物车为空显示文字
    if(this.list.length>0){
      this.isShow=false
    }
  },
};
</script>

<style scoped>
#cart{
  height: 100vh;
}
.cart-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.content{
  height: calc(100% - 138px);
  overflow: hidden;
}
.text{

  position: fixed;
  left: 50%;
  top: 50%;
  transform:translate(-50%,-60%) ;
  text-align: center;
  font-size: 15px;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.text img{
  display: block;
  margin-bottom: 15px;
  width: 130px;
  height: 130px;
 
}
</style>