import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/LoginView.vue'),
    meta: { requiresAuth: false, hideForAuth: true }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/DashboardView.vue'),
    meta: { requiresAuth: true, adminOnly: true }
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('@/views/ProductsView.vue'),
    meta: { requiresAuth: true, adminOnly: true }
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('@/views/ShopView.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/CartView.vue'),
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: 'Login' })
  } else if (to.meta.adminOnly && (!authStore.isAuthenticated || authStore.user?.role !== 'admin')) {
    // Redirect non-admin users to shop
    next({ name: 'Shop' })
  } else if (to.meta.hideForAuth && authStore.isAuthenticated) {
    // Redirect based on role after login
    next({ name: authStore.user?.role === 'admin' ? 'Dashboard' : 'Shop' })
  } else {
    next()
  }
})

export default router
