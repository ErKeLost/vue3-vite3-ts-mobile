<script setup lang="ts">
defineProps<{
  item?: any
}>()
</script>

<template>
  <div class="house-item">
    <div class="item=inner">
      <img :src="item.image.url" alt="" />
    </div>
    <div class="infos">
      <div class="summary">{{ item.summaryText }}</div>
      <div class="name">{{ item.houseName }}</div>
      <div class="price">
        <van-rate :model-value="Number(item.commentScore)" />
        <div class="new">{{ item.finalPrice }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
