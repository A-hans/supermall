import { add_count, add_to_cart,add_num,total_number,decrease_num,checked } from './mutations-type';
export default {
  [add_count](state, payload) {
    payload.count++
  },
  [add_to_cart](state, payload) {
    state.cartList.push(payload);
  },
  [total_number](state,payload){
    state.cartList[payload.index].count=payload.count
  },
  [add_num](state,payload){
    state.cartList[payload.index].count=payload.num
  },
  [decrease_num](state,payload){
    state.cartList[payload.index].count=payload.num
  },
  [checked](state,payload){
    state.cartList[payload.index].checked=payload.check
  },
  deleteChecked(state){
    state.cartList=state.cartList.filter((item)=>{
      //过滤，对选中的checked进行取反，false的保留，true的过滤
      return !item.checked
    })
  }
}