import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home/home';
import Topics from '@/pages/topics/topics';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        keepAlive: true,
      },
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        keepAlive: true,
      },
    },
    {
      path: '/topics/:id',
      name: 'Topics',
      component: Topics
    }
  ]
})
