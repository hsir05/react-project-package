import { Toast } from 'antd-mobile'

export function requestPostDate (url, data) {
  return (dispatch, getState) => {
    Toast.loading('请求中...', 1000000)
    return fetch(`/mtopfilm${url}`,
      {
        credentials:'include', //带cookies
        method: 'post',
        body: data,
        headers: {'Accept': 'application/json','Content-Type': 'application/json'}}
    ).then(response => {
      Toast.hide()
      return response.json()
    }).catch(err => {

      Toast.fail('请求失败，请稍候重试', 2000)
      Toast.hide()
      console.log(err)
      throw err
    })
  }
}
