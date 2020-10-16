export default {
    // 数据actions异步操作 这里处理完再转Mutations处理
    //context 上下文意思
    aupdateInfo(context,payload) {
      // 普通写法
      // setTimeout( ()=> {
      //   context.commit('updateInfo')
      //     console.log(payload.message)
      //     //回调函数，异步执行完后提示信息
      //     payload.success()
      // },1000)
      // 优雅写法
      return new Promise((resolve,reject) => {
         setTimeout(() => {
        context.commit('updateInfo')
        console.log(payload)
        resolve('aaaa')
      },2000)
      })

    }

  }