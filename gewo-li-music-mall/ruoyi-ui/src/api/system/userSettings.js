import request from '@/utils/request'

// 普通用户
export function listUser(query) {
  return request({
    url: '/system/mobile/user/getNormalUser',
    method: 'get',
    params: query
  })
}

// 查询制作人
export function getProducerUser(query) {
  return request({
    url: '/system/mobile/user/getProducerUser',
    method: 'get',
    params: query
  })
}

// 查询歌手
export function getSingerUser(query) {
  return request({
    url: '/system/mobile/user/getSingerUser',
    method: 'get',
    params: query
  })
}

// 查询移动端用户详细
export function getUser(id) {
  return request({
    url: '/system/mobile/user/' + id,
    method: 'get'
  })
}

// 新增移动端用户
export function addUser(data) {
  return request({
    url: '/system/user',
    method: 'post',
    data: data
  })
}

// 修改移动端用户
export function updateUser(data) {
  return request({
    url: '/system/mobile/user',
    method: 'put',
    data: data
  })
}

// 删除移动端用户
export function delUser(id) {
  return request({
    url: '/system/mobile/user/' + id,
    method: 'delete'
  })
}

// 音乐人审核
export function musiciansReview(data) {
  return request({
    url: '/system/mobile/user/musiciansReview',
    method: 'POST',
    params: data
  })
}

// 音乐人审核
export function producerReview(data) {
  return request({
    url: '/system/mobile/user/producerReview',
    method: 'POST',
    params: data
  })
}
