<template>
	<view>
		<heads :haveLogo="false" style="color: black" :haveBack="true" :sTop="scrollTop" :title="'赠送积分'"></heads>
		<view v-if="pageFlag == false"></view>
		<view v-if="pageFlag == true">
			<scroll-view scroll-y="true" @scroll="refScroll">
				<view style="position: relative;">
					<view class="bg_img"><image :src="rankingList.participatingPhoto || '../../static/logo.png'"></image></view>
					<view class="bg_text">
						<view class="bg_text_box">
							<view class="bg_text_box_title">{{ rankingList.nickName }}</view>
							<view class="tllnTxt">职业：顶级音乐人</view>
							<view class="tllnTxt">个人简介：{{ rankingList.remark || '' }}</view>
							<view class="tllnTxt">赛区：{{ rankingList.competitionZone || '' }}</view>
							<view class="tllnTxt">参赛宣言：{{ rankingList.entryDeclaration || '' }}</view>
							<view class="tllnTxt">总积分：{{ rankingList.userHeat || '0' }}</view>
							<view class="tllnTxt">距离上一名差：{{ popList.score || '0' }}积分</view>
						</view>
					</view>
				</view>
				<view class="pop">
					<!-- <view class="tlLi">
						<view class="tllNum">
							<view class="tllnumTxt">TOP</view>
							<view
								class="num"
								:class="{
									gold: rankingList.ranking === 1,
									silver: rankingList.ranking === 2,
									bronze: rankingList.ranking === 3
								}"
							>
								{{ rankingList.ranking }}
							</view>
						</view>
						<view class="tllImg">
							<image :src="rankingList.participatingPhoto || '../../static/logo.png'"></image>
						</view>

						<view class="tllName">
							<view class="tllnTit">{{ rankingList.nickName }}</view>
							<view class="tllnTxt">职业：顶级音乐人</view>
							<view class="tllnTxt">个人简介：{{ rankingList.remark || '' }}</view>
							<view class="tllnTxt">赛区：{{ rankingList.competitionZone || '' }}</view>
							<view class="tllnTxt">参赛宣言：{{ rankingList.entryDeclaration || '' }}</view>
							<view class="tllnTxt">总积分：{{ rankingList.userHeat || '0' }}</view>
							<view class="tllnTxt">距离上一名差：{{ popList.score || '0' }}积分</view>
						</view>
					</view> -->
					<u-input v-model="value" type="number" :placeholder="'您有' + (userInfo.score || '0') + '积分'" border="true" :adjust-position="true" />
					<view class="renwu">
						<view>每日登录 {{score}}积分/次</view>
						<view class="renwu_btn">已登录</view>
					</view>
					<view class="view" @click="submit">赠送</view>
					<scroll-view scroll-y="true">
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
							<u-loadmore bg-color="rgb(240, 240, 240)" status="loadmore" @loadmore="nextList"></u-loadmore>
						</view>
					</scroll-view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			rankingList: [],
			checkIndex: null,
			popList: {},
			shopList: [],
			rankingId: '',
			userInfo: {},
			userId: null,
			value: '',
			clickUserid: '',
			pageFlag: false,
			score:''
		};
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
		getInfo() {
			this.$req.get('mobileEndUser/info?userId=' + this.userId).then((res) => {
				this.userInfo = res.data.user;
			});
		},
		getScore(){
			this.$req.get('system/config/configKey/sys.user.socre').then((res) => {
				this.score = res.msg
			});
		},
		nextList(){
			uni.reLaunch({
				url:'/pages/tabbar/goods/goods'
			})
		},
		getDetails() {
			let data = {
				rankingId: this.rankingId,
				type: 4
			};
			this.$req.get(`ranking/acquisitionActivityRankingById`, data).then((res) => {
				console.log(res);
				this.popList = res.data;
				this.shopList = res.data.goods.slice(0,2);
				this.rankingList = res.data.user[0];
				this.pageFlag = true;
			});
		},
		submit() {
			let userScore = this.userInfo.score;
			console.log(userScore);
			if (this.value == '') {
				uni.showToast({
					title: '输入的积分不能为空',
					icon: 'none'
				});
				return;
			}
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
				return;
			}

			uni.showLoading();

			let putData = {
				giver: this.userInfo.id,
				recipient: this.rankingList.userId,
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
						userId: this.rankingList.userId,
						userHeat: this.value
					};
					this.$req.post('ranking/modifyHeat', postData, 'form').then((res) => {
						if (res.code == 200) {
							this.getDetails();
							this.value = '';
						}
						uni.showToast({
							title: res.msg,
							icon: 'none'
						});
					});
				}
			});
		}
	},
	onLoad(opntios) {
		console.log(opntios);
		this.checkIndex = opntios.index;
		this.rankingId = opntios.id;
		this.clickUserid = opntios.userId;
		this.userId = uni.getStorageSync('userInfo').id;
		this.getInfo();
		this.getDetails();
		this.getScore()
	}
};
</script>

<style lang="scss" scoped>
.bg_img {
	width: 100%;
	height: 800rpx;
	image {
		width: 100%;
		height: 100%;
	}
}
.bg_text {
	position: absolute;
	bottom: 0;
	width: 100%;
	height: auto;
	background-color: rgba(255, 255, 255, 0.6);
	color: black;
	.bg_text_box {
		margin: 40rpx;
		.bg_text_box_title {
			font-size: 50rpx;
		}
		.tllnTxt {
			font-size: 24rpx;
			margin-top: 5rpx;
		}
	}
}
.renwu {
	display: flex;
	align-items: center;
	width: 100%;
	height: 100rpx;
	font-size: 26rpx;
	.renwu_btn {
		color: rgb(27, 214, 108);
		margin-left: 20rpx;
		width: 120rpx;
		height: 50rpx;
		line-height: 50rpx;
		text-align: center;
		border-radius: 50rpx;
		font-size: 24rpx;
		border: 2rpx solid rgb(27, 214, 108);;
	}
}
.pop {
	// position: fixed;
	transition: height 0.3s ease;
	padding: 32rpx;
	color: #000;
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
	height: 850rpx;
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
	margin-right: 33rpx;
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
