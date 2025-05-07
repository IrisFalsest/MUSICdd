<template>
	<view class="">
		<!-- logo/头 -->
		<view class="head" :style="{ paddingTop: titleHeight + 'px' }"></view>
		<view class="p">
			<view class="title" :style="{ paddingTop: titleHeight + 'px' }">
				<u-icon v-if="haveBack" @click="toBack()" class="icon" name="arrow-left"></u-icon>
				<image v-if="haveLogo" src="@/static/logo.png"></image>
				<view>{{ title }}</view>
			</view>
			<view class="jian" :style="{ paddingTop: titleHeight + 'px', opacity: sTop / 100 }"></view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: ''
		},
		sTop: {
			type: Number,
			default: 0
		},
		haveLogo: {
			type: Boolean,
			default: true
		},
		haveBack: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		titleHeight: function () {
			return getApp().globalData.titleHeight;
		}
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.head {
	width: 100vw;
	height: 72rpx;
	box-sizing: content-box;
}
.p {
	position: fixed;
	top: 0;
	z-index: 999;
}
.title {
	display: flex;
	align-content: center;
	justify-content: center;
	position: relative;
	width: 100vw;
	font-size: 40rpx;
	font-weight: 400;
	z-index: 2;
	image,
	.icon {
		position: absolute;
		width: 72rpx;
		height: 72rpx;
		left: 52rpx;
		border-radius: 10rpx;
	}
	view {
		height: 72rpx;
	}
}
.jian {
	position: fixed;
	top: 0;
	background: #edc7a7;
	width: 100vw;
	height: 72rpx;
	box-sizing: content-box;
	box-shadow: 0 0 10rpx #edc7a7;
}
</style>
