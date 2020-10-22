import { debounce } from "common/utils"
import backTop from "components/common/scroll/backTop"
export const itemListenerMixin = {
  data() {
    return {
      refresh: null
    }
  },
  mounted() {
    //加载图片刷新进行refresh
    this.refresh = debounce(this.$refs.Scroll && this.$refs.Scroll.Refresh, 500)
    //保证scroll对象拥有了在执行refresh，没创建此对象就调用会报错
    if (this.$route.path.indexOf('/home') !== -1) {
      this.$bus.$on('homeimgLoadItem', () => {
        this.refresh()
      })
    } else if (this.$route.path.indexOf('/detail') !== -1) {
      this.$bus.$on('detailimgLoadItem', () => {
        this.refresh()
      })
    } 
  }
}

export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    btnBackTop() {
      this.$refs.Scroll.ScrollTo(0, 0, 500)
    },
    listenerBackTop(postion, y = 1000) {
      this.isShowBackTop = (-postion.y) > y
    }
  },
  components: {
    backTop
  }
}