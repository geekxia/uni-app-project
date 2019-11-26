<template>
	<view class="page_cart">
    <view v-for="(row,idx) in list" :key='idx'>
    	<text v-text="row.name"></text>
			<text v-text="row.num"></text>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: []
			}
		},
		onShow() {
			console.log('cart页面', getApp().globalData.cartArr)
			this.list = getApp().globalData.cartArr
			// 强制页面渲染
			this.$forceUpdate()
		},
		methods: {

		}
	}
</script>

<style>

</style>
