<template>
  <tab-bar>
    <!-- 首页 -->
    <tab-bar-item link="/home">
      <template v-slot:tabbar-icon>
        <img src="~assets/img/tabbar/home.svg" alt />
      </template>
      <template v-slot:tabbar-icon-active>
        <img src="~assets/img/tabbar/home_active.svg" alt />
      </template>
      <template v-slot:tabbar-text>
        <p>首页</p>
      </template>
    </tab-bar-item>
    <!-- 分类 -->
    <tab-bar-item link="/category">
      <template v-slot:tabbar-icon>
        <img src="~assets/img/tabbar/category.svg" alt />
      </template>
      <template v-slot:tabbar-icon-active>
        <img src="~assets/img/tabbar/category_active.svg" alt />
      </template>
      <template v-slot:tabbar-text>
        <p>分类</p>
      </template>
    </tab-bar-item>
    <!-- 购物车 -->
    <tab-bar-item link="/cart">
      <template v-slot:tabbar-icon>
        <img src="~assets/img/tabbar/cart.svg" alt />
      </template>
      <template v-slot:tabbar-icon-active>
        <img src="~assets/img/tabbar/cart_active.svg" alt />
      </template>
      <template v-slot:tabbar-text>
        <p>购物车</p>
      </template>
    </tab-bar-item>
    <!-- 我的 -->
    <tab-bar-item link="/profile">
      <template v-slot:tabbar-icon>
        <img src="~assets/img/tabbar/profile.svg" alt />
      </template>
      <template v-slot:tabbar-icon-active>
        <img src="~assets/img/tabbar/profile_active.svg" alt />
      </template>
      <template v-slot:tabbar-text>
        <p>我的</p>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>