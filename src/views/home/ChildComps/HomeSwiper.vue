<template>
  <div class='home-swiper'>
    <swiper>
      <SwiperItem v-for='item in banners' :key='item.index'>
        <a :href="item.link">
          <img :src="item.image" alt="">
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
components:{
    Swiper,
    SwiperItem
}
}
</script>

<style>

</style>