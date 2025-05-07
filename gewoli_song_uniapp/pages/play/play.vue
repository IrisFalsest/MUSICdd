<template>
	<view class="content">
		<whiteHeads :haveBack="true" :title="options.songName || '歌词'"></whiteHeads>
		<bing-lyric
			:lyrics="lyrics"
			:centerStyle="centerStyle"
			:curTime="curTime"
			:areaStyle="cuAreaStyle"
			:lyricStyle="lyricStyle"
			@centerBtnClick="centerBtnClick"
			@copyLyrics="copy"
		></bing-lyric>
		<!-- 
         <button @click="makeTime">播放</button>
         <button @click="stop">stop</button> -->

		<view class="btns">
			<!-- 收藏 -->
			<image src="../../static/sing/play_sc_0.png"></image>
			<!-- <image src="../../static/sing/collection_1.png"></image> -->
			<!-- 上一曲 -->
			<image src="../../static/sing/play_left.png" mode="" @click="LastSong()"></image>
			<!-- 播放 -->
			<image class="play" @click="makeTime" v-if="playStatus" src="../../static/sing/play_0.png" mode=""></image>
			<image class="play" @click="stop" v-if="!playStatus" src="../../static/sing/play_1.png" mode=""></image>
			<!-- 下一曲 -->
			<image src="../../static/sing/play_right.png" mode="" @click="NextSong()"></image>
			<!-- 分享 -->
			<button open-type="share">
				<image class="share" style="margin-top: 20%" src="../../static/sing/pkay_share.png" mode=""></image>
			</button>
		</view>
	</view>
</template>

<script>
import bingLyric from '../../components/bing-lyric/bing-lyric.vue';
export default {
	components: {
		bingLyric
	},
	data() {
		return {
			centerStyle: {
				btnImg: '../../static/icon/play.png'
			},
			lyricStyle: {},
			cuAreaStyle: {
				width: '100vw'
			},
			lyrics: [],
			timer: null, //setTimeOut 对象
			curTime: 0,
			options: {},
			playStatus: 0, //0暂停 1播放
			playData: [],
			currentIndex: null,
			shareParams: {
				title: '',
				path: '/pages/tabbar/shopSing/shopSing',
				imageUrl: ''
			},
			currentPlay: {},
			bgAudioManager: null
		};
	},
	watch: {
		currentPlay: {
			handler(newVal, oldVal) {
				// 当 currentPlay 变化时，更新 shareParams
				if (newVal) {
					this.shareParams.title = `邀请您查看音乐《${newVal.songName}》` || '';
					this.shareParams.imageUrl = newVal.songCoverPhotoUrl || '';
				}
			},
			deep: true, // 需要这个选项来深度监听对象内部的变化
			immediate: true // 这个选项表示在组件初始化时立即触发一次 handler 函数
		}
	},
	onLoad(item) {
		this.createAudio();
		if (item.list) {
			let list = JSON.parse(decodeURIComponent(item.list));
			console.log(list); // 这里打印出的是接收到的数组
			this.playData = list;
		}
		let options = this.playData[item.index]; // 读取数组当前歌曲对象
		this.currentPlay = options;
		this.currentIndex = Number(item.index); // 保存当前歌曲下标
		console.log('正在播放索引', this.currentIndex);
		if (options.songLyrics != null) {
			this.lyrics = options.songLyrics.split(/[(\r\n)\r\n]+/);
		} else {
			this.lyrics = [];
		}
		this.options = options;
		this.makeTime();
		this.setSong();
	},
	methods: {
		createAudio() {
			this.curTime = 0;
			clearTimeout(this.$globalDataAudio.timer);
			this.$globalDataAudio.timer = null;
			this.$globalDataAudio.destroyAudioCtx();
			this.$globalDataAudio.initAudioCtx();
			this.$globalDataAudio.hasAudioStatus();
			this.bgAudioManager = this.$globalDataAudio.audioCtx;
		},
		NextSong() {
			if (this.currentIndex === this.playData.length) {
				// 如果当前是最后一首歌，则回到列表的第一首
				this.currentIndex = 0; // 修改这里为0
			}
			console.log('当前索引', this.currentIndex);
			this.currentIndex++;
			console.log('更改索引', this.currentIndex);
			this.stop(); // 先停止当前播放和清除定时器
			let options = this.playData[this.currentIndex % this.playData.length]; // 使用模运算保证索引不会超出范围
			this.currentPlay = options;
			if (options.songLyrics != null) {
				this.lyrics = options.songLyrics.split(/[(\r\n)\r\n]+/);
			} else {
				this.lyrics = [];
			}
			this.options = options;
			this.makeTime();
			this.setSong();
		},
		LastSong() {
			if (this.currentIndex === 0) {
				// 如果当前是第一首歌，则跳转到列表的最后一首
				this.currentIndex = this.playData.length;
			}
			this.currentIndex--;
			this.stop(); // 先停止当前播放和清除定时器
			let options = this.playData[(this.currentIndex + this.playData.length) % this.playData.length]; // 使用模运算保证索引不会超出范围
			this.currentPlay = options;
			if (options.songLyrics != null) {
				this.lyrics = options.songLyrics.split(/[(\r\n)\r\n]+/);
			} else {
				this.lyrics = [];
			}
			this.options = options;
			this.makeTime();
			this.setSong();
		},
		setSong() {
			var that = this;
			this.createAudio();
			this.$globalDataAudio.stop = 0;
			console.log('正在播放', this.options);
			this.bgAudioManager.title = this.options.songTitle;
			this.bgAudioManager.singer = this.options.songName;
			this.bgAudioManager.coverImgUrl = this.options.songCoverPhotoUrl;
			this.bgAudioManager.src = this.options.songFileUrl;
			this.bgAudioManager.play();
			if (this.options.isBuy == 0) {
				this.$globalDataAudio.timer = setTimeout(() => {
					this.$globalDataAudio.destroyAudioCtx();
					this.$globalDataAudio.audioCtx = null;
					uni.showModal({
						title: '提示',
						content: '试听结束，购买后可播放',
						success: function (res) {
							if (res.confirm) {
								console.log('用户点击确定');
								uni.reLaunch({
									url: '/pages/tabbar/shopSing/shopSing'
								});
							} else if (res.cancel) {
								console.log('用户点击取消');
								uni.reLaunch({
									url: '/pages/tabbar/shopSing/shopSing'
								});
							}
						}
					});
				}, 250000000);
			}
		},
		audition(item, index, i) {
			clearTimeout(this.$globalDataAudio.timer);
			this.$globalDataAudio.timer = null;
			const audioCtx = this.$globalDataAudio.audioCtx;
			audioCtx.src = item.songFileUrl;
			audioCtx.play();
		},
		copy(e) {
			console.log('index', e);
			uni.showModal({
				content: JSON.stringify(e.lyrics)
			});
		},
		//根据歌词选择进度
		centerBtnClick(e) {
			this.bgAudioManager.seek(Number(e.centerTime) || 0);
			this.curTime = e.centerTime;
			this.bgAudioManager.play();
		},
		makeTime() {
			this.playStatus = 0;
			this.bgAudioManager.play();
			this.timer = setInterval(() => {
				setTimeout(() => {
					this.curTime += 0.5;
				}, 0);
			}, 500);
		},
		out(t) {
			console.log(t);
			this.curTime += t;
		},
		stop() {
			this.$globalDataAudio.stop = 1;
			this.playStatus = 1;
			this.bgAudioManager.pause();
			clearTimeout(this.timer);
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

<style scoped lang="scss">
button {
	font-size: 24rpx;
	border: 0;
	background: 0;
	padding-left: 0;
	padding-right: 0;
	height: 64rpx;
}
button::after {
	border: 0;
	background: 0;
	height: 0;
}
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background: linear-gradient(180deg, #304f57 0%, #152328 100%);
	.btns {
		width: 92vw;
		margin: 50rpx auto 0;
		display: flex;
		align-items: center;
	}
}
image {
	margin: auto;
	width: 64rpx;
	height: 64rpx;
}
.share {
	width: 48rpx;
	height: 48rpx;
}
.play {
	width: 84rpx;
	height: 84rpx;
}
</style>
