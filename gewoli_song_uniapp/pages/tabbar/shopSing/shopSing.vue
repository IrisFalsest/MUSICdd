<template>
	<view class="content" >
		<!-- heads -->
		<heads class="head" :sTop="scrollTop" :title="'在售歌单'"></heads>

		<view class="tv2">
			<u-search @custom="search" v-model="searchTxt" placeholder="搜索" shape="round" :clearabled="true" :show-action="true"></u-search>
		</view>

		<!-- 搜索列表 -->
		<view class="singList" v-if="isSearch" :style="{ height: listHeight + 'px' }">
			<template v-if="searchList.length > 0">
				<view class="slView" v-for="(item, index) in searchList" :key="index">
					<view class="slvTop">
						<view class="avatarBox">
							<view class="slvCover" @click="playMp3(item, index, -1)">
								<image class="slvcImg" :src="item.songCoverPhotoUrl || '../../../static/logo.png'"></image>
								<image class="slvcPlay" src="@/static/icon/play.png"></image>
							</view>
							<view class="slvMain">
								<view class="slvmTit">{{ item.songName }}</view>
								<view class="slvmTxt typeName" style="margin-top: 10rpx">{{ item.typeName }}</view>
								<view class="slvmTxt avater">
									<text>制作人：</text>
									<image :src="item.avatar"></image>
									{{ item.createBy || '' }}
								</view>
								<!-- 	<view class="slvmTxt1">
									<text class="price">￥{{ item.currentPrice }}</text>
									<text class="orPrice">￥{{ item.originalPrice }}</text>
								</view> -->
							</view>
						</view>

						<view class="priceAndBtn">
							<view class="price">
								￥{{ item.currentPrice }}
								<text v-if="item.isScoreBuy == 1">/{{ item.scoreSum }}积分</text>
							</view>
							<view class="buyBtn" @click.stop="open(item)">购买</view>
						</view>

						<!-- <view class="priceAndBtn">
							<view class="price" :style="{ width: item.isScoreBuy === 1 ? '230rpx' : '' }">
								￥{{ item.currentPrice }}
								<view class="red" v-if="item.isScoreBuy == 1">/{{ item.scoreSum }}积分</view>
							</view>
							<view class="slvBtn" :style="{ marginRight: item.isScoreBuy === 1 ? '37rpx' : '' }" @click.stop="open(item)">购买</view>
						</view> -->
					</view>
					<view class="slvBot">
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
					</view>
				</view>
			</template>
			<template v-if="searchList.length == 0">
				<view style="padding-top: 20vh">
					<u-empty text="没有搜索到该歌曲" mode="list"></u-empty>
				</view>
			</template>
		</view>

		<!-- tab -->
		<view class="tabView" v-if="!isSearch">
			<view class="tv1">
				<tTabs :tWidth="'474rpx'" @changeTab="changeIndex" :tabList="typeList"></tTabs>
			</view>
		</view>

		<!-- 列表 -->
		<view class="singList" v-if="!isSearch" :style="{ height: listHeight + 'px' }">
			<template v-for="(v, i) in songList" >
				<view class="slView" v-for="(item, index) in v" :key="index">
					<view v-if="i == cIndex">
						<view class="slvTop">
							<view class="avatarBox">
								<!-- <view class="slvCover" @click="audition(item, index, i)"> -->
								<view class="slvCover" @click="playMp3(item, index, i)">
									<image class="slvcImg" :src="item.songCoverPhotoUrl || '../../../static/logo.png'"></image>
									<image class="slvcPlay" src="@/static/icon/play.png"></image>
								</view>
								<view class="slvMain">
									<view class="slvmTit">{{ item.songName }}</view>
									<view class="slvmTxt typeName" style="margin-top: 10rpx">{{ item.typeName }}</view>
									<view class="slvmTxt avater">
										<text>制作人：</text>
										<image :src="item.avatar"></image>
										{{ item.createBy || '' }}
									</view>
									<!-- 	<view class="slvmTxt1">
										<text class="price">￥{{ item.currentPrice }}</text>
										<text class="orPrice">￥{{ item.originalPrice }}</text>
									</view> -->
								</view>
							</view>

							<view class="priceAndBtn">
								<view class="price">
									￥{{ item.currentPrice }}
									<text v-if="item.isScoreBuy == 1">/{{ item.scoreSum }}积分</text>
								</view>
								<view class="buyBtn" @click.stop="open(item)">购买</view>
							</view>

							<!-- <view class="priceAndBtn">
								<view class="price" :style="{ width: item.isScoreBuy === 1 ? '230rpx' : '' }">
									￥{{ item.currentPrice }}
									<view class="red" v-if="item.isScoreBuy == 1">/{{ item.scoreSum }}积分</view>
								</view>
								<view class="slvBtn" :style="{ marginRight: item.isScoreBuy === 1 ? '37rpx' : '' }" @click.stop="open(item)">购买</view>
							</view> -->
						</view>

						<view class="slvBot">
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
						</view>
					</view>
				</view>
			</template>
		</view>

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
		<play-bottom ref="playBottomRef" :playobj="playObj"></play-bottom>
		<!-- tabbar -->
		<u-tabbar :list="tabbar" :mid-button="true" height="58px" active-color="#FFD3AA"></u-tabbar>
	</view>
</template>

<script>
import PlayBottom from '@/components/PlayBottom.vue';
export default {
	data() {
		return {
			timerId: null, //搜索函数防抖
			searchTxt: '',
			isSearch: false,
			searchList: [],
			cIndex: 0,
			scrollTop: 0,
			value: '',
			windowHeight: 0,
			headHeight: 0,
			tabViewHeight: 0,
			tv2Height: 0,
			typeList: [{ typeName: '不限' }],
			songList: [],
			curItem: {},
			timer: null,
			innerAudioContext: null
		};
	},
	components: {
		PlayBottom
	},
	computed: {
		listHeight: function () {
			let num = this.windowHeight - this.headHeight - this.tabViewHeight - this.tv2Height - 60;
			return num.toFixed(2);
		},
		tabbar: function () {
			return getApp().globalData.tabbar;
		},
		userInfo: () => {
			return uni.getStorageSync('userInfo');
		}
	},
	watch: {
		searchTxt(newValue, oldValue) {
			if (newValue == '') {
				this.isSearch = false;
			}
		}
	},
	onShow() {
		this.$refs.playBottomRef.updatePlayObj();
	},
	onLoad() {
		this.getType();
		// this.getList(0)
		uni.getSystemInfo({
			success: (res) => {
				this.windowHeight = res.windowHeight; // 窗口高度
			}
		});

		const query = uni.createSelectorQuery().in(this);

		query
			.select('.head')
			.boundingClientRect((data) => {
				if (data) {
					this.headHeight = data.height;
				}
			})
			.exec();

		query
			.select('.tabView')
			.boundingClientRect((data) => {
				if (data) {
					this.tabViewHeight = data.height;
				}
			})
			.exec(); // 执行查询
		query
			.select('.tv2')
			.boundingClientRect((data) => {
				if (data) {
					this.tv2Height = data.height;
				}
			})
			.exec(); // 执行查询
	},
	onShareAppMessage(res) {
		return {
			title: '歌窝里歌单',
			path: '/pages/tabbar/shopSing/shopSing'
		};
	},
	methods: {
		audition(item, index, i) {
			clearTimeout(this.$globalDataAudio.timer);
			this.$globalDataAudio.timer = null;
			const audioCtx = this.$globalDataAudio.audioCtx;
			audioCtx.src = item.songFileUrl;
			audioCtx.play();
			this.$globalDataAudio.timer = setTimeout(() => {
				audioCtx.stop();
				// this.innerAudioContext.destroy();
				uni.showModal({
					title: '提示',
					content: '试听结束，购买后可播放',
					success: function (res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}, 25000);
		},
		open(item) {
			// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
			// this.$refs.popup.open();
			uni.navigateTo({
				url: '/pages/songBuying/songBuying?item=' + JSON.stringify(item)
			});
			this.curItem = item;
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
					url: '/pages/upUserInfo/upExamine'
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
			this.$req.put('song/order/payment', postData).then((oItem) => {
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
		//搜索
		search() {
			if (this.searchTxt == '') {
				return;
			}
			let data = {
				songNameOrProducer: this.searchTxt
			};
			this.$req.get('song/searchSong', data).then((res) => {
				this.searchList = res.data;
				this.isSearch = true;
			});
			// clearTimeout(this.timerId);
			// this.timerId = setTimeout(() => {
			// 	if (this.searchTxt) {
			// 		this.isSearch = true;
			// 		this.$req.get('system/song/list', { songName: this.searchTxt }).then((res) => {
			// 			this.searchList = res.rows;
			// 		});
			// 	} else {
			// 		this.isSearch = false;
			// 	}
			// }, 500);
		},
		//播放音乐
		playMp3(item, index, i) {
			if (i == -1) {
				const encodedList = encodeURIComponent(JSON.stringify(this.searchList));
				this.toUrl(`/pages/play/play?list=${encodedList}&index=${index}`);
			}
			// console.log(this.songList[i]);
			// 传递整个songList数组
			const encodedList = encodeURIComponent(JSON.stringify(this.songList[i]));
			this.toUrl(`/pages/play/play?list=${encodedList}&index=${index}`);
		},
		//收藏
		collection(data, i, index, v) {
			//二级数组item 一级数组下标 二级数组下标 一级数组item
			let item = JSON.parse(JSON.stringify(data));

			let url, colNum;
			let postData = {
				songId: item.id,
				userId: this.userInfo.id
			};
			if (!item.isCollect) {
				//未收藏 提交收藏接口
				url = 'userSongCollection/userSongCollection';
				colNum = 1;
			} else {
				//已收藏 提交取消收藏接口
				url = 'userSongCollection/deleteUserSongCollection';
				colNum = 0;
			}

			this.$req.post(url, postData, 'form').then((res) => {
				if (res.code == 200) {
					v[index].isCollect = colNum;
					this.$set(this.songList, i, v);
				}
				uni.showToast({
					title: res.msg,
					icon: 'none'
				});
			});
		},
		//获取类型
		getType() {
			this.$req.get('system/type/list?pageNum=1&pageSize=99').then((res) => {
				res.rows.unshift({
					typeName: '不限'
				});
				this.typeList = res.rows;
				this.songList = JSON.parse(JSON.stringify(res.rows));
				this.songList[0] = [];
				res.rows.forEach((item, index) => {
					this.getList(item.id, index);
				});
			});
		},
		getList(type, index) {
			let getData = {
				songType: type || 0,
				userId: this.userInfo.id
			};
			this.$req.get('song/acquisitionSong', getData).then((res) => {
				this.$set(this.songList, index, res.data);
			});
		},
		changeIndex(index) {
			this.cIndex = index;
		}
	}
};
</script>

<style lang="scss" scoped>
.content {
	width: 100vw;
	height: 100vh;
	overflow: auto;
	background: url('https://image-file2024.oss-cn-beijing.aliyuncs.com/geWoLiMusicMall/backgroundImage/image1.jpg');
	background-size: 100% 100%;
}
.tv2 {
	margin: 40rpx auto 0;
	width: 686rpx;
}
.tabView {
	width: 686rpx;
	margin: 20rpx auto 0;
	color: #999;
	display: flex;
	align-items: center;
	// .tv1{
	//     width: 474rpx;
	// }
}

.singList {
	width: 686rpx;
	margin: 20rpx auto 0;
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
			justify-content: space-between;
			.avatarBox {
				display: flex;
				align-items: center;
			}
			.priceAndBtn {
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 35%;
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
.slvCover {
	width: 156rpx;
	height: 156rpx;
	border-radius: 78rpx;
	overflow: hidden;
	position: relative;
	margin-left: 32rpx;
}
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
.slvMain {
	// width: 320rpx;
	height: 80rpx;
	display: flex;
	justify-content: space-between;
	margin-left: 20rpx;
	flex-direction: column;
}
.slvmTit {
	font-size: 28rpx;
	font-weight: 800;
}
.slvmTxt {
	color: #000000;
	font-size: 20rpx;
	image {
		width: 45rpx;
		height: 45rpx;
		border-radius: 50%;
		margin-right: 10rpx;
	}
}
.avater {
	display: flex;
	align-items: center;
}
.typeName {
	border: 1rpx solid #999;;
	width: 70rpx;
	height: 70rpx;
	border-radius: 10rpx;
	text-align: center;
	font-size: 20rpx;
	color: #999;
}
.slvmTxt1 {
	.price {
		font-size: 28rpx;
		color: #fb3758;
		font-weight: 800;
		display: flex;
		align-items: center;
	}
	.orPrice {
		text-decoration: line-through;
		font-size: 20rpx;
		color: rgba(153, 153, 153, 0.6);
		margin-left: 10rpx;
	}
}
.price {
	font-size: 28rpx;
	color: #fb3758;
	font-weight: 800;
	margin-bottom: 20rpx;
	display: flex;
	align-items: center;
}
.buyBtn {
	width: 124rpx;
	height: 48rpx;
	line-height: 48rpx;
	text-align: center;
	border-radius: 8rpx;
	background: #fc3758;
	color: #fff;
	font-size: 28rpx;
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
