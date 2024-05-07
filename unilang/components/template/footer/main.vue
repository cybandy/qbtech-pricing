<script setup lang="ts">
const links = [
    {
        name: 'bxl:instagram',
        to: 'https://www.instagram.com/qbtechnology_/'
    },
    {
        name: 'bxl:facebook',
        to: 'https://www.facebook.com/profile.php?id=100083577977374'
    },
]
</script>
<template>
    <div class="py-4 flex items-center justify-between text-gray-500 dark:text-gray-400">
        <p class=" text-sm">
            &copy; 2023 QB-TECH All rights reserved
        </p>
        <div class="flex items-center gap-4">
            <ULink v-for="item of links" :to="item.to" target="_blank">
                <UIcon dynamic :name="item.name" class="w-5 h-5" />
            </ULink>
        </div>
    </div>
</template>