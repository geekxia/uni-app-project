<template lang="html">
	<view class="buy_button">

			<view class="bb_btn" @tap='call'>
				<image src="/static/icon/call.png" alt="" />
				<text>联系客服</text>
			</view>

			<view class="bb_btn" @tap='skipToCart'>
				<image src="/static/icon/cart-on.png" alt="" />
				<text>购物车</text>
			</view>

			<view class="bb_buy" @tap='buy'>加入购物车</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
      // 打电话
      call() {
        uni.makePhoneCall({
            phoneNumber: '0755-23234646' //仅为示例
        })
      },
      // 跳转至购物车
      skipToCart() {
        uni.switchTab({
            url: '/pages/cart/cart'
        })
      },
      // 加入购物车
      buy() {
        console.log('buy')
        let good = getApp().globalData.curGood
        let arr = getApp().globalData.cartArr
        // 在购物车数组中查找有没有当前这个商品
        let idx = arr.findIndex(ele=> ele.id === good.id)
        if (idx >= 0) {
          // 如果有，让购买数量加1
          arr[idx].num++
        } else {
          // 如果没有，让购买数量等于1，然后push到购物车数组中去
          good.num = 1
          arr.push(good)
        }
        // 更新全局的购物车数组
        getApp().globalData.cartArr = arr
        // 弹个小框
        uni.showToast({
          title: '加入购物车成功',
          duration: 2000
        })
        // 两秒钟之后跳转到购物车页面
        setTimeout(()=>{
          this.skipToCart()
        }, 2000)
      }
    }
	}
</script>

<style lang="scss">

	.buy_button {
    width: 100%;
    height: 120rpx;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1rpx solid #ccc;
    &>view {
      display: inline-block;
      float: left;
    }
    &>view.bb_btn {
      width: 25%;
      overflow: hidden;
      text-align: center;
      padding-top: 10rpx;
      &>image {
        display: inline-block;
        width: 50rpx;
        height: 50rpx;
      }
      &>text {
        display: block;
        color: #d81e06;
      }
    }
    &>view.bb_buy {
      width: 50%;
      height: 100%;
      background-color: #d81e06;
      color: white;
      line-height: 120rpx;
      text-align: center;
    }
  }
</style>
