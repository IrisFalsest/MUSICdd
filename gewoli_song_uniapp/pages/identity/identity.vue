<template>
	<view class="content">
		<image class="logo" src="@/static/logo.png"></image>
		<view class="tit">歌窝里</view>
		<view class="desc">歌窝里音乐是在原“歌窝里中国原创音乐基地”基础上，全新升级的音乐人交流平台，重磅打造词曲交易、接单做任务、音乐人社区等功能。</view>
		<view class="view check1" @click="toLogin(2)">
			<view class="icon"></view>
			<view class="vTit">
				<view class="vtTit">我是歌手</view>
				<view class="vtTxt">适用于歌曲演绎者</view>
			</view>
			<view class="vRight"><image src="@/static/icon/right.png"></image></view>
		</view>
		<view class="view check2" @click="toLogin(3)">
			<view class="icon"></view>
			<view class="vTit">
				<view class="vtTit">我是制作人</view>
				<view class="vtTxt">适用于词曲作者以及编曲者</view>
			</view>
			<view class="vRight">
				<image src="@/static/icon/right.png"></image>
			</view>
		</view>
		<view class="view check2" @click="toLogin(1)">
			<view class="icon"></view>
			<view class="vTit">
				<view class="vtTit">音乐爱好者</view>
				<view class="vtTxt">适用于有翻唱作品的乐器演奏者</view>
			</view>
			<view class="vRight">
				<image src="@/static/icon/right.png"></image>
			</view>
		</view>
		<!-- 协议 -->
		<!-- <view class="clause">
            <u-checkbox-group>
                <u-checkbox 
                    v-model="item.checked" 
                    v-for="(item, index) in list" :key="index" 
                    shape="circle"
                    active-color="#E9C19C"
                >
                <text class="txt1">我已阅读并同意</text>
                </u-checkbox>
            </u-checkbox-group>
            <text class="txt2">《用户协议》</text>
            <text>和</text>
            <text class="txt2">《隐私协议》</text>
        </view> -->
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					checked: false,
					disabled: false
				}
			]
		};
	},
	onLoad() {},
	onShow() {
		//
		if(uni.getStorageSync("token")){
			uni.switchTab({
				url:'/pages/tabbar/index/index'
			})
				// this.toUrl('/pages/tabbar/index/index');
		}
	},
	methods: {
		toLogin(type) {
			uni.setStorageSync('loginType', type);
			this.toUrl(`/pages/login/login?type=${type}`);
		}
	}
};
</script>

<style lang="scss" scoped>
/deep/.u-checkbox__icon-wrap {
	border: 1px solid #e9c19c !important;
}
/deep/.u-checkbox__label {
	margin-right: 0 !important;
}
.content {
	width: 100vw;
	height: 100vh;
	overflow: auto;
	background: url('https://image-file2024.oss-cn-beijing.aliyuncs.com/geWoLiMusicMall/backgroundImage/image5.jpg');
	background-size: 100% 100%;
	.logo {
		display: block;
		margin: 200rpx auto 0;
		width: 172rpx;
		height: 172rpx;
	}
	.desc{
		margin: 5% 50rpx;
	}
	.tit {
		color: #000000;
		font-size: 48rpx;
		font-weight: 500;
		margin-top: 20rpx;
		text-align: center;
	}
	.view {
		width: 686rpx;
		height: 204rpx;
		margin: 0 auto;
		padding: 58rpx 32rpx;
		border-radius: 40rpx;
		background: #fff;
		display: flex;
		align-items: center;
		.icon {
			width: 84rpx;
			height: 84rpx;
			background: #ffead7;
			border-radius: 42rpx;
		}
		.vTit {
			margin-left: 16rpx;
			.vtTit {
				font-size: 32rpx;
				color: #000000;
				font-weight: 800;
			}
			.vtTxt {
				margin-top: 6rpx;
				font-size: 24rpx;
				color: #999999;
				font-weight: 500;
			}
		}
		.vRight {
			margin-left: auto;
			image {
				width: 20rpx;
				height: 20rpx;
			}
		}
	}
	.check1 {
		margin-top: 10%;
	}
	.check2 {
		margin-top: 48rpx;
	}
}
.clause {
	position: fixed;
	bottom: 62rpx;
	left: 0;
	right: 0;
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	.txt1 {
		font-size: 24rpx;
	}
	text {
		font-size: 24rpx;
	}
	.txt2 {
		color: #e9c19c;
	}
}
</style>
