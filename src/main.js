import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from './components/common/toast/index'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
Vue.config.productionTip = false
//在Vue原型中增加一个$bus
Vue.prototype.$bus=new Vue()
//使用封装好的插件
Vue.use(Toast)
//解决移动端300ms
FastClick.attach(document.body)
//使用图片懒加载
Vue.use(VueLazyload,{
  //增加占位图
  loading:require('./assets/img/common/placeholder.gif')
})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
