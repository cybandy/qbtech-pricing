export function useToastSuccess(title = 'Success', description = '') {
    const toast = useToast()
    toast.add({
        title: title,
        description: description,
        icon: 'i-heroicons-check-badge-20-solid',
        timeout: 3000,
        color: 'emerald'
    })
}
export function useToastDefault(title = 'Success', description = '') {
    const toast = useToast()
    toast.add({
        title: title,
        description: description,
        icon: 'i-heroicons-bell-20-solid',
        timeout: 3000,
        color: 'primary'
    })
}
export function useToastError(title = 'Success', description = '') {
    const toast = useToast()
    toast.add({
        title: title,
        description: description,
        icon: 'i-heroicons-x-circle-20-solid',
        timeout: 3000,
        color: 'rose'
    })
}