<script setup lang='ts'>
const headerRef = ref()
const { height } = useElementSize(headerRef)
const { menuHeaderHeight } = storeToRefs(useThemeStore())
onMounted(() => {
    menuHeaderHeight.value = height.value
})
</script>

<template>
    <div class="h-screen">
        <UContainer>
            <TemplateHeaderMain />
        </UContainer>
        <div :style="{ paddingTop: menuHeaderHeight + 'px' }" class="h-full">
            <slot />

            <UContainer>
                <TemplateFooterMain />
            </UContainer>
        </div>
    </div>
</template>