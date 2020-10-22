<template>
  <div id="category">
    <nav-bar class="category-nav">
      <template v-slot:center>
        <div>商品分类</div>
      </template>
    </nav-bar>
    <div class="category-content">
       <tab-menu
          :categoryList="categories"
          class="menu"
          @selectItem="selectItem"
        ></tab-menu>
      <Scroll
        class="content"
        ref="Scroll"
        :probe-type="3"
        @scroll="contentScorll">
        <tab-content-category class="category-detail" 
                              :subCategories='showCategoryData' 
                              @imgload='imgload'/>
      </Scroll>
      <back-top @click.native="btnBackTop" v-show="isShowBackTop"></back-top>
    </div>
  </div>
</template>

<script>
//网络请求
import { getCategory, getSubcategory } from "network/category";
//公共组件
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import { backTopMixin } from "common/mixins";
import {debounce} from 'common/utils'
//子组件
import TabMenu from "views/category/ChildComps/TabMenu";
import TabContentCategory from "views/category/ChildComps/TabContentCategory";
export default {
  name: "Category",
  data() {
    return {
      categories: [],
      categoryData: {},
      currentIndex: -1
    };
  },
  methods: {
    //网络请求
    getCategory() {
    //请求分类数据
      getCategory().then((res) => {
        this.categories = res.data.category.list;
    //循环遍历初始化对象，用于接收每个类别的数据
      for (let i = 0; i < this.categories.length; i++) {
        this.categoryData[i] = {
          subcategories: {},
          }
        }
      //初始化第一页数据
      this.getSubcategory(0)
      });
    },
    getSubcategory(index) {
      this.currentIndex=index
      const mailKey = this.categories[index].maitKey;
        getSubcategory(mailKey).then((res) => {
          //根据索引接收对应数据
          this.categoryData[index].subcategories = res.data
          //最后在保存在data中
          this.categoryData = {...this.categoryData}
      });
    },
    //监听滚动
    contentScorll(postion) {
      this.listenerBackTop(postion, 400);
    },
    //点击切换
    selectItem(index) {
     this.getSubcategory(index)
    },
    //图片加载
    imgload(){
      const refresh = debounce(this.$refs.Scroll && this.$refs.Scroll.Refresh, 500)
      refresh()
    }
  },
  computed:{
    showCategoryData(){
       if(this.currentIndex===-1) return {}
      return this.categoryData[this.currentIndex].subcategories
    }
  },
  components: {
    NavBar,
    Scroll,
    TabMenu,
    TabContentCategory,
  },
  mixins: [backTopMixin],

  created() {
    this.getCategory();
   
  },
};
</script>

<style scoped>
#category {
  padding-top: 49px;
  height: 100vh;
}
.category-nav {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}

.category-content {
  display: flex;
  height: calc(100% - 69px);
}

.category-content .content {
  height: 100%;
  overflow: hidden;
  margin: 20px;
  flex: 1;
}
</style>