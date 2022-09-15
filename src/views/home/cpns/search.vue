<script setup lang="ts">
import { useCityStore, useHomeStore } from '@/store'
import { formatMonthDay, diffDate } from '@/utils/format'

const cityStore = useCityStore()
const homeStore = useHomeStore()
const { currentCity } = storeToRefs(cityStore)
const { hotSuggest } = storeToRefs(homeStore)
console.log(hotSuggest)

const router = useRouter()
function positionClick() {
  // navigator.geolocation.getCurrentPosition(
  //   (res) => {
  //     console.log(res)
  //   },
  //   (err) => {
  //     console.log(err)
  //   }
  // )
}
function handleCity() {
  router.push({ path: '/city' })
}

// 日期
const nowDate = new Date()
const newDate = new Date()
newDate.setDate(nowDate.getDate() + 1)
const startDate = ref(formatMonthDay(nowDate))
const endDate = ref(formatMonthDay(newDate))
const stayCount = ref(diffDate(nowDate, newDate))
// 日历
const show = ref<boolean>(false)
function onConfirm(value) {
  show.value = false
  console.log(value)
  startDate.value = formatMonthDay(value[0])
  endDate.value = formatMonthDay(value[1])
  stayCount.value = diffDate(value[0], value[1])
}
</script>

<template>
  <div>
    <div class="location">
      <div class="city" @click="handleCity">
        {{ currentCity.cityName || '大连' }}
      </div>
      <div class="myPosition">
        <span class="text" @click="positionClick">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
    <!-- 日期选择 -->
    <div @click="show = !show" class="date-range">
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{ startDate }}</span>
        </div>
        <div class="stay">共{{ stayCount }}晚</div>
      </div>
      <div class="end">
        <div class="date">
          <span>入住</span>
          <span>{{ endDate }}</span>
        </div>
      </div>
    </div>
    <van-calendar
      v-model:show="show"
      color="#ff9854"
      type="range"
      @confirm="onConfirm"
    />
    <!-- 价格人数 -->
    <!-- 热门建议 -->
    <div class="section hot-suggest">
      <template v-for="(item, index) in hotSuggest" :key="index">
        <div
          class="item"
          :style="{
            color: 'item.tagText.color ',
            background: 'item.tagText.background.color'
          }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hot-suggest {
  margin: 20px 20px 20px 0;
  .item {
    padding: 6px 10px;
    border-radius: 6px;
    margin: 10px 10px 10px 0;
    font-size: 25px;
    line-height: 1;
  }
}
.location {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 44px;
  margin: 12px 20px;
  .city {
    display: flex;
  }

  .myPosition {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .text {
      font-size: 14px;
    }
    width: 150px;
    img {
      margin-left: 10px;
      width: 40px;
      height: 40px;
    }
  }
}
</style>
