<template>
	<scroll-view scroll-y="true" class="content" @scroll="scrollMain">
		<!-- heads -->
		<heads :haveLogo="false" :haveBack="true" :sTop="scrollTop" :title="'制作人'"></heads>

		<!-- 搜索 -->
		<view class="tabView">
			<u-search v-model="searchValue" :style="{ width: 686 + 'rpx' }" placeholder="请输入名称" shape="round" :clearabled="true" :show-action="false"></u-search>
		</view>

		<!-- swiper -->
		<view class="header">
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
			<tTabs :tabList="list" @changeTab="changeTab"></tTabs>
		</view>

		<!-- 列表 -->
		<view class="singList" v-for="(v, k) in rangKingList" :key="k">
			<template v-if="tIndex == k">
				<view class="slView" v-for="(item, index) in filteredRangKingList[k]" :key="index" @click="toPage(item)">
					<view class="slvLeft" v-if="index <= 2">
						<image :src="'../../static/icon/' + index + '.png'" mode=""></image>
					</view>
					<view class="slvLeft" v-else>
						<view class="slvlNum">{{ index + 1 }}</view>
					</view>
					<view class="slvCover">
						<image class="slvcImg" :src="item.avatar || '/static/logo.png'"></image>
					</view>
					<view class="slvMain">
						<view class="slvmTit">{{ item.nickName || '' }}</view>
						<view class="slvmTxt">签约时间：{{ item.signTime || '' }}</view>
						<view class="slvmTxt1">{{ item.remark || '' }}</view>
					</view>
					<view class="slvBtn">
						<image src="@/static/sing/hot_0.png"></image>
						<view>{{ item.userHeat || '0' }}</view>
					</view>
				</view>
			</template>
		</view>
	</scroll-view>
</template>
<script>
export default {
	data() {
		return {
			swiperList: [],
			scrollTop: 0,
			list: [
				{
					tName: '金牌制作人',
					type: 1
				},
				{
					tName: '签约制作人',
					type: 2
				},
				{
					tName: '新晋制作人',
					type: 3
				}
			],
			rangKingList: [[], [], []],
			tIndex: 0, // 当前选择的tab
			searchValue: ''
		};
	},
	computed: {
		filteredRangKingList() {
			return this.list.map((item, index) => {
				const originalList = this.rangKingList[index];
				if (this.searchValue === '') {
					return originalList;
				} else {
					return originalList.filter((item) => item.nickName.includes(this.searchValue));
				}
			});
		}
	},
	onLoad() {
		this.getSongRanking(1);
		this.getSongRanking(2);
		this.getSongRanking(3);
		this.getSwiper();
	},
	methods: {
		isNumeric(str) {
			// 使用正则表达式来判断字符串是否只包含数字
			return /^\d+$/.test(str);
		},
		toPage(item) {
			uni.navigateTo({
				url: '/pages/details/details?id=' + item.userId
			});
		},
		getSongRanking(type) {
			let that = this;
			let getData = {
				type,
				userId: uni.getStorageSync('userInfo').id
			};
			this.$req.get('ranking/acquisitionRanking', getData).then((res) => {
				let { data } = res;
				that.$set(that.rangKingList, type - 1, data);
			});
		},
		scrollMain(e) {
			this.scrollTop = e.detail.scrollTop;
		},
		changeTab(e) {
			this.tIndex = e;
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
	margin: 40rpx auto 0;
	color: #999;
	display: flex;
	.icon {
		margin-left: auto;
	}
}

.singList {
	width: 686rpx;
	margin: 40rpx auto 0;
	.slView {
		margin-bottom: 10rpx;
		padding: 20rpx;
		display: flex;
		align-items: center;
		border-radius: 20rpx;
		background: #fff;
		.slvLeft {
			.slvlNum {
				font-size: 28rpx;
				width: 48rpx;
				height: 48rpx;
				line-height: 48rpx;
				text-align: center;
			}
			image {
				width: 48rpx;
				height: 48rpx;
			}
		}
		.slvCover {
			margin-left: 20rpx;
			width: 120rpx;
			height: 120rpx;
			border-radius: 60rpx;
			overflow: hidden;
			position: relative;
			.slvcImg {
				width: 120rpx;
				height: 120rpx;
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
			margin-left: 16rpx;
			width: 384rpx;
			.slvmTit {
				font-size: 28rpx;
				font-weight: 500;
			}
			.slvmTxt {
				font-size: 20rpx;
			}
			.slvmTxt1 {
				font-size: 16rpx;
				color: #999999;
				overflow: hidden;
				text-overflow: ellipsis;
				-webkit-line-clamp: 2;
				display: -webkit-box;
				-webkit-box-orient: vertical;
			}
		}
		.slvBtn {
			width: 100rpx;
			text-align: center;
			color: #999999;
			font-size: 20rpx;
			image {
				width: 34rpx;
				height: 34rpx;
			}
		}
	}
}
</style>
