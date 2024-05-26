import { createRouter, createWebHistory } from 'vue-router'
import StoreView from '../views/StoreView.vue'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import ProfileView from '../views/ProfileView.vue'
import GameView from '../views/GameView.vue'
import PaymentView from '../views/PaymentView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'store',
      component: HomeView
    },
    {
      path: '/login&register',
      name: 'login&register',
      component: LoginView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/game/:id',
      name: 'game',
      component: GameView
    },
    {
      path: '/cart',
      name: 'cart',
      component: PaymentView
    },
  ]
})
export default router
