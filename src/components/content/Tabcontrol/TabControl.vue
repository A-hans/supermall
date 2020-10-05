<template>
  <div class="tab-control">  
     <div v-for="(item,index) in titles" :key='index' :class="{active:index===currentindex}" @click='changetab(index)' class='tab-control-item'>
        <span>{{item}}</span>
        </div>
  </div>
</template>

<script>
export default {
name:'TabControl',
props:{
  titles:{
    type:Array,
    default(){
      return []
    }
  }
},
data(){
  return{
    currentindex:0
  }
},
methods:{
  changetab(index){
    this.currentindex=index
    this.$emit('tabClick',index)
  }
}
}
</script>

<style>
.tab-control {
  padding: 10px;
  display: flex;
  background-color: white;
}
.tab-control-item{
  flex: 1;
  text-align: center;
  
}
.tab-control-item span{
  font-size: 14px;
  padding: 8px;
}
.active{
  color: var(--color-high-text); 
}
.active span{
 border-bottom: 3px solid var( --color-tint);
}
</style>