
export default defineNuxtRouteMiddleware((to, from) => {
    if (['/unilang-pricing', '/thank-you'].includes(to.path)) {
        return
    }
    return navigateTo('/unilang-pricing', { redirectCode: 301 })
})