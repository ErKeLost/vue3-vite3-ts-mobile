<script setup lang="ts">
import { useHomeStore } from '@/store'
import ItemV9 from '@/components/house-item/item-v9.vue'
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
  <div class="content">
    <h2 ml-3>{{ title }}</h2>
    <div class="list">
      <template v-for="item in houseList" :key="item.data.houseId">
        <ItemV9 v-if="item.discoveryContentType === 9" :item="item.data" />
        <ItemV3 v-else :item="item.data" />
      </template>
    </div>
  </div>
</template>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
}
</style>
