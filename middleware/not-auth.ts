import { useAuthStore } from "~/store/auth"

export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuthStore()
    if (!auth.token || auth.token == '') {
        return navigateTo('/login')
    }
})