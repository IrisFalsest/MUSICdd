export default {
	audioCtx: null,
	timer: null,
	stop: 1, // 0播放 1暂停

	initAudioCtx() {
		if (!this.audioCtx) {
			this.audioCtx = uni.createInnerAudioContext();
		}
	},

	destroyAudioCtx() {
		if (this.audioCtx) {
			this.audioCtx.destroy();
			this.audioCtx = null;
		}
	},

	hasAudioCtx() {
		return !!this.audioCtx;
	},

	hasAudioStatus() {
		if (this.stop == 1) {
			this.stop = 0
		} else if (this.stop == 0) {
			this.stop = 1
		}
	}
};