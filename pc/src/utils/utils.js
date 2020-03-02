import jsonp from 'jsonp'

// 会议
export const mettingNav = [
  {
    name: '会议介绍'
  },
  // {
  //   name: '新闻'
  // },
  {
    name: '演讲嘉宾'
  },
  {
    name: '往届演讲嘉宾'
  },
  {
    name: '议题方向'
  },
  {
    name: '议程安排'
  }
]

// 嘉宾
export const guestNav = [
  {
    name: '演讲嘉宾'
  },
  {
    name: '往届演讲嘉宾'
  }
]

// 展览
export const showNav = [
  {
    name: '展览概况'
  },
  {
    name: '展品范围'
  },
  {
    name: '收费介绍'
  },
  {
    name: '展馆及交通'
  }
]

// 历届回顾
export const reviewNav = [
  {
    name: '往届论坛回顾'
  },
  {
    name: '往届参会嘉宾'
  },
  {
    name: '专业听众分析'
  },
  {
    name: '参会企业'
  },
  {
    name: '听众反馈'
  },
  {
    name: '往届精彩回顾'
  },
]


export const baseURL = 'http://ims.861718.com'
export const Headers = {
  headers: {
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'multipart/form-data'
  }
}

// http请求
class HttpRequest {
  // get请求
  static get(api) {
    return new Promise((resolve, reject) => {
      jsonp(api, null, (err, res) => {
        if (!err) {
          resolve(res)
        }
        reject(err)
      })
    })
  }
}


export default HttpRequest
