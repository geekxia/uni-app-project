<template>
	<view class="page_cart">
		<!-- 商品列表 -->
		<view
			class="pc_good"
			v-for="(row,idx) in list"
			@longtap='remove(idx)'
			:key='idx'>
    	<text v-text="row.name" ></text>
			<text v-text="row.price"></text>
			<text>
				<text class="pc_num_btn" @tap='sub(idx)'>-</text>
				<text v-text="row.num"></text>
				<text class="pc_num_btn" @tap='add(idx)'>+</text>
			</text>
			<text v-text="(row.price*row.num)"></text>
    </view>

		<view class="pc_bottom" v-if="list.length > 0">
			<view>
				<text>数量：</text>
				<text v-text='numTotal'></text>
			</view>
			<view>
				<text>总计：</text>
				<text v-text='priceTotal'></text>
			</view>
			<view @tap='pay'>立即支付</view>
		</view>

		<view class="pc_no_data" v-else>
			<image mode='aspectFit' src='/static/icon/no-data.png' />
			<view>暂无数据</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				numTotal: 0,
				priceTotal: 0
			}
		},
		onShow() {
			console.log('cart页面', getApp().globalData.cartArr)
			this.list = getApp().globalData.cartArr
			this.calTotal(this.list)
		},
		methods: {
			calTotal(arr) {
				// 计算总价格和总数量
				let numTotal = 0
				let priceTotal = 0
				arr.map(ele=>{
					numTotal += ele.num
					priceTotal += ele.num*ele.price
				})
				this.numTotal = numTotal
				this.priceTotal = priceTotal
				// 更新全局数据
				getApp().globalData.cartArr = this.list
				// 强制页面渲染
				this.$forceUpdate()
			},
			add(idx) {
				this.list[idx].num++
				console.log(this.list[idx].num)
				this.calTotal(this.list)
			},
			sub(idx) {
				if (this.list[idx].num === 1) return
				this.list[idx].num--
				this.calTotal(this.list)
			},
			remove(idx) {
				console.log(idx)
				let that = this
				uni.showModal({
				    title: '提示',
				    content: '你确定要删除该商品吗？',
				    success: function (res) {
				        if (res.confirm) {
									that.list.splice(idx, 1)
									that.calTotal(that.list)
				        }
				    }
				})
			},
			pay() {
				// 清空cartArr
				let that = this
				// 生成一个新订单
				let username = getApp().globalData.userinfo.username
				let curOrder = {id: Date.now(), username}
				getApp().globalData.orderArr.push(curOrder)
				// 弹个小框
        uni.showToast({
          title: '支付成功',
          duration: 2000
        })
        // 两秒钟之后跳转到购物车页面
        setTimeout(()=>{
					that.list = []
					that.calTotal(that.list)
          uni.switchTab({
						url: '/pages/index/index'
					})
        }, 2000)
			}
		}
	}
</script>

<style lang="scss">
.page_cart {
	.pc_good {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		box-sizing: border-box;
		border-bottom: 1rpx solid #eee;
		padding: 0 20rpx;
		overflow: hidden;
		&>text:nth-child(1) {
			float: left;
		}
		&>text:nth-child(2) {
			float: left;
			margin-left: 20rpx;
		}
		&>text:nth-child(3) {
			float: left;
			margin-left: 20rpx;
			font-size: 24rpx;
			.pc_num_btn {
				display: inline-block;
				width: 50rpx;
				text-align: center;
				border: 1rpx solid #ccc;
				height: 50rpx;
				vertical-align:middle;
				line-height: 50rpx;
				margin: 0 10rpx;
			}
		}
		&>text:nth-child(4) {
			float: right;
			margin-left: 20rpx;
		}
	}
	.pc_bottom {
		position: fixed;
		bottom: 100rpx;
		left: 0;
		right: 0;
		height: 100rpx;
		line-height: 100rpx;
		display: flex;
		border: 1rpx solid #d81e06;
		text-align: center;
		&>view:nth-child(1) {
			flex: 180;
		}
		&>view:nth-child(2) {
			flex: 270;
		}
		&>view:nth-child(3) {
			background: #d81e06;
			color: white;
			flex: 300;
		}
	}
	.pc_no_data {
		text-align: center;
		&>image {
			display: inline-block;
			width: 375rpx;
		}
	}
}
</style>
