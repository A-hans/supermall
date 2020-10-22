import {request} from './request'

//获取分类菜单数据
export function getCategory(){
  return request({
    url:'/category'
  })
}
//获取分类详情数据
export function getSubcategory(maitKey) {
  return  request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}
