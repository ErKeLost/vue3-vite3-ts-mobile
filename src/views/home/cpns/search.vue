<script setup lang="ts">
const router = useRouter()
function positionClick() {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      console.log(res)
    },
    (err) => {
      console.log(err)
    }
  )
}
function handleCity() {
  router.push({ path: '/city' })
}
</script>

<template>
  <div class="location">
    <div class="city" @click="handleCity">广州</div>
    <div class="myPosition">
      <span class="text" @click="positionClick">我的位置</span>
      <img src="@/assets/img/home/icon_location.png" alt="" />
    </div>
  </div>
</template>

<style scoped lang="scss">
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
