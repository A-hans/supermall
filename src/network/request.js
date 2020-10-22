import axios from 'axios';

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://xxxxxxxxxxxx',
    timeout: 5000
  })

  //请求拦截
  /* instance.interceptors.request.use(config => {
    // Do something before request is sent
      return config
    },error => {
    // Do something with request error
      console.log(error);
    }); */
  //响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })



  //instance本身就是一个promis对象
  return instance(config)



}

