<template>
  <div>
     <h2>分类Page</h2>
    <p>{{$store.state.counter}}</p>
<ul>
<!-- {{news}} -->
	<li v-for="item,index in news">{{index}} -->
   <router-link to="/">{{item.post_title}}</router-link> {{item.published_time}}</li>
</ul>
  </div>


</template>

<script>
    import axios from 'axios'
  export default {
    name:'category',
    data(){
      return {
          news:'news'
      }

    },
    created() {
      axios({
        url:'https://www.luojianyu.com/api/portal/articles?category_id=0&page=3',
        method:'get'
      }).then(res => {
        console.log(res.data.data)
        this.news = res.data.data
        // return news
      })

    }


  }
// 1.axios基本使用===================================
  axios({
    url:'https://www.luojianyu.com/api/portal/articles?category_id=0&page=1&isData=true&time=1602764161432',
    method:'get'
  }).then(res => {
    console.log(res.data.data)
    // this.news = res.data.data
    // return news
  })

  axios({
    url:'https://www.luojianyu.com/api/portal/articles?category_id=0&page=1&isData=true&time=1602764161432',
    //专门针对Get请示的参数拼接
    params:{
      type:'pop',
      page:1
    }
  })
// 2.axios.all发送并发请求==================================
// axios.all([axios(),axios()]).then(results => {

// })
axios.defaults.baseURL = 'https://www.luojianyu.com' //设置公共URL
axios.defaults.timeout = 5000 //超时时间

axios.all([axios({
  url:'/api/portal/articles?category_id=0&page=1&isData=true&time=1602764161432'
}),axios({
  url:'/api/portal/articles?category_id=0&page=1&isData=true&time=1602764161432',
  params:{
    category_id:0,
    page:1
  }
})]).then(results => {
 console.log('并发请求：',results)
})

// 4.创建对应的axios的实例
const instance1 = axios.create({
  baseURL:'https://www.luojianyu.com',
  timeout:5000
})
instance1({
  url:'/api/portal/articles?category_id=0&page=1&isData=true&time=1602764161432'
}).then(res => {
  console.log('实例方式创建：',res)
})

</script>

<style>
</style>
