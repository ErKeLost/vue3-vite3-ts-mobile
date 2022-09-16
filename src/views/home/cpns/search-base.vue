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

// 搜索
function searchClick() {
  router.push({
    path: '/search',
    query: {
      startDate,
      endDate,
      currentCity
    }
  })
}
</script>

<template>
  <div ml-6 mr-6>
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
    <div
      flex
      h-15
      color="#666"
      items-center
      justify-between
      @click="show = !show"
    >
      <div flex>
        <div flex flex-col items-center>
          <span mb-2>入住</span>
          <span>{{ startDate }}</span>
        </div>
      </div>
      <div class="stay">共{{ stayCount }}晚</div>
      <div class="end">
        <div flex flex-col items-center>
          <span mb-2>入住</span>
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
    <div color="#666" h-10 flex justify-between items-center>
      <div>价格不限</div>
      <div>人数不限</div>
    </div>
    <!-- 热门建议 -->
    <div color="#666" h-10 flex justify-between items-center>
      关键字 / 位置 / 民宿名
    </div>
    <div class="section hot-suggest" flex flex-wrap>
      <template v-for="(item, index) in hotSuggest" :key="index">
        <div
          p-2
          mb-3
          mr-3
          border-rd
          :style="{
            color: item.tagText.color,
            background: item.tagText.background.color
          }"
          class="item"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>
    <!-- search 按钮 -->
    <div class="btn" @click="searchClick">搜索</div>
  </div>
</template>

<style scoped lang="scss">
.hot-suggest {
  margin: 20px 20px 20px 0;
  .item {
    border-radius: 6px;
    font-size: 24px;
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
      line-height: 1;
      position: relative;
      top: 2px;
      color: #666;
    }
    width: 150px;
    img {
      margin-left: 10px;
      width: 40px;
      height: 40px;
    }
  }
}
.btn {
  width: 650px;
  height: 80px;
  font-size: 36px;
  line-height: 80px;
  text-align: center;
  border-radius: 40px;
  color: #fff;
  background-image: var(--theme-linear-gradient);
}
</style>
