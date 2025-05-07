import {
	BASEURL
} from './configure.js';
class request {
	constructor() {
		this.config = {
			url: BASEURL, // 请求的本域名
			method: 'POST',
			// 设置为json，返回后会对数据进行一次JSON.parse()
			dataType: 'json',
			originalData: false, // 是否在拦截器中返回服务端的原始数据
			// 配置请求头信息
			header: {
				'content-type': 'application/json;charset=UTF-8'
			},
		}
	}

	request(url, data, headerType) {
		return new Promise((resolve, reject) => {
			this.config.url = BASEURL + '/' + url;
			this.config.data = data;
			this.config.header["content-type"] = headerType || 'application/json;charset=UTF-8'
			this.config.header.Authorization = 'Bearer ' + uni.getStorageSync('token') || ''

			uni.request({
				...this.config,
				success: (res) => {
					if (res.data.code == 401) {
						console.error(res.data.msg);
						uni.navigateTo({
							url: '/pages/login/login'
						})
						uni.removeStorageSync("token")
						uni.removeStorageSync("userInfo")
						uni.removeStorageSync("rankingList")
						return;
					}
					if (res.data.code != 200) {
						if (res.data.msg || res.data.message) {
							uni.showToast({
								title: res.data.msg || res.data.message,
								duration: 2000,
								icon: 'none'
							});
						}
						reject(res.data)
						return;
					}

					uni.hideLoading()

					if (this.config.originalData) {
						resolve(res);
					} else {
						resolve(res.data);
					}
				},
				fail: (error) => {
					reject(error)
					uni.hideLoading()
				},
				complete: () => {
					uni.hideLoading();
				}
			})
		})
	}

	wxLogin(url, data1, headerType, resolve) {
		return new Promise((resolve, reject) => {
			uni.login({
				provider: 'weixin',
				success: loginRes => {
					uni.request({
						url: BASEURL + '/user/wxLogin?code=' + loginRes.code,
						method: 'POST',
						header: {
							"Content-Type": 'application/json'
						},
						success: (res) => {
							const {
								data
							} = res;
							uni.setStorageSync('userInfo', data.data.user);
							uni.setStorageSync('token', data.data.token);

							if (url) {
								uni.reLaunch({
									url
								});
							}
							// 假设你希望在成功登录后返回某些数据，这里可以是任何你想返回的对象。
							resolve(res);
						},
						fail: error => {
							reject(error);
						}
					});
				},
				fail: error => {
					reject(error);
				}
			});
		});
	}

	get(url, data, headerType) {
		this.config.method = 'GET';
		if (headerType == "form") {
			headerType = "application/x-www-form-urlencoded"
		}
		return this.request(url, data, headerType);
	}

	post(url, data, headerType) {
		this.config.method = 'POST';
		if (headerType == "form") {
			headerType = "application/x-www-form-urlencoded"
		}
		return this.request(url, data, headerType);
	}

	put(url, data, headerType) {
		this.config.method = 'PUT';
		if (headerType == "form") {
			headerType = "application/x-www-form-urlencoded"
		}
		return this.request(url, data, headerType);
	}

	delete(url, data, headerType) {
		this.config.method = 'DELETE';
		return this.request(url, data, headerType);
	}

	upImage(path) {
		return new Promise((resolve, reject) => {
			uni.uploadFile({
				url: BASEURL + '/file/ossUploadFile', //仅为示例，非真实的接口地址
				filePath: path,
				name: 'file',
				header: {
					"token": uni.getStorageSync('token') || ''
				},
				success: res => {
					let data = res.data;
					if (typeof data == 'string') {
						data = JSON.parse(data);
					}

					if (data.code != 200) {
						uni.showToast({
							title: "上传失败",
							icon: 'none'
						})
						reject(data)
						return
					}

					resolve(data)
				},
				fail: (error) => {
					reject(error)
				},
				complete: () => {
					uni.hideLoading();
				}
			});
		})
	}
}

export default new request