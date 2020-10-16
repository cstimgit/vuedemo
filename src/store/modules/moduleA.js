export default {//modules下可以建多个State
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