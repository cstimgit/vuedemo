// import * as types from '@/store/mutations-types.js'
export default {
    //数据同步操作
    //新写法，利用常量
    // [types.INCREMENT](state) {
    //    state.counter++
    // },
    //方法
    increment(state) {
      state.counter++
    },
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





  }
