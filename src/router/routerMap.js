/**
 * 基础路由
 * @type { *[] }
 */
import Layout from '@/layout/index.vue'
const constantRouterMap = [
  
  // {
  //   path: '/redirect',
  //   component: Layout,
  //   hidden: true,
  //   children: [
  //     {
  //       path: '/redirect/:path(.*)',
  //       component: () => import('@/views/redirect.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/login',
  //   component: () => import('@/views/login.vue'),
  //   hidden: true
  // },

  
  // {
  //   path: '/',
  //   name: 'Example',
  //   redirect: { name: 'Login' },
  //   children: [
  //     {
  //       path: '/login',
  //       name: 'Login',
  //       // component: () => import('@/views/example/hello/Index.vue')
  //       component: () => import('@/views/login.vue')
  //     },
  //   ]
  // },
  {
    path: '/',
    component: Layout,
    redirect: 'upload',
    children: [
      // {
      //   path: 'index',
      //   component: () => import('@/views/home.vue'),
      //   name: 'Index',
      //   meta: { title: '首页', icon: 'dashboard', affix: true }
      // },
      {
        path: 'upload',
        component: () => import('@/views/Upload/index.vue'),
        name: 'Upload',
        meta: { title: '资源上传', icon: 'dashboard', affix: true }
      },
      {
        path: 'imgList',
        component: () => import('@/views/ImageList/index.vue'),
        name: 'Imglist',
        meta: { title: '图片列表', icon: 'dashboard', affix: true }
      }
    ]
  },
]

export default constantRouterMap