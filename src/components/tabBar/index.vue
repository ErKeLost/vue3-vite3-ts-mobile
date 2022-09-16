<script setup lang="ts">
import { useRouter } from 'vue-router'
const tabBarList = [
  {
    name: '首页',
    icon: 'wap-home-o',
    activeIcon: 'wap-home',
    path: '/home'
  },
  {
    name: '收藏',
    icon: 'point-gift-o',
    activeIcon: 'point-gift',
    path: '/favour'
  },
  {
    name: '订单',
    icon: 'bag-o',
    activeIcon: 'bag',
    path: '/order'
  },
  {
    name: '消息',
    icon: 'chat-o',
    activeIcon: 'chat',
    path: '/message'
  }
]
const router = useRouter()
const path = router
let currentIndex = $ref<number>(-1)
// not v-bind 不太好使
// const currentColor = $ref<string>('var(--primary-color)')
watch(
  router.currentRoute,
  (newValue: any) => {
    tabBarList.forEach((item, index) => {
      if (item.path === newValue.path) {
        currentIndex = index
      }
    })
  },
  {
    immediate: true
  }
)

function turnPage(item: any, index: number) {
  currentIndex = index
  router.push({ path: item.path })
}
</script>

<template>
  <div class="tabBar">
    <template v-for="(item, index) in tabBarList" :key="index">
      <div
        :class="['tabBarItem', currentIndex === index ? 'active' : '']"
        @click="turnPage(item, index)"
      >
        <van-icon
          :name="currentIndex === index ? item.activeIcon : item.icon"
          size="25"
        />
        <div style="margin-top: 5px">{{ item.name }}</div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.tabBar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  border: 1px solid rgb(240, 240, 240);
  background: #fff;
}
.active {
  color: var(--primary-color);
}
.tabBarItem {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
