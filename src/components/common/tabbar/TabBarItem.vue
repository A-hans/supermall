<template>
  <div class="tab-bar-item" @click="clickitem">
    <div v-if="!isActive">
      <slot name="tabbar-icon"></slot>
    </div>
    <div v-else>
      <slot name="tabbar-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="tabbar-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    link: String,
    activeColor: {
      String,
      default: "#F25F7C",
    },
  },
  data() {
    return {};
  },
  computed: {
    //动态决定isactive的值
    isActive() {
      //对$route.path与link进行判断，indexof表示判断字符串出现位置，当无此字符串返回-1，
      return this.$route.path.indexOf(this.link) !== -1; //当有的时候为false，没有时为true
    },
    //动态决定字体颜色
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    clickitem() {
      this.$router.replace(this.link);
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  /* tab-bar默认高度 */
  height: 49px;
  font-size: 13px;
}

img {
  width: 24px;
  height: 24px;
  margin-top: 5px;
  margin-bottom: 2px;
  vertical-align: middle;
}
</style>