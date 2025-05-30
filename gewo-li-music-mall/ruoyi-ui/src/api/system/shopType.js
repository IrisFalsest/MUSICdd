import request from '@/utils/request'

// 查询商品类别列表
export function listType(query) {
  return request({
    url: '/system/goodsType/list',
    method: 'get',
    params: query
  })
}

// 查询商品类别详细
export function getType(id) {
  return request({
    url: '/system/goodsType/' + id,
    method: 'get'
  })
}

// 新增商品类别
export function addType(data) {
  return request({
    url: '/system/goodsType',
    method: 'post',
    data: data
  })
}

// 修改商品类别
export function updateType(data) {
  return request({
    url: '/system/goodsType',
    method: 'put',
    data: data
  })
}

// 删除商品类别
export function delType(id) {
  return request({
    url: '/system/goodsType/' + id,
    method: 'delete'
  })
}
