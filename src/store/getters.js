export default {
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


  }