<template>
	<view class="page_home">
		<JdSwiper :imgs='adImgs'></JdSwiper>

		<view class="good_list">
			<view
				class="good_item"
				v-for="(item,idx) in list"
				:key="idx"
				@tap="skip(item)">
					<image :src="item.imgs[0]" />
					<text v-text="item.name"></text>
				</view>
		</view>

		<view class="ph_top" @tap="backToTop">
			<image src='/static/icon/top.png' />
		</view>
	</view>
</template>

<script>
	// import { JdSwiper } from '@/components'
	import JdSwiper from '../../components/jd_swiper/JdSwiper.vue'
	import { getGoods } from '@/utils/api.js'
	export default {
		data() {
			return {
				adImgs: [
					'//m.360buyimg.com/mobilecms/s700x280_jfs/t1/98829/3/2691/107970/5dd50770E5b0649af/09def2a5aca249bc.jpg!cr_1125x445_0_171!q70.jpg.dpg',
					'//m.360buyimg.com/mobilecms/s700x280_jfs/t1/102353/35/2850/160078/5dd791e1E3da957ae/e4a69abab1f75f22.jpg!cr_1125x445_0_171!q70.jpg.dpg',
					'//m.360buyimg.com/mobilecms/s700x280_jfs/t1/105832/24/3067/61955/5ddc8335E9dd96939/075c00164f4b5705.jpg!cr_1125x445_0_171!q70.jpg.dpg'
				],
				list: [],
				page: 1
			}
		},
		components: {
			JdSwiper
		},
		onLoad() {
			console.log('home onload')
			this.getGoodOfPage(this.page)
		},
		onShow() {
			console.log('home onshow')
		},
		// 下拉刷新
		onPullDownRefresh() {
			// this.list.splice(0, 10)
			// let arr = this.list
			// this.list = arr.slice(0, 10)
			this.list = []
			this.page = 1
			this.getGoodOfPage(this.page)
			setTimeout(()=>{
				uni.stopPullDownRefresh()
			}, 2000)
		},
		// 上拉加载
		onReachBottom() {
			this.page++  // 页码自加
			this.getGoodOfPage(this.page)
		},
		methods: {
			// 获取商品列表数据
			getGoodOfPage(page) {
				getGoods((res)=>{
					console.log('商品列表第'+page+'页', res)
					this.list = [...this.list, ...res]
				})
			},
			// 回到顶部
			backToTop() {
				uni.pageScrollTo({
				  scrollTop: 0,
				  duration: 300
				})
			},
			// 跳转至详情页
			skip(item) {
				console.log(item)
				// 把当前item赋值给全局的状态管理
				getApp().globalData.curGood = item
				uni.navigateTo({
				    url: '/pages/detail/detail?id=1912'
				});
			}
		}
	}
</script>

<style lang="scss">
	.page_home {
		.good_list {
			padding-top: 25rpx;
			.good_item {
				display: inline-block;
				width: 33.3%;
				text-align: center;
				padding: 10rpx 0;
				&>image {
					width: 200rpx;
					height: 200rpx;
				}
				&>text {
					display: block;
				}
			}
		}
		.ph_top {
			position: fixed;
			right: 20rpx;
			bottom: 120rpx;
			width: 100rpx;
			height: 100rpx;
			overflow: hidden;
			border-radius: 50%;
			box-shadow: 0 0 5rpx #ccc;
			background: #eee;
			&>image {
				display: block;
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
