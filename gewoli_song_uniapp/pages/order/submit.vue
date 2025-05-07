<template>
	<view>
		<view class="header" @tap="toUrl('/pages/address/myAdress?take=true')">
			<view class="view_header">
				<span style="color: #868686">{{ contacts }}</span>
			</view>
			<view class="hTit" v-if="address">
				<view class="">{{ city || '' }}</view>
				<u-icon name="arrow-right" color="#2979ff" size="28"></u-icon>
			</view>
			<view class="view_header">
				<span style="color: #868686; font-size: 28rpx">{{ address }}</span>
			</view>
			<view v-if="!addressId" class="header_text">
				<text>*请补全信息或修改</text>
			</view>
			<view class="" style="margin-top: 20rpx"></view>
			<u-gap height="10" bg-color="#e9e9e9"></u-gap>
		</view>

		<view class="content">
			<view class="view">
				<view class="content_image">
					<image :src="goodsData.goodsImageUrl"></image>
				</view>
				<view class="content_view">
					<p>{{ goodsData.goodsName }}</p>
					<view class="content_view_view">
						<view class="content_view_view1">
							<view>
								<text>{{ goodsData.goodsCurrentPrice }}</text>
								元
							</view>
						</view>
						<view class="content_view_view2"></view>
						<u-number-box v-model="goodsData.buyQuantity" :min="1"></u-number-box>
					</view>
					<view class="content_view_content">
						<text>
							{{ goodsData.goodsInfo }}
						</text>
					</view>
				</view>
			</view>
		</view>
		<view class="usercheck">
			<u-gap height="10" bg-color="#e9e9e9"></u-gap>
			<u-field input-align="right" :border-top="false" :border-bottom="false" v-model="remark" label="备注" placeholder="请填写备注(选填)"></u-field>
			<u-gap height="10" bg-color="#e9e9e9"></u-gap>
		</view>
		<view class="footer">
			<view class="footer_view2">
				<view>
					<span>{{ cPrice }}元</span>
				</view>
				<view>
					<u-button class="u-button" type="warning" shape="circle" size="medium" @click="open()">提交订单</u-button>
				</view>
			</view>
		</view>
		<u-top-tips ref="uTips"></u-top-tips>

		<uni-popup ref="popup" type="center" border-radius="10px 10px 0 0">
			<view class="wxplay_box">
				<view class="wxplay_item" @click="createOrder(2)" v-if="goodsData.isScoreBuy == 1">
					<view class="item_icon"><img src="/static/icon/jfzf.png" alt="" /></view>
					<view>积分支付</view>
				</view>
				<view class="wxplay_item" @click="createOrder(1)">
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
export default {
	data() {
		return {
			goodsData: {},
			city: '请选择地址',
			addressId: '',
			address: '',
			contacts: '请选择地址',
			remark: '',
			cPrice: 0,
			addressObj: {},
			consignee: ''
		};
	},
	onLoad(option) {
		let obj = JSON.parse(option.obj);
		obj.buyQuantity = 1;
		this.goodsData = obj;
		this.init();
	},
	onShow() {
		let pages = getCurrentPages();
		if (pages != null) {
			let currPage = pages[pages.length - 1];
			let obj = currPage.data.addressObj;
			console.log(obj);
			this.city = `${obj.provinceState},${obj.city},${obj.area}`;
			this.addressId = obj.id;
			this.contacts = obj.phoneNumber;
			this.address = obj.addressLine;
			this.consignee = obj.recipientName;
		}
	},
	watch: {
		goodsData: {
			handler: function (v) {
				let p = v.goodsCurrentPrice * v.buyQuantity;
				this.cPrice = p.toFixed(2);
			},
			deep: true
		}
	},
	methods: {
		open() {
			// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
			this.$refs.popup.open();
		},
		createOrder(payMethod) {
			if (!this.city) {
				uni.showToast({
					title: '请添加地址',
					icon: 'none'
				});
				return;
			}
			let putData = {
				address: this.city + ' ' + this.address,
				amount: this.cPrice,
				buyQuantity: this.goodsData.buyQuantity,
				consignee: this.consignee,
				goodsId: this.goodsData.id,
				payMethod: 1, //1微信 2支付宝
				userId: uni.getStorageSync('userInfo').id,
				phone: this.contacts
			};
			// 支付方式，2积分，1微信
			if (payMethod == 2) {
				putData.payMethod = 2;
			} else if (payMethod == 1) {
				putData.payMethod = 1;
			}
			this.$req.put('goodsOrder/payment', putData).then((oItem) => {
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
								uni.redirectTo({
									url: '/pages/order/list'
								});
							}, 500);
						},
						fail: function (err) {
							uni.showToast({
								title: '支付失败,请重试',
								icon: 'none'
							});
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
						uni.redirectTo({
							url: '/pages/order/list'
						});
					}, 500);
				}
			});
		},
		//获取默认地址
		init() {
			this.$req.get('userAddress/acquisitionUserAddress', { userId: uni.getStorageSync('userInfo').id }).then((res) => {
				const { data } = res;
				let haveDefault = data.filter((item) => item.isDefault == 1);
				if (haveDefault.length) {
					let obj = haveDefault[0];
					this.addressObj = JSON.parse(JSON.stringify(obj));
					this.city = `${obj.provinceState},${obj.city},${obj.area}`;
					this.addressId = obj.id;
					this.contacts = obj.phoneNumber;
					this.address = obj.addressLine;
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.usercheck {
	width: 90vw;
	margin: 0 auto;
}
.header {
	padding: 20rpx 20rpx 30rpx 20rpx;

	.view_header {
		margin-left: 20rpx;
	}

	.header_text {
		color: #d1c0ad;
		margin-left: 20rpx;
		font-size: 24rpx;
	}

	.hTit {
		color: #333;
		font-size: 32rpx;
		font-weight: bold;
		margin: 15rpx 20rpx;
		display: flex;

		image {
			width: 30rpx;
			height: 30rpx;
			margin-left: auto;
		}
	}
}

.content {
	border-bottm: 20rpx solid #f2f2f2;
	padding: 20rpx;

	.view {
	}

	.content_image {
		width: 200rpx;
		height: 200rpx;
		display: inline-block;
		image {
			width: 100%;
			height: 100%;
			border-radius: 10rpx;
		}
	}

	.content_view {
		margin-left: 20rpx;
		width: 400rpx;
		display: inline-block;
		p {
			font-weight: bold;
			font-size: 33rpx;
		}

		.content_view_view {
			display: flex;
			margin: 10rpx 0rpx 10rpx 0rpx;

			view {
				flex: 1;
			}

			.content_view_view1 {
				view {
					display: flex;
					justify-content: flex-start;
					align-items: center;
					color: #e0aaa6;
					font-size: 40rpx;
					text {
						color: #ce7e78;
						font-weight: bold;
					}
				}
			}

			.content_view_view2 {
				display: flex;
				justify-content: flex-end;
				align-items: center;
			}
		}

		.content_view_content {
			text {
				color: #cec6ca;
				display: -webkit-box;
				overflow: hidden;
				text-overflow: ellipsis;
				word-break: break-all;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
			}
		}
	}
}

.footer {
	padding: 20rpx;
	width: 100%;
	position: fixed;
	bottom: 0rpx;
	background-color: white;

	.footer_view2 {
		display: flex;
		align-items: center;

		view {
			flex: 1;
		}

		span {
			color: #d5999a;
			font-weight: bold;
			display: flex;
			justify-content: flex-start;
		}

		.u-button {
			display: flex;
			justify-content: flex-end;
		}
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
