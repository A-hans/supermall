<template>
  <swiper class="detail-swiper">
    <swiperItem v-for='item in topImages' :key='item.index'>
        <img :src="item" alt="">
    </swiperItem>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";

export default {
  name: "detailSwiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>