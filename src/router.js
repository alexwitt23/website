import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/', component: () => import('./components/Home') },
    { path: '/about', component: () => import('./components/About') },
    { path: '/projects', component: () => import('./components/Projects') },
    { path: '/photos', component: () => import('./components/Photos') },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })
  
  export default router