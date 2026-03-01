import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
    user: JSON.parse(localStorage.getItem('user') || 'null')
  }),
  actions: {
    // Demo credentials only — not for production use
    login(username, password) {
      if (username === 'admin' && password === 'admin123') {
        this.isAuthenticated = true
        this.user = { name: 'Admin', username }
        localStorage.setItem('isAuthenticated', 'true')
        localStorage.setItem('user', JSON.stringify(this.user))
        return true
      }
      return false
    },
    logout() {
      this.isAuthenticated = false
      this.user = null
      localStorage.removeItem('isAuthenticated')
      localStorage.removeItem('user')
    }
  }
})
