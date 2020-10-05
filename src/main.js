import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
//在Vue原型中增加一个$bus
Vue.prototype.$bus=new Vue()

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
