<template>
	<view>
		<scroll-view scroll-y="true" class="content" @scroll="scrollMain">
			<heads :haveLogo="false" :haveBack="true" :sTop="scrollTop" :title="'歌曲购买'"></heads>
			<view class="top_box">
				<view>
					<view class="top_box_title">词曲著作财产权</view>
					<view class="top_box_desc">方式：独家永久买断，不支持退款</view>
				</view>
				<view class="top_box_price">
					￥{{ curItem.currentPrice }}
					<text v-if="curItem.isScoreBuy == 1">/{{ curItem.scoreSum }}积分</text>
				</view>
			</view>
			<view class="content_box">
				<view class="desc_text">实名认证信息</view>
				<view class="desc_text_two">仅在“上上签”签署版权转让协议时使用</view>

				<view class="form"></view>
				<view class="form_box">
					<view class="form_box_input"><input type="text" v-model="name" placeholder="输入本人姓名" /></view>
				</view>
				<view class="form"></view>
				<view class="form_box">
					<view class="form_box_input"><input type="text" v-model="cardNo" placeholder="输入本人身份证" /></view>
				</view>

				<view class="desc_text" style="margin-top: 10%">联系方式</view>

				<view class="form"></view>
				<view class="form_box">
					<view class="form_box_input"><input type="text" v-model="phoneNumber" placeholder="输入本人手机号" /></view>
				</view>
				<view class="form"></view>
				<view class="form_box">
					<view class="form_box_input" style="display: flex; align-items: center; justify-content: space-between">
						<input type="text" v-model="code" placeholder="输入验证码" />
						<button class="btn_yzm" @click="getSendSms" :disabled="codeFlag">{{ codeValue }}</button>
					</view>
				</view>
			</view>
			<view class="xy">
				<view class="xy_title">下单须知</view>
				<view class="xy_item">*订单支付后，您将签署以下协议，获得歌曲相关权利</view>
				<view class="xy_item">
					*签署
					<text class="xy_text_color" @click="goPage">《音乐作品著作财产权转让合同》</text>
					获得词权利
				</view>
				<view class="xy_item">
					*签署
					<text class="xy_text_color" @click="goPage">《音乐作品著作财产权转让合同》</text>
					获得曲权利
				</view>
				<view class="xy_item">
					*签署
					<text class="xy_text_color" @click="goPage">《音乐作品权利转让合同》</text>
					获得邻接权等权利
				</view>
			</view>
			<view class="bottom_meun">
				<radio-group @change="radioChange" class="radio">
					<label>
						<radio :value="groupValue" />
						我已阅读并同意签署版权转让相关合同
					</label>
				</radio-group>
				<view style="background-color: rgb(238, 238, 238); height: 2rpx; width: 100%"></view>
				<view class="btn_box">
					<view>
						总价:
						<text class="price">
							￥{{ curItem.currentPrice }}
							<text v-if="curItem.isScoreBuy == 1">/{{ curItem.scoreSum }}积分</text>
						</text>
					</view>
					<view class="btn" @click="open">立即购买</view>
				</view>
			</view>
		</scroll-view>

		<uni-popup ref="popup" type="center" border-radius="10px 10px 0 0">
			<view class="wxplay_box">
				<view class="wxplay_item" @click="buy(2)" v-if="curItem.isScoreBuy == 1">
					<view class="item_icon"><img src="/static/icon/jfzf.png" alt="" /></view>
					<view>积分支付</view>
				</view>
				<view class="wxplay_item" @click="buy(1)">
					<view class="item_icon">
						<img src="/static/icon/wxzf.png" alt="" />
					</view>
					<view class="">微信支付</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import { BASEURL } from '@/common/configure.js';
export default {
	data() {
		return {
			scrollTop: 0,
			groupValue: false,
			phoneNumber: '',
			name: '',
			cardNo: '',
			curItem: {},
			code: '',
			codeValue: '获取验证码',
			codeFlag: false
		};
	},
	methods: {
		radioChange(e) {
			console.log(e.detail);
			this.groupValue = !this.groupValue;
		},
		scrollMain(e) {},
		getSendSms() {
			if(!this.phoneNumber){
				uni.showToast({
					title: '请填写手机号',
					icon: 'none'
				});
				return
			}
			this.codeValue = 60;
			this.codeFlag = true;
			if (this.codeValue === 60) {
				// 防止重复点击
				this.codeValue = 59; // 初始化倒计时为59秒，因为第一次不会触发计时器内的递减操作
				const timerId = setInterval(() => {
					if (this.codeValue > 0) {
						this.codeValue--; // 每秒递减
					} else {
						clearInterval(timerId); // 清除计时器
						this.codeValue = '获取验证码'; // 重置计数器
						this.codeFlag = false;
					}
				}, 1000);
				let data = {
					phoneNumber: this.phoneNumber
				};
				this.$req.post('user/sendSms', data, 'form').then((res) => {
					console.log(res);
				});
			}
		},
		open() {
			if (!this.name || !this.cardNo || !this.phoneNumber || !this.code) {
				uni.showToast({
					title: '请填写全部信息',
					icon: 'none'
				});
				return;
			}
			if (this.groupValue) {
				var that = this;
				let codeData = {
					phoneNumber: this.phoneNumber,
					code: this.code
				};
				uni.request({
					url: BASEURL + '/user/smsFlag',
					method: 'GET',
					data: codeData,
					header: {
						Authorization: uni.getStorageSync('token') || '',
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: (res1) => {
						console.log(res1.data.msg);
						if (res1.data.msg == '验证码正确') {
							this.auth();
						}
						uni.showToast({
							title: res1.data.msg,
							icon: 'none'
						});
					}
				});
			} else {
				uni.showToast({
					title: '请阅读并勾选同意协议',
					icon: 'none'
				});
			}
		},
		auth() {
			let authdata = {
				cardNo: this.cardNo,
				name: this.name
			};
			this.$req.post('user/auth', authdata).then((res) => {
				if (res.data.msg == '身份证号和姓名一致') {
					this.$refs.popup.open();
				}
				uni.showToast({
					title: res.data.msg,
					icon: 'none'
				});
			});
		},
		buy(payMethod) {
			var that = this;
			console.log(payMethod);
			const item = this.curItem;
			let roleType = uni.getStorageSync('userInfo').roleType;
			let musiciansSignStatus = uni.getStorageSync('userInfo').musiciansSignStatus;
			if (roleType == '2' && musiciansSignStatus !== '3') {
				uni.showToast({
					title: '请签约后购买',
					icon: 'none'
				});
				uni.navigateTo({
					url: '/pages/upUserInfo/upUserInfo'
				});
				return;
			}
			let postData = {
				userId: uni.getStorageSync('userInfo').id,
				goodsId: item.id,
				phone: uni.getStorageSync('userInfo').reviewPhone,
				payMethod: 1
			};
			// 支付方式，2积分，1微信
			if (payMethod == 2) {
				postData.payMethod = 2;
			} else if (payMethod == 1) {
				postData.payMethod = 1;
			}
			let payUrl='song/order/payment'
			//#ifdef H5
			payUrl='song/order/appPayment'
			// #endif
			this.$req.put(payUrl, postData).then((oItem) => {
				if (oItem.data.timeStamp) {
					uni.requestPayment({
						provider: 'wxpay',
						timeStamp: oItem.data.timeStamp,
						nonceStr: oItem.data.nonceStr,
						package: 'prepay_id=' + oItem.data.packageStr,
						signType: 'MD5',
						paySign: oItem.data.paySign,
						success: (res) => {
							uni.showToast({
								title: '支付成功',
								icon: 'none'
							});
							setTimeout(() => {
								this.toUrl('/pages/order/singOrderList');
							}, 500);
							that.$refs.popup.close();
						},
						fail: function (err) {
							uni.showToast({
								title: '支付失败,请重试',
								icon: 'none'
							});
							that.$refs.popup.close();
						}
					});
				} else {
					this.$refs.popup.close();
					if (oItem.code == 500) {
						uni.showToast({
							title: '积分不足',
							icon: 'none'
						});
						return;
					}
					uni.showToast({
						title: '积分支付成功',
						icon: 'none'
					});
					setTimeout(() => {
						this.toUrl('/pages/order/singOrderList');
					}, 500);
				}
			});
		},
		goPage(){
			uni.navigateTo({
				url:'/pages/agreement/agreement'
			})
		}
	},
	onLoad(options) {
		// console.log(JSON.parse(options.item));
		this.curItem = JSON.parse(options.item);
	}
};
</script>

<style lang="scss" scoped>
.content {
	width: 100vw;
	height: 100vh;
	overflow: auto;
	// background: url('https://image-file2024.oss-cn-beijing.aliyuncs.com/geWoLiMusicMall/backgroundImage/image1.jpg');
	background-size: 100% 100%;
}
.top_box {
	width: 90vw;
	margin: 0 auto;
	height: 200rpx;
	background: url('https://image-file2024.oss-cn-beijing.aliyuncs.com/geWoLiMusicMall/backgroundImage/image1.jpg');
	// background: #edc7a7;
	border-radius: 30rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 50rpx;
	color: white;
	.top_box_title {
		font-size: 30rpx;
	}
	.top_box_desc {
		padding-top: 10rpx;
		font-size: 24rpx;
	}
	.top_box_price {
		font-size: 30rpx;
		color: rgb(248, 56, 89);
		font-weight: 600;
	}
}
.content_box {
	margin: 10% 50rpx 0 50rpx;
	.desc_text {
		margin-top: 20rpx;
		color: rgb(172, 170, 171);
		font-weight: bold;
		font-size: 30rpx;
	}
	.desc_text_two {
		margin-top: 20rpx;
		color: rgb(204, 204, 204);
		font-size: 26rpx;
	}
	.form {
		margin-top: 10%;
	}
	.form_box {
		width: 100%;
		margin: 0 auto;
		height: 120rpx;
		background-color: rgb(245, 245, 245);
		border-radius: 20rpx;
		.form_box_input {
			padding: 20rpx;
			input {
				height: 87rpx;
			}
		}
	}
}
.btn_yzm {
	width: 180rpx;
	height: 50rpx;
	border-radius: 50rpx;
	line-height: 50rpx;
	border: 1rpx solid rgb(170, 170, 170);
	font-size: 24rpx;
	text-align: center;
}
.xy {
	margin-top: 5%;
	padding-left: 50rpx;
	padding-right: 50rpx;
	padding-bottom: 40%;
	.xy_title {
		font-size: 28rpx;
		color: black;
		font-weight: bold;
	}
	.xy_item {
		color: rgb(170, 170, 170);
		font-size: 26rpx;
		margin-top: 20rpx;
		.xy_text_color {
			color: rgb(248, 56, 89);
		}
	}
}
.bottom_meun {
	width: 100%;
	height: 160rpx;
	background-color: white;
	box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	position: fixed;
	bottom: 0;
	padding-bottom: 27%;
	.btn_box {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left: 50rpx;
		padding-right: 50rpx;
		padding-top: 10rpx;
	}
	.btn {
		width: 200rpx;
		height: 80rpx;
		text-align: center;
		line-height: 80rpx;
		background-color: rgb(248, 56, 89);
		border-radius: 50rpx;
		color: white;
	}
	.radio {
		padding: 20rpx 50rpx 20rpx 50rpx;
	}
	.price {
		color: rgb(248, 56, 89);
	}
}
.wxplay_box {
	border-radius: 30rpx;
	width: 70vw;
	height: 300rpx;
	background-color: #fff;
	display: flex;
	align-items: center;
	justify-content: space-around;
	img {
		width: 100%;
		height: 100%;
	}
	.wxplay_item {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 50%;
		height: 50%;
		.item_icon {
			width: 70rpx;
			height: 70rpx;
			margin-bottom: 10%;
		}
	}
}
</style>
