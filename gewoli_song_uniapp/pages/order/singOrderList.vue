<template>
	<view class="">
		<view class="singList">
			<view class="slView" v-for="(item, index) in cList" :key="index">
				<view @click="doItem(item, index)">
					<view class="slvTop">
						<view class="slvCover">
							<image class="slvcImg" :src="item.songCoverPhotoUrl || item.carouselChart || '../../static/logo.png'"></image>
							<image class="slvcPlay" src="@/static/icon/play.png"></image>
						</view>
						<view class="slvMain">
							<view class="slvmTit">{{ item.songName }}</view>
							<view class="slvmTxt">
								<text>{{ item.songTitle || '' }}</text>
							</view>
							<view class="slvmTxt1">
								<text class="price">￥{{ item.amount }}</text>
								<!-- <text class="orPrice">￥{{item.originalPrice}}</text> -->
							</view>
						</view>
						<view class="slvBtn" @click.stop="downMp3(item, index)">下载</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			cList: [],
			list: [
				{
					name: '歌单收藏'
				},
				{
					name: '录音棚收藏'
				}
			]
		};
	},
	onLoad() {
		this.getStudioCollection();
	},
	methods: {
		//跳转操作
		doItem(item, index) {
			this.toUrl(`/pages/play/play?list=${JSON.stringify(this.cList)}&index=${index}`);
			// this.toUrl(`/pages/play/play?item=${JSON.stringify(item)}`)
		},
		//下载
		downMp3(item, index) {
			uni.downloadFile({
				url: item.songFileUrl, //仅为示例，并非真实的资源
				success: (r) => {
					if (r.statusCode === 200) {
						uni.saveFile({
							tempFilePath: r.tempFilePath,
							success: function (res) {
								uni.showToast({
									title: '下载成功'
								});
							}
						});
					}
				}
			});
		},
		getStudioCollection() {
			let userId = uni.getStorageSync('userInfo').id;
			this.$req.get(`system/songOrder/list?userId=${userId}&pageNum=1&pageSize=999`).then((res) => {
				this.cList = res.rows;
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.header {
	width: 100vw;
	position: fixed;
	height: 100rpx;
}
.jian {
	height: 100rpx;
}
.singList {
	width: 686rpx;
	margin: 0 auto 0;
	overflow: auto;
	.slView {
		margin-bottom: 10rpx;
		// padding: 22rpx 32rpx 32rpx;
		border-radius: 20rpx;
		background: #fff;
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
					width: 32rpx;
					height: 32rpx;
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
				height: 156rpx;
				display: flex;
				justify-content: space-between;
				margin-left: 20rpx;
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
			.slvBtn {
				margin-left: auto;
				padding: 0 10rpx;
				height: 48rpx;
				line-height: 48rpx;
				text-align: center;
				border-radius: 8rpx;
				background: #fc3758;
				color: #fff;
				font-size: 28rpx;
				margin-right: 32rpx;
			}
		}
	}
}
</style>
