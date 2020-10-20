<template>
  <div class="cart-list">
    <cart-list-item v-for='(item,index) in list' :key='index' :iteminfo='item' :index='index'/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import CartListItem from "views/cart/childComps/cartListItem"

export default {
name:'cartList',
computed:{
  ...mapGetters({
    list:'cartList'
  })
},
components:{
  CartListItem
}
}
</script>

<style>

</style>