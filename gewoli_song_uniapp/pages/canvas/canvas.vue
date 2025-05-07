<template>
	<view class="content">
		<!-- 		<view style="padding-top: 20%;"></view> -->
		<view class="upload">
			<image v-if="imgUrl" :src="imgUrl" mode="" style="height: 50vh"></image>
			<image v-else src="../../static/upload.png" mode="" style="height: 320rpx"></image>
			<view class="desc" v-if="imgUrl == null">暂无海报，请点击上传</view>
		</view>
		<view class="btns">
			<button class="btn" style="background-color: green" @click="uploadHaiBao">{{ flag ? '上传海报' : '修改海报' }}</button>
			<button :disabled="flag" :style="{ color: flag ? 'black' : 'white' }" class="btn" @click="openPopup">生成海报</button>
		</view>

		<!-- <button style="margin-top: 38px" @click="openPoster">生成商品海报</button> -->

		<!-- 海报弹框 -->
		<uni-popup ref="popup" type="center" @maskClick="hidePoster">
			<view class="center_poter" style="margin: 0 auto" v-if="shows">
				<cc-beautyPoster :posterData="posterData"></cc-beautyPoster>
			</view>
		</uni-popup>
	</view>
</template>

<script>
// import uniPopup from '@/components/uni-popup/uni-popup.vue';
import { BASEURL } from '@/common/configure.js';
export default {
	// components: {
	// 	uniPopup
	// },
	data() {
		return {
			shows: false,
			posterData: {
				// 用户姓名
				name: '',
				// 用户头像
				logo: '',
				// 商品名称
				title: '',
				// 商品价格
				money: '',
				// 商品图片(小程序需要换成自己服务器白名单设置的地址)
				img: '',
				// 商品链接
				url: '',
				remark: ''
			},
			imgUrl: null,
			flag: true,
			id: '',
			avater: null
		};
	},

	methods: {
		uploadHaiBao() {
			var that = this;
			uni.chooseImage({
				count: 1, //默认9
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album'], //从相册选择
				success: function (res) {
					// console.log(JSON.stringify(res.tempFilePaths));
					uni.uploadFile({
						url: BASEURL + '/file/ossUpload', //仅为示例，非真实的接口地址
						filePath: res.tempFilePaths[0],
						header: {
							Authorization: uni.getStorageSync('token')
						},
						name: 'file',
						formData: {
							type: '2'
						},
						success: (uploadFileRes) => {
							console.log(JSON.parse(uploadFileRes.data));

							that.addTm(JSON.parse(uploadFileRes.data).msg);
						}
					});
				}
			});
		},
		addTm(img) {
			let data = {
				backgroundImage: img,
				userId: uni.getStorageSync('userInfo').id,
				createBy: uni.getStorageSync('userInfo').nickName,
				createTime: '',
				field: '',
				id: 0,
				logoImage: '',
				modifyBy: '',
				modifyTime: '',
				status: 0,
				templateName: '',
				type: ''
			};
			if (this.flag == true) {
				this.$req.post('template', data).then((res) => {
					let { data } = res;
					this.getList();
				});
			} else {
				data.id = this.id;
				this.$req.put('template', data).then((res) => {
					let { data } = res;
					this.getList();
				});
			}
		},
		openPopup() {
			this.downloadFile(this.imgUrl);
			this.downloadFileAvatar(this.avater);
		},
		//生成海报
		openPoster() {
			this.shows = false;
			uni.showLoading({
				title: '海报绘制中..'
			});
			this.$refs.popup.open();
			setTimeout(() => {
				uni.hideLoading();
				this.shows = true;
			}, 400);
		},

		//关闭海报
		hidePoster() {
			this.$refs.popup.close();
			uni.reLaunch({
				url: '/pages/tabbar/center/index'
			});
		},
		getList() {
			let userId = uni.getStorageSync('userInfo').id;
			this.$req.get('template/' + userId).then((res) => {
				let { data } = res;
				this.id = data.id;
				this.imgUrl = data.backgroundImage;
				this.avater = data.avatar;
				this.posterData.name = data.nickName;
				this.posterData.logo = '/static/logo.png';
				this.posterData.title = '邀请您成为新用户';
				this.posterData.remark = data.remark;
				if (res.data) {
					this.flag = false;
				} else {
					this.flag = true;
				}
			});
		},
		downloadFile(url) {
			uni.downloadFile({
				url: url,
				success: (res) => {
					console.log(res.tempFilePath);
					this.posterData.img = res.tempFilePath;
					// this.openPoster();
				}
			});
		},
		downloadFileAvatar(url) {
			uni.downloadFile({
				url: url,
				success: (res) => {
					console.log('头像', res.tempFilePath);
					this.posterData.logo = res.tempFilePath;
					this.openPoster();
				}
			});
		}
	},
	onLoad() {
		this.getList();
	}
};
</script>

<style lang="scss" scoped>
.upload {
	margin: 20%;
	.desc {
		text-align: center;
		color: #999;
	}
	image {
		width: 100%;
		// height: 320rpx;
	}
}

.center_poter {
	position: relative;
	z-index: 999;

	.close_btn {
		width: 40upx;
		height: 40upx;
		background-color: rgba($color: #000000, $alpha: 0.3);
		position: absolute;
		top: 5upx;
		right: 5upx;
		z-index: 500;
		padding: 5upx;
		border-radius: 6upx;
		z-index: 999;
		text-align: center;
	}
}
.btns {
	display: flex;
	align-items: center;
	justify-content: space-around;
}
.btn {
	font-size: 26rpx;
	width: 300rpx;
	height: 80rpx;
	background-color: red;
	border-radius: 50rpx;
	color: white;
	line-height: 80rpx;
	text-align: center;
	font-weight: bold;
}
// .content {
// 	background: linear-gradient(143deg, #e9c19c 0%, rgba(255, 255, 255, 0.52) 100%);
// 	height: 100vh;
// }
</style>
