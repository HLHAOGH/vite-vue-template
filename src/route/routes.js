import Layout from '@/layout/index.vue'
import NotFound from '@/layout/notFound.vue'

/* 路由结构:采用嵌套式-父子路由模式

有无子菜单：
  meta: {
    parent: true|false
  }
是否路由菜单：
  meta: {
    menu: true|false
  }

*/

export const routes = [
  {
    path: '/',
    redirect: '/',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/index.vue'),
        meta: {
          title: '首页',
          icon: 'dashboard',
          menu: true,
        },
      },
    ]
  },
  // 有子菜单parent:true
  {
    path: '/ind',
    component: Layout,
    redirect: '/ind/index',
    meta: { 
      icon: 'event',
      title: '菜单一',
      parent: true,
    },
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/index.vue'),
        meta: {
          title: '子菜单一',
          menu: true
        },
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    redirect: '/404',
    component: Layout,
    children: [
      {
        path: '404',
        component: NotFound,
        meta: { title: '404' },
      }
    ]
  },
]
