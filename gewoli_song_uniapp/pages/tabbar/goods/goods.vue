<template>
	<scroll-view scroll-y="true" class="content" @scroll="scrollMain" @scrolltolower="nextList">
		<!-- heads -->
		<heads :sTop="scrollTop" :title="'好物推荐'"></heads>

		<!-- 公告 -->
		<view class="notice">
			<image src="@/static/icon/announcement.png"></image>
			<u-notice-bar :font-size="20" :volume-icon="false" type="none" mode="vertical" :list="nList"></u-notice-bar>
		</view>

		<view class="header">
			<!-- swiper -->
			<swiper class="index_swiper" :indicator-dots="false" :autoplay="true" :circular="true" :interval="3000" :duration="1000">
				<swiper-item v-for="(item, index) in swiperList" :key="index">
					<view class="swiper-item">
						<image :src="item.imageUrl"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>

		<!-- tab -->
		<view class="tabView">
			<tTabs :tabList="tList" @changeTab="changeIndex"></tTabs>
		</view>

		<!-- shopList -->
		<view class="goodList" v-for="(v, i) in shopList" :key="i">
			<template v-if="i == cIndex">
				<u-waterfall v-model="shopList[i]" ref="uWaterfall">
					<template v-slot:left="{ leftList }">
						<view class="demo-warter pLeft" v-for="(item, index) in leftList" :key="index" @click="toUrl('/pages/goodDetails/goodDetails?id=' + item.id)">
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
						<view class="demo-warter pRight" v-for="(item, index) in rightList" :key="index" @click="toUrl('/pages/goodDetails/goodDetails?id=' + item.id)">
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

				<u-loadmore bg-color="rgb(240, 240, 240)" :status="paegList[cIndex].loadStatus" @loadmore="nextList" font-size="26"></u-loadmore>
			</template>
		</view>
		<play-bottom ref="playBottomRef" :playobj="playObj"></play-bottom>
		<!-- tabbar -->
		<u-tabbar :list="tabbar" :mid-button="true" height="58px" active-color="#FFD3AA"></u-tabbar>
	</scroll-view>
</template>

<script>
import PlayBottom from '@/components/PlayBottom.vue';
export default {
	data() {
		return {
			swiperList: [],
			scrollTop: 0,
			cIndex: 0,
			nList: ['寒雨连江夜入吴', '平明送客楚山孤', '洛阳亲友如相问', '一片冰心在玉壶'],
			tList: [],
			typeList: [],
			shopList: [],
			paegList: [],
			pageSize: 10
		};
	},
	components: {
		PlayBottom
	},
	onShow() {
		this.$refs.playBottomRef.updatePlayObj();
	},
	onLoad() {
		this.getType(); //商品类型
		this.getSwiper();
	},
	computed: {
		tabbar: function () {
			return getApp().globalData.tabbar;
		}
		// flowList(){
		//     return this.shopList[this.cIndex]
		// }
	},
	methods: {
		//获取商品类型
		getType() {
			this.$req.get('goodsType/goodsTypeList?pageNum=1&pageSize=99').then((res) => {
				this.tList = res.data;
				this.typeList = JSON.parse(JSON.stringify(res.data));
				this.shopList = JSON.parse(JSON.stringify(res.data));
				res.data.forEach((item, index) => {
					this.paegList.push({ pageNum: 1, pageTotal: null, loadStatus: 'loadmore' });
					this.getList(item.id, index);
				});
			});
		},
		getList(goodsTypeId, index) {
			let getData = {
				pageNum: this.paegList[index].pageNum,
				pageSize: this.pageSize,
				goodsTypeId,
				status: 0 //0已上架商品 1非上架商品
			};

			this.$req.get('system/goods/list', getData).then((res) => {
				this.paegList[index].pageTotal = Math.ceil(res.total / this.pageSize); //总页数
				if (this.paegList[index].pageNum >= this.paegList[index].pageTotal) {
					this.paegList[index].loadStatus = 'nomore';
				}
				this.$set(this.shopList, index, res.rows);
			});
		},
		//切换类型
		changeIndex(index) {
			// this.$refs.uWaterfall.clear();

			this.cIndex = index;
		},
		scrollMain(e) {
			this.scrollTop = e.detail.scrollTop;
		},
		// 下一页
		nextList() {
			// nomore
			// this.loadStatus = 'loading';
			// this.pageList[this.cIndex].loadStatus = 'loading'
			// if(){

			// }

			setTimeout(() => {
				//加载数据
				this.loadStatus = 'loadmore';
			}, 1000);
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
		},
		// 轮播图
		getSwiper() {
			this.$req.get('system/image/list').then((res) => {
				this.swiperList = res.rows;
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.notice {
	position: relative;
	width: 686rpx;
	background: #ffffff;
	border-radius: 60rpx 60rpx 60rpx 60rpx;
	margin: 28rpx auto 0;

	/deep/.u-notice-bar {
		margin-left: 50rpx;
	}

	image {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 20rpx;
		margin: auto;
		width: 40rpx;
		height: 40rpx;
	}
}

.content {
	width: 100vw;
	height: 100vh;
	overflow: auto;
	background: url('https://image-file2024.oss-cn-beijing.aliyuncs.com/geWoLiMusicMall/backgroundImage/image1.jpg');
	background-size: 100% 100%;
}

.header {
	.index_swiper {
		width: 686rpx;
		margin: 20rpx auto 0;
		border-radius: 20rpx;
		overflow: hidden;
		height: 304rpx;

		image {
			width: 686rpx;
			height: 304rpx;
		}
	}
}

.tabView {
	width: 686rpx;
	margin: 30rpx auto 0;
	color: #999;
	display: flex;
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
</style>
