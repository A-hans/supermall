import {debounce} from "common/utils"
export const itemListenerMixin={
  data(){
    return{
      refresh:null
    }
  },
  mounted(){
     //加载图片刷新进行refresh
     this.refresh=debounce(this.$refs.Scroll&&this.$refs.Scroll.Refresh,500)
     //保证scroll对象拥有了在执行refresh，没创建此对象就调用会报错
     if(this.$route.path.indexOf('/home')!==-1){
      this.$bus.$on('homeimgLoadItem',()=>{
        this.refresh()
      })
     }else if(this.$route.path.indexOf('/detail')!==-1){
      this.$bus.$on('detailimgLoadItem',()=>{
        this.refresh()
      })
     }
      
  }
}

