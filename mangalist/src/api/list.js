const _demo_records = [
  {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
  {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
  {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
]

import Api from '@/api/api'

export default {
  getRecord_demo(cb) {
    const temp = Api.instance().post('https://c1vdx9kkf4.execute-api.ap-northeast-1.amazonaws.com/dev')
    console.log(temp)
    setTimeout(() => cb(temp), 100)
  }
}
