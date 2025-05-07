import request from '@/utils/request'

// 查询排行榜列表
export function listRanking(query) {
  return request({
    url: '/system/ranking/list',
    method: 'get',
    params: query
  })
}

// 查询排行榜详细
export function getRanking(id) {
  return request({
    url: '/system/ranking/' + id,
    method: 'get'
  })
}

// 新增排行榜
export function addRanking(data) {
  return request({
    url: '/system/ranking',
    method: 'post',
    data: data
  })
}

// 修改排行榜
export function updateRanking(data) {
  return request({
    url: '/system/ranking',
    method: 'put',
    data: data
  })
}

// 删除排行榜
export function delRanking(id) {
  return request({
    url: '/system/ranking/' + id,
    method: 'delete'
  })
}
