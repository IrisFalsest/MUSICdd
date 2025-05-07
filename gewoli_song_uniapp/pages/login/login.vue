<template>
	<view class="content">
		<image class="logo" src="@/static/logo.png"></image>
		<view class="tit">歌窝里</view>
		<!--#ifdef MP-WEIXIN -->
		<view class="view check1" @click="login">
			<image src="@/static/icon/wx.png"></image>
			微信号登陆
		</view>
		<!-- #endif -->

		<button @click="show=true" class="view check2">
			<image src="@/static/icon/phone.png"></image>
			手机号登陆
		</button>

		<!-- 协议 -->
		<view class="clause">
			<u-checkbox-group>
				<u-checkbox v-model="item.checked" v-for="(item, index) in list" :key="index" shape="circle" active-color="#E9C19C">
					<text class="txt1">我已阅读并同意</text>
				</u-checkbox>
			</u-checkbox-group>
			<text class="txt2">《用户协议》</text>
			<text>和</text>
			<text class="txt2">《隐私协议》</text>
		</view>

		<privacyPop ref="PrivacyPopck"></privacyPop>
		<!--app手机验证码登录-->

		<u-popup v-model="show" mode="center" closeable border-radius="20" width ="80%" height ="600"  @close="close" @open="open">
			<view class="u-flex u-row-center" style="margin-top: 10rpx;">
				<text style="font-weight:bold;font-size:50rpx;text-decoration:blink;text-shadow: 2px 8px 12px #fda149;">欢迎登录</text>
			</view>
			<view  class="u-flex u-col-center u-flex-wrap" style="height: 400rpx;">
				<u-field
					v-model="phoneNumber"
					label="手机号"
					required
					placeholder="请填写手机号"
					icon="phone"
				>
				</u-field>
				<u-field
					style="margin-top: -120rpx;"
					v-model="code"
					label="验证码"
					required
					placeholder="请填写验证码"
					icon="order"
				>
					<u-button size="mini" slot="right" type="success" @click="getCode">{{tips}}</u-button>
				</u-field>
				<u-verification-code ref="uCode" @change="codeChange"></u-verification-code>
			</view>
			<view class="u-flex u-row-center u-col-center">
				<u-button shape="square"  size="medium" type="warning" @click="phonenumberLogin">登录</u-button>
			</view>
			
		</u-popup>

	</view>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			code:null,
			tips:null,
			phoneNumber:null,
			list: [
				{
					checked: true,
					disabled: false
				}
			]
		};
	},
	async onLoad() {
		// let res = this.$req.wxLogin();
		// this.$refs.PrivacyPopck.checkPrivacySetting();
	},
	methods: {
		phonenumberLogin() {
			const reg = /^1[3456789]\d{9}$/;
			if(!this.phoneNumber||!reg.test(this.phoneNumber)){
					uni.$u.toast("手机号不合法");
					return;
			}
			console.log('APP');
			if (!this.list[0].checked) {
				uni.showToast({
					icon: 'none',
					title: '请勾选用户协议'
				});
				return false;
			}
			this.$req.post('user/login?phoneNumber=' + this.phoneNumber + '&code=' + this.code).then((res) => {
				const {
					data
				} = res;
				uni.setStorageSync('userInfo', data.user);
				uni.setStorageSync('token', data.token);
				this.toUrl('/pages/tabbar/index/index');
			});
		},
		login() {
			if (!this.list[0].checked) {
				uni.showToast({
					icon: 'none',
					title: '请勾选用户协议'
				});
				return;
			}
			this.$req.wxLogin('/pages/tabbar/index/index').then((res) => {
				let userInfo = res.data.data;
				let shareId = uni.getStorageSync('shareId') || null;
				let putData = {
					ids: [],
					score: ''
				};
				putData.ids.push(userInfo.user.id);
				putData.ids.push(shareId);
				this.$req.get('system/config/configKey/sys.user.socre').then((res) => {
					putData.score = res.msg;
				});
				console.log(putData);
				if (userInfo.inFlag == 1 && shareId != null) {
					this.$req.put('mobileEndUser/addScore', putData, 'form');
				}
			});
		},
	  open() {
					this.show = true
				},
		close() {
			this.show = false
			// console.log('close');
		},
		getCode() {
			const reg = /^1[3456789]\d{9}$/;
			if(!this.phoneNumber||!reg.test(this.phoneNumber)){
					uni.$u.toast("手机号不合法");
					return;
			}
			if (this.$refs.uCode.canGetCode) {
				// 模拟向后端请求验证码
				uni.showLoading({
					title: '正在获取验证码'
				})
				this.$req.post('user/sendSms?phoneNumber=' + this.phoneNumber ).then((res) => {
					uni.hideLoading();
					// 这里此提示会被this.start()方法中的提示覆盖
					uni.$u.toast(res.msg);
					// 通知验证码组件内部开始倒计时
					this.$refs.uCode.start();
				});
			} else {
				uni.$u.toast('倒计时结束后再发送');
			}
		},
		change(e) {
			console.log('change', e);
		},
		codeChange(text) {
			this.tips = text;
		},
	}
};
</script>

<style lang="scss" scoped>
/deep/.u-checkbox__icon-wrap {
	border: 1px solid #e9c19c !important;
}
/deep/.u-checkbox__label {
	margin-right: 0 !important;
}
.content {
	width: 100vw;
	height: 100vh;
	overflow: auto;
	background: url('https://image-file2024.oss-cn-beijing.aliyuncs.com/geWoLiMusicMall/backgroundImage/image5.jpg');
	background-size: 100% 100%;
	.logo {
		display: block;
		margin: 200rpx auto 0;
		width: 172rpx;
		height: 172rpx;
	}
	.tit {
		color: #000000;
		font-size: 48rpx;
		font-weight: 500;
		margin-top: 20rpx;
		text-align: center;
	}
	.view {
		width: 686rpx;
		height: 96rpx;
		border: 4rpx solid #fda149;
		margin: 0 auto;
		border-radius: 58rpx 58rpx 58rpx 58rpx;
		display: flex;
		align-items: center;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 32rpx;
		font-weight: 800;
		image {
			width: 48rpx;
			height: 48rpx;
			margin-right: 8rpx;
		}
	}
	.check1 {
		margin-top: 250rpx;
		background: linear-gradient(92deg, #ffd0a4 0%, #fab06c 33%, #fab06c 73%, #ffc996 100%);
	}
	.check2 {
		margin-top: 48rpx;
		background: 0;
	}
}
.clause {
	position: fixed;
	bottom: 62rpx;
	left: 0;
	right: 0;
	margin: auto;
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
</style>
