<template>
  <div class='tab-menu' v-if='categoryList.length!==0'>
    <Scroll class='content' ref='Scroll'>
     <ul class='menu-list'>
      <li v-for='(item,index) in categoryList' 
      :key='index'
      :class="{active:index===currentIndex}"
      @click='clickItem(index)'
       class='menu-list-item'>
        {{item.title}}
      </li>
    </ul>
    </Scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
export default {
name:'TabMenu',
props:{
categoryList:{
  type:Array,
  default(){
    return [];
  }
}
},
data(){
  return{
   currentIndex:0,
   categoryData:this.categoryList
  }
},
methods:{
  clickItem(index){
    this.currentIndex=index;
    this.$emit('selectItem',index)
  }
},
components:{
  Scroll
},
mounted(){
  if(this.categoryData.length !==0){
    this.$refs.Scroll.Refresh()
  }
}
}
</script>

<style scoped>
.tab-menu{
  height: calc(100% + 20px);
}
.content{
  height: 100%;
  overflow: hidden;
}
.menu-list{
  text-align: center;
  font-size:15px ;
  background-color: #F6F6F6; 
}
.menu-list-item{
  padding: 20px;
}
.active{
  background-color: white;
  color: var(--color-high-text);
  font-weight:bolder;
  border-left: 3px solid var(--color-high-text);
}
</style>
