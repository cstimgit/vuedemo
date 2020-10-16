<template>
  <div id="app">


    <h2>{{$store.state.counter}}</h2>
<!--    <button @click="$store.state.counter++">+</button>
    <button @click="$store.state.counter--">-</button> -->
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
     <button @click="addCount(10)">+10</button>
     <button @click="addStu">AddStu</button>
    <button @click="delBut">Del</button>
     <button @click="updateInfo">updateInfo</button>
        <main-tab-bar/>
        <router-view></router-view>
  </div>
</template>

<script>
import MainTabBar from './components/MainTabBar'
// 普通方法导入
import {
  INCREMENT
} from './store/mutations-types.js'

export default {
  name: 'App',
  components:{
  MainTabBar
  },
  methods:{

    // 用Vuex状态管理
    addition() {
      this.$store.commit(INCREMENT)

    },
    subtraction() {
     this.$store.commit('decrement')
    },
    addCount(count) {
      this.$store.commit('incrementCount',count)
    },
    addStu() {
      //添加一条记录
      const stu = {id:8,name:'new',age:66}
      this.$store.commit('addStudent',stu)
    },

    delBut() {
    // 响应式删除
    this.$store.commit('delBut')
      // Vue.delete(state.students,'age')
    },
    updateInfo() {
      // 同步数字操作方法
      // this.$store.commit('updateInfo')
      // ==================异步操作-普通方法===================================
      // this.$store.dispatch('aupdateInfo',{
      //   message:'我是payload携带的信息',
      //   success:() => {
      //     console.log('里面已经执行完成了')
      //   }
      // })
      // =================异步操作-优雅写法=========================================
      this.$store.dispatch('aupdateInfo','我是新携带的信息').then(res => {
        console.log('里面完成提交')
        console.log(res,'Promise传过来的信息')
      })

    },
    //修改名字
    updateName() {
      this.$store.commit('updateName','luojianyu')
    }



  }
}
</script>

<style>
@import './assets/css/base.css'
</style>
