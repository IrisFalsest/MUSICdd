<template>
	<view class="content">
		<view class="title" :style="{ paddingTop: titleHeight + 'px' }">
			<u-icon @click="toBack()" name="arrow-left"></u-icon>
			<image class="icon" src="@/static/icon/sing_icon.png"></image>
		</view>
		<view class="pTit">您好，{{ loginType == '2' ? '音乐人' : '制作人' }}</view>
		<view class="pTxt">请完善歌曲信息</view>

		<view class="sings">
			<view class="jian">
				<view class="formView">
					<view class="fvTop">
						<view>歌曲名</view>
					</view>
					<view class="fvBot">
						<input v-model="form.songName" placeholder="请输入歌曲名" />
					</view>
				</view>
				<view class="formView">
					<view class="fvTop">
						<view>作词人</view>
					</view>
					<view class="fvBot">
						<input v-model="form.lyricist" placeholder="请输入作词人" />
					</view>
				</view>
				<view class="formView">
					<view class="fvTop">
						<view>作曲人</view>
					</view>
					<view class="fvBot">
						<input v-model="form.composer" placeholder="请输入作曲人" />
					</view>
				</view>
				<view class="formView">
					<view class="fvTop">
						<view>风格</view>
					</view>
					<view class="fvBot">
						<input v-model="form.songTitle" placeholder="请选择歌曲风格" disabled @click="show = true" />
						<u-picker @confirm="confirmSongTitle" mode="selector" v-model="show" :range="typeList" range-key="typeName"></u-picker>
					</view>
				</view>
				<view class="formView">
					<view class="fvTop">
						<view>售卖价格</view>
					</view>
					<view class="fvBot">
						<input v-model="form.currentPrice" placeholder="请输入售卖价格" />
					</view>
				</view>
				<view class="formView">
					<view class="fvTop">
						<view>歌曲原价</view>
					</view>
					<view class="fvBot">
						<input v-model="form.originalPrice" placeholder="请输入歌曲原价" />
					</view>
				</view>
				<view class="formView">
					<view class="fvTop">
						<view>歌曲封面</view>
					</view>
					<view class="fvBot">
						<uni-file-picker @select="select" :limit="1"></uni-file-picker>
					</view>
				</view>
				<view class="formView">
					<view class="fvTop">
						<view>歌曲文件</view>
					</view>
					<view class="fvBot">
						<input @click="upAudio" v-model="songFileName" placeholder="从微信聊天记录内选择歌曲文件(mp3)" disabled />
					</view>
				</view>
				<view class="formView">
					<view class="fvTop">
						<view>歌词</view>
					</view>
					<view class="fvBot" @click="upSongLyrics">
						<view>{{ form.songLyrics || '微聊天记录内选择歌词文件(lrc)' }}</view>
					</view>
				</view>
				<view class="formSubmit" @click="submit">提交审核</view>
			</view>
		</view>
	</view>
</template>

<script>
import { BASEURL } from '@/common/configure.js';
export default {
	data() {
		return {
			songFileName: '',
			list: [
				{
					checked: true,
					disabled: false
				}
			],
			form: {
				songName: '测试歌曲名',
				lyricist: '测试作词人',
				composer: '测试作曲人',
				songTitle: '',
				currentPrice: '10',
				originalPrice: '20',
				songCoverPhotoUrl: '',
				songFileUrl: 'https://image-file2024.oss-cn-beijing.aliyuncs.com/geWoLiMusicMall/song/f1e22173-dcad-4fd5-b64c-e0521457071b.mp3',
				songLyrics: '',
				songTypeId: '',
				source:0
			},
			loginType: 0,
			typeList: [], //风格列表
			show: false //选择歌曲风格
		};
	},
	computed: {
		titleHeight: function () {
			return getApp().globalData.titleHeight;
		},
		userInfo: () => {
			return uni.getStorageSync('userInfo');
		}
	},
	onLoad({ loginType }) {
		this.getType();
		this.loginType = loginType;
	},
	// file/ossUpload
	methods: {
		//图片上传
		select(e) {
			this.form.songCoverPhotoUrl = e.tempFilePaths[0];
		},
		//微信音频上传
		upAudio() {
			let that = this;
			uni.showLoading();
			uni.chooseMessageFile({
				count: 1,
				extension: ['.mp3'],
				success: function (res) {
					uni.uploadFile({
						url: BASEURL + '/file/ossUpload?type=3',
						filePath: res.tempFiles[0].path,
						fileType: 'audio',
						name: 'file',
						header: {
							Authorization: 'Bearer ' + uni.getStorageSync('token') || '',
							'content-type': 'application/x-www-form-urlencoded'
						},
						success: (uploadFileRes) => {
							let data = JSON.parse(uploadFileRes.data);
							if (data.code == 200) {
								that.songFileName = res.tempFiles[0].name;
								that.form.songFileUrl = data.msg;
							}
							uni.hideLoading();
						},
						fail: (msg) => {
							console.log(msg);
							uni.hideLoading();
						}
					});
				},
				fail: (msg) => {
					console.log(msg);
					uni.hideLoading();
				}
			});
		},
		//歌词解析
		upSongLyrics() {
			let that = this;
			uni.showLoading();
			uni.chooseMessageFile({
				count: 1,
				extension: ['.lrc'],
				success: function (res) {
					uni.uploadFile({
						url: BASEURL + '/file/songLyrics',
						filePath: res.tempFiles[0].path,
						name: 'file',
						header: {
							Authorization: 'Bearer ' + uni.getStorageSync('token') || ''
						},
						formData: {
							songLyrics: 'file'
						},
						success: (uploadFileRes) => {
							console.log(uploadFileRes);
							let data = JSON.parse(uploadFileRes.data);
							if (data.code == 200) {
								that.form.songLyrics = data.data;
							}
							uni.hideLoading();
						},
						fail: (msg) => {
							console.log(msg);
							uni.hideLoading();
						}
					});
				},
				fail: (msg) => {
					console.log(msg);
					uni.hideLoading();
				}
			});
		},
		confirmSongTitle(e) {
			let index = e[0];
			this.form.songTitle = this.typeList[index].typeName;
			this.form.songTypeId = this.typeList[index].id;
		},
		getType() {
			this.$req.get('system/type/list?pageNum=1&pageSize=99').then((res) => {
				this.typeList = res.rows;
			});
		},
		submit() {
			if (!this.validate()) return false;
			this.form.userId = this.userInfo.id;
			//图片上传后提交
			uni.uploadFile({
				url: BASEURL + '/file/ossUpload?type=2',
				filePath: this.form.songCoverPhotoUrl,
				fileType: 'image',
				name: 'file',
				header: {
					Authorization: 'Bearer ' + uni.getStorageSync('token') || ''
				},
				success: (res) => {
					let data = JSON.parse(res.data);
					if (data.code == 200) {
						this.form.songCoverPhotoUrl = data.msg;
						this.form.createBy = this.userInfo.nickName;
						console.log(this.form);
						setTimeout(() => {
							this.upInfo();
						}, 100);
					} else {
						uni.showToast({
							title: '请求失败，请稍后充实',
							icon: 'none'
						});
					}
				}
			});
		},
		upInfo() {
			// createBy
			let userInfo = uni.getStorageSync('userInfo');
			if (userInfo.name == null) {
				this.form.createBy = userInfo.nickName;
			} else {
				this.form.createBy = userInfo.name;
			}
			let data = JSON.parse(JSON.stringify(this.form));
			// data.createBy = uni.getStorageSync('userInfo').nickName;
			this.$req.post('system/song', data).then((res) => {
				if (res.code == 200) {
					uni.showToast({
						title: '提交成功！',
						icon: 'none',
						success: () => {
							setTimeout(() => {
								uni.navigateBack();
							}, 1000);
						}
					});
				} else {
					uni.showToast({
						title: '请求失败!请稍后重试！',
						icon: 'none'
					});
				}
			});
		},
		validate() {
			let flag = true; //true验证通过 false失败
			let showTxt = '';
			let { form } = this;

			//非空
			if (!form.songName) {
				showTxt = '请填写歌曲名';
				flag = false;
			}
			if (!form.lyricist) {
				showTxt = '请填写作词人';
				flag = false;
			}
			if (!form.composer) {
				showTxt = '请填写作曲人';
				flag = false;
			}
			if (!form.songTitle) {
				showTxt = '请选择歌曲风格';
				flag = false;
			}
			if (!form.currentPrice) {
				showTxt = '请填写售价';
				flag = false;
			}
			if (!form.originalPrice) {
				showTxt = '请填写原价';
				flag = false;
			}

			if (!form.songCoverPhotoUrl) {
				showTxt = '请上传封面图';
				flag = false;
			}
			if (!form.songFileUrl) {
				showTxt = '请上传mp3';
				flag = false;
			}
			if (!form.songLyrics) {
				showTxt = '请上传完整歌词';
				flag = false;
			}

			if (!flag) {
				uni.showToast({
					title: showTxt,
					icon: 'none'
				});
			}

			return flag;
		}
	}
};
</script>

<style lang="scss" scoped>
.content {
	width: 100vw;
	height: 100vh;
	overflow: auto;
	background: url('https://image-file2024.oss-cn-beijing.aliyuncs.com/geWoLiMusicMall/backgroundImage/image5.jpg');
	background-size: 100% 100%;
	.title {
		line-height: 70rpx;
		font-size: 36rpx;
		margin-left: 36rpx;
		position: relative;
	}
	.pTit {
		margin-top: 105rpx;
		text-indent: 64rpx;
		font-size: 40rpx;
		color: #231815;
		font-weight: 800;
	}
	.pTxt {
		margin-top: 30rpx;
		text-indent: 64rpx;
		font-size: 40rpx;
		color: #231815;
		font-weight: 800;
	}
	.icon {
		width: 378rpx;
		height: 322rpx;
		position: absolute;
		right: 20rpx;
		top: 50rpx;
	}
	.sings {
		margin-top: 32rpx;
		border-radius: 20rpx;
		border: 4rpx solid #ffffff;
		background: linear-gradient(180deg, rgba(255, 255, 255, 0.67) 0%, rgba(255, 255, 255, 0.56) 100%);
		box-shadow: 0 0 20rpx #fff;
		.jian {
			padding: 60rpx 64rpx;
			border-radius: 20rpx;
			box-shadow: inset 0 0 20rpx #edc8a5;
			.formView {
				margin-bottom: 42rpx;
				display: flex;
				.fvTop {
					width: 200rpx;
					display: flex;
					align-items: center;
					font-size: 32rpx;
					font-weight: 500;
					color: #231815;
					image {
						margin-right: 16rpx;
						width: 48rpx;
						height: 48rpx;
					}
				}
				.fvBot {
					width: 100%;
					padding: 10rpx 0;
					input {
						font-size: 24rpx;
						width: 100%;
						border-bottom: 2rpx solid #999;
					}
					view {
						overflow: auto;
						max-height: 500rpx;
						border: 2rpx solid #eee;
						border-radius: 20rpx;
						padding: 32rpx;
						font-size: 28rpx;
						color: #666;
					}
				}
			}
			.formView:last-child {
				margin-bottom: 0;
			}
			.formSubmit {
				height: 96rpx;
				line-height: 96rpx;
				text-align: center;
				font-size: 40rpx;
				font-weight: 800;
				color: #ffffff;
				border: 4rpx solid #fea14a;
				border-radius: 58rpx;
				background: linear-gradient(92deg, #ffd0a4 0%, #fab06c 33%, #fab06c 73%, #ffc996 100%);
			}
		}
	}
	.clause {
		margin: 80rpx auto 0;
		display: flex;
		justify-content: center;
		align-items: center;
		.txt1 {
			font-size: 24rpx;
		}
		text {
			font-size: 24rpx;
		}
		.txt2 {
			color: #e9c19c;
		}
	}
}
</style>
