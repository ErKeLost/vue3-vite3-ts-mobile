<script setup lang="ts"></script>

<template>
  <div class="location-container">
    <div class="nav-bar">
      <div class="title">安东尼娅</div>
    </div>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.home {
  .nav-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    .title {
      color: var(--primary-color);
      font-size: 32px;
      font-weight: 600;
    }
  }
}
.banner {
  img {
    width: 100%;
  }
}
</style>
