<template>
  <div id="cart">
    <nav-bar class="cart-nav">
      <template v-slot:center>
        <div>购物车({{ length }})</div>
      </template>
    </nav-bar>
    <scroll class='content' ref='Scroll'>
      <cart-list />
    </scroll>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "views/cart/childComps/cartList";
import scroll from "components/common/scroll/Scroll";
import { mapGetters } from "vuex";
export default {
  name: "Cart",
  computed: {
    //使用辅助函数
    // ...mapGetters(['cartLength'])
    // 可设置别名
    ...mapGetters({
      length: "cartLength",
    }),
  },
  components: {
    NavBar,
    CartList,
    scroll,
  },
  activated(){
    console.log('-----');
    this.$refs.Scroll.Refresh()
  }
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
  height: calc(100% - 49px);
  overflow: hidden;
}

</style>