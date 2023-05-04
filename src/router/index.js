import { createRouter, createWebHistory } from 'vue-router'

import * as Public from '@/views/public'

import * as Admin from '@/views/admin'

import Login from '@/views/auth/Login.vue'

import Register from '@/views/auth/Register.vue'

import { authGuard } from '@/_helpers/auth-guard.js'

// localStorage.setItem('token', 'test')


const routes = [
  {
      path: '/',
      name: 'public',
      component: Public.PublicLayout,
      children: [
        { path: '/', name: 'home', component : Public.Home },
        { path: '/cocktail', name: 'cocktail', component : Public.Cocktail },
        { path: '/contact', name: 'contact', component : Public.Contact }
      ]
  },
  {
      path: '/admin',
      name: 'admin',
      component: Admin.AdminLayout,
      children: [
        { path: 'dashboard', name: 'dashboard', component: Admin.Dashboard },
        { path: 'users/index', component:Admin.UserIndex },
        { path: 'users/edit/:id', name:"uEdit" , component: Admin.UserEdit, props: true },
        { path: 'users/add', component: Admin.UserAdd },

        { path: 'cocktails/index', component: Admin.CocktailIndex },
        { path: 'cocktails/edit', component: Admin.CocktailEdit },
        { path: '/:pathMatch(.*)*', redirect: '/admin/dashboard'}
      ]
  },
  {
    path: '/:pathMatch(.*)*', // permet de gerer les routes inexistante
    component: Public.NotFound
  },
  {
    path:'/login', name:'Login', component: Login
  },
  {
    path:'/register', name:'Register', component: Register
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
    console.log(to.matched[0].name)
    if(to.matched[0].name == "admin"){
      authGuard()
    }
    next()
})

export default router
