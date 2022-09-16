<script setup lang="ts">
import { useHomeStore } from '@/store'
const homeStore = useHomeStore()
const { houseList } = storeToRefs(homeStore)
withDefaults(
  defineProps<{
    title?: string
  }>(),
  {
    title: '热门精选'
  }
)
</script>

<template>
  <div ml-3 class="content">
    <h2>{{ title }}</h2>
    <div class="list">
      <template v-for="item in houseList" :key="item.data.houseId">
        <houseItem :item="item.data" />
      </template>
    </div>
  </div>
</template>

<style scoped></style>
