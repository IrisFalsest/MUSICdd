import request from '@/utils/request'

// 查询歌曲订单列表
export function listSongOrder(query) {
  return request({
    url: '/system/songOrder/list',
    method: 'get',
    params: query
  })
}

// 查询歌曲订单详细
export function getSongOrder(id) {
  return request({
    url: '/system/songOrder/' + id,
    method: 'get'
  })
}

// 新增歌曲订单
export function addSongOrder(data) {
  return request({
    url: '/system/songOrder',
    method: 'post',
    data: data
  })
}

// 修改歌曲订单
export function updateSongOrder(data) {
  return request({
    url: '/system/songOrder',
    method: 'put',
    data: data
  })
}

// 删除歌曲订单
export function delSongOrder(id) {
  return request({
    url: '/system/songOrder/' + id,
    method: 'delete'
  })
}
