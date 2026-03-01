import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const token = ref(localStorage.getItem('token') || null)

  const isAuthenticated = computed(() => !!token.value)

  const login = async (email, password) => {
    // Giả lập đăng nhập
    if (email === 'admin@example.com' && password === '123456') {
      const userData = {
        id: 1,
        name: 'Admin',
        email: email,
        role: 'admin'
      }
      user.value = userData
      token.value = 'fake-jwt-token-' + Date.now()
      localStorage.setItem('token', token.value)
      localStorage.setItem('user', JSON.stringify(userData))
      return { success: true }
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
    login,
    logout,
    checkAuth
  }
})
