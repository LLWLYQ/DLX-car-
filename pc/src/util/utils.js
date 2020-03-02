import jsonp from 'jsonp'

export const baseURL = 'http://ims.861718.com/emc_2020.php'
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
