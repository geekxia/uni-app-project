
const baseUrl = 'http://localhost:8080'

function fetch(api, method, data, callback) {
  uni.request({
    url: baseUrl + api,
    method: method,
    data: data,  // 入参
    header: {
      'token': '1912'
    },
    success: (res) => {
      // 当code=0时，表示请求成功
      callback && callback(res.data.data)
    }
  })
}

// 获取商品列表
export function getGoods(callback) {
  fetch('/db/goods.json', 'GET', {}, callback)
}
