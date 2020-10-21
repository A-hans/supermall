import { add_count, add_to_cart } from './mutations-type'
export default {
  addCart(context, payload) {
    return new Promise((reslove)=>{
      let oldProduct = context.state.cartList.find((item) => {
        return item.iid === payload.iid
      })
      if (oldProduct) {
        context.commit(add_count, oldProduct)
        reslove('该商品数量加1')
      } else {
        payload.count = 1
        payload.checked=true
        context.commit(add_to_cart, payload)
        reslove('添加至购物车')
      }
    })
    //使用find
    

    //运用对象中的iid进行比对，判断传入的是否是相同对象
    //通过遍历拿到数组中的对象,item为数组内存储的对象
    /*  
     let oldProduct=null;
     for(let item of state.cartList){
       if(item.iid===payload.iid){
         oldProduct=item
       }
     }
     if(oldProduct){
         oldProduct.count+=1;
     }else{
       payload.count=1;
       state.cartList.push(payload);
     } */
    //使用indeof不行，每次都为-1 
  }
}