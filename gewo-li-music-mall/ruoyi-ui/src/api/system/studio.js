import request from '@/utils/request'

// 查询录音棚列表
export function listStudio(query) {
  return request({
    url: '/system/studio/list',
    method: 'get',
    params: query
  })
}

// 查询录音棚详细
export function getStudio(id) {
  return request({
    url: '/system/studio/' + id,
    method: 'get'
  })
}

// 新增录音棚
export function addStudio(data) {
  return request({
    url: '/system/studio',
    method: 'post',
    data: data
  })
}

// 修改录音棚
export function updateStudio(data) {
  return request({
    url: '/system/studio',
    method: 'put',
    data: data
  })
}

// 删除录音棚
export function delStudio(id) {
  return request({
    url: '/system/studio/' + id,
    method: 'delete'
  })
}
