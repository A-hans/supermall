<template>
  <div class="bottom-tool">
    <div class='bottom-checked'>
      <span class="checked-all" :class='{active:isSelectAll}' @click='selectAll'>
        <img src="~assets/img/cart/tick.svg" alt="" />
      </span>
      <span>全选</span>
      <button class="danger" @click="delete_checked">删除选中</button>
      </div>
    <div class='price'>
      合计：￥{{totalPrice}}
    </div>
    <div class='buy'>
      结算({{chekedNum}})
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {delete_checked,select_all} from 'store/mutations-type'
export default {
  name: "bottom-tool",
  computed:{
    ...mapGetters(['cartList']),
    totalPrice(){
      return this.cartList.filter(item=>{
        return item.checked
      }).reduce((preValue,item)=>{
          return preValue+item.price*item.count
      },0).toFixed(2)
    },
    chekedNum(){
      return this.cartList.filter(item=>{
        return item.checked
      }).length
    },
    isSelectAll(){
      //若数组为空
      if(this.cartList.length===0){
        return false
      }
      //1.使用find实现,查找false的项，找到元素返回true，进行取反
        return !this.cartList.find(item=>{return !item.checked})
      //2.使用fliter实现，若数组中存在false，则取反变true，返回新的数组，新的数组有长度（true）则取反
      // return !(this.cartList.filter(item=>!item.checked).length) 
      //3.循环遍历进行判断
    /*   for(let i of this.cartList){
         if(!i.checked){
           console.log(1);
           return false
         }   
      }
          return true
    */
    } 
  },
  methods:{
     delete_checked(){
      this.$store.commit(delete_checked)
   
    },
    selectAll(){
      //全选时为true
     this.$store.commit(select_all,this.isSelectAll);
    }
  }
};
</script>

<style scoped>
.bottom-tool{
  display: flex;
  height: 40px;
  background-color: gainsboro;
}
.bottom-checked{
  flex: 2;
  margin-left:10px ;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
}
.bottom-checked .checked-all{
  height: 20px;
  border:1px solid #aaa;
  border-radius: 10px;
  margin-right:10px ;
  font-size: 15px;
}
.bottom-checked .danger{
  width: 70px;
  height: 30px;
  background-color: #ffe817;
  color:dimgray;
  border: 1px solid transparent;
  border-radius: 10px;
  margin-left:10px;
}
.price{
  flex: 2;
  padding-left: 20px;
  font-size: 15px;
  
}
.price,.buy{
  line-height: 40px;
 
 
}
.buy{
  flex:1;
  text-align: center;
  font-size: 15px;
  color: white;
  background-color: var(--color-tint);
}
.active{
  background-color: red;
}
</style>