<template>
	<scroll-view scroll-y="true" class="content" @scroll="scrollMain">
		<!-- heads -->
		<heads :sTop="scrollTop" :title="'歌窝里音乐'"></heads>
		<view class="header">
			<!-- swiper -->
			<swiper class="index_swiper" :indicator-dots="false" :autoplay="true" :circular="true" :interval="3000" :duration="1000">
				<swiper-item v-for="(item, index) in swiperList" :key="index">
					<view class="swiper-item">
						<image :src="item.imageUrl"></image>
					</view>
				</swiper-item>
			</swiper>
			<!-- nav -->
			<view class="nav">
				<view class="navs" @click="toUrl('/pages/tabbar/shopSing/shopSing')">
					<image src="@/static/icon/nav1.png"></image>
					<view>在售歌单</view>
				</view>
				<view class="navs" @click="toUrl('/pages/producer/producer')">
					<image src="@/static/icon/nav2.png"></image>
					<view>制作人</view>
				</view>
				<view class="navs" @click="toUrl('/pages/tabbar/goods/goods')">
					<image src="@/static/icon/nav3.png"></image>
					<view>音乐商城</view>
				</view>
				<view class="navs">
					<image src="@/static/icon/nav4.png"></image>
					<view>互动社区</view>
				</view>
			</view>
		</view>

		<!-- 我是音乐人 -->
		<view class="isSing" v-if="haveAcquisitionActivity">
			<view class="iTitle">
				<text>{{ acquisitionActivity.activityName }}</text>
				<u-icon @click="toUrl('/pages/ranking/ranking')" class="icon" name="arrow-right"></u-icon>
			</view>
			<view class="dex">{{ acquisitionActivity.activityDescription || ' ' }}</view>
			<view class="isView" @click="toUrl('/pages/ranking/ranking')">
				<view class="iv" id="sivEnd">
					<view class="ivTit">活动结束</view>
					<view class="ivTit1">
						<text class="max">{{ acquisitionActivity.days }}</text>
						<text>天</text>
					</view>
					<view class="ivTime">
						<view class="ivtTag">{{ acquisitionActivity.hours | timeFilter }}</view>
						:
						<view class="ivtTag">{{ acquisitionActivity.minutes | timeFilter }}</view>
						:
						<view class="ivtTag">{{ acquisitionActivity.seconds | timeFilter }}</view>
					</view>
				</view>
				<view class="iv">
					<view class="ivTit" style="opacity: 0">1</view>
					<view class="ivTit1">
						<text class="max">{{ acquisitionActivity.peopleCount }}</text>
					</view>
					<view class="ivTime">
						<text>报名人数</text>
					</view>
				</view>
				<view class="iv">
					<view class="ivTit" style="opacity: 0">1</view>
					<view class="ivTit1">
						<text class="max">{{ acquisitionActivity.popularity }}</text>
					</view>
					<view class="ivTime">
						<text>人气值</text>
					</view>
				</view>
				<view class="iv">
					<view class="ivTit" style="opacity: 0">1</view>
					<view class="ivTit1">
						<text class="max">{{ acquisitionActivity.activityVisits }}</text>
					</view>
					<view class="ivTime">
						<text>访问量</text>
					</view>
				</view>
			</view>
			<!-- 	<view class="isBtn" v-if="loginType == 2" @click="ranking">
				<text v-if="!acquisitionActivity.isParticipate">我要报名</text>
				<text v-else>进入活动</text>
			</view> -->
			<view class="isBtn" @click="goPage('/pages/ranking/ranking')">
				<text>进入活动</text>
			</view>
		</view>

		<!-- 在售歌单排行榜tab -->
		<view class="tabView">
			<tTabs :tabList="tabsOne" :tWidth="90"></tTabs>
			<u-icon class="icon" name="arrow-right" @click="goPage('/pages/tabbar/shopSing/shopSing')"></u-icon>
		</view>
		<!-- 歌单排行榜列表 -->
		<view class="singList buy" v-for="(val, k) in rangKingList" :key="k">
			<template v-if="k == 0">
				<view class="slView buy" v-for="(item, index) in val" :key="index">
					<view class="slvLeft" v-if="index <= 2">
						<image :src="'../../../static/icon/' + index + '.png'" mode=""></image>
					</view>
					<view class="slvLeft" v-else>
						<view class="slvlNum">{{ index + 1 }}</view>
					</view>
					<view class="slvCover" @click="playMp3(item, index, k)">
						<!-- <view class="slvCover" @click="audition(item, index, k)"> -->
						<image class="slvcImg" :src="item.songCoverPhotoUrl || '../../../static/logo.png'"></image>

						<image class="slvcPlay" src="@/static/icon/play.png" mode=""></image>
						<!-- <image class="slvcPlay" src="@/static/icon/stop.png"></image> -->
					</view>
					<view class="slvMain">
						<view class="slvmTit">{{ item.songName }}</view>
						<view class="slvmTxt typeName">{{ item.typeName }}</view>
						<view class="slvmTxt avater">
							<image style="width: 45rpx; height: 45rpx; border-radius: 50%; margin-right: 10rpx" :src="item.avatar"></image>
							<text>{{ item.createBy || '' }}</text>
							<image src="@/static/sing/hot_0.png"></image>
							{{ item.songHeat }}
						</view>
					</view>
					<!-- <view class="slvBtn" @click.stop="buy(item)">购买</view> -->
					<view class="priceAndBtn">
						<view class="price">
							￥{{ item.currentPrice }}
							<text v-if="item.isScoreBuy == 1">/{{ item.scoreSum }}积分</text>
						</view>
						<view class="slvBtn" @click.stop="open(item)">购买</view>
					</view>
				</view>
				<u-empty v-if="!val.length" text="列表为空" mode="page"></u-empty>
			</template>
		</view>


		<!-- 热歌、新歌榜排行榜tab -->
		<view class="tabView">
			<tTabs :tabList="tabs" @changeTab="changeTab" :tWidth="90"></tTabs>
			<u-icon class="icon" name="arrow-right" @click="goPage('/pages/tabbar/shopSing/shopSing')"></u-icon>
		</view>
		<!-- 歌单排行榜列表 -->
		<view class="singList hot" v-for="(val, k) in rangKingList1" :key="k">
			<template v-if="tIndex == k">
				<view class="slView hot" v-for="(item, index) in val" :key="index">
					<view class="slvLeft" v-if="index <= 2">
						<image :src="'../../../static/icon/' + index + '.png'" mode=""></image>
					</view>
					<view class="slvLeft" v-else>
						<view class="slvlNum">{{ index + 1 }}</view>
					</view>
					<view class="slvCover" @click="playMp31(item, index, k)">
						<image class="slvcImg" :src="item.songCoverPhotoUrl || '../../../static/logo.png'"></image>

						<image class="slvcPlay" src="@/static/icon/play.png" mode=""></image>
						<!-- <image class="slvcPlay" src="@/static/icon/stop.png"></image> -->
					</view>
					<view class="slvMain">
						<view class="slvmTit">{{ item.songName }}</view>
						<view class="slvmTxt typeName">{{ item.typeName }}</view>
						<view class="slvmTxt avater">
							<image style="width: 45rpx; height: 45rpx; border-radius: 50%; margin-right: 10rpx" :src="item.avatar"></image>
							<text>{{ item.createBy || '' }}</text>
							<image src="@/static/sing/hot_0.png"></image>
							{{ item.songHeat }}
						</view>
					</view>
					<!-- <view class="slvBtn" @click.stop="buy(item)">购买</view> -->
					<!-- 	<view class="priceAndBtn">
						<view class="price" v-if="tIndex == 0">￥{{ item.currentPrice }}</view>
						<view class="slvBtn" v-if="tIndex == 0" @click.stop="buy(item)">购买</view>
					</view> -->
				</view>
				<u-empty v-if="!val.length" text="列表为空" mode="page"></u-empty>
			</template>
		</view>

		<!-- 制作人tab -->
		<view class="tabView">
			<tTabs :tabList="list" @changeTab="changeTabp" :value="pIndex" :tWidth="90"></tTabs>
			<u-icon class="icon" name="arrow-right" @click="goPage('/pages/producer/producer')"></u-icon>
		</view>
		<u-empty v-if="acquisitionRanking.length <= 0" text="列表为空" mode="page"></u-empty>
		<!-- <scroll-view scroll-x="true" class="scroll-wrapper"> -->
		<view class="zzr_box" v-if="acquisitionRanking.length > 0">
			<scroll-view scroll-x="true" class="inner-scroll" @scrolltolower="scrollchange()">
				<view style="display: flex; align-items: center">
					<view class="zzr_content" v-for="item in acquisitionRanking.slice(0, 4)" :key="item.userId">
						<view style="display: flex; flex-direction: column; align-items: center">
							<view class="zzr_content_images" @click="toDetails(item)"><img :src="item.avatar || '/static/logo.png'" alt="" /></view>
							<view class="zzr_content_title">{{ item.nickName || '' }}</view>
							<view class="zzr_content_text">{{ item.remark || '' }}</view>
							<view class="zzr_content_btn" @click="userFollow(item.userId)" v-if="item.isFollow == 0">关注</view>
							<view class="zzr_content_btn" style="" @click="deleteFollow(item.userId)" v-if="item.isFollow == 1">已关注</view>
						</view>
					</view>
					<!-- 		<view v-if="acquisitionRanking.length > 4">
							<u-icon size="40" class="icon" name="arrow-right" @click="goPage('/pages/producer/producer')"></u-icon>
						</view> -->
				</view>
			</scroll-view>
		</view>
		<!-- </scroll-view> -->

		<!-- 音乐人tab -->
		<view class="tabView">
			<tTabs :tabList="yinYueRenlist" :tWidth="90"></tTabs>
			<u-icon class="icon" name="arrow-right" @click="goPage('/pages/Musician/Musician')"></u-icon>
		</view>
		<u-empty v-if="MusicianList.length <= 0" text="列表为空" mode="page"></u-empty>
		<!-- <scroll-view scroll-x="true" class="scroll-wrapper"> -->
		<view class="zzr_box" v-if="MusicianList.length > 0">
			<scroll-view scroll-x="true" class="inner-scroll" @scrolltolower="scrollchange()">
				<view style="display: flex; align-items: center">
					<view class="zzr_content" v-for="item in MusicianList.slice(0, 4)" :key="item.userId">
						<view style="display: flex; flex-direction: column; align-items: center">
							<view class="zzr_content_images" @click="toDetails(item)"><img :src="item.avatar || '/static/logo.png'" alt="" /></view>
							<view class="zzr_content_title">{{ item.nickName || '' }}</view>
							<!-- <view class="zzr_content_text">{{ item.remark || '' }}</view> -->
							<view class="zzr_content_btn" @click="userFollow(item.userId)" v-if="item.isFollow == 0">关注</view>
							<view class="zzr_content_btn" style="" @click="deleteFollow(item.userId)" v-if="item.isFollow == 1">已关注</view>
						</view>
					</view>
					<!-- 	<view v-if="MusicianList.length > 4">
							<u-icon size="40" class="icon" name="arrow-right" @click="goPage('/pages/Musician/Musician')"></u-icon>
						</view> -->
				</view>
			</scroll-view>
		</view>
		<!-- </scroll-view> -->

		<!-- 热门MV -->
		<view class="tabView">
			<tTabs :tabList="mvTypeList" @changeTab="changeMv" :tWidth="90"></tTabs>
			<u-icon class="icon" name="arrow-right"></u-icon>
		</view>

		<view class="mv_box">
			<view class="mv_content" v-for="item in mvList.slice(0, 6)" @click="goPageMv(item)">
				<view class="mv_images"><img :src="item.songMvCoverPhotoUrl || '/static/logo.png'" alt="" /></view>
				<view class="mv_title">{{ item.songName }}</view>
			</view>
			<view v-if="!mvList.length" style="width: 100%; height: 262rpx">
				<u-empty text="列表为空" mode="page"></u-empty>
			</view>
		</view>

		<!-- 录音棚 -->
		<view class="tabView">
			<tTabs :tabList="listlyp" :tWidth="90"></tTabs>
			<u-icon class="icon" name="arrow-right" @click="goPage('/pages/tabbar/recording/recording')"></u-icon>
		</view>

		<view class="lyp_box" :class="{ 'single-item': isSingleItem }">
			<view class="lyp_content" v-for="item in FindStudioView.slice(0, 2)" @click="toPage(item.id)">
				<view class="lyp_images"><img :src="item.coverPhotoUrl" alt="" /></view>
				<view class="lyp_title">{{ item.studioName }}</view>
				<view class="lyp_price">
					<view class="lyp_price_red">￥{{ item.currentPrice }}</view>
					<view class="lyp_price_hr">￥{{ item.originalPrice }}</view>
				</view>
			</view>
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
	</scroll-view>
</template>

<script>
import PlayBottom from '@/components/PlayBottom.vue';
export default {
	data() {
		return {
			swiperList: [],
			scrollTop: 0,
			haveAcquisitionActivity: false, //是否有活动
			acquisitionActivity: {}, //活动
			tabsOne: [
				{
					tName: '在售歌单',
					type: 1
				}
			],
			tabs: [
				{
					tName: '热歌榜',
					type: 2
				},
				{
					tName: '新歌榜',
					type: 3
				}
			],
			rangKingList: [[], [], []],
			rangKingList1: [[], []],
			tIndex: 0, //当前选择的tab
			pIndex: 0, //制作人当前选择的tab
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
			yinYueRenlist: [
				{
					tName: '音乐人',
					type: 4
				}
			],
			listMV: [
				{
					tName: '热门MV',
					type: 1
				}
			],
			listlyp: [
				{
					tName: '录音棚',
					type: 1
				}
			],
			FindStudioView: [],
			mvList: [],
			acquisitionRanking: [],
			MusicianList: [],
			userId: '',
			curItem: {},
			mvTypeList: [],
			play: false
		};
	},
	components: {
		PlayBottom
	},
	filters: {
		timeFilter(e) {
			if (e.toString().length == 1) {
				e = '0' + e;
			}
			return e;
		}
	},
	computed: {
		tabbar: function () {
			return getApp().globalData.tabbar;
		},
		loginType: () => {
			return uni.getStorageSync('loginType');
		},
		isSingleItem() {
			return this.FindStudioView.length === 1;
		}
	},
	onShow() {
		this.getSongRanking(1); //获取排行榜
		this.getSongRanking(2); //获取排行榜
		this.getSongRanking(3); //获取排行榜
		this.getFindStudioView();
		this.Musician();
		console.log(this.$globalDataAudio.audioCtx);
		if (this.$globalDataAudio.audioCtx != null) {
			this.play = false;
			console.log('有实例');
			this.play = true;
		}
		this.$refs.playBottomRef.updatePlayObj();
	},
	onLoad() {
		// this.getSongRanking(1); //获取排行榜
		// this.getSongRanking(2); //获取排行榜
		// this.getSongRanking(3); //获取排行榜
		this.getAcquisitionActivity(); //获取活动
		this.getFindStudioView();
		this.getType();
		this.getMv(0);
		this.changeTabp(0);
		this.getSwiper();
		this.Musician();
		this.getMvType();
		this.userId = uni.getStorageSync('userInfo').id;
	},
	methods: {
		toDetails(item) {
			uni.navigateTo({
				url: '/pages/details/details?id=' + item.userId
			});
		},
		open(item) {
			// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
			// this.$refs.popup.open();
			uni.navigateTo({
				url: '/pages/songBuying/songBuying?item=' + JSON.stringify(item)
			});
			this.curItem = item;
		},
		scrollchange(e) {
			console.log(e);
		},
		goPageMv(item) {
			uni.navigateTo({
				url: '/pages/mv-play/mv-play?item=' + JSON.stringify(item)
			});
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
		//播放音乐
		playMp3(item, index, k) {
			const encodedList = encodeURIComponent(JSON.stringify(this.rangKingList[k]));
			this.toUrl(`/pages/play/play?list=${encodedList}&index=${index}`);
		},
		playMp31(item, index, k) {
			const encodedList = encodeURIComponent(JSON.stringify(this.rangKingList1[k]));
			this.toUrl(`/pages/play/play?list=${encodedList}&index=${index}`);
		},
		changeTab(e) {
			console.log(e);
			this.tIndex = e;
		},
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
					this.changeTabp(this.pIndex);
					this.Musician();
				}
			});
		},
		// 制作人
		changeTabp(e) {
			this.pIndex = e;
			let getData = {
				type: e + 1,
				userId: uni.getStorageSync('userInfo').id
			};
			this.$req.get('ranking/acquisitionRanking?type=' + getData.type + '&userId=' + getData.userId).then((res) => {
				this.acquisitionRanking = res.data;
			});
		},
		// 音乐人
		Musician() {
			let getData = {
				type: 4,
				userId: uni.getStorageSync('userInfo').id
			};
			this.$req.get('ranking/acquisitionRanking?type=' + getData.type + '&userId=' + getData.userId).then((res) => {
				this.MusicianList = res.data;
			});
		},
		scrollMain(e) {
			this.scrollTop = e.detail.scrollTop;
		},
		// 获取歌曲排行榜
		getSongRanking(type) {
			this.$req.get('song/acquisitionSongRanking', { type }).then((res) => {
				let { data } = res;
				// 保存在售歌单
				this.rangKingList[type - 1] = data.slice(0, 3);
				// 保存热歌榜和新歌榜
				if (type == 2 || type == 3) {
					this.rangKingList1[type - 2] = data.slice(0, 3);
				}
			});
		},
		//获取活动
		getAcquisitionActivity() {
			let getData = {
				userId: uni.getStorageSync('userInfo').id
			};
			this.$req.get('activity/acquisitionActivity', getData).then((res) => {
				let { data } = res;
				if (data.id) {
					let flag = true; //是否展示活动 活动过期为false
					let nowTime = new Date();

					let ymd = data.endTime.split('T')[0].split('-');
					let tms = data.endTime.split('T')[1].split(':');

					let m = tms[2];
					const endTime = new Date(ymd[0], ymd[1] - 1, ymd[2], tms[0], tms[1], m.split('.')[0]);
					if (nowTime > endTime) {
						//如果活动结束
						flag = false;
					} else {
						//有活动且在活动日期内
						let time = endTime.getTime() - nowTime.getTime();
						let days = Math.floor(time / (24 * 3600 * 1000));
						let leave1 = time % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
						let hours = Math.floor(leave1 / (3600 * 1000));
						let leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
						let minutes = Math.floor(leave2 / (60 * 1000));
						let leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
						let seconds = Math.round(leave3 / 1000);
						data.days = days;
						data.hours = hours;
						data.minutes = minutes;
						data.seconds = seconds;
					}
					if (data.status == 1) {
						flag = false;
					}
					this.acquisitionActivity = data;
					this.haveAcquisitionActivity = flag;
				}
			});
		},
		//获取MV类型（歌曲类型）
		getType() {
			this.$req.get('system/type/list?pageNum=1&pageSize=99').then((res) => {
				res.rows.unshift({
					typeName: '不限'
				});
				this.mvTypeList = res.rows;
			});
		},
		// MV视频
		getMv(type) {
			this.$req.get('song/acquisitionSong?songType=' + type + '&userId=' + this.userId).then((res) => {
				this.mvList = res.data;
			});
		},
		changeMv(e) {
			this.getMv(e);
		},
		// 录影棚
		getFindStudioView() {
			this.$req.get('recordingStudio/findStudioView').then((res) => {
				this.FindStudioView = res.data;
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
					this.changeTabp(this.pIndex);
					this.Musician();
				}
			});
		},
		// 跳转录音详情
		toPage(id) {
			uni.navigateTo({
				url: '/pages/tabbar/recording/details?id=' + id
			});
		},
		// 轮播图
		getSwiper() {
			this.$req.get('system/image/list').then((res) => {
				this.swiperList = res.rows;
			});
		},
		goPage(url) {
			if (url == '/pages/producer/producer') {
				uni.navigateTo({
					url: url
				});
			}
			uni.navigateTo({
				url: url
			});
		},
		// 查询mv分类
		getMvType() {
			this.$req.get('system/type/list?pageNum=1&pageSize=99').then((res) => {
				// res.rows.forEach(item=>{
				// 	this.listMV.tName = item.typeName
				// 	this.listMV.type = item.id
				// })
				res.rows.unshift({
					typeName: '热门MV'
				});
				this.listMV = res.rows.map((item) => {
					return {
						tName: item.typeName,
						type: item.id
					};
				});

				// res.rows.unshift({
				// 	typeName: '不限'
				// });
				// this.typeList = res.rows;
				// this.songList = JSON.parse(JSON.stringify(res.rows));
				// this.songList[0] = [];
				// res.rows.forEach((item, index) => {
				// 	this.getList(item.id, index);
				// });
			});
		},
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
		}
	}
};
</script>

<style lang="scss" scoped>
.content {
	width: 100vw;
	height: 100vh;
	overflow: auto;
	// background: url('https://image-file2024.oss-cn-beijing.aliyuncs.com/geWoLiMusicMall/backgroundImage/image1.jpg');
	// background-size: 100% 100%;
	background: linear-gradient(143deg, #e9c19c 0%, rgba(255, 255, 255, 0.52) 100%);
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
	.nav {
		margin-top: 42rpx;
		display: flex;
		text-align: center;
		font-size: 24rpx;
		.navs {
			margin: 0 auto;
			view {
				margin-top: 15rpx;
			}
			image {
				width: 72rpx;
				height: 72rpx;
			}
		}
	}
}

.isSing {
	width: 686rpx;
	// height: 386rpx;
	padding: 30rpx;
	margin: 26rpx auto 0;
	// background: linear-gradient(225deg, #EDC7A7 0%, #F4D99D 100%);
	background: url('https://image-file2024.oss-cn-beijing.aliyuncs.com/geWoLiMusicMall/backgroundImage/image3.jpg');
	background-size: 100% 100%;
	border-radius: 20rpx;
	.iTitle {
		display: flex;
		font-size: 28rpx;
		font-weight: 500;
		.icon {
			margin-left: auto;
		}
	}
	.dex {
		font-size: 16rpx;
		padding: 10rpx 0 20rpx;
		color: #231815;
		border-bottom: 2rpx solid #231815;
	}
	.isView {
		display: flex;
		text-align: center;
		#sivEnd {
			width: 190rpx;
			background: url('https://image-file2024.oss-cn-beijing.aliyuncs.com/geWoLiMusicMall/avatar/4504a2ec-2eb5-4fdc-81a0-cc78cd3aabeb.png');
			background-size: 100% 100%;
		}
		.iv {
			width: 160rpx;
			margin: 20rpx auto 34rpx;
			padding: 20rpx;
			.ivTit {
				font-size: 24rpx;
			}
			.ivTit1 {
				font-size: 20rpx;
				.max {
					font-size: 36rpx;
					font-weight: bold;
				}
			}
			.ivTime {
				display: flex;
				justify-content: center;
				margin-top: 10rpx;
				font-size: 20rpx;
				.ivtTag {
					display: inline-block;
					background: #fff;
					margin: 0 5rpx;
					padding: 5rpx;
					border-radius: 10rpx;
				}
			}
		}
	}
	.isBtn {
		width: 622rpx;
		padding: 16rpx 0 14rpx;
		// height: 60rpx;
		// line-height: 60rpx;
		text-align: center;
		font-size: 40rpx;
		border-radius: 20rpx;
		background: #fff2e8;
		text-align: center;
		text {
			background: -webkit-linear-gradient(180deg, #fccba3, #edb093); /* Chrome, Safari */
			background: linear-gradient(180deg, #fccba3, #edb093); /* 标准语法 */
			-webkit-background-clip: text; /* Chrome, Safari */
			background-clip: text;
			-webkit-text-fill-color: transparent; /* Chrome, Safari */
			color: transparent;
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
			view {
				margin-bottom: 10rpx;
			}
			margin-left: 20rpx;
			.slvmTit {
				font-size: 28rpx;
				// margin-bottom: 20rpx;
			}
			.slvmTxt {
				color: #999;
				font-size: 20rpx;
				image {
					width: 16rpx;
					height: 21rpx;
					margin: 0 5rpx 0 10rpx;
				}
			}
		}
		.priceAndBtn {
			margin-left: auto;
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
		}
	}
}
.avater {
	display: flex;
	align-items: center;
}
.typeName {
	border: 1rpx solid #999;
	width: 70rpx;
	border-radius: 10rpx;
	text-align: center;
	font-size: 20rpx;
	color: #999;
}
.zzr_box {
	display: flex;
	align-items: center;
	margin: 0 20rpx;
	.inner-scroll {
		display: flex;
		white-space: nowrap;
		width: 100%;
	}
	.zzr_content {
		width: 25%;
		padding: 15rpx;
		padding-right: 40rpx;
		box-sizing: border-box;
		display: inline-block;
		/* 其他样式保持不变 */
		view {
			margin-top: 15rpx;
		}

		.zzr_content_images {
			width: 130rpx;
			height: 130rpx;
			border-radius: 50%;
			img {
				width: 100%;
				height: 100%;
				border-radius: 50%;
			}
		}
		.zzr_content_title {
			font-size: 22rpx;
			font-weight: 600;
		}
		.zzr_content_text {
			font-size: 24rpx;
		}
		.zzr_content_btn {
			background-color: rgb(248, 57, 90);
			color: white;
			width: 110rpx;
			height: 40rpx;
			border-radius: 30rpx;
			text-align: center;
			line-height: 40rpx;
			font-size: 24rpx;
		}
	}
}

// .zzr_box {
// 	display: flex;
// 	align-items: center;
// 	margin: 0 20rpx 0 20rpx;
// 	.zzr_content {
// 		width: 35%;
// 		// height: 500rpx;
// 		// background-color: red;
// 		display: flex;
// 		flex-direction: column;
// 		align-items: center;
// 		view {
// 			margin-top: 15rpx;
// 		}

// 		.zzr_content_images {
// 			width: 130rpx;
// 			height: 125rpx;
// 			border-radius: 50%;
// 			img {
// 				width: 100%;
// 				height: 100%;
// 				border-radius: 50%;
// 			}
// 		}
// 		.zzr_content_title {
// 			font-size: 22rpx;
// 			font-weight: 600;
// 		}
// 		.zzr_content_text {
// 			font-size: 24rpx;
// 		}
// 		.zzr_content_btn {
// 			background-color: rgb(248, 57, 90);
// 			color: white;
// 			width: 110rpx;
// 			height: 40rpx;
// 			border-radius: 30rpx;
// 			text-align: center;
// 			line-height: 40rpx;
// 			font-size: 24rpx;
// 		}
// 	}
// }
.mv_box {
	display: flex;
	flex-wrap: wrap;
	margin: 0 20rpx 0 20rpx;
}
.mv_content {
	width: 33%;
	display: flex;
	flex-direction: column;
	align-items: center;
	view {
		margin-top: 10rpx;
	}
	.mv_images {
		width: 90%;
		height: 210rpx;
		img {
			width: 100%;
			height: 100%;
			border-radius: 25rpx;
		}
	}
	.mv_title {
		font-size: 24rpx;
		width: 185rpx;
	}
}

.lyp_box.single-item {
	justify-content: normal;
}

.lyp_box {
	display: flex;
	justify-content: space-around;
	margin: 0 20rpx 0 20rpx;
	.lyp_content {
		width: 45%;
		background-color: rgb(255, 255, 255);
		border-radius: 20rpx;
		.lyp_images {
			width: 100%;
			height: 300rpx;
			img {
				width: 100%;
				height: 100%;
				border-radius: 25rpx 25rpx 0 0;
			}
		}
		.lyp_title {
			font-size: 24rpx;
			margin: 10rpx;
			font-weight: bold;
		}
		.lyp_price {
			margin: 10rpx;
			display: flex;
			justify-content: space-between;
			.lyp_price_red {
				font-weight: bold;
				color: red;
				font-size: 28rpx;
			}
			.lyp_price_hr {
				text-decoration: line-through;
				font-size: 24rpx;
				color: rgb(178, 178, 178);
			}
		}
	}
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
