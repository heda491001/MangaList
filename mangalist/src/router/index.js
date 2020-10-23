import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import add from '@/components/add'
import list from '@/components/lits'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      base: '/mangalist/'
    },
    {
      path: '/add',
      name: 'add',
      component: add,
      base: '/add/'
    },
    {
      path: '/list',
      name: 'list',
      component: list,
      base: '/list/'
    }
  ]
})
