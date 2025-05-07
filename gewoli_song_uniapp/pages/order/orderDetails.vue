<template>
	<view class="page-order-det">
		<view class="top"> </view>
		<view class="body">
			<view class="status">
				<view class="main">
					<text v-if="item.status==1" class="status-name">订单待付款</text>
					<text v-else-if="item.status==2" class="status-name">商家已收到订单</text>
					<text v-else-if="item.status==3" class="status-name">订单已完成</text>
					<text v-else-if="item.status==4" class="status-name">订单已取消！</text>
					<text v-else-if="item.status==5" class="status-name">已退款</text>
                    
                    <text v-if="item.status==1" class="tips">请尽快支付订单！</text>
                    <text v-if="item.status==2" class="tips">宝贝正在火速送往！</text>
                    <text v-if="item.status==3" class="tips">宝贝已送达！</text>
                    <text v-if="item.status==5" class="tips">支付金额会原路退回</text>
				</view>
			</view>
			<view class="goods-info">
				<view class="title"> 商品信息 </view>
				<view class="list">
					<view class="item">
						<image :src="item.goodsImageUrl||'../../static/logo.png'" mode="aspectFill" class="preview" />
						<view class="main">
							<view class="info">
								<text class="name">{{ item.goodsName }}</text>
								<!-- <text class="size">{{ item.size }}</text> -->
							</view>
							<view class="price">
								<text class="unit">￥</text>
								<text class="num">{{ item.amount }}</text>
							</view>
						</view>
						<view class="buy-num">x{{ item.buyQuantity }}</view>
					</view>
				</view>
			</view>
			<view class="order-info">
				<view class="title">订单信息</view>
				<view class="list">
					<view class="item">
						<text class="label">下单时间</text>
						<text class="value">{{ item.createTime }}</text>
					</view>
                    <view class="item">
                    	<text class="label">配送方式</text>
                    	<text class="value">快递</text>
                    </view>
                    <view class="item">
                    	<text class="label">地址</text>
                    	<text class="value">{{item.address}}</text>
                    </view>
				</view>
			</view>
			<view class="order-pay">
				<view class="total">
					<text class="name">合计：</text>
                    <text class="price">{{item.amount}}</text>
				</view>
				<view class="btn">
                    <!-- 
                    status:
                        1待付款 ：取消订单 去付款
                        2待收货 ：确认收货
                        3已收货 ：申请退款
                        4已取消 ：无
                        5退款：无
                     -->
                     <view class="cancel" v-if="item.status==4"><u-button @click="cancel1" size="mini">改成待收货(未对支付前调用)</u-button></view>
                     
					<view class="cancel" v-if="item.status==1"><u-button @click="cancel" size="mini">取消订单</u-button></view>
					<view v-if="item.status==1"><u-button size="mini" type="error">去付款</u-button></view>
					<view v-if="item.status==2"><u-button size="mini" type="error">确认收货</u-button></view>
					<view v-if="item.status==3"><u-button size="mini" type="error">申请退款</u-button></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
    export default {
    	data() {
    		return {
                item:{}
    		}
    	},
    	onLoad({oItem}) {
            this.item = JSON.parse(oItem)
    	},
    	methods: {
            cancel1(){
                let putData = {
                    id:this.item.id,
                    status:2
                }
                this.$req.put('system/goodsOrder',putData).then(res=>{
                    if(res.code==200){
                        uni.showToast({
                            title:'操作成功',
                            icon:'none'
                        })
                        this.item.status = 2
                    }
                })
            },
            cancel(){
                uni.showModal({
                	title: '温馨提示',
                	content: '确定要取消该订单吗？',
                	cancelText: '取消',
                	confirmText: '确定',
                	success: (r=> {
                		if (r.confirm) {
                			let putData = {
                			    id:this.item.id,
                			    status:4
                			}
                			this.$req.put('system/goodsOrder',putData).then(res=>{
                			    if(res.code==200){
                			        uni.showToast({
                			            title:'操作成功',
                			            icon:'none'
                			        })
                			        this.item.status = 4
                			    }
                			})
                		}
                	})
                })
            },
    	}
    };
</script>

<style lang="scss">
	page {
		background-color: #f7f7f7;
	}

	.page-order-det {
		position: relative;

		.top {
			width: 100%;
			height: 548rpx;
			margin-top: -44px;
			background: linear-gradient(180deg, #ff5500 80%, #f7f7f7 100%);
		}

		.body {
			position: absolute;
			top: 150rpx;
			width: 100%;
			padding-bottom: 140rpx;

			.status {
				display: flex;
				align-items: center;
				width: calc(100% - 64rpx);
				margin: 0 32rpx 50rpx 32rpx;
				padding: 52rpx 30rpx;
				box-sizing: border-box;
				background-color: #ffffff;
				border-radius: 8rpx;

				.s-img {
					display: block;
					width: 58rpx;
					height: 58rpx;
					margin-right: 24rpx;
				}

				.status-name {
					display: block;
					font-size: 40rpx;
					font-weight: 500;
					color: #565656;
				}

				.tips {
					font-size: 24rpx;
					font-weight: 400;
					color: #ababab;
				}
			}

			.goods-info {
				width: calc(100% - 64rpx);
				margin: 0 32rpx 20rpx 32rpx;
				padding: 52rpx 30rpx 36rpx 30rpx;
				box-sizing: border-box;
				background-color: #ffffff;
				border-radius: 8rpx;

				.title {
					padding-bottom: 20rpx;
					border-bottom: solid 2rpx #e8e8e8;
					font-size: 36rpx;
					font-weight: 500;
					color: #333333;
				}

				.list {
					margin-bottom: 36rpx;
					border-bottom: solid 2rpx #e8e8e8;

					.item {
						display: flex;
						position: relative;
						padding: 30rpx 0;

						.preview {
							display: block;
							width: 188rpx;
							height: 188rpx;
							margin-right: 20rpx;
						}

						.main {
							display: flex;
							flex-direction: column;
							justify-content: space-between;

							.info {
								.name {
									display: block;
									font-size: 32rpx;
									font-weight: 400;
									color: #333333;
								}

								.size {
									font-size: 24rpx;
									font-weight: 400;
									color: #8e8e8e;
								}
							}

							.price {
								font-size: 32rpx;
								font-weight: bold;
								color: #343434;
							}
						}

						.buy-num {
							position: absolute;
							top: 0;
							right: 0;
							font-size: 28rpx;
							font-weight: 400;
							color: #8e8e8e;
						}
					}
				}

				.discount {
					display: flex;
					align-items: center;
					margin-bottom: 38rpx;

					.name {
						flex: 1;
						font-size: 28rpx;
						font-weight: 400;
						color: #333333;
					}

					.price {
						font-size: 28rpx;
						font-weight: 400;
						color: red;
					}
				}

			}

			.order-info {
				width: calc(100% - 64rpx);
				margin: 0 32rpx 20rpx 32rpx;
				padding: 52rpx 30rpx 1rpx 30rpx;
				box-sizing: border-box;
				background-color: #ffffff;
				border-radius: 8rpx;

				.title {
					margin-bottom: 36rpx;
					padding-bottom: 20rpx;
					border-bottom: solid 2rpx #e8e8e8;
					font-size: 36rpx;
					font-weight: 500;
					color: #333333;
				}

				.list {
					.item {
						display: flex;
						justify-content: space-between;
						align-items: center;
						margin-bottom: 40rpx;

						.label {
							font-size: 28rpx;
							font-weight: 400;
							color: #333333;
						}

						.value {
							font-size: 28rpx;
							font-weight: 400;
							color: #8e8e8e;
						}
					}
				}
			}

			.order-pay {
				display: flex;
				align-items: center;
				position: fixed;
				left: 0;
				bottom: calc(1rpx + env(safe-area-inset-bottom));
				width: 100%;
				height: 50px;
				padding: 0 32rpx;
				background-color: #ffffff;
				box-sizing: border-box;

				.total {
					display: flex;
					align-items: center;
					flex: 1;

					.name {
						font-size: 24rpx;
						font-weight: 400;
						color: #333333;
					}
                    .price{
                        font-size: 30rpx;
                        color: red;
                        font-weight: bold;
                    }
				}

				.btn {
					display: flex;

					.cancel {
						margin-right: 16rpx;
					}
				}
			}
		}
	}
</style>