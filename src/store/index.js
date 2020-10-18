import Vue from 'vue'
import Vuex from 'vuex'
//另类批量导入常量方法
import * as types from '@/store/mutations-types.js'
import mutations from '@/store/mutations.js'
import actions from './actions.js'
import moduleA from './modules/moduleA.js'
import getters from './getters.js'
//1.安装Vuex插件 状态管理 可以设全局变量
Vue.use(Vuex)

//2.创建对象
// const moduleA =
const state = {
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
      address:'最美小区在哪里？猜猜！'
    }

  }
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules:{
    a:moduleA



  }

})

//3.导出store独享
export default store
