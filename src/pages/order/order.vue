<template lang="html">
<view class="page_order">
  <map
    class="po_map"
    :latitude="center.latitude"
    :longitude="center.longitude"
    :markers="markers">
  </map>

  <cover-view class="po_top">
    <cover-view class="pot-address">
      <cover-view class="pot_start">北京</cover-view>
      <cover-view class="pot_line"></cover-view>
      <cover-view class="pot_end">深圳</cover-view>
    </cover-view>
    <cover-view class="pot_info">
      <cover-view class="pot_num" v-text='"订单号："+curOrder.id'></cover-view>
      <cover-view class="pot_copy" @tap="copy">复制</cover-view>
    </cover-view>
  </cover-view>

</view>
</template>

<script>
export default {
  data() {
    return {
      curOrder: {},   // 当前订单
      center: {       // 地图的中心点
        latitude: 22.55329,
        longitude: 113.88308,
      },
      markers: [{    // 覆盖物
          latitude: 22.55329,
          longitude: 113.88308,
          iconPath: '/static/icon/car.png',
          width: 50
      }]
    }
  },
  onShow() {
    this.curOrder = getApp().globalData.orderArr[0]
  },
  methods: {
    copy() {
      let that = this
      // 该复制方法，不支持H5平台
      uni.setClipboardData({
        data: that.curOrder.id+'', // Date.now() 转化成字符串
        success: function () {
          console.log('复制成功')
          uni.showToast({
            title: '复制成功',
            duration: 1000
          })
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.page_order {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  &>.po_map {
    width: 100%;
    height: 100%;
  }
  .po_top {
    position: absolute;
    top: 20rpx;
    left: 20rpx;
    right: 20rpx;
    height: 200rpx;
    background-color: white;
    .pot-address {
      height: 100rpx;
      overflow: hidden;
      .pot_start, .pot_end {
        float: left;
        width: 30%;
        text-align: center;
        line-height: 100rpx;
        font-size: 40rpx;
        font-weight: bold;
      }
      .pot_line {
        float: left;
        width: 40%;
        background: #aaa;
        height: 4rpx;
        margin-top: 48rpx;
      }
    }
    .pot_info {
      height: 100rpx;
      line-height: 100rpx;
      overflow: hidden;
      text-align: center;
      font-size: 30rpx;
      color: #666666;
      .pot_num {
        display: inline-block;
      }
      .pot_copy {
        display: inline-block;
        padding: 0 20rpx;
        border: 1rpx solid #ccc;
        border-radius: 5rpx;
        margin-left: 30rpx;
        font-size: 26rpx;
        height: 50rpx;
        line-height: 48rpx;
      }
    }
  }
}
</style>
