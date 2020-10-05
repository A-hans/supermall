import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')

//解决路由重复问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.replace = function replace(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta:{
      title:'首页'
    }
  },
  {
    path: '/category',
    component: Category,
    meta:{
      title:'分类'
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta:{
      title:'购物车'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta:{
      title:'我的'
    }
  }]

const router = new VueRouter({
  routes,
  mode: 'history'

})

 router.beforeEach((to,from,next)=>{
    document.title=to.matched[0].meta.title
    next()
  
})

export default router