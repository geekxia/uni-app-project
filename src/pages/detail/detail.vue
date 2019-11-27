<template>
	<view class="page_detail">
		<JdSwiper :imgs='good.imgs'></JdSwiper>
		<BuyButton></BuyButton>

		<view class="pd_info">
			<text v-text="good.name"></text>
			<text v-text="good.price"></text>
		</view>

	</view>
</template>

<script>
	// import { JdSwiper, BuyButton } from '@/components'
	import BuyButton from '../../components/buy_button/BuyButton.vue'
	import JdSwiper from '../../components/jd_swiper/JdSwiper.vue'
	export default {
		data() {
			return {
				good: {}
			}
		},
		onShow() {
			console.log('detail page====', )
			this.good = getApp().globalData.curGood
		},
		components: {
			JdSwiper,
			BuyButton
		}
	}
</script>

<style lang="scss" scoped>
.page_detail {
	.pd_info {
		line-height: 100rpx;
		height: 100rpx;
		overflow: hidden;
		box-sizing: border-box;
		padding: 0 10rpx;
		&>text:first-child {
			font-weight: bold;
		}
		&>text:last-child {
			float: right;
			color: #d81e06;
		}
	}
}
</style>
