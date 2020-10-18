import Vue from 'vue';
import VueX from 'vuex';

import mutations from './mutaitions'
import actions from './actions'

Vue.use(VueX);

const state={
  cartList:[]
}

const Store =new VueX.Store({
  state,
  actions,
  mutations
})

export default Store