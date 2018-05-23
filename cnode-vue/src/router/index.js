const Home = () => import('@/pages/home/home');
const Topics = () => import('@/pages/topics/topics');

const routes = [
  {
    path: '/',
    redirect: '/home',
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
    component: Topics,
    meta: {
      keepAlive: true,
    },
  }
]
export { routes };
