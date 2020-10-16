<template>
  <div>
     <h2>购物车</h2>
     <ul>
     	<li v-for="item in res">{{item.post_title}}</li>
     </ul>
    <!-- {{res}} -->
  </div>

</template>

<script>
  import {request} from '../../network/request.js'
  export default {
    name:'shopcart',
    data() {
      return {
        res:''
      }
    },
    methods: {

      },
      created(){
        // ===================1.回调函数方式===================
  //         request({
  //   url:'/api/portal/articles?category_id=0&page=1'
  // },res => {
  //   console.log('成功：',res)
  //   this.res = res.data.data
  // }, err=> {
  //   console.log('失败：',err)
  // })
  //==================2.Promis写法======================
  request({
    url:'/api/portal/articles',
    params:{
      category_id:8,
      page:3
    }
  }).then(res => {
    console.log('成功：',res)
      this.res = res.data.data
  }).catch(err => {
    console.log('失败：',err)
  })
      }
  }

</script>

<style>
</style>
