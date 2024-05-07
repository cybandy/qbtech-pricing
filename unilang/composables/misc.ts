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