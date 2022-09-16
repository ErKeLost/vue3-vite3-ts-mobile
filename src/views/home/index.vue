<template>
  <div class="home">
    <Header />
    <SearchBase />
    <recommend />
    <List />
  </div>
</template>

<script setup lang="ts">
import { useHomeStore } from '@/store'
const homeStore = useHomeStore()
homeStore.getHotSuggestList()
homeStore.getCategoriesList()
homeStore.getHouseList()
</script>
