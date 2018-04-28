import Axios from 'axios'
// import util from '../util/util.js'
// import errRecord from '../util/errRecord'

export let jsonCore = (url, method = 'GET', body = {}) => {
  let _body = []
  for (let i in body) {
    _body.push(`${i}=${body[i]}`)
  }
  _body = _body.length > 0 ? _body.join('&') : null
  return new Promise((resolve, reject) => {
    Axios.interceptors.request.use(
      config => {
        return config
      },
      err => {
        return Promise.reject(err)
      }
    )
    Axios.interceptors.response.use(
      res => {
        return res
      },
      err => {
        return Promise.reject(err)
      }
    )
    Axios.request({
      // baseURL: 'http://test.rr.tv:8096',
      // baseURL: 'http://dev.rr.tv:28180',
      baseURL: 'https://api.rr.tv',
      // baseURL: util.isLocal() ? 'http://dev.rr.tv:28180' : util.isTest() ? 'http://test.rr.tv:8096' : util.isProd() ? 'https://api.rr.tv' : util.isBeta() ? 'http://beta.rr.tv' : '',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        clientVersion: '3.7.0'
        // clientType: util.clientType(),
        // token: parseParams().token
      },
      url: url,
      method: method,
      data: _body
    })
      .then(res => {
        resolve(res.data)
      })
      .catch((e, config) => {
        // errRecord(e)
        reject(e)
      })
  })
}
