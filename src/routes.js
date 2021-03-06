import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import echarts from './views/charts/echarts.vue'
import forms from '@/views/forms/forms'

let routes = [
  {
    path: '/login',
    component: Login,
    name: '',
    hidden: true
  },
  {
    path: '/404',
    component: NotFound,
    name: '',
    hidden: true
  },
  //{ path: '/main', component: Main },
  {
    path: '/',
    component: Home,
    name: '用户管理',
    iconCls: 'el-icon-message', //图标样式class
    children: [
      { path: '/main', component: Main, name: '主页', hidden: true },
      { path: '/table', component: Table, name: '用户表单' },
      { path: '/form', component: Form, name: '新增用户' },
      { path: '/user', component: user, name: '用户列表' }
    ]
  },
  {
    path: '/',
    component: Home,
    name: '事件管理',
    iconCls: 'fa fa-id-card-o',
    children: [
      { path: '/page4', component: Page4, name: '累加事件' },
      { path: '/page5', component: Page5, name: '加载事件' }
    ]
  },
  {
    path: '/',
    component: Home,
    name: '',
    iconCls: 'fa fa-address-card',
    leaf: true, //只有一个节点
    children: [
      { path: '/page6', component: Page6, name: '加载页面' },
      { path: '/forms', name: 'forms', component: forms }
    ]
  },
  {
    path: '/',
    component: Home,
    name: '图形',
    iconCls: 'fa fa-bar-chart',
    children: [{ path: '/echarts', component: echarts, name: '图形可视化' }]
  },
  {
    path: '*',
    hidden: true,
    redirect: { path: '/404' }
  }
]

export default routes
