import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    authToken: '',
    isAuthenticated: false,
    user: null,
    userList: [
      {
        email: 'hr@htbbd.com',
        password: '123456',
        role: 'Hr'
      },
      {
        email: 'user1@idl.com',
        password: '123456',
        role: 'employee'
      },
      {
        email: 'user2@idl.com',
        password: '123456',
        role: 'employee'
      },
      {
        email: 'user3@idl.com',
        password: '123456',
        role: 'employee'
      },
      {
        email: 'project_manager@idl.com',
        password: '123456',
        role: 'project_manager'
      }
    ],
    authUser: ''
  }),
  actions: {
    setAuthToken(token) {
      console.log(token, 'here the token from store')
      this.authToken = token
    },
    login(user) {
      this.isAuthenticated = true
      this.user = user
    },
    logout() {
      this.isAuthenticated = false
      this.user = null
      this.authToken = null
    },
    signup(user) {
      this.isAuthenticated = true
      this.user = user
    }
  },
  persist: {
    storage: persistedState.localStorage
  }
})