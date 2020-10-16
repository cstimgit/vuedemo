<template>
  <div>  <h2>首页Page</h2>
  <h2>改名字：{{$store.state.a.name}} <button @click="updateName">修改名字</button></h2>
  <p>{{$store.getters.fullName}}</p>
  <p>{{$store.getters.fullName2}}</p>
   <p>{{$store.getters.fullName3}}</p>
  <p>{{$store.state.info}}</p>
  <p>{{$store.state.counter}}</p>
  <h2>用Getters文件计算平方</h2>
  <p>{{$store.getters.powerCounter}}</p>
  <h2>Getters相关信息</h2>
  <p>大于{{age}}：<!-- {{$store.getters.more20stu}} --></p>
  <p v-for="(item,index) in $store.getters.moreAgeStu(age)">
   {{index+1}} id:{{item.id}} name：{{item.name}} age:{{item.age}}
  </p>
  <!-- <p>符合数：{{$store.getters.more20stuLength}} 个</p> -->
    <p>符合数：{{$store.getters.moreAgeStu(age).length}} 个</p>
  <p>动态输入：{{$store.getters.moreAgeStu(age)}}</p>

<p>{{age}}</p>
<input type="text" v-model="age">
  </div>
</template>

<script>
  export default {
  name:'Home',
  data() {
    return {
      age:30,
      data:'666 '
    }
  },
  created() {
    //随机数
    this.getRandomInt(1,10)
  },
  methods:{
    // 生成1-10的整数
          // Math.floor(); 向下舍入
          // console.log(Math.floor(3.8)); //向下舍入，小数点省略了 结果：3
          // Math.random()  random() 方法可返回介于 0（包含） ~ 1（不包含） 之间的一个随机数。
          // Math.floor((Math.random()*10)+1);取得介于 1 到 10 之间的一个随机数：
           // Math.floor((Math.random()*100)+1);取得介于 1 到 100 之间的一个随机数：
    getRandomInt(min,max) {//随机数函数
     // 以下函数返回 min（包含）～ max（包含）之间的数字：
      this.data = Math.floor(Math.random() * (max-min +1)) + min
       //  函数返回 min（包含）～ max（不包含）之间的数字
            //  this.data = Math.floor(Math.random() * (max - min) ) + min;
    },
    //修改名字
    updateName() {
      //第点击一次，产生随机数
       this.getRandomInt(100,10000)
      this.$store.commit('updateName',this.data)
      console.log(Math.floor(Math.random()*100))
    }
  }

  }


  // =========================================
  new Promise((resolve,reject) => {
    resolve("Hello World! 成功时回调！")
    // reject("失败回调！")
  }).then(//这里写2个函数，一个成功，一个失败
  data => {
    // 数据成功后执行
    console.log(data);
  },error => {
    // 失败后执行
    console.log(error);
  })
// ==================Promise用法===========================
  new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('aaa')
    },2000)
  }).then(res => {
    // 1.自己处理的10行代码
    console.log(res,'第一层10行处理代码');
    // 2.对结果进行第一次处理

    // 原始写法
    // return new Promise((resolve) =>{
    //   resolve(res + '111 原始写法')
    // })
    // 普通简写
    // return Promise.resolve(res + '111 普通简写')

    // 超级简写
    return res + '111 超级简写'
  }).then(res => {
    // console.log(res + '222')
    console.log(res,'第二层')
    return Promise.resolve(res + '222')
  }).then(res => {

    console.log(res)
    console.log('第三层')
    // 方法一:原始写法提示报错
    // return Promise.reject(res + ' reject 333 处理错误')
    // 方法二:提示报错
     throw res + ' throw方法 提示错误信息'
  }).catch(err => {
    console.log(err,"catch 结果")
  })

</script>

<style>
</style>
