import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const Home = () => import('../views/home/home')
const Category = () => import('../views/category/category')
const Shopcart = () => import('../views/shopcart/shopcart')
const Profile = () => import('../views/profile/profile')

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      // name: 'home',
      component: Home
    },
    {
      path:'/category',
      component:Category
    },
    {
      path:'/shopcart',
      component:Shopcart
    },
    {
      path:'/profile',
      component:Profile
    }
  ]
})
