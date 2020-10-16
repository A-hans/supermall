<template>
<div class='detail-nav-bar'>
  <nav-bar>
    <template v-slot:left>
      <div @click='backHome'>
        <img src="~assets/img/common/back.svg" alt="" class='detail-nav-back'>
      </div>
    </template>
    <template v-slot:center >
      <div class='title'>
      <div 
     class='title-item'
     :class="{active:index===currentIndex}" 
     v-for='(item,index) in titles' 
     :key='index'
     @click='tabClick(index)'>
     {{item}} 
     </div>
      </div>
    </template>
  </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "detailNavBar",
  data() {
    return {
      titles: ["商品","参数","评论","推荐"],
      currentIndex:0

    };
  },
  methods:{
    tabClick(index){
      this.currentIndex=index
    },
    backHome(){
    this.$router.back()
    }
  }, 
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.title{
  display: flex;
  text-align: center;
}
.title-item{
  flex:1;
  font-size: 13px;
}
.detail-nav-back{
  vertical-align: middle;
}
.active{
  color: var(--color-high-text);
}
</style>