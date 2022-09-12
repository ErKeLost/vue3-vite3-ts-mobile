<script setup lang="ts"></script>

<template>
  <div class="nav-bar">
    <div class="title">安东尼娅</div>
  </div>
  <div class="banner">
    <img src="@/assets/img/home/banner.webp" alt="" />
  </div>
  <div class="location">
    <div class="city">广州</div>
    <div class="myPosition">
      <span class="text">我得</span>
      <img src="@/assets/img/home/icon_location.png" alt="" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.home {
  .nav-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 46px;
    .title {
      color: var(--primary-color);
      font-size: 16px;
      font-weight: 600;
    }
  }
}
.banner {
  img {
    width: 100%;
  }
}
.location {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 44px;
  margin: 0 20px;
  .city {
    display: flex;
  }

  .myPosition {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .text {
      // font-size: 16px;
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
