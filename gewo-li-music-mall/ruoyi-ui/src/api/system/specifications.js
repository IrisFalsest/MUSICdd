import request from '@/utils/request'

// 查询商品规格列表
export function listSpecifications(query) {
  return request({
    url: '/system/specifications/list',
    method: 'get',
    params: query
  })
}

// 查询商品规格详细
export function getSpecifications(id) {
  return request({
    url: '/system/specifications/' + id,
    method: 'get'
  })
}

// 新增商品规格
export function addSpecifications(data) {
  return request({
    url: '/system/specifications',
    method: 'post',
    data: data
  })
}

// 修改商品规格
export function updateSpecifications(data) {
  return request({
    url: '/system/specifications',
    method: 'put',
    data: data
  })
}

// 删除商品规格
export function delSpecifications(id) {
  return request({
    url: '/system/specifications/' + id,
    method: 'delete'
  })
}
