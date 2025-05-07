<template>
	<view class="container">
		<whiteHeads :haveBack="true" title="详情" :haveJian="false"></whiteHeads>
		<swiper class="container_top" :indicator-dots="false" :autoplay="true" :circular="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item, index) in dataObj.carouselChart" :key="index">
				<image :src="item" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<view class="card">
			<view class="detailsCard">
				<view class="cardTitle">
					<text>{{ dataObj.studioName }}</text>
					<view class="cardTRight">
						<image src="@/static/sing/hot_0.png" mode=""></image>
						<view class="">{{ dataObj.studioHeat }}</view>
					</view>
				</view>
				<view class="cardPrice">
					<text class="cpTxt1">￥</text>
					<text class="cpTxt2">{{ dataObj.currentPrice }}</text>
					<text class="cpTxt3">/月</text>
				</view>
				<view class="cardTag" v-if="dataObj.studioLabel">
					<text v-for="(item, index) in imgFun(dataObj.studioLabel)" :key="index">{{ item }}</text>
				</view>
				<view class="cardInfo">
					<view class="ciView">
						<view>是否可定制</view>
						<view class="civTxt">{{ dataObj.isCustomization ? '否' : '是' }}</view>
					</view>
					<view class="ciView">
						<view>面积</view>
						<view class="civTxt">{{ dataObj.studioArea }}㎡</view>
					</view>
					<view class="ciView">
						<view>朝向</view>
						<view class="civTxt">{{ dataObj.facing }}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="address" @click="address">
			<image src="@/static/th.jpg"></image>
			<view class="addressInfo">
				<view class="adressTxt">
					{{ dataObj.studioAddress }}
				</view>
				<image src="@/static/icon/my_2.png"></image>
			</view>
		</view>
		<view class="imgInfos">
			<image v-for="(item, index) in dataObj.detailImages" :key="index" :src="item" mode="widthFix"></image>
		</view>

		<view class="bottomView">
			<button class="bvView" open-type="share" :data-id="dataObj.id" :data-name="dataObj.studioName">
				<image src="@/static/icon/share.png"></image>
				<view>分享</view>
			</button>
			<view class="collection bvView" @click="collection()">
				<image :src="dataObj.isCollect == 1 ? '../../../static/sing/collection_1.png' : '../../../static/sing/collection_0.png'"></image>
				<view>收藏</view>
			</view>
			<button style="margin-left: 50%" class="telPhone btn" open-type="contact">联系客服</button>
			<!-- <view class="telPhone btn">联系客服</view> -->
			<!-- <view class="toDO btn">立即预约</view> -->
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
			path: '/pages/tabbar/recording/details?id=' + res.target.dataset.id
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
		address() {
			const address = this.dataObj.studioAddress;
			const latitude = Number(this.dataObj.latitude);
			const longitude = Number(this.dataObj.longitude);
			uni.openLocation({
				name: address,
				latitude,
				longitude,
				scale: 15
			});
		},
		getList(id) {
			let getData = {
				studioId: id,
				userId: this.userInfo.id
			};
			this.$req.get('recordingStudio/findStudioView', getData).then((res) => {
				this.dataObj = res.data[0];
				this.dataObj.carouselChart = this.parseImageUrls(this.dataObj.carouselChart);
				this.dataObj.detailImages = this.parseImageUrls(this.dataObj.detailImages);
				console.log(this.dataObj);
			});
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
		}
		.cardTag {
			margin-top: 22rpx;
			display: flex;
			text {
				display: inline-block;
				margin-left: 10rpx;
				color: #8f8a8a;
				font-size: 20rpx;
				padding: 8rpx 12rpx;
				background: #e5e5e5;
				border-radius: 20rpx 20rpx 20rpx 20rpx;
			}
		}
		.cardInfo {
			display: flex;
			text-align: center;
			margin-top: 48rpx;
			.ciView {
				flex: 1;
				margin: auto;
				font-size: 28rpx;
				color: #999999;
				position: relative;
				.civTxt {
					font-size: 32rpx;
					color: #231815;
					font-weight: 500;
					margin-top: 20rpx;
				}
			}
			.ciView:nth-child(1)::before,
			.ciView:nth-child(2)::before {
				content: '';
				position: absolute;
				right: 0;
				top: 0;
				bottom: 0;
				margin: auto;
				width: 2rpx;
				height: 50rpx;
				background: #999;
			}
		}
	}
	.address {
		margin: 48rpx auto;
		position: relative;
		width: 686rpx;
		> image {
			width: 686rpx;
			height: 104rpx;
			border-radius: 16rpx;
		}
		.addressInfo {
			position: absolute;
			top: 0;
			bottom: 0;
			margin: auto;
			width: 686rpx;
			padding: 0 32rpx 0 6rpx;
			display: flex;
			align-items: center;
			.adressTxt {
				color: #231815;
				width: 540rpx;
				height: 68rpx;
				background: linear-gradient(180deg, rgba(255, 255, 255, 0.91) 0%, #ffffff 0%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.65) 100%);
				line-height: 68rpx;
				border-radius: 70rpx;
				overflow: hidden;
				padding: 0 10rpx;
				white-space: nowrap;
				text-overflow: ellipsis;
				-o-text-overflow: ellipsis;
			}
			> image {
				margin-left: auto;
				width: 48rpx;
				height: 48rpx;
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
		.bvView {
			margin: 0;
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
			margin-left: 30rpx;
		}
		.btn {
			width: 188rpx;
			height: 52rpx;
			border-radius: 8rpx 8rpx 8rpx 8rpx;
			font-size: 24rpx;
			font-weight: 500;
			border: 2rpx solid #fc3758;
			text-align: center;
			line-height: 50rpx;
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
