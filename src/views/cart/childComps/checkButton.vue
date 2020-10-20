<template>
  <div class='check-button' :class='{check:checked}' @click='checkItem'>
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
data(){
  return {
    checked:this.isChecked
  }
},
methods:{
checkItem(){
  this.checked=!this.checked
  this.$store.commit({
    type:checked,
    check:this.checked,
    index:this.index
  })
}
},
mounted(){
  this.$bus.$on('changeChecked',()=>{
    //此处修改的为cartList的数据， isChecked由iteminfo提供，所以数据没有更新
  this.checked=false;
  })
}
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