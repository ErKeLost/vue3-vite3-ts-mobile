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
</script>

<template>
  <div class="city top-page">
    <van-search
      v-model="value"
      shape="round"
      placeholder="城市 / 区域 / 位置"
      show-action
      @cancel="cancel"
    ></van-search>
    <van-tabs v-model:active="tabActive" color="#ff9854">
      <template v-for="(value, key, index) in allCities" :key="key">
        <van-tab :title="value.title"></van-tab>
      </template>
    </van-tabs>
  </div>
</template>

<style scoped lang="scss">
.city {
  --van-tabs-line-height: 90px;
}
</style>
