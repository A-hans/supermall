<template>
  <div id="detail">
    <detail-navBar @tabClick='tabClick' ref='detailNav'/>
    <scroll class="content" 
            ref="Scroll"
            :probe-type="3"
            @scroll='contentScorll' >
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shopInfo="shopInfo" />
      <detail-goods-info :detailInfo='detailInfo' @imgLoad='imgLoad'/>
      <detail-goods-params ref='params' :goodsParams='goodsParamsInfo'/>
      <detail-comment-info ref='comments' :commentInfo='commentInfo'/>
      <goods-list ref='recommends' :goodslist='recommendInfo'/>
    </scroll>
     <back-top @click.native='btnBackTop' v-show='isShowBackTop'></back-top>
    <detail-bottom-bar /> 
  </div>
</template>

<script>
import {itemListenerMixin,backTopMixin} from 'common/mixins'
import {debounce} from 'common/utils'
//子组件
import detailNavBar from "views/detail/childComps/detailNavBar";
import detailSwiper from "views/detail/childComps/detailSwiper";
import detailBaseInfo from "views/detail/childComps/detailBaseInfo";
import detailShopInfo from "views/detail/childComps/detailShopInfo";
import detailGoodsInfo from "views/detail/childComps/detailGoodsInfo";
import detailGoodsParams from "views/detail/childComps/detailGoodsParams";
import detailCommentInfo from "views/detail/childComps/detailCommentInfo";
import detailBottomBar from "views/detail/childComps/detailBottomBar";
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
      recommendInfo:[],
      detailTopY:[],
      getDetailTopY:null,
      currentIndex:0,
    };
  },
  methods: {
    imgLoad(){
      // this.$refs.Scroll&&this.$refs.Scroll.Refresh();
      //在混入中调用refresh
      this.refresh()
      //对detailTopY做一层防抖函数处理
      this.getDetailTopY()
      
      },
    tabClick(index){
      //点击跳转对应位置(通过索引匹配数组的值进行跳转)
      this.$refs.Scroll.ScrollTo(0,-this.detailTopY[index],200);
    },
    //监听滚动
    contentScorll(postion){
       //在混入中做返回顶部按钮隐藏
      this.listenerBackTop(postion)
      const length=this.detailTopY.length;
        //1.遍历detailTopY的值，通过滚动拿到postion的值在detailTopY区间内进行比对
        //2.为防止i+1大于数组长度拿不到值，需做两次判断，idnex=0，1，2时，index-3时
        //3.为防止刷新频繁在做一次判断，当currentIndex!==i时才执行语句
        //4.注意for in拿到的i是字符串，需要进行number类型的转换
        //5.普通的for循环i不需要转换为Number
        //i的值0，1，2，3
        /* for(let i=0;i<length;i++){
          if(this.currentIndex!==i&&i<length&&-postion.y>=this.detailTopY[i]&&-postion.y<this.detailTopY[i+1]||
            this.currentIndex!==i&&i===length-1&&-postion.y>=this.detailTopY[i]){   
               this.currentIndex=i
               this.$refs.detailNav.currentIndex=this.currentIndex
             }  
          } */
        //法二，通过在数组中添加一个最大值,简化判断流程
        for(let i=0;i<length-1;i++){
          if(this.currentIndex!==i&&-postion.y>=this.detailTopY[i]&&-postion.y<this.detailTopY[i+1]){
            this.currentIndex=i
            this.$refs.detailNav.currentIndex=this.currentIndex
          }
        }
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
        //做防抖操作给getDetailTopY赋值
        this.getDetailTopY=debounce(()=>{
        this.detailTopY=[]
        this.detailTopY.push(0);
        this.detailTopY.push(this.$refs.params.$el.offsetTop-49)
        this.detailTopY.push(this.$refs.comments.$el.offsetTop-49)
        this.detailTopY.push(this.$refs.recommends.$el.offsetTop-49)
        this.detailTopY.push(Number.MAX_VALUE)
        },300)
        
        //dom渲染完成后回调
        //与在update中一样，dom渲染完成，数据未加载完成拿到的高度依旧不对
        /* 
        this.$nextTick(()=>{
        this.detailTopY=[]
        this.detailTopY.push(0);
        this.detailTopY.push(this.$refs.params.$el.offsetTop)
        this.detailTopY.push(this.$refs.comments.$el.offsetTop)
        this.detailTopY.push(this.$refs.recommends.$el.offsetTop)
        console.log(this.detailTopY);  
         })
        */
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
    detailBottomBar ,
    scroll,
    goodsList
  },
  created() {
    //接收路由传来的数据
    this.iid = this.$route.params.iid;
    //获取详情页数据
    this.getDetail();
    this.getRecommend();
  },
  mounted(){
   this.$refs.Scroll.getScrollY()
  },
  updated(){
    //第一次在对象非空判断前进行赋值，当数据返回在此渲染赋值，所以数组长度为8
    //进行重新赋值，保证数组长度为4
    //dom渲染未必图片加载完成此时值依旧不对
   /*  
    this.detailTopY=[]
    this.detailTopY.push(0);
    this.detailTopY.push(this.$refs.params.$el.offsetTop)
    this.detailTopY.push(this.$refs.comments.$el.offsetTop)
    this.detailTopY.push(this.$refs.recommends.$el.offsetTop)
    console.log(this.detailTopY); 
    */
  },
 mixins:[itemListenerMixin,backTopMixin]
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
  height: calc(100% - 98px);
  overflow: hidden;
}
</style>