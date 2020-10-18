// 网络请求插件
import axios from 'axios'
const a = 20000*(110/100) * (1/100)
const b = 1-(110/100) * (1/100)
console.log('a=',a)
console.log('b=',b)
console.log(a / b)
// =====================最终写法==================
export function request(config) {
  //1.创建axios的实例
    const instance = axios.create({
      baseURL:'https://www.luojianyu.com',
      timeout:3000
    })


//2.axios拦截器
instance.interceptors.request.use(config => {
  console.log(config)
  return config
},err => {
  console.log(err)
})

   //发送真正的网络请求
  return instance(config)
}

// =================Promise方式===============
// export function request(config) {
//   return new Promise((resolve,reject) =>{
//     //1.创建axios的实例
//       const instance = axios.create({
//         baseURL:'https://www.luojianyu.com',
//         timeout:3000
//       })
//       //发送真正的网络请求
//     instance(config)
//     .then(res => {
//       // console.log(res)
//       // success(res)
//       resolve(res)
//     })
//     .catch(err => {
//       // console.log(err)
//       // failure(err)
//       reject(err)
//     })
//   })
// }



// ==============回调函数方式====================
// export function request(config,success,failure) {

//     //1.创建axios的实例
//       const instance = axios.create({
//         baseURL:'https://www.luojianyu.com',
//         timeout:5000
//       })
//       //发送真正的网络请求
//     instance(config)
//     .then(res => {
//       // console.log(res)
//       success(res)
//     })
//     .catch(err => {
//       console.log(err)
//       failure(err)
//     })

// }
