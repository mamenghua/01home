import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '../views/Home'
import SearchUser from '../views/SearchUser'
import AddUser from '../views/AddUser'
import MsgUser from '../views/MsgUser'
import MsgOrder from '../views/MsgOrder'
import SearchOrder from '../views/SearchOrder'
import SearchProduct from '../views/SearchProduct'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/Home',
      name:'Home',
      redirect:'/SearchUser',
      component:Home,
      children:[
        {
          path:'/SearchUser',
          name:'SearchUser',
          component:SearchUser
        },
        {
          path:'/AddUser',
          name:'AddUser',
          component:AddUser
        },
        {
          path:'/MsgUser',
          name:'MsgUser',
          component:MsgUser
        },
        {
          path:'/MsgOrder',
          name:'MsgOrder',
          component:MsgOrder
        },
        {
          path:'/SearchOrder',
          name:'SearchOrder',
          component:SearchOrder
        },
        {
          path:'/SearchProduct',
          name:'SearchProduct',
          component:SearchProduct
        },
      ]
    }
  ]
})

//在使用Element UI 时点击同一个路由，控制台报错，但不影响使用
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
