<template>
	<view class="page_user">
		<view class="pu_info">
			<image @tap='changeAvatar' class="pu_avater" :src="userinfo.avatar"></image>
			<input type="text" v-model='userinfo.username' @input='nameChange'>
		</view>

		<view class="pu_actions">
			<view @tap='skipToOrderDetail'>
				<image src='/static/user/order.png' />
				<text>我的订单</text>
				<text class="pua_num" v-text='orderArr.length'></text>
			</view>
			<view>
				<image src='/static/user/star.png' />
				<text>我的收藏</text>
				<text class="pua_num">20</text>
			</view>
			<view>
				<image src='/static/user/msg.png' />
				<text>消息中心</text>
				<text class="pua_num">5</text>
			</view>
			<view @tap='clean'>
				<image src='/static/user/clean.png' />
				<text>清除缓存</text>
			</view>
			<view>
				<image src='/static/user/setting.png' />
				<text>设置</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userinfo: getApp().globalData.userinfo,
				orderArr: []
			}
		},
		onShow() {
			console.log('订单列表', getApp().globalData.orderArr)
			this.orderArr = getApp().globalData.orderArr
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
							getApp().globalData.userinfo = that.userinfo
			    }
				})
			},
			// 改用户名
			nameChange() {
				console.log(this.userinfo)
				getApp().globalData.userinfo = this.userinfo
			},
			// 清除缓存
			clean() {
				uni.clearStorageSync()
				uni.showToast({
				    title: '清除成功',
				    duration: 2000
				})
			},
			// 跳转至订单详情
			skipToOrderDetail() {
				if (this.orderArr.length < 1) return
				uni.navigateTo({
					url: '/pages/order/order'
				})
			}
		}
	}
</script>

<style lang="scss">
	.page_user {
		background: rgba(245,245,245,1);
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;

		.pu_info {
			text-align: center;
			padding: 30rpx 0;
			background-color: white;
			margin-bottom: 20rpx;
			&>image {
				width: 200rpx;
				height: 200rpx;
				border-radius: 50%;
			}
		}

		.pu_actions {
			&>view {
				height: 100rpx;
				line-height: 100rpx;
				overflow: hidden;
				background-color: white;
				&>image {
					width: 50rpx;
					height: 50rpx;
					float: left;
					margin: 25rpx 20rpx;
				}
				.pua_num {
					float: right;
					margin-right: 20rpx;
					color: #d81e06;
				}
			}
			&>view:nth-child(1) {
				margin-bottom: 20rpx;
			}
			&>view:nth-child(3) {
				margin-bottom: 20rpx;
			}
			&>view:nth-child(3) {
				margin-bottom: 20rpx;
			}
		}
	}
</style>
