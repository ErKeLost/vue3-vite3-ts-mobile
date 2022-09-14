<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <router-view />
    <TabBar v-if="!route.meta?.hiddenTabBar" />
  </div>
</template>

<style scoped></style>
