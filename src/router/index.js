import Vue from 'vue'
import VueRouter from 'vue-router'

const Home=()=> import('views/home/Home')
const Cart=()=> import('views/cart/Cart')
const Category=()=> import('views/category/Category')
const Profile=()=> import('views/profile/Profile')

// 1.注册路由插件
Vue.use(VueRouter)

const routes=[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/profile',
    component:Profile
  }
]
// 2.创建路由实例
const router=new VueRouter({
  routes
})
// 3.导出路由
export default router