export default defineAppConfig({
  ui: {
    primary: 'sky',
    gray: 'slate',
    card: {
      divide: '',
      background: 'bg-transparent dark:bg-transparent'
    },
    icon: {
      dynamic: true
    },
    formGroup: {
      label: {
        base: 'block font-medium text-primary-900 dark:text-primary-50 capitalize'
      },
      default: {
        size: 'md'
      }
    },
    modal: {
      width: 'w-full sm:max-w-lg lg:max-w-fit'
    },
  }
})