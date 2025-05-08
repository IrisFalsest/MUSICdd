<template>
	<view class="ai-chat-container">
		<view class="chat-header">
			<view class="back-button" @click="goBack">
				<u-icon name="arrow-left" color="#333" size="28"></u-icon>
			</view>
			<view class="title">AI助手</view>
		</view>
		
		<scroll-view scroll-y="true" class="chat-content" :scroll-top="scrollTop">
			<view class="chat-list">
				<view v-for="(item, index) in chatMessages" :key="index" class="chat-item" :class="{'chat-item-ai': item.type === 'ai', 'chat-item-user': item.type === 'user'}">
					<view class="avatar">
						<image v-if="item.type === 'ai'" src="/static/logo.png"></image>
						<image v-else src="/static/icon/nav1.png"></image>
					</view>
					<view class="message">{{ item.content }}</view>
				</view>
			</view>
		</scroll-view>
		
		<view class="typing-indicator" v-if="isLoading">
			<view class="dot"></view>
			<view class="dot"></view>
			<view class="dot"></view>
		</view>
		
		<view class="chat-input-container">
			<input type="text" class="chat-input" v-model="inputMessage" placeholder="请输入您的问题..." 
				@confirm="sendMessage" confirm-type="send" />
			<view class="send-button" @click="sendMessage">
				<u-icon name="arrow-upward" color="#fff" size="24"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			chatMessages: [
				{
					type: 'ai',
					content: '你好！我是歌窝里音乐的AI助手，有什么我可以帮助你的？'
				}
			],
			inputMessage: '',
			isLoading: false,
			scrollTop: 0,
			deepseekKey: 'sk-bfc6a723707042cdb998debd707c0697'
		};
	},
	methods: {
		goBack() {
			uni.navigateBack();
		},
		sendMessage() {
			if (!this.inputMessage.trim()) return;
			
			// 添加用户消息
			this.chatMessages.push({
				type: 'user',
				content: this.inputMessage
			});
			
			const userQuestion = this.inputMessage;
			this.inputMessage = '';
			this.scrollToBottom();
			
			// 显示加载状态
			this.isLoading = true;
			
			// 调用Deepseek API
			this.callDeepseekAPI(userQuestion);
		},
		callDeepseekAPI(question) {
			uni.request({
				url: 'https://api.deepseek.com/v1/chat/completions',
				method: 'POST',
				header: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${this.deepseekKey}`
				},
				data: {
					model: 'deepseek-chat',
					messages: [
						{
							role: 'system',
							content: '你是歌窝里音乐的AI助手，帮助用户解决关于音乐、歌单、制作和平台使用的问题。保持友好、专业的态度。'
						},
						{
							role: 'user',
							content: question
						}
					],
					temperature: 0.7
				},
				success: (res) => {
					console.log('API响应成功:', JSON.stringify(res));
					if (res.statusCode === 200 && res.data) {
						// DeepSeek API 返回的数据结构
						if (res.data.choices && res.data.choices.length > 0 && res.data.choices[0].message) {
							const aiMessage = res.data.choices[0].message.content;
							this.chatMessages.push({
								type: 'ai',
								content: aiMessage
							});
						} else {
							this.chatMessages.push({
								type: 'ai',
								content: '抱歉，我无法理解API返回的数据格式，请稍后再试。'
							});
							console.error('API返回异常数据结构:', res.data);
						}
					} else {
						this.chatMessages.push({
							type: 'ai',
							content: '抱歉，我遇到了一些问题，请稍后再试。'
						});
						console.error('API请求失败:', res);
					}
					this.isLoading = false;
					this.scrollToBottom();
				},
				fail: (err) => {
					console.error('API调用失败:', err);
					this.chatMessages.push({
						type: 'ai',
						content: '抱歉，连接服务器时出现问题，请检查网络后再试。'
					});
					this.isLoading = false;
					this.scrollToBottom();
				}
			});
		},
		scrollToBottom() {
			// 使用nextTick确保DOM更新后再滚动
			this.$nextTick(() => {
				const query = uni.createSelectorQuery().in(this);
				query.select('.chat-list').boundingClientRect(data => {
					if (data) {
						this.scrollTop = data.height;
					}
				}).exec();
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.ai-chat-container {
	display: flex;
	flex-direction: column;
	height: 100vh;
	background-color: #f8f8f8;
}

.chat-header {
	height: 88rpx;
	display: flex;
	align-items: center;
	padding: 0 30rpx;
	background: linear-gradient(143deg, #e9c19c 0%, #ffd3aa 100%);
	position: relative;
	
	.back-button {
		position: absolute;
		left: 30rpx;
		z-index: 1;
	}
	
	.title {
		flex: 1;
		text-align: center;
		font-size: 36rpx;
		font-weight: 500;
		color: #333;
	}
}

.chat-content {
	flex: 1;
	padding: 20rpx;
	overflow-y: auto;
}

.chat-list {
	display: flex;
	flex-direction: column;
}

.chat-item {
	display: flex;
	margin-bottom: 30rpx;
	
	.avatar {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		overflow: hidden;
		
		image {
			width: 100%;
			height: 100%;
		}
	}
	
	.message {
		max-width: 70%;
		padding: 20rpx;
		border-radius: 16rpx;
		font-size: 28rpx;
		line-height: 1.5;
		white-space: pre-wrap;
		word-break: break-all;
		margin: 0 20rpx;
	}
}

.chat-item-ai {
	align-self: flex-start;
	
	.message {
		background-color: #fff;
		color: #333;
		border-top-left-radius: 4rpx;
	}
}

.chat-item-user {
	align-self: flex-end;
	flex-direction: row-reverse;
	
	.message {
		background: linear-gradient(143deg, #e9c19c 0%, #ffd3aa 100%);
		color: #333;
		border-top-right-radius: 4rpx;
	}
}

.typing-indicator {
	padding: 20rpx;
	display: flex;
	align-items: center;
	
	.dot {
		width: 16rpx;
		height: 16rpx;
		background-color: #e9c19c;
		border-radius: 50%;
		margin: 0 4rpx;
		animation: typing 1.4s infinite both;
		
		&:nth-child(2) {
			animation-delay: 0.2s;
		}
		
		&:nth-child(3) {
			animation-delay: 0.4s;
		}
	}
}

@keyframes typing {
	0% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(-10rpx);
	}
	100% {
		transform: translateY(0);
	}
}

.chat-input-container {
	padding: 20rpx 30rpx 40rpx;
	display: flex;
	align-items: center;
	background: #fff;
	border-top: 1px solid #eee;
	
	.chat-input {
		flex: 1;
		height: 80rpx;
		background-color: #f2f2f2;
		border-radius: 40rpx;
		padding: 0 30rpx;
		font-size: 28rpx;
	}
	
	.send-button {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		background: linear-gradient(143deg, #e9c19c 0%, #ffd3aa 100%);
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 20rpx;
	}
}
</style> 