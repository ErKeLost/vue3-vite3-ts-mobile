<script setup lang="ts">
const props = defineProps<{
  item?: any
}>()
const itemScore = computed(() => {
  return Number(props.item.commentScore)
})
</script>

<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="item.image.url" alt="" />
      </div>
      <div class="info">
        <div class="summary">{{ item.summaryText }}</div>
        <div class="name">{{ item.houseName }}</div>
        <div class="price">
          <van-rate :model-value="itemScore" />
          <div class="new">{{ item.finalPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.house-item {
  width: 50%;
  .item-inner {
    position: relative;
    background: #fff;
    border-radius: 6px;
    overflow: hidden;
    margin: 9px;
    .cover {
      img {
        width: 100%;
        border-radius: 15px;
      }
    }

    .info {
      position: absolute;
      bottom: 0;
      padding: 8px 10px;
      color: #fff;

      .summary {
        font-size: 12px;
      }

      .name {
        margin: 5px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .price {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
      }
    }
  }
}
</style>
