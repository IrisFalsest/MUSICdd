<template>
	<view class="container">
		<whiteHeads :haveBack="true" title="详情" :haveJian="false"></whiteHeads>
		<swiper class="container_top" :indicator-dots="false" :autoplay="true" :circular="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item, index) in dataObj.goodsChart" :key="index">
				<image :src="item" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<view class="card">
			<view class="detailsCard">
				<view class="cardTitle">
					<text>{{ dataObj.goodsName }}</text>
					<!-- <view class="cardTRight">
						<image src="@/static/sing/hot_0.png" mode=""></image>
						<view class="">{{ dataObj.goodsHeat }}</view>
					</view> -->
				</view>
				<view class="cardPrice">
					<text class="cpTxt1">￥</text>
					<text class="cpTxt2">{{ dataObj.goodsCurrentPrice }}元</text>
					<text class="cpTxt3" v-if="dataObj.isScoreBuy == 1">/{{ dataObj.scoreSum }}积分</text>
					<view class="cpTxt4" v-if="dataObj.giftScore">赠送{{ dataObj.giftScore }}积分</view>
				</view>
				<view class="cardInfo">
					<view class="ciView">
						<view class="civTxt">{{ dataObj.goodsInfo }}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="imgInfos">
			<image v-for="(item, index) in dataObj.goodsDetail" :key="index" :src="item" mode="widthFix"></image>
		</view>

		<view class="bottomView">
			<button class="bvView" open-type="share" :data-id="dataObj.id" :data-name="dataObj.studioName">
				<image src="@/static/icon/share.png"></image>
				<view>分享</view>
			</button>
			<button class="telPhone btn" open-type="contact">联系客服</button>
			<view class="toDO btn" @click="toSubmit">立即购买</view>
		</view>
		<view style="height: 100rpx"></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			dataObj: {}
		};
	},
	computed: {
		userInfo: () => {
			return uni.getStorageSync('userInfo');
		}
	},
	onLoad({ id }) {
		this.getList(id);
	},
	//微信分享
	onShareAppMessage(res) {
		return {
			title: res.target.dataset.name,
			path: '/pages/goodDetails/goodDetails?id=' + res.target.dataset.id
		};
	},
	methods: {
		collection() {
			let type = this.dataObj.isCollect;
			let url, typeNum;
			let postData = {
				studioId: this.dataObj.id,
				userId: this.userInfo.id
			};

			if (type == 1) {
				//取消收藏
				url = 'userStudioCollection/deleteUserStudioCollection';
				typeNum = 0;
			} else {
				//收藏
				url = 'userStudioCollection/userStudioCollection';
				typeNum = 1;
			}

			this.$req.post(url, postData, 'form').then((res) => {
				if (res.code == 200) {
					uni.showToast({
						title: res.msg,
						icon: 'none'
					});
					this.dataObj.isCollect = typeNum;
				} else {
					uni.showToast({
						title: '请求失败！请稍后重试！',
						icon: 'none'
					});
				}
			});
		},
		getList(id) {
			this.$req.get('system/goods/' + id).then((res) => {
				this.dataObj = res.data;
				this.dataObj.goodsChart = this.parseImageUrls(this.dataObj.goodsChart);
				this.dataObj.goodsDetail = this.parseImageUrls(this.dataObj.goodsDetail);
				console.log(this.dataObj);
			});
		},
		toSubmit() {
			console.log(JSON.stringify(this.dataObj));
			this.toUrl('/pages/order/submit?obj=' + JSON.stringify(this.dataObj));
		},
		imgFun(e) {
			if (e) {
				return e.split(',');
			} else {
				return e;
			}
		},
		parseImageUrls(imageString) {
			// 替换字符串中的所有不匹配 JSON 规范的字符，例如多余的双引号和花括号
			let cleanString = imageString.replace(/"/g, '').replace(/\{|\}/g, '');

			// 将逗号分隔的字符串转换为数组，然后再给每个元素加上引号，以便它们被视为字符串
			let arrayString =
				'[' +
				cleanString
					.split(',')
					.map((s) => `"${s.trim()}"`)
					.join(',') +
				']';

			// 使用 JSON.parse 将字符串转换为 JavaScript 数组
			let imageUrlArray;
			try {
				imageUrlArray = JSON.parse(arrayString);
			} catch (error) {
				console.error('Error parsing image URLs:', error);
				return [];
			}
			return imageUrlArray;
		}
	}
};
</script>

<style lang="scss" scoped>
.container {
	&_top {
		height: 495rpx;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.card {
		position: relative;
		background: #ffffff;
		border-radius: 20rpx 20rpx 0rpx 0rpx;
		margin-top: -48rpx;
		z-index: 9;
		padding: 32rpx;
		.detailsCard {
			padding: 0 32rpx;
			.cardTitle {
				display: flex;
				font-size: 40rpx;
				font-weight: 800;
				.cardTRight {
					margin-left: auto;
					text-align: center;
					font-size: 20rpx;
					color: #999999;
					image {
						width: 35rpx;
						height: 35rpx;
					}
				}
			}
		}
		.cardPrice {
			color: #fc3758;
			margin-top: 22rpx;
			.cpTxt1 {
				font-size: 24rpx;
				font-weight: 500;
			}
			.cpTxt2 {
				font-size: 32rpx;
				font-weight: 800;
			}
			.cpTxt3 {
				font-size: 24rpx;
				font-weight: 500;
			}
			.cpTxt4 {
				margin-top: 20rpx;
				width: 200rpx;
				height: 50rpx;
				border-radius: 10rpx;
				background-color: rgb(255, 238, 244);
				text-align: center;
				line-height: 50rpx;
			}
		}
		.cardInfo {
			display: flex;
			text-align: center;
			margin-top: 48rpx;
			.ciView {
				font-size: 28rpx;
				color: #999999;
				position: relative;
				.civTxt {
					font-size: 32rpx;
					color: #231815;
					font-weight: 500;
				}
			}
		}
	}
	.imgInfos {
		margin: 36rpx auto;
		text-align: center;
		image {
			width: 686rpx;
		}
	}
	.bottomView {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100vw;
		background: #fff;
		display: flex;
		padding: 24rpx 56rpx;
		align-items: center;
		padding-bottom: 50rpx;
		.bvView {
			line-height: 1.5;
			image {
				width: 34rpx;
				height: 34rpx;
				display: block;
				margin: 0 auto;
			}
			view {
				font-size: 24rpx;
			}
		}
		button {
			font-size: 24rpx;
			border: 0;
			background: 0;
			padding-left: 0;
			padding-right: 0;
		}
		button::after {
			border: 0;
			background: 0;
			height: 0;
		}
		.collection {
			margin-left: 20rpx;
		}
		.btn {
			width: 230rpx;
			height: 70rpx;
			border-radius: 8rpx 8rpx 8rpx 8rpx;
			font-size: 28rpx;
			font-weight: 700;
			border: 2rpx solid #fc3758;
			text-align: center;
			line-height: 68rpx;
			margin-left: auto;
		}
		.telPhone {
			background: #fff;
			color: #fc3758;
		}
		.toDO {
			background: #fc3758;

			color: #fff;
		}
	}
}
</style>
