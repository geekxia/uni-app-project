<template>
	<view class="page_user">
    <image style="width: 200px; height: 200px; background-color: #eeeeee;" :src="userinfo.avatar" @click='changeImg'></image>
    <view v-text="userinfo.username"></view>
    <view>

      <input type="text" v-model='phone'>
    </view>
	</view>
</template>

<script>
  let appData = getApp().globalData
	export default {
		data() {
			return {
				title: 'Hello',
        src: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
        userinfo: appData.userinfo,
        phone: '13202264877'
			}
		},
		onLoad() {
      console.log('appData', appData)
		},
    onPullDownRefresh() {
      console.log('下拉刷新')
      this.phone = '0000'
      setTimeout(()=>{
        uni.stopPullDownRefresh()
      }, 3000)
    },
    onReachBottom() {
      console.log('上拉加载', this.phone)

    },
		methods: {
      changeImg() {
        let that = this
        uni.chooseImage({
          count: 1, //默认9
          sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album'], //从相册选择
          success: function (res) {
              console.log();
              let pathArr = res.tempFilePaths
              console.log(pathArr, that)
              that.src = pathArr[0]
          }
      });
      }
		}
	}
</script>

<style lang="scss">
.page_user {
  text-align: center;
  padding-bottom: 2000rpx;
}
</style>
