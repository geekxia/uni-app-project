<template>
	<view class="page_user">
		<view class="pu_info">
			<image @tap='changeAvatar' class="pu_avater" :src="userinfo.avatar"></image>
			<view v-text="userinfo.username"></view>
		</view>
	</view>
</template>

<script>
	// 在组件里，获取全局的共享状态数据
	let appData = getApp().globalData

	export default {
		data() {
			return {
				title: 'Hello',
				userinfo: appData.userinfo
			}
		},
		onLoad() {
			console.log('globalData', appData)
		},
		methods: {
			// 换头像
			changeAvatar() {
				let that = this
				uni.chooseImage({
			    count: 1, //默认9
			    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
			    sourceType: ['album'], //从相册选择
			    success: function (res) {
			        console.log('换头像',res.tempFilePaths[0])
							that.userinfo.avatar = res.tempFilePaths[0]
							// 更新全局数据
							appData.userinfo.avatar = res.tempFilePaths[0]
			    }
			});
			}
		}
	}
</script>

<style lang="scss">
	.page_user {
		text-align: center;
		.pu_info {
			&>image {
				width: 200rpx;
				height: 200rpx;
				border-radius: 50%;
			}
		}
	}
</style>
