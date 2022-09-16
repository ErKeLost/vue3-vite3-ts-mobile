<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <router-view />
    <TabBar v-show="!route.meta?.hiddenTabBar" />
  </div>
</template>

<style scoped></style>
