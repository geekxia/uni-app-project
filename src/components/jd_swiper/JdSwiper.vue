<template lang="html">
<view class="jd_swiper">
  <swiper
    class="js_swiper"
    indicator-dots
    autoplay
    interval='3000'
    duration="500">
      <swiper-item v-for="(item,idx) in imgs" :key="idx">
        <image @tap="preview(item)" :src="item" />
      </swiper-item>
  </swiper>
</view>
</template>

<script>
export default {
  props: ['imgs'],
  methods: {
    // 预览图片
    preview(src) {
      uni.previewImage({
        urls: [src]   // 图片数组
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.jd_swiper {
  width: 100%;
  image {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
