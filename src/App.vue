<script>
export default {
}
</script>

<style lang="css" scoped>
</style>

<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData: {
			userinfo: {
				avatar: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
				username: 'geekxia'
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
