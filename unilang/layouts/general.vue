<script setup lang='ts'>
const headerRef = ref()
const { height } = useElementSize(headerRef)
const { menuHeaderHeight } = storeToRefs(useThemeStore())
onMounted(() => {
    menuHeaderHeight.value = height.value
})
</script>

<template>
    <div>
        <UContainer>
            <TemplateHeaderMain />
        </UContainer>
        <div :style="{ paddingTop: menuHeaderHeight + 'px' }">
            <slot />
        </div>
    </div>
</template>