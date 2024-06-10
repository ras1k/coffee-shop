import { navigateTo } from "nuxt/app"

export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore()
    
    if (!authStore.user && (to.name == 'checkout' || to.name =='dashboard-slug'))
    {
        return navigateTo('/login')
    }
    if (to.name == 'login-slug' && authStore.user != null)
    {
        return abortNavigation()
        }

})
