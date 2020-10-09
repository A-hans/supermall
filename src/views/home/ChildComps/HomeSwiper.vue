<template>
  <div class='home-swiper'>
    <swiper>
      <SwiperItem v-for='item in banners' :key='item.index'>
        <a :href="item.link">
          <img :src="item.image" alt="" @load='imageLoad'>
        </a>
      </SwiperItem>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index'
export default {
name:'HomeSwiper',
props:{
  banners:{
    type:Array,
    default(){
      return []
    }
  }
},
data(){
  return {
    isLoad:false
  }
},
methods:{
 
 imageLoad(){
   //只需要监听一次请求就可以难道萝卜图高度，注意和防抖函数的区别
    if(!this.isLoad){
        this.$emit('imageLoad');
          this.isLoad=true
    }
  }
        
},
components:{
    Swiper,
    SwiperItem
}
}
</script>

<style>

</style>