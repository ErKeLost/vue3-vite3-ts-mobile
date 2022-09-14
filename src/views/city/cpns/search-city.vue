<script setup lang="ts">
import { useCityStore } from '@/store'
const value = $ref<string>('')
const router = useRouter()
function cancel() {
  router.back()
}

const tabActive = $ref()
const cityStore = useCityStore()
const { allCities } = storeToRefs(cityStore)
const { fetchAllCitiesData } = cityStore
fetchAllCitiesData()

// 获取选中标签的数据
const currentGroup = computed(() => {
  return allCities.value[tabActive]
})
</script>

<template>
  <div class="city top-page">
    <div class="top">
      <van-search
        v-model="value"
        shape="round"
        placeholder="城市 / 区域 / 位置"
        show-action
        @cancel="cancel"
      ></van-search>
      <van-tabs v-model:active="tabActive" color="#ff9854">
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
      {{ currentGroup }}
    </div>
    <div class="content">
      <template v-for="item in 100" :key="item">
        <div>
          {{ item }}
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
.city {
  --van-tabs-line-height: 90px;
}
.content {
  height: calc(100vh - 98px);
  overflow-y: auto;
}
</style>
