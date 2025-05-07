<template>
	<scroll-view scroll-y="true" @scroll="scrollMain" class="content">
		<!-- 头部 -->
		<!-- <whiteHeads :sTop="scrollTop" :title="'排行榜'" :haveBack="true"></whiteHeads> -->
		<heads :haveLogo="false" style="color: black" :haveBack="true" :sTop="scrollTop" :title="'排行榜'"></heads>

		<!--   <view class="title" :style="{paddingTop: titleHeight+'px'}">
            <u-icon class="icon" name="arrow-left"></u-icon>
            <text>排行榜</text>
        </view> -->
		<view class="banner_box"><image class="ranking" src="@/static/icon/ranking.png"></image></view>

		<view class="bm_box" v-if="loginType == 2">
			<view class="baoming" @click="ranking">报名</view>
		</view>

		<view class="center_desc">
			<view>活动介绍>></view>
			<view>助力规则>></view>
		</view>

		<view class="tv2">
			<u-search @custom="search" @search="search" v-model="searchTxt" placeholder="搜索" shape="round" :clearabled="true" :show-action="true"></u-search>
		</view>

		<!-- 冠亚季军 -->
		<!-- <view class="kings">
			<view class="top2 kView" v-if="top3[1]" @click="showPop(1)">
				<view class="tImg">
					<image :src="top3[1].avatar || '../../static/logo.png'" mode=""></image>
				</view>
				<view class="tTit">TOP2</view>
				<view class="tTxt">{{ top3[1].nickName || '歌窝里' }}</view>
				<view class="tTxt1">{{ top3[1].userHeat || '0' }}</view>
			</view>
			<view class="top1 kView" v-if="top3[0]" @click="showPop(0)">
				<view class="tImg">
					<image :src="top3[0].avatar || '../../static/logo.png'"></image>
				</view>
				<view class="tTit">TOP1</view>
				<view class="tTxt">{{ top3[0].nickName || '歌窝里' }}</view>
				<view class="tTxt1">{{ top3[0].userHeat || '0' }}</view>
			</view>
			<view class="top3 kView" v-if="top3[2]" @click="showPop(2)">
				<view class="tImg">
					<image :src="top3[2].avatar || '../../static/logo.png'"></image>
				</view>
				<view class="tTit">TOP3</view>
				<view class="tTxt">{{ top3[2].nickName || '歌窝里' }}</view>
				<view class="tTxt1">{{ top3[2].userHeat || '0' }}</view>
			</view>
		</view> -->

		<!-- 4-10名 -->
		<view class="topList" v-for="(item, index) in rankingList" :key="index" @click="showPop(index, item.id, item.userId)">
			<view class="tlLi">
				<view class="tllNum">
					<view class="tllnumTxt">TOP</view>
					<!-- <view class="num" v-if="searchFlag == false" :class="{ gold: index + 1 === 1, silver: index + 1 === 2, bronze: index + 1 === 3 }">{{ index + 1 }}</view> -->
					<view class="num" :class="{ gold: item.ranking === 1, silver: item.ranking === 2, bronze: item.ranking === 3 }">{{ item.ranking }}</view>
				</view>
				<view class="tllImg">
					<image :src="item.participatingPhoto || '../../static/logo.png'" mode="aspectFill"></image>
				</view>
				<view class="tllName">
					<view class="tllnTit">{{ item.nickName }}</view>
					<view class="tllnTxt">职业：顶级音乐人</view>
					<view class="tllnTxt">个人简介：{{ item.remark || '' }}</view>
					<view class="tllnTxt">赛区：{{ item.competitionZone || '' }}</view>
					<view class="tllnTxt">参赛宣言：{{ item.entryDeclaration || '' }}</view>
					<view class="tllnTxt">总积分：{{ item.userHeat || '0' }}</view>
				</view>
				<view class="tllHot">
					<!-- {{ item.userHeat }} -->
					<view class="zhichi_btn">支持他</view>
				</view>
			</view>
		</view>
		<view style="padding-bottom: 5%"></view>

		<!-- 加热度 -->
		<u-popup v-model="showPopup" mode="bottom" :safeAreaInsetBottom="true">
			<scroll-view scroll-y="true" @scroll="refScroll">
				<view class="pop" :style="{ height: popupHeight + 'vh' }">
					<view class="pTit">赠送积分</view>
					<view class="tlLi">
						<view class="tllNum">
							<view class="tllnumTxt">TOP</view>
							<!-- <view class="num" :class="{ gold: checkIndex + 1 === 1, silver: checkIndex + 1 === 2, bronze: checkIndex + 1 === 3 }">{{ checkIndex + 1 }}</view> -->
							<view
								class="num"
								:class="{
									gold: rankingList[checkIndex].ranking === 1,
									silver: rankingList[checkIndex].ranking === 2,
									bronze: rankingList[checkIndex].ranking === 3
								}"
							>
								{{ rankingList[checkIndex].ranking }}
							</view>
						</view>
						<view class="tllImg">
							<image :src="rankingList[checkIndex].participatingPhoto || '../../static/logo.png'"></image>
						</view>
						<!-- 			<view class="tllName">
							<view class="tllnTit">{{ rankingList[checkIndex].nickName }}</view>
							<view class="tllnTxt">{{ rankingList[checkIndex].remark || '' }}</view>
						</view> -->
						<view class="tllName">
							<view class="tllnTit">{{ rankingList[checkIndex].nickName }}</view>
							<view class="tllnTxt">职业：顶级音乐人</view>
							<view class="tllnTxt">{{ rankingList[checkIndex].remark || '' }}</view>
							<view class="tllnTxt">总积分：{{ rankingList[checkIndex].userHeat || '0' }}</view>
							<view class="tllnTxt">距离上一名差：{{ popList.score || '0' }}积分</view>
						</view>
						<!-- 	<view class="tllHot">
							{{ rankingList[checkIndex].userHeat }}
						</view> -->
					</view>
					<u-input v-model="value" type="number" :placeholder="'您有' + (userInfo.score || '0') + '积分'" border="true" :adjust-position="true" />
					<view class="view" @click="submit">赠送</view>

					<view class="goodList">
						<u-waterfall v-model="shopList" ref="uWaterfall">
							<template v-slot:left="{ leftList }">
								<view class="demo-warter pLeft" v-for="(item, index) in leftList" :key="index" @click="goPageDetails(item.id)">
									<view class="demo-warter-hide">
										<u-lazy-load threshold="-450" :image="item.goodsImageUrl || '../../../static/logo.png'" :index="index"></u-lazy-load>
									</view>
									<view class="demo-title">
										{{ item.goodsName || '哥窝里' }}
									</view>
									<view class="demo-shop" v-if="item.shop">
										{{ item.shop || '' }}
									</view>
									<view class="demo-price">
										<text class="red">￥</text>
										<text class="red price">{{ item.goodsCurrentPrice || 0 }}</text>
										<text class="red" v-if="item.isScoreBuy == 1">/{{ item.scoreSum }}积分</text>
										<text class="orPrice">￥{{ item.goodsOriginalPrice || 0 }}</text>
									</view>
									<view class="giftScore">可获取{{ item.giftScore }}积分</view>
								</view>
							</template>
							<template v-slot:right="{ rightList }">
								<view class="demo-warter pRight" v-for="(item, index) in rightList" :key="index" @click="goPageDetails(item.id)">
									<view class="demo-warter-hide">
										<u-lazy-load threshold="-450" :image="item.goodsImageUrl || '../../../static/logo.png'" :index="index"></u-lazy-load>
									</view>
									<view class="demo-title">
										{{ item.goodsName || '哥窝里' }}
									</view>
									<view class="demo-shop" v-if="item.shop">
										{{ item.shop || '' }}
									</view>
									<view class="demo-price">
										<text class="red">￥</text>
										<text class="red price">{{ item.goodsCurrentPrice || 0 }}</text>
										<text class="red" v-if="item.isScoreBuy == 1">/{{ item.scoreSum }}积分</text>
										<text class="orPrice">￥{{ item.goodsOriginalPrice || 0 }}</text>
									</view>
									<view class="giftScore">可获取{{ item.giftScore }}积分</view>
								</view>
							</template>
						</u-waterfall>
<!-- 						<u-loadmore bg-color="rgb(240, 240, 240)" :status="paegList[cIndex].loadStatus" @loadmore="nextList"></u-loadmore> -->
					</view>
				</view>
			</scroll-view>
		</u-popup>
	</scroll-view>
</template>

<script>
export default {
	data() {
		return {
			scrollTop: 0,
			top3: [],
			rankingList: [],
			showPopup: false, //弹出层
			checkIndex: 0,
			value: '',
			userInfo: {},
			shareParams: {
				path: '/pages/ranking/ranking?shareId=' + uni.getStorageSync('userInfo').id,
				title: '邀请您参加活动',
				imageUrl: '',
				desc: ''
			},
			searchTxt: '',
			searchFlag: false,
			popList: {},
			shopList: [],
			popupHeight: 50,
			scrollY: 0 // 滚动条位置
		};
	},
	computed: {
		titleHeight: function () {
			return getApp().globalData.titleHeight;
		},
		loginType: () => {
			return uni.getStorageSync('loginType');
		}
	},
	watch: {
		showPopup(newValue, oldValue) {
			if (newValue == false) {
				this.popupHeight = 50;
			}
		},
		searchTxt(newValue, oldValue) {
			if (newValue == '') {
				this.search();
			}
		}
	},
	onLoad(options) {
		console.log(options.shareId);
		if (options.shareId) {
			uni.setStorageSync('shareId', options.shareId);
		}
		this.getRankingList();
		let userId = uni.getStorageSync('userInfo').id;
		this.getInfo(userId);
		// this.userInfo = uni.getStorageSync('userInfo');
		this.templateList();
	},
	methods: {
		goPageDetails(id) {
			uni.showModal({
				title: '温馨提示',
				content: '您确定要选购商品吗？',
				confirmText: '立即购买',
				cancelText: '残忍拒绝',
				success: (res) => {
					if (res.confirm) {
						uni.navigateTo({
							url: '/pages/goodDetails/goodDetails?id=' + id
						});
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
		},
		refScroll(e) {
			this.scrollY = e.detail.scrollTop;
			if (this.scrollY > 200) {
				this.popupHeight = 80; // 80% 视口高度
			}
			if (this.scrollY < 200) {
				this.popupHeight = 50; // 80% 视口高度
			}
		},
		search() {
			let data = {
				name: this.searchTxt,
				type: 4
			};
			this.$req.get('ranking/acquisitionActivityRankingByTypeAndNameOrUserId', data).then((res) => {
				console.log(res);
				this.rankingList = res.data;
				uni.setStorageSync('rankingList', this.rankingList);
				this.searchFlag = true;
			});
		},
		getInfo(userId) {
			this.$req.get('mobileEndUser/info?userId=' + userId).then((res) => {
				this.userInfo = res.data.user;
			});
		},
		//音乐人报名
		ranking() {
			// if (this.acquisitionActivity.isParticipate == 1) {
			// 	this.toUrl('/pages/ranking/ranking');
			// 	return;
			// }
			let userInfo = uni.getStorageSync('userInfo');
			if (userInfo.musiciansReviewStatus != 3) {
				uni.showToast({
					title: '您还不是音乐人，请提交音乐人信息审核！',
					icon: 'none'
				});
				setTimeout(() => {
					uni.navigateTo({
						url: '/pages/upUserInfo/upUserInfo?loginType=2'
					});
				}, 1000);
			} else {
				let putData = {
					// id:userInfo.id,
					status: 0,
					userHeat: 0,
					userId: userInfo.id,
					rankingType: 4
				};
				this.$req.put('ranking', putData).then((res) => {
					if (res.code == 200) {
						uni.showToast({
							title: '报名成功！',
							icon: 'none'
						});
					}
				});
			}
		},
		templateList() {
			this.$req.get('system/template/list?type=活动分享&templateName=我是音乐人').then((res) => {
				this.shareParams.imageUrl = res.rows[0].backgroundImage;
				this.shareParams.desc = res.rows[0].type;
				console.log(this.shareParams);
			});
		},
		submit() {
			let userScore = this.userInfo.score;

			if (this.value > userScore) {
				uni.showToast({
					title: '积分不足，您可以通过购买歌曲或商品获取积分',
					icon: 'none'
				});
				setTimeout(() => {
					uni.switchTab({
						url: '/pages/tabbar/goods/goods'
					});
				}, 1000);
				return false;
			}

			uni.showLoading();

			let putData = {
				giver: this.userInfo.id,
				recipient: this.rankingList[this.checkIndex].userId,
				score: this.value
			};
			//赠送积分
			this.$req.put('mobileEndUser/rewardPoints', putData, 'form').then((res) => {
				uni.showToast({
					title: res.msg,
					icon: 'none'
				});
				if (res.code == 200) {
					// 更新用户积分
					this.$req.get('mobileEndUser/info', { userId: this.userInfo.id }).then((res) => {
						this.userInfo = JSON.parse(JSON.stringify(res.data.user));
						uni.setStorageSync('userInfo', res.data.user);
					});

					//添加热度
					let postData = {
						userId: this.rankingList[this.checkIndex].userId,
						userHeat: this.value
					};
					this.$req.post('ranking/modifyHeat', postData, 'form').then((res) => {
						if (res.code == 200) {
							this.getRankingList();
							this.value = '';
						}
						uni.showToast({
							title: res.msg,
							icon: 'none'
						});
					});
				}
			});
		},
		showPop(index, id, userId) {
			uni.navigateTo({
				url: '/pages/leaderboardDetails/leaderboardDetails?index=' + index + '&id=' + id + '&userId=' + userId
			});
			console.log(index);
			this.checkIndex = index;
			// this.showPopup = true;
			let data = {
				rankingId: id,
				type: 4
			};
			this.$req.get(`ranking/acquisitionActivityRankingById`, data).then((res) => {
				console.log(res);
				this.popList = res.data;
				this.shopList = res.data.goods;
			});
		},
		getRankingList(type) {
			let data = {
				name: this.searchTxt,
				type: 4
			};
			this.$req.get(`ranking/acquisitionActivityRankingByTypeAndNameOrUserId/`, data).then((res) => {
				// this.top3 = res.data.slice(0, 3);
				// console.log(this.top3);
				this.rankingList = res.data;
				uni.setStorageSync('rankingList', this.rankingList);
				this.showPopup = false;
				uni.hideLoading();
			});
		},
		scrollMain(e) {
			this.scrollTop = e.detail.scrollTop;
		}
	},
	onShareAppMessage: function (e) {
		return {
			title: this.shareParams.title, // 标题
			path: this.shareParams.path, // 分享路径
			imageUrl: this.shareParams.imageUrl // 分享图
		};
	}
};
</script>

<style lang="scss" scoped>
/deep/.u-drawer-content {
	border-radius: 10rpx 10rpx 0 0;
}
.content {
	color: #fff;
	background: linear-gradient(143deg, #e9c19c 0%, rgba(255, 255, 255, 0.52) 100%);
	// background: #000;
	width: 100vw;
	height: 100vh;
	overflow: auto;
	.title {
		position: absolute;
		width: 100vw;
		color: #fff;
		text-align: center;
		line-height: 60rpx;
		.icon {
			position: absolute;
			left: 20rpx;
			bottom: 20rpx;
			margin: auto;
		}
		text {
			font-weight: bold;
			font-size: 40rpx;
		}
	}
	.banner_box {
		padding: 20rpx;
	}
	.ranking {
		width: 100%;
		height: 520rpx;
		border-radius: 20rpx;
	}
	.center_desc {
		color: #000;
		justify-content: center;
		display: flex;
		align-items: center;
		view {
			margin-left: 20rpx;
			margin-right: 20rpx;
		}
		margin: 20rpx 0 20rpx 0;
	}
	.tv2 {
		margin: 40rpx auto 0;
		width: 686rpx;
	}
	.kings {
		display: flex;
		// margin-top: -46rpx;
		align-items: flex-end;
		justify-content: center;
		text-align: center;
		.kView {
			margin: 0 auto;
		}
		.top2 {
			.tImg {
				border-radius: 8rpx;
				padding: 2rpx;
				background: #fff;
				width: 208rpx;
				height: 208rpx;
				image {
					border-radius: 8rpx;
					width: 204rpx;
					height: 204rpx;
				}
			}
		}
		.top1 {
			.tImg {
				border-radius: 8rpx;
				padding: 2rpx;
				background: #f5c853;
				width: 238rpx;
				height: 238rpx;
				image {
					border-radius: 8rpx;
					width: 234rpx;
					height: 234rpx;
				}
			}
		}
		.top3 {
			.tImg {
				border-radius: 8rpx;
				padding: 2rpx;
				background: #dfb08d;
				width: 174rpx;
				height: 174rpx;
				image {
					border-radius: 8rpx;
					width: 170rpx;
					height: 170rpx;
				}
			}
		}
	}
	.topList {
		width: 686rpx;
		margin: 48rpx auto;
	}
}
.pop {
	transition: height 0.3s ease;
	height: 700rpx;
	padding: 32rpx;
	color: #000;
	position: relative;
	.pTit {
		font-size: 32rpx;
		font-weight: bold;
		margin-bottom: 20rpx;
	}
}

.tlLi {
	margin-bottom: 32rpx;
	display: flex;
	align-items: center;
	.tllNum {
		color: #000;
		text-align: center;
		.tllnumTxt {
			font-size: 20rpx;
			font-weight: 500;
		}
		.num {
			font-size: 40rpx;
			font-weight: 800;
		}
	}
	.tllImg {
		margin-left: 20rpx;
		image {
			width: 190rpx;
			height: 250rpx;
			border-radius: 8rpx;
		}
	}
	.tllName {
		color: #000;
		margin-left: 20rpx;
		.tllnTit {
			font-weight: 500;
			font-size: 28rpx;
		}
		.tllnTxt {
			width: 300rpx;
			margin-top: 12rpx;
			font-size: 24rpx;
			// color: rgba(255, 255, 255, 0.6);
			color: #000;
		}
	}
	.tllHot {
		margin-left: auto;
		font-size: 28rpx;
		font-weight: 500;

		.zhichi_btn {
			background-color: rgb(248, 56, 89);
			width: 130rpx;
			height: 50rpx;
			border-radius: 50rpx;
			text-align: center;
			line-height: 50rpx;
		}
	}
}
.tlLi:last-child {
	margin-bottom: 0;
}

.view {
	background: linear-gradient(92deg, #ffd0a4 0%, #fab06c 33%, #fab06c 73%, #ffc996 100%);
	width: 686rpx;
	height: 96rpx;
	border: 4rpx solid #fda149;
	margin: 30rpx auto 0;
	border-radius: 58rpx 58rpx 58rpx 58rpx;
	display: flex;
	align-items: center;
	color: #fff;
	// color: black;
	justify-content: center;
	font-size: 32rpx;
	font-weight: 800;
}

.bm_box {
	position: absolute;
	top: 20%;
	right: 0;
	.baoming {
		width: 120rpx;
		height: 70rpx;
		background-color: white;
		font-weight: bold;
		color: #000;
		text-align: center;
		border-radius: 50rpx 0rpx 0rpx 50rpx;
		line-height: 70rpx;
	}
}
.gold {
	color: rgb(252, 197, 70); /* 金色 */
}

.silver {
	color: #c0c0c0; /* 银色 */
}

.bronze {
	color: #cd7f32; /* 铜色 */
}

.goodList {
	width: 686rpx;
	margin: 34rpx auto;
}
.demo-warter {
	.demo-warter-hide {
		border-radius: 16rpx 16rpx 0 0;
		overflow: hidden;
	}
	margin: 20px 5rpx;
	background-color: #ffffff;
	// padding: 16rpx;
	border-radius: 16rpx;
	position: relative;
	overflow: hidden;
}

.pLeft {
	margin-right: 21rpx;
}
.pRight {
	margin-left: 21rpx;
}
.giftScore {
	font-size: 24rpx;
	color: #fc3758;
	margin-top: 20rpx;
	width: 200rpx;
	height: 50rpx;
	border-radius: 10rpx;
	background-color: #ffeef4;
	text-align: center;
	line-height: 50rpx;
}
.u-close {
	position: absolute;
	top: 32rpx;
	right: 32rpx;
}

.demo-image {
	width: 100%;
	border-radius: 4px;
}

.demo-title {
	font-size: 24rpx;
	margin-top: 5px;
	padding: 0 16rpx;
	color: #000;
}

.demo-price {
	font-size: 30rpx;
	color: $u-type-error;
	margin-top: 5px;
	padding: 0 16rpx;
	display: flex;
	align-items: center;
	.red {
		color: #fb3758;
		font-size: 24rpx;
		font-weight: 500;
	}
	.price {
		font-size: 28rpx;
		font-weight: 800;
	}
	.orPrice {
		margin-left: auto;
		font-size: 20rpx;
		color: rgba(153, 153, 153, 0.6);
		text-decoration: line-through;
	}
}

.demo-shop {
	font-size: 20rpx;
	padding: 0 16rpx;
	color: #999999;
	margin-top: 5px;
}
</style>
