import Vue from 'vue'
import Vuex from 'vuex'
//另类批量导入常量方法
import * as types from '@/store/mutations-types.js'

//1.安装Vuex插件
Vue.use(Vuex)

//2.创建对象
const moduleA = {//modules下可以建多个State
  state:{
    name:'sisi'
  },
  mutations:{
    updateName(state,payload) {
      state.name = payload
    }
    },
    actions:{},
    getters:{
      fullName(state){
        return state.name + ' --> getters随便放哪里都可以用'
      },
      fullName2(state,getters){
        return getters.fullName + ' ----> 第二次Getters拼接数据'
      },
      fullName3(state,getters,rootState) {
        return getters.fullName2 + rootState.counter + ' ---> 第三次拼接根下边的state'

      }
    }

}
const store = new Vuex.Store({
  state:{
    counter:1000,
    students:[
      {id:100,name:'Tim',age:33},
       {id:101,name:'Vue',age:15},
        {id:102,name:'Jquery',age:18},
         {id:103,name:'Ajax',age:23},
          {id:104,name:'mimi',age:3},
           {id:105,name:'hui',age:55},
    ],
    info:{
      name:'湖南',
      city:'长沙',
      address:'珠江郦城'
    }

  },
  mutations:{
    //数据同步操作
    //新写法，利用常量
    [types.INCREMENT](state) {
       state.counter++
    },
    //方法
    // increment(state) {
    //   state.counter++
    // },
    decrement(state){
      state.counter--
    },
    incrementCount(state,count) {
      state.counter += count
    },
    addStudent(state,stu) {
      state.students.push(stu)
    },
      updateInfo(state) {
        // 些方式不是响应式,不会更新
        state.info.main = '北京'
        state.info['new'] = '湖南'
        // 响应式更新 新增加的内容也可以
        Vue.set(state.info,'address','长沙市开福区')
      },
      delBut(state) {
      // 响应式删除
        Vue.delete(state.info,'name','address')
      }





  },
  actions:{
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

  },
  getters:{
    powerCounter(state) {
      return state.counter * state.counter / 8
    },
    more20stu(state) {
      return state.students.filter(s => s.age >20)
    },
    more20stuLength(state,getters) {//获取条件符合个数
      return getters.more20stu.length
    },
    moreAgeStu(state) {
      // return function(age) {//可以传参进来，判断大小
      //     return state.students.filter(s =>s.age > age)
      // }
      return age => {
        return state.students.filter(s =>s.age > age)
      }

    }


  },
  modules:{
    a:moduleA



  }

})

//3.导出store独享
export default store
