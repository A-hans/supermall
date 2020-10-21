import Toast from './toast'
const obj={}
//vue.use后会执行install函数,并且会传入一个Vue
obj.install=function(Vue){
//1.创建组件构造器
const toastCoutrustor=Vue.extend(Toast);
//2.根据组件构造器可以实例化一个组件对象
const toast =new toastCoutrustor();
//3.将组件对象，手动挂载到一个元素上
toast.$mount(document.createElement('div'));
//4.toast.$el就是对应div,将元素添加进body中
document.body.appendChild(toast.$el);
//5.在原型上挂载$toast
Vue.prototype.$toast=toast;
}

export default obj
