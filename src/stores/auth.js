import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const token = ref(localStorage.getItem('token') || null)

  const isAuthenticated = computed(() => !!token.value)

  const isAdmin = computed(() => user.value?.role === 'admin')
  const isCustomer = computed(() => user.value?.role === 'customer')

  // Danh sách tài khoản demo
  const accounts = [
    { id: 1, name: 'Admin', email: 'admin@example.com', password: '123456', role: 'admin' },
    { id: 2, name: 'Khách Hàng', email: 'customer@example.com', password: '123456', role: 'customer' }
  ]

  const login = async (email, password) => {
    // Tìm tài khoản phù hợp
    const account = accounts.find(acc => acc.email === email && acc.password === password)

    if (account) {
      const userData = {
        id: account.id,
        name: account.name,
        email: account.email,
        role: account.role
      }
      user.value = userData
      token.value = 'fake-jwt-token-' + Date.now()
      localStorage.setItem('token', token.value)
      localStorage.setItem('user', JSON.stringify(userData))
      return { success: true, role: account.role }
    }
    return { success: false, message: 'Email hoặc mật khẩu không đúng' }
  }

  const logout = () => {
    user.value = null
    token.value = null
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  const checkAuth = () => {
    const savedUser = localStorage.getItem('user')
    if (token.value && savedUser) {
      user.value = JSON.parse(savedUser)
    }
  }

  return {
    user,
    token,
    isAuthenticated,
    isAdmin,
    isCustomer,
    login,
    logout,
    checkAuth
  }
})
