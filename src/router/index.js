import Vue from 'vue'
import VueRouter from 'vue-router'

// 一级路由
import Login from '@/views/login'
import Layout from '@/views/layout'
import After from '@/views/after'

// 二级路由（在Layout下）
import About from '@/views/layout/about'
import Category from '@/views/layout/category'
import Find from '@/views/layout/find'
import Home from '@/views/layout/home'
import Label from '@/views/layout/label'
import Link from '@/views/layout/link'
import Log from '@/views/layout/log'
import Message from '@/views/layout/message'
import Production from '@/views/layout/production'
import Say from '@/views/layout/say'
import Tags from '@/views/layout/tags'

// 二级路由（在After下）
import Abouts from '@/views/after/abouts'
import Articles from '@/views/after/articles'
import Drafts from '@/views/after/drafts'
import Homes from '@/views/after/homes'
import Links from '@/views/after/links'
import Logs from '@/views/after/logs'
import Messages from '@/views/after/messages'
import Productions from '@/views/after/productions'
import Says from '@/views/after/says'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        { path: '/about', component: About },
        { path: '/category', component: Category },
        { path: '/find', component: Find },
        { path: '/home', component: Home },
        { path: '/label', component: Label },
        { path: '/link', component: Link },
        { path: '/log', component: Log },
        { path: '/message', component: Message },
        { path: '/production', component: Production },
        { path: '/say', component: Say },
        { path: '/tags', component: Tags }
      ]
    },
    {
      path: '/after',
      component: After,
      children: [
        { path: '/after/abouts', component: Abouts },
        { path: '/after/articles', component: Articles },
        { path: '/after/drafts', component: Drafts },
        { path: '/after/homes', component: Homes },
        { path: '/after/links', component: Links },
        { path: '/after/logs', component: Logs },
        { path: '/after/messages', component: Messages },
        { path: '/after/productions', component: Productions },
        { path: '/after/says', component: Says }
      ]
    }
  ]
})

export default router
