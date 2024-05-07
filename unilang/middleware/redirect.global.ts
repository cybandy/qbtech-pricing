
export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path === '/unilang-pricing') {
        return
    }
    return navigateTo('/unilang-pricing', { redirectCode: 301 })
})