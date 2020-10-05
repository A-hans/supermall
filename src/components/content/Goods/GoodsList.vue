<template>
  <div class='good-list'>
    <GoodsListItem v-for='item in goodslist' :key='item.index' :goodsitem='item'/>
  </div>
</template>

<script>
import  GoodsListItem  from 'components/content/Goods/GoodsListItem'
export default {
name:'GoodList',
props:{
  goodslist:{
    type:Array,
    default(){
      return []
    }
  }
},
components:{
GoodsListItem
}
}
</script>

<style scoped>
.good-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
 
}
</style>

