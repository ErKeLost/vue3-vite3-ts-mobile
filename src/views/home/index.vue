<template>
  <div class="home">
    <Header />
    <Search />
  </div>
</template>

<script setup lang="ts">
import { useHomeStore } from '@/store'
const homeStore = useHomeStore()
homeStore.getHotSuggestList()
</script>
