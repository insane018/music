/**
 * Created by 22 on 2017/7/22.
 */
import axios from 'axios'
import {commonParams} from './config'
export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return axios({
    method: 'get',
    url: url,
    params: {
      data
    }
  })
}
