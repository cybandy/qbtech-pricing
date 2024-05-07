<script setup lang='ts'>
const headerRef = ref()
const { height } = useElementSize(headerRef)
const { menuHeaderHeight } = storeToRefs(useThemeStore())
onMounted(() => {
    menuHeaderHeight.value = height.value
})
</script>

<template>
    <div class="h-screen overflow-y-auto">
        <UContainer>
            <TemplateHeaderMain />
        </UContainer>
        <div :style="{ paddingTop: menuHeaderHeight + 'px' }" class="h-full">
            <slot />

            <div class="bg-primary-50 dark:bg-primary-950/30">
                <TemplateFooterMain />
            </div>
        </div>
    </div>
</template>