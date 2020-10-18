import { add_count, add_to_cart } from './mutations-type';
export default {
  [add_count](state, payload) {
    payload.count++
  },
  [add_to_cart](state, payload) {
    state.cartList.push(payload);
  }
}