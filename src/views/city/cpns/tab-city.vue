<script setup lang="ts">
import { useCityStore } from '@/store'
const props = defineProps<{
  currentGroup: any
}>()
const indexList = computed(() => {
  return ['#', ...props.currentGroup.cities.map((item) => item.group)]
})
const router = useRouter()
const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)
function cityClick(city) {
  currentCity.value = city
  router.back()
}
</script>

<template>
  <van-index-bar :index-list="indexList">
    <van-index-anchor index="热门" />
    <div class="list">
      <template v-for="i in currentGroup.hotCities" :key="i">
        <div class="city" @click="cityClick(i)">{{ i.cityName }}</div>
      </template>
    </div>
    <template v-for="item in currentGroup?.cities" :key="item">
      <div class="group-item">
        <van-index-anchor :index="item.group" />
        <div class="list-item">
          <template v-for="i in item.cities" :key="i">
            <div class="item" @click="cityClick(i)">
              <van-cell :title="i.cityName" />
            </div>
          </template>
        </div>
      </div>
    </template>
  </van-index-bar>
</template>

<style scoped lang="scss">
.list {
  display: flex;
  justify-content: space-around;
  padding: 20px;
  padding-right: 50px;
  flex-wrap: wrap;
  .city {
    width: 140px;
    height: 56px;
    border-radius: 30px;
    background-color: #fff4ec;
    color: #000;
    text-align: center;
    line-height: 56px;
    margin: 20px 0;
  }
}
</style>
