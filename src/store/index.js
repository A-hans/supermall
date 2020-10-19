import Vue from 'vue';
import VueX from 'vuex';

import mutations from './mutaitions'
import actions from './actions'
import getters from './getters'

Vue.use(VueX);

const state={
  cartList:[]
}

const Store =new VueX.Store({
  state,
  actions,
  getters,
  mutations
})

export default Store