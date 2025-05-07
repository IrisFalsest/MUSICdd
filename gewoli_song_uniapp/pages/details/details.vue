<template>
	<view class="details">
		<!-- heads -->
		<!-- heads -->
		<heads :haveLogo="false" :haveBack="true" :sTop="scrollTop" :title="'详情'"></heads>

		<view class="box">
			<view class="top_bg">
				<img :src="userInfo.backgroundImage" alt="" />
			</view>

			<view class="content_bg">
				<view class="top_content">
					<view class="avatar"><img :src="userInfo.avatar || '/static/logo.png'" alt="" /></view>
					<view class="userText">
						<view class="name">{{ userInfo.nickName }}</view>
						<view>男</view>
					</view>
					<view class="remark">{{ userInfo.remark || '' }}</view>
				</view>
			</view>
		</view>
		<view class="singList" :style="{ height: listHeight + 'px' }">
			<view v-if="songList.length <= 0" style="width: 600rpx; height: 600rpx; margin: auto">
				<img src="/static/暂无数据.jpg" alt="" />
			</view>
			<template v-else v-for="(item, index) in songList">
				<view class="slView">
					<view class="slvTop">
						<view class="slvCover" @click="playMp3(item, index)">
							<image class="slvcImg" :src="item.songCoverPhotoUrl || '../../../static/logo.jpg'"></image>
							<image class="slvcPlay" src="@/static/icon/play.png"></image>
						</view>
						<view class="slvMain">
							<view class="slvmTit">{{ item.songName }}</view>
							<view class="slvmTxt">
								<text>制作人：</text>
								{{ item.createBy || '' }}
							</view>
							<!-- 	<view class="slvmTxt1">
									<text class="price">￥{{ item.currentPrice }}</text>
									<text class="orPrice">￥{{ item.originalPrice }}</text>
								</view> -->
						</view>
						<!-- 				<view class="priceAndBtn">
							<view class="price">￥{{ item.currentPrice }}</view>
							<view class="slvBtn" @click.stop="open(item)">购买</view>
						</view> -->
					</view>

					<!-- <view class="slvBot">
						<button class="slvbView" open-type="share" data-id="1">
							<image class="sbvImg" src="@/static/icon/share.png"></image>
							<text>转发</text>
						</button>
						<view class="slvbView" @click="collection(item, i, index, v)">
							<image :src="item.isCollect == 1 ? '../../../static/sing/collection_1.png' : '../../../static/sing/collection_0.png'"></image>
							<text>收藏</text>
						</view>
						<view class="slvbView">
							<image src="@/static/sing/hot_0.png"></image>
							<text>{{ item.songHeat }}</text>
						</view>
					</view> -->
				</view>
			</template>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			userInfo: {},
			songList: [],
			shareParams: {
				path: '',
				title: '',
				imageUrl: '',
				desc: ''
			}
		};
	},
	methods: {
		getInfo(id) {
			this.$req.get('mobileEndUser/info?userId=' + id).then((res) => {
				this.userInfo = res.data.user;
				this.songList = res.data.songList;
				this.shareParams.title = '邀请您查看音乐人/制作人';
				this.shareParams.imageUrl = this.userInfo.backgroundImage;
			});
		},
		//播放音乐
		playMp3(item, index) {
			console.log(item, index);
			// if (i == -1) {
			// 	const encodedList = encodeURIComponent(JSON.stringify(this.searchList));
			// 	this.toUrl(`/pages/play/play?list=${encodedList}&index=${index}`);
			// }
			// // console.log(this.songList[i]);
			// // 传递整个songList数组
			const encodedList = encodeURIComponent(JSON.stringify(this.songList));
			this.toUrl(`/pages/play/play?list=${encodedList}&index=${index}`);
		}
	},
	onShareAppMessage: function (e) {
		return {
			title: this.shareParams.title, // 标题
			path: this.shareParams.path, // 分享路径
			imageUrl: this.shareParams.imageUrl // 分享图
		};
	},
	onLoad(option) {
		this.getInfo(option.id);
		this.shareParams.path = '/pages/details/details?id=' + option.id;
	}
};
</script>

<style lang="scss" scoped>
.details {
	width: 100vw;
	height: 100vh;
	overflow: auto;
	background: url('https://image-file2024.oss-cn-beijing.aliyuncs.com/geWoLiMusicMall/backgroundImage/image1.jpg');
	background-size: 100% 100%;
}
img {
	width: 100%;
	height: 100%;
}
.box {
	position: relative;
}
.top_bg {
	width: 100%;
	height: 400rpx;
}
.content_bg {
	position: absolute;
	left: 5%;
	right: auto;
	top: 70%;
	margin: auto;
	border-radius: 40rpx;
	background-color: rgb(250, 250, 250);
	width: 90%;
	height: 250rpx;
	.top_content {
		margin: 20rpx;
		.avatar {
			width: 150rpx;
			height: 150rpx;
			position: absolute;
			top: -20%;
			img {
				border-radius: 50%;
			}
		}
		.userText {
			padding-top: 15%;
			display: flex;
			align-items: center;
			view {
				margin: 10rpx;
				font-size: 24rpx;
			}
			.name {
				font-weight: bold;
				font-size: 30rpx;
			}
		}
		.remark {
			margin: 10rpx;
			font-size: 24rpx;
		}
	}
}

.singList {
	padding-top: 20%;
	width: 686rpx;
	margin: 20rpx auto 0;
	overflow: auto;
	.slView {
		margin-bottom: 10rpx;
		// padding: 22rpx 32rpx 32rpx;
		border-radius: 20rpx;
		background: rgb(250, 250, 250);
		box-shadow: 0rpx 0rpx 62rpx 0rpx rgba(255, 239, 223, 0.5);
		.slvTop {
			display: flex;
			align-items: center;
			padding-top: 22rpx;
			padding-bottom: 22rpx;
			border-bottom: 2rpx solid #ececec;
			.slvCover {
				width: 156rpx;
				height: 156rpx;
				border-radius: 78rpx;
				overflow: hidden;
				position: relative;
				margin-left: 32rpx;
				.slvcImg {
					width: 156rpx;
					height: 156rpx;
				}
				.slvcPlay {
					width: 60rpx;
					height: 60rpx;
					position: absolute;
					left: 0;
					top: 0;
					right: 0;
					bottom: 0;
					margin: auto;
				}
			}
			.slvMain {
				width: 320rpx;
				height: 80rpx;
				display: flex;
				justify-content: space-between;
				margin-left: 40rpx;
				flex-direction: column;
				.slvmTit {
					font-size: 24rpx;
					font-weight: 800;
				}
				.slvmTxt {
					color: #000000;
					font-size: 20rpx;
				}
				.slvmTxt1 {
					.price {
						font-size: 28rpx;
						color: #fb3758;
						font-weight: 800;
					}
					.orPrice {
						text-decoration: line-through;
						font-size: 20rpx;
						color: rgba(153, 153, 153, 0.6);
						margin-left: 10rpx;
					}
				}
			}
			.priceAndBtn {
				display: flex;
				flex-direction: column;
				align-items: center;
				.price {
					font-size: 28rpx;
					color: #fb3758;
					font-weight: 800;
					margin-bottom: 20rpx;
				}
			}
			.slvBtn {
				margin-left: auto;
				width: 124rpx;
				height: 48rpx;
				line-height: 48rpx;
				text-align: center;
				border-radius: 8rpx;
				background: #fc3758;
				color: #fff;
				font-size: 28rpx;
				// margin-right: 32rpx;
			}
		}

		.slvBot {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100rpx;
			.slvbView {
				margin: 0 auto;
				display: flex;
				align-items: center;
				color: #231815;
				font-size: 24rpx;
				border: 0;
				background: 0;
				padding-left: 0;
				padding-right: 0;
				image {
					width: 48rpx;
					height: 48rpx;
				}
				.sbvImg {
					width: 46rpx;
					height: 46rpx;
				}
				text {
					margin-left: 8rpx;
				}
			}
			.slvbView::after {
				border: 0;
				background: 0;
			}
		}
	}
}
</style>
