<script>
	export default {
		onLaunch: function() {
			// console.log('App Launch')
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		},
		// 全局共享的数据
		globalData: {
			userinfo: {
				avatar: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
				username: '1912'
			},
			curGood: {},   // 全局的商品详情
			cartArr: [],   // 购物车中的商品列表
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
