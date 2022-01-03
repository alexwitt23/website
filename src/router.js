import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/', component: () => import('./components/Home') },
    { path: '/about', component: () => import('./components/About') },
    { path: '/experience', component: () => import('./components/Experience') },
    { path: '/photos', component: () => import('./components/Photos') },
    { path: '/leadership', component: () => import('./components/Leadership') },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })
  
  export default router