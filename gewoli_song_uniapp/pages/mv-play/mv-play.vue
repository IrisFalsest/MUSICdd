<template>
	<view style="height: 100vh; background: linear-gradient(360deg, #304b53 40%, #2c3e50 83%)">
		<whiteHeads :haveBack="true" title="MV详情" :haveJian="false"></whiteHeads>
		<view class="mv-play-wrap">
			<!-- 视频播放开始 -->
			<video
				enable-play-gesture
				vslide-gesture-in-fullscreen
				class="alias-video"
				id="alias-video"
				:src="getData.songMvUrl"
				controls
				page-gesture
				:poster="getData.songMvCoverPhotoUrl"
				show-mute-btn
				:title="getData.songName"
			></video>
			<!-- 视频播放结束 -->
		</view>
		<view class="box">
			<view class="content_box">
				<view class="content_box_userInfo">
					<view>@{{ getData.lyricist }}</view>
					<view class="content_box_userInfo_btn" v-if="getData.isFollow == 0" @click="userFollow(getData.userId)">关注</view>
					<view class="content_box_userInfo_btn" v-if="getData.isFollow == 1" @click="deleteFollow(getData.userId)">已关注</view>
				</view>
				<view>{{ getData.songName }}</view>
				<view style="font-size: 25rpx">详情：{{ formatDateTime(getData.createTime) }}发布</view>
			</view>
			<view style="padding-top: 20%">
				<!-- <view class="right_icon_btn">
					<view class="icon_box"><img src="/static/sing/hot_0.png" alt="" /></view>
					<view class="icon_text">3695</view>
				</view> -->
				<view class="right_icon_btn">
					<view class="icon_box"><img src="/static/sing/mv_hot.png" alt="" /></view>
					<view class="icon_text">3695</view>
				</view>
				<view class="right_icon_btn">
					<view class="icon_box" @click="sc()">
						<img v-show="getData.isCollect == 1" src="/static/sing/mv_sc2.png" alt="" />
						<img v-show="getData.isCollect == 0" src="/static/sing/mv_sc.png" alt="" />
					</view>
					<view class="icon_text">3695</view>
				</view>
			</view>
		</view>

		<view class="bottom_box">
			<view class="bottom_content">
				<view class="bottom_content_content">
					<view class="avatar_box"><img :src="getData.songMvCoverPhotoUrl || '/static/logo.png'" alt="" /></view>
					<view class="userInfo_box">
						<view>{{ getData.songName }}</view>
						<view style="font-size: 25rpx; margin-top: 10rpx">@{{ getData.lyricist }}</view>
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
			getData: {}
		};
	},
	onLoad(option) {
		let obj = JSON.parse(decodeURIComponent(option.item));
		this.getData = obj;
		console.log(this.getData);
	},
	methods: {
		formatDateTime(dateTimeStr) {
			let dateStr = dateTimeStr.slice(0, -6);
			let date = new Date(dateStr);

			return (
				date.getFullYear() +
				'-' +
				('0' + (date.getMonth() + 1)).slice(-2) +
				'-' +
				('0' + date.getDate()).slice(-2) +
				' ' +
				('0' + date.getHours()).slice(-2) +
				':' +
				('0' + date.getMinutes()).slice(-2) +
				':' +
				('0' + date.getSeconds()).slice(-2)
			);
		},
		sc() {
			let url, isCollect;
			if (this.getData.isCollect == 0) {
				//未收藏 提交收藏接口
				url = 'userSongCollection/userSongCollection';
				isCollect = 1;
			} else {
				//已收藏 提交取消收藏接口
				url = 'userSongCollection/deleteUserSongCollection';
				isCollect = 0;
			}
			let postData = {
				songId: this.getData.id,
				userId: uni.getStorageSync('userInfo').id
			};
			this.$req.post(url, postData, 'form').then((res) => {
				this.getData.isCollect = isCollect;
				uni.showToast({
					title: res.msg,
					icon: 'none'
				});
				console.log(this.getData);
			});
		},
		// 关注
		userFollow(e) {
			let data = {
				userId: uni.getStorageSync('userInfo').id,
				followUsers: e
			};
			this.$req.post('follow/userFollow', data, 'form').then((res) => {
				if (res.code == 200) {
					uni.showToast({
						title: '关注成功！',
						icon: 'none'
					});
					this.getData.isFollow = 1;
				}
			});
		},
		// 取消关注
		deleteFollow(e) {
			let getData = {
				followUsers: e,
				userId: uni.getStorageSync('userInfo').id
			};
			this.$req.post('follow/deleteFollow?followUsers=' + getData.followUsers + '&userId=' + getData.userId).then((res) => {
				if (res.code == 200) {
					uni.showToast({
						title: '取消关注成功！',
						icon: 'none'
					});
					this.getData.isFollow = 0;
				}
			});
		}
	}
};
</script>
<style>
page {
	height: 100%;
	width: 100%;
}
</style>

<style lang="scss" scoped>
.mv-play-wrap {
	padding-top: 55%;
	box-sizing: border-box;
	.alias-video {
		width: 100%;
		height: 450rpx;
	}

	.detail-wrap {
		padding: 20rpx;

		.top-wrap {
			width: 100%;
			height: 120rpx;

			.cover {
				width: 120rpx;
				height: 100%;
				border-radius: 50%;
				border: 1rpx solid #eee;
				vertical-align: middle;
				margin-right: 20rpx;
			}

			.name {
				display: inline-block;
				font-size: 38rpx;
				color: #333;
				width: 200rpx;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}

		.bottom-wrap {
			font-size: 30rpx;
			width: 100%;
			height: 40rpx;
			color: #ccc;
			margin-top: 20rpx;

			.time-title {
				padding-right: 10rpx;
			}

			.publish-time {
				padding-right: 20rpx;
			}

			.count-title {
				padding-right: 10rpx;
			}
		}

		.desc {
			width: 100%;
			margin-top: 20rpx;
			font-size: 30rpx;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 5;
			-webkit-box-orient: vertical;
		}
	}

	.simi-wrap {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	.comment-mv {
		padding: 20rpx;

		.title {
			border-bottom: 10rpx solid #eee;
			margin-bottom: 15rpx;
			padding-bottom: 5rpx;
		}
	}

	.bottom-text-wrap {
		color: #888;
		font-size: 24rpx;
		padding-bottom: 20rpx;
		text-align: center;
	}
}

.box {
	display: flex;
	justify-content: space-between;
	margin: 30rpx;
}
.content_box {
	padding-top: 40%;
	// background-color: white;
	color: white;
	view {
		margin-top: 15rpx;
	}
	.content_box_userInfo {
		margin-top: 20rpx;
		display: flex;
		align-items: center;
		.content_box_userInfo_btn {
			margin-left: 20rpx;
			background-color: rgb(248, 57, 90);
			border-radius: 20rpx;
			width: 100rpx;
			height: 40rpx;
			line-height: 40rpx;
			font-size: 26rpx;
			text-align: center;
			color: white;
		}
	}
}

.right_icon_btn {
	margin-top: 20rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: white;
	.icon_box {
		width: 70rpx;
		height: 70rpx;
		img {
			width: 100%;
			height: 100%;
		}
	}
	.icon_text {
		margin-top: 10rpx;
		font-size: 26rpx;
	}
}

.bottom_box {
	position: fixed;
	bottom: 20rpx;
	width: 100%;
	padding: 30rpx;
	.bottom_content {
		background-color: rgb(107, 119, 123);
		width: 100%;
		border-radius: 20rpx;
		padding: 20rpx;
	}
	.bottom_content_content {
		color: white;
		display: flex;
		align-items: center;
		.avatar_box {
			width: 80rpx;
			height: 80rpx;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.userInfo_box {
			display: flex;
			flex-direction: column;
			margin-left: 20rpx;
			font-size: 27rpx;
		}
	}
}
</style>
