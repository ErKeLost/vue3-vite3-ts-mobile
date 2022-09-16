<script setup lang="ts">
import { useHomeStore } from '@/store'
const homeStore = useHomeStore()
const { categories } = storeToRefs(homeStore)
</script>

<template>
  <div class="container" flex overflow-auto mt-5>
    <template v-for="item in categories" :key="item">
      <div class="item" flex flex-col items-center>
        <img w-10 :src="item.pictureUrl" alt="" />
        <div class="title">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
.container {
  &::-webkit-scrollbar {
    display: none;
  }
  .item {
    width: 75px;
    flex-shrink: 0;
    .title {
      font-size: 14px;
    }
  }
}
</style>
