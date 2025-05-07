<template>
	<view class="content">
		<view class="me-head">
			<u-sticky bgColor="#fff">
			   <u-tabs :list="allList" lineColor="#ce7e78" :current="tabsIndex"
					:activeStyle="{color: '#ce7e78',fontWeight: 'bold',transform: 'scale(1.05)'}" @change="tabClick"></u-tabs>
			  </u-sticky>
		</view>
		<view class="me-center">
			<view class="list-tab">
				<ul class="item-ul" v-for="(item, index) in orderList" :key="index" @click="toDetails(item)">
					<li v-if="item.status == tabsIndex || tabsIndex == 0">
						<view  class="item-top">
							<view>
								<text>订单编号 </text>
								<text class="oId">{{item.id}}</text>
							</view>
							<view class="pay-type" :class="item.status==1?'status-red':item.status==2?'status-2':'status-green'">
								<text>{{allList[item.status].name}}</text>
							</view>
						</view>
						<u-line dashed></u-line>
						<view class="item-content">
							<view  class="item-left">
								<u-image :src="item.goodsImageUrl||'../../static/logo.png'" :fade="true" radius="5"
									width="70" height="70" duration="450"></u-image>
							</view>
							<view class="item-right">
								<view class="item-right-v1">
									<text class="item-title">{{item.goodsName}}</text>
								</view>
								<view class="item-right-v1 induce">
									<text class="rate-text1">下单时间：{{item.createTime}}</text>
								</view>
								<view class="item-right-v2">
									<view class="v2-fh">￥<text class="v2-price">{{item.amount}}</text></view>
								</view>
							</view>
						</view>
						
						<u-line dashed></u-line>
						<view class="item-btom">
							<view @click.stop="cancelClick(item,index)" v-if="item.status == 1">
								<view class="item-btom-btn">取消</view>
							</view>
							<view @click.stop="payClick(item,index)" v-if="item.status == 1">
								<view class="item-btom-btn pay">支付</view>
							</view>
                            
                            <view @click.stop="confirm(item,index)" v-if="item.status == 2">
                            	<view class="item-btom-btn pay">确认收货</view>
                            </view>
                            
                            <view @click.stop="refund(item,index)" v-if="item.status == 3">
                            	<view class="item-btom-btn pay">申请退款</view>
                            </view>
						</view>
					</li>
				</ul>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				tabsIndex: 0,
				allList: [
					{tabId: 0,name: '全部'},
					{tabId: 1,name: '待付款'},
					{tabId: 2,name: '待收货'},
					{tabId: 3,name: '已完成'},
					{tabId: 4,name: '已取消'},
					{tabId: 5,name: '售后'},
				],
				orderList: [],
			}
		},
		onLoad({tabsIndex}) {
            if(tabsIndex){
                this.tabsIndex = tabsIndex
            }
			this.getList(0)
		},
		methods: {
            getList(status){
                let getData = {}
                if(status){
                    getData = {status}
                }
                this.$req.get('system/goodsOrder/list',getData).then(res=>{
                    this.orderList = res.rows
                })
            },
            toDetails(item){
                console.log(JSON.stringify(item));
                this.toUrl('/pages/order/orderDetails?oItem='+JSON.stringify(item))
            },
			tabClick(index){
				this.tabsIndex = index
			},
            confirm(item,index){
                let putData = {
                    id:item.id,
                    status:3
                }
                this.$req.put('system/goodsOrder',putData).then(res=>{
                    if(res.code==200){
                        uni.showToast({
                            title:'操作成功',
                            icon:'none'
                        })
                        setTimeout(()=>{
                            item.status = 3
                            
                            this.$set(this.orderList,index,item)
                        },1000)
                    }
                })
            },
			// 取消订单
			cancelClick(item,index){
				uni.showModal({
					title: '温馨提示',
					content: '确定要取消该订单吗？',
					cancelText: '取消',
					confirmText: '确定',
					success: (res=> {
						if (res.confirm) {
							let putData = {
							    id:item.id,
							    status:4
							}
							this.$req.put('system/goodsOrder',putData).then(res=>{
							    if(res.code==200){
							        uni.showToast({
							            title:'操作成功',
							            icon:'none'
							        })
                                    setTimeout(()=>{
                                        item.status = 4
                                        
                                        this.$set(this.orderList,index,item)
                                    },1000)
							    }
							})
						}
					})
				})
			},
			payClick(item){
				console.log("item===支付====",item)
                
                let putData = {
                    orderNumber:item.id,
                }
                this.$req.put('goodsOrder/payment',putData).then(oItem=>{
                    uni.requestPayment({
                        provider: 'wxpay',
                    	timeStamp: oItem.data.timeStamp,
                    	nonceStr: oItem.data.nonceStr,
                    	package: 'prepay_id='+oItem.data.packageStr,
                    	signType: 'MD5',
                    	paySign: oItem.data.paySign,
                    	success: (res)=> {
                            uni.showToast({
                                title:'支付成功',
                                icon:'none'
                            })
                            setTimeout(()=>{
                                this.toUrl('/pages/order/list')
                            },500)
                    	},
                    	fail: function (err) {
                    		uni.showToast({
                                title:'支付失败,请重试',
                                icon:'none'
                            })
                    	}
                    });
                })
			},
		}
	};
</script>
<style scoped lang="scss">
	page {
		text-align: center;
		background-color: #F7F8FA;
	}
	
	.content{
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	.me-head{
		width: 100%;
		height: 80upx;
		padding-bottom: 20upx;
	}
	
	.me-center{
		flex: 1;
		overflow-y: auto;
		width: 100%;
		margin-top: 20upx;
		
		.pullScrollView {
			display: flex;
			flex-direction: column;
		}
		
		.list-tab{
			width: 93%;
			margin: 0 auto;

			.item-ul{
				margin-bottom: 20upx;
			}
			.item-ul li{
				background-color: #ffffff;
				border-radius: 15upx;
				box-shadow: 0 0upx 6upx 0upx rgba(0, 0, 150, .2);
			}
			
			.item-top{
				display: flex;
				justify-content: space-between;
				padding: 20rpx;
				font-size: 28rpx;
				.oId{
                    font-size: 20rpx;
                }
				.pay-type{
					font-weight: bold;
				}
				.status-red{
					color: #ff5500;
				}
				.status-2{
					color: #4891d9;
				}
				.status-green{
					color: #00d500;
				}
			}
			.item-content{
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 10upx 20upx;
			}
			
			.item-right{
				flex: 1;
				margin-left: 20upx;
				
				.item-right-v1{
					width: 100%;
					padding: 8rpx 0;

					.item-title{
						font-weight: bold;
						display: -webkit-box;
					}
				}
				
				.induce{
					display: flex;
					align-items: center;
					
					.rate-text1{
						font-size: 26rpx;
					}
					.rate-text2{
						margin-left: 20rpx;
						font-size: 26rpx;
						color: #B9B9B9;
					}
				}
		
				.item-right-v2{
					padding: 8rpx 0;
					display: flex;
					justify-content: space-between;
					color: #a3a3a3;
					font-size: 26upx;
					
					.v2-fh{
						color: #ff5500;
						font-size: 22upx;
					}
					.v2-price{
						color: #ff5500;
						font-weight: bold;
						font-size: 32upx;
					}
				}
			}	
			
			.item-btom{
				display: flex;
				justify-content: flex-end;
				padding: 20rpx 10upx;
				font-size: 28upx;
				
				.item-btom-btn{
					padding: 6upx 40upx ;
					border: 1px solid #d2d3d4;
					border-radius: 40upx;
					margin-right: 20upx;
					align-items: center;
				}
				.pay{
					background-color: #ce7e78;
					border: 1px solid #ce7e78;
					color: #ffffff;
				}
			}
		}
	}
</style>
