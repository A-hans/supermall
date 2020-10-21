import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from './components/common/toast/index'

Vue.config.productionTip = false
//在Vue原型中增加一个$bus
Vue.prototype.$bus=new Vue()
//使用封装好的插件
Vue.use(Toast)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
