<template>
	<view class="play-bottom" v-if="playobj !== null">
		<view class="play-bottom-box">
			<view class="play-bottom-box-content-left">
				<view class="play-bottom-box-image">
					<image :src="playobj.coverImgUrl" class="rotate-image"></image>
				</view>
				<view class="play-bottom-box-title">{{ playobj.singer }}</view>
			</view>
			<view class="play-bottom-box-image-play" @click="play">
				<image v-if="stop == 1" src="@/static/icon/play.png" mode=""></image>
				<image v-if="stop == 0" src="@/static/icon/play_stop.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			playobj: null,
			stop: 0
		};
	},
	watch: {
		'$globalDataAudio.audioCtx': {
			immediate: true,
			handler(newVal) {
				this.playobj = newVal;
				console.log('Updated playobj:', this.playobj);
				this.stop = this.$globalDataAudio.stop;
			}
		}
	},
	methods: {
		play() {
			// 这里可以添加播放音乐的逻辑
			this.$globalDataAudio.hasAudioStatus();
			if (this.stop == 1) {
				this.stop = 0;
				this.$globalDataAudio.audioCtx.play();
			} else if (this.stop == 0) {
				this.stop = 1;
				this.$globalDataAudio.audioCtx.pause();
			}
		},
		
		updatePlayObj() {
			this.playobj = this.$globalDataAudio.audioCtx;
			this.stop = this.$globalDataAudio.stop;
		}
	}
};
</script>

<style scoped lang="scss">
.play-bottom {
	width: 100%;
	position: fixed;
	bottom: 10%;

	.play-bottom-box {
		display: flex;
		align-items: center;
		background-color: white;
		margin: 5%;
		border-radius: 20rpx;
		justify-content: space-between;
		padding-left: 20rpx;

		.play-bottom-box-content-left {
			display: flex;
			align-items: center;
			font-size: 30rpx;

			.play-bottom-box-title {
				margin-left: 10rpx;
			}
		}

		.play-bottom-box-image {
			width: 100rpx;
			height: 100rpx;
			display: flex;

			image {
				border-radius: 50%;
				width: 100%;
				height: 100%;
			}
		}

		.play-bottom-box-image-play {
			width: 70rpx;
			height: 70rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.play-bottom-box-image-play {
			margin-right: 20rpx;
		}
	}

	.rotate-image {
		animation: spin 2s linear infinite;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
}
</style>
