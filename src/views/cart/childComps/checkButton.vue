<template>
  <div class='check-button' :class='{check:isChecked}' @click='checkItem'>
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
import {checked} from 'store/mutations-type'
export default {
name:'checkButton',
props:{
  isChecked:{
    type:Boolean,
    default:false
  },
  index:{
    type:Number,
    default:0
  }
},
methods:{
checkItem(){
  this.$store.commit({
    type:checked,
    check:this.isChecked,
    index:this.index
  })
}
},
}
</script>

<style scoped>
.check-button{
  border:1px solid #aaa;
  border-radius: 10px;
}
.check{
  border-color: red;
  background-color:red ;
}
</style>