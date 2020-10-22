<template>
  <div class='category-content' v-if='Object.keys(subCategories).length !==0'>
      <div class='category-content-item' 
           v-for='(item,index) in subCategories.list' 
           :key='index'>
        <a :href="item.link">
        <img :src="item.image" alt="" @load="imgload">
        <p>{{item.title}}</p>
        </a>
      </div>
  </div>
</template>

<script>
export default {
name:'TabContentCategory',
props:{
  subCategories:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    imgload(){
      this.$emit('imgload')
    }
  }
}
</script>

<style scoped>
.category-content-item img{
  width: 60px;
  height: 60px;
}
.category-content{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 
}
.category-content-item p{
  margin-top:20px ;
}
.category-content-item{
  font-size: 13px;
  margin-bottom: 20px;
  text-align: center;
}
</style>