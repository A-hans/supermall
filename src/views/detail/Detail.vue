<template>
  <div id="detail">
    <detail-navBar />
    <scroll class="content" ref="Scroll">
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shopInfo="shopInfo" />
      <detail-goods-info :detailInfo='detailInfo' @imgLoad='imgLoad'/>
      <detail-goods-params :goodsParams='goodsParamsInfo'/>
      <detail-comment-info :commentInfo='commentInfo'/>
      <goods-list :goodslist='recommendInfo'/>
    </scroll>
  </div>
</template>

<script>
//子组件
import detailNavBar from "views/detail/childComps/detailNavBar";
import detailSwiper from "views/detail/childComps/detailSwiper";
import detailBaseInfo from "views/detail/childComps/detailBaseInfo";
import detailShopInfo from "views/detail/childComps/detailShopInfo";
import detailGoodsInfo from "views/detail/childComps/detailGoodsInfo";
import detailGoodsParams from "views/detail/childComps/detailGoodsParams";
import detailCommentInfo from "views/detail/childComps/detailCommentInfo"
import scroll from "components/common/scroll/Scroll";
import goodsList from "components/content/Goods/GoodsList"
//网络请求
import { getDetail,getRecommend, Goods, Shop, GoodsParams } from "network/detail";
export default {
  name: "detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shopInfo: {},
      detailInfo:{},
      goodsParamsInfo:{},
      commentInfo:{},
      recommendInfo:[]
    };
  },
  methods: {
    imgLoad(){
      this.$refs.Scroll&&this.$refs.Scroll.Refresh()
      },
      /* 
      推荐页数据请求 
      */
     getRecommend(){
       getRecommend().then((res)=>{
         this.recommendInfo=res.data.list
       })
     },
    /* 
  详情页网络请求
  */
    getDetail() {
      getDetail(this.iid).then((res) => {
        console.log(res);
        //将result做一层封装
        const data = res.result;
        //储存轮播图数据
        this.topImages = data.itemInfo.topImages;
        //获取商品信息
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        //获取商铺信息
        this.shopInfo = new Shop(data.shopInfo);
        //请求商品数据
        this.detailInfo=data.detailInfo;
        //请求参数数据
        this.goodsParamsInfo=new GoodsParams(
          data.itemParams.info,
          data.itemParams.rule
        );
        //请求评论数据
        //做一层判断保证评论数据不为空
        // if(date.rate.list){} 有数据则为true
        this.commentInfo=data.rate.list? data.rate.list[0] : {};
      });
    },
  },
  components: {
    detailNavBar,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    detailGoodsInfo,
    detailGoodsParams,
    detailCommentInfo,
    scroll,
    goodsList
  },
  created() {
    //接收路由传来的数据
    this.iid = this.$route.params.iid;
    //获取详情页数据
    this.getDetail();
    this.getRecommend();
  }
};

</script>

<style scoped>
#detail {
  height: 100vh;
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.content {
  height: calc(100% - 49px);
  overflow: hidden;
}
</style>