<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center> 美丽说 </template>
      </nav-bar>
    <scroll class="content" ref='Scroll' 
    :probe-type='3' 
    :pullUpLoad='true' 
    @scroll='contentScorll' 
    @pullingUp='loadMore'>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
    <feature-view />
    <tab-control
      :titles="['流行', '新款', '精选']"
      class="tab-control"
      @tabClick="tabClick"/>
    <good-list :goodslist="showGoods" />
    </scroll>
    <back-top @click.native='btnBackTop' v-show='isShowBackTop'></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import scroll from "components/common/scroll/Scroll";
import backTop from "components/common/scroll/backTop"

import TabControl from "components/content/Tabcontrol/TabControl";
import GoodList from "components/content/Goods/GoodsList";

import HomeSwiper from "views/home/ChildComps/HomeSwiper";
import RecommendView from "views/home/ChildComps/RecommendView";
import FeatureView from "views/home/ChildComps/FeatureView";

import { getHomeMultiData, getHomeGoods } from "network/home";
import {debounce} from "common/utils"
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop' : { page: 0, list: [] },
        'new' : { page: 0, list: [] },
        'sell': { page: 0, list: [] },
      },
      currentTitle: "pop",
      isShowBackTop:false
    };
  },
  computed:{
    showGoods(){
      return this.goods[this.currentTitle].list
    }
  },
  methods: {
    //选项卡切换传值方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentTitle = "pop";
          break;
        case 1:
          this.currentTitle = "new";
          break;
        case 2:
          this.currentTitle = "sell";
          break;
      }
    },
      //封装返回顶部方法，可传三个值，x,y,time
     btnBackTop(){
      this.$refs.Scroll.ScrollTo(0,0,500)
    },
    //是否隐藏返回首页
    contentScorll(postion){
      this.isShowBackTop=-(postion.y)>1000
    },
    //加载更多
    loadMore(){
      this.getHomeGoods(this.currentTitle);
      this.$refs.Scroll.FinishPullUp()
    },
    
    /* 
    网络请求相关方法 
    */
    //获取主页轮播图和推荐数据
    getHomeMultiData() {
      getHomeMultiData().then((res) => {
        //将数据保存至本地
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        //将请求回来的一组数据保存至对应类型的list中
        this.goods[type].list.push(...res.data.list);
        //每次请求完后，page+1，进行下一次的数据请求
        this.goods[type].page + 1;
      });
    },
   
  },
  created() {
    //请求首页数据
    this.getHomeMultiData();
    //请求goods数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    
  },
  mounted(){
     //加载图片刷新进行refresh
     const refresh=debounce(this.$refs.Scroll&&this.$refs.Scroll.Refresh,500)
    //保证scroll对象拥有了在执行refresh，没创建此对象就调用会报错
     this.$bus.$on('imgLoadItem',()=>{
      refresh()
    })
  },
  components: {
    NavBar,
    scroll,
    backTop,
    TabControl,
    GoodList,
    HomeSwiper,
    RecommendView,
    FeatureView,
  },
};
</script>

<style scoped>
#home {
  padding-top: 49px;
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 9;
}
.tab-control {
  /* 此属性会动态决定absolute和fixed，当到达顶部向下49px时变为固定定位 */
  /* 使用better-scroll后此属性不在能监听滚动失效 */
  position: sticky;
  top: 49px;
  z-index: 9;
}
.content{
  /* 动态计算 */
  /* height: calc(100% - 98px); */
  position: absolute;
  top: 49px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
  
}
</style>