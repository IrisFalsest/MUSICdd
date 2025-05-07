<template>
	<scroll-view scroll-y='true' class="content" @scroll='scrollMain'>
        <!-- heads -->
        <heads :sTop='scrollTop' :title='"我的"' :haveLogo='false'></heads>
        
        <view class="user tView">
            <view class="uTop" @click="toUrl('/pages/upUserInfo/centerUpuserInfo')">
                <image :src="userInfo.avatar||'../../../static/logo.png'" mode=""></image>
                <view class="utLogin">
                    <view class="utlTxt">
                        修改用户信息
                        <u-icon class="icon" name="arrow-right"></u-icon>
                    </view>
                    <view class="utlName">
                        <image src="@/static/icon/king.png"></image>
                        {{userInfo.nickName||'歌窝里'}}
                    </view>
                </view>
            </view>
            <view class="uBot">
                <!-- <view class="ubView">
                    <view class="ubvTop">1899</view>
                    <view class="ubvBot">余额</view>
                </view> -->
                <view class="ubView">
                    <view class="ubvTop">{{userInfo.score||'0'}}</view>
                    <view class="ubvBot">积分</view>
                </view>
                <view class="ubView">
                    <view class="ubvTop">026-265</view>
                    <view class="ubvBot">客服</view>
                </view>
            </view>
        </view>
        
        <view class="myOrder tView">
            <view class="oTop" @click="toUrl('/pages/order/list')">
                <view class="otLeft">我的订单</view>
                <view class="otRight">
                    全部订单
                    <u-icon color="#333333" class="icon" name="arrow-right"></u-icon>
                </view>
            </view>
            
            <view class="oBot">
                <view class="obLi" @click="toUrl('/pages/order/list?tabsIndex=1')">
                    <image src="@/static/icon/my_order_0.png"></image>
                    <view>待付款</view>
                </view>
                <view class="obLi" @click="toUrl('/pages/order/list?tabsIndex=2')">
                    <image src="@/static/icon/my_order_1.png"></image>
                    <view>待收货</view>
                </view>
                <view class="obLi" @click="toUrl('/pages/order/list?tabsIndex=3')">
                    <image src="@/static/icon/my_order_2.png"></image>
                    <view>已完成</view>
                </view>
                <!-- <view class="obLi">
                    <image src="@/static/icon/my_order_3.png"></image>
                    <view>待评价</view>
                </view> -->
                <view class="obLi" @click="toUrl('/pages/order/list?tabsIndex=4')">
                    <image src="@/static/icon/my_order_4.png"></image>
                    <view>已取消</view>
                </view>
            </view>
        </view>
        
        <view class="myView tView">
            <view class="myTop">
                <!-- <view class="mytLeft">我的订单</view> -->
            </view>
            <view class="myBot">
                <view class="myLi" @click="toUrl('/pages/collection/index')">
                    <u-icon name="star" color="#231815" size="48"></u-icon>
                    <text>我的收藏</text>
                    <u-icon class="icon" color="#999999" name="arrow-right"></u-icon>
                </view>
                <view v-if="loginType==3||loginType==2" class="myLi" @click="toUrl('/pages/singer/singer?loginType='+loginType)">
                    <image src="@/static/icon/my_1.png" mode=""></image>
                    <text>我的作品</text>
                    <u-icon class="icon" color="#999999" name="arrow-right"></u-icon>
                </view>
                <view class="myLi" @click="toUrl('/pages/address/myAdress')">
                    <image src="@/static/icon/my_2.png" mode=""></image>
                    <text>地址管理</text>
                    <u-icon class="icon" color="#999999" name="arrow-right"></u-icon>
                </view>
                <view class="myLi">
                    <image src="@/static/icon/my_3.png" mode=""></image>
                    <text>账号管理</text>
                    <u-icon class="icon" color="#999999" name="arrow-right"></u-icon>
                </view>
                <view class="myLi" @click="toUrl('/pages/records/index')">
                    <image src="@/static/icon/my_4.png" mode=""></image>
                    <text>投诉/建议</text>
                    <u-icon class="icon" color="#999999" name="arrow-right"></u-icon>
                </view>
				<view class="myLi" @click="toUrl('/pages/canvas/canvas')">
				    <image src="@/static/icon/my_4.png" mode=""></image>
				    <text>生成海报</text>
				    <u-icon class="icon" color="#999999" name="arrow-right"></u-icon>
				</view>
            </view>
        </view>
    
        <!-- tabbar -->
        <u-tabbar :list="tabbar" :mid-button="true" height='58px' active-color='#FFD3AA'></u-tabbar>
    </scroll-view>
</template>

<script>
	export default {
		data() {
			return {
                scrollTop:0,
                userInfo:{}
			}
		},
        onShow() {
            // this.$req.wxLogin()
            this.$req.get('mobileEndUser/info',{userId:uni.getStorageSync('userInfo').id}).then(res=>{
                this.userInfo = JSON.parse(JSON.stringify(res.data.user))
                uni.setStorageSync('userInfo',res.data.user)
            })
        },
		onLoad() {
            
		},
        computed: {
            tabbar: function () {
                return getApp().globalData.tabbar
            },
            loginType:()=>{
                return uni.getStorageSync('loginType')
            }
        },
		methods: {
            scrollMain(e){
                this.scrollTop = e.detail.scrollTop
            }
		}
	}
</script>

<style lang="scss" scoped>
    .content{
        width: 100vw;
        height: 100vh;
        overflow: auto;
        background: url('https://image-file2024.oss-cn-beijing.aliyuncs.com/geWoLiMusicMall/backgroundImage/image1.jpg');
        background-size: 100% 100%;
    }
    .tView{
        width: 686rpx;
        border-radius: 24rpx;
        background: #FFFFFF;
        padding: 32rpx;
        margin: 0 auto;
        box-shadow: 0 0 10rpx #f5f5f5;
    }
    .user{
        margin-top: 34rpx;
        .uTop{
            display: flex;
            >image{
                width: 100rpx;
                height: 100rpx;
                border-radius: 50rpx;
            }
            .utLogin{
                margin-left: 24rpx;
                .utlTxt{
                    font-size: 24rpx;
                    font-weight: 500;
                    line-height: 48rpx;
                    .icon{
                        margin-left: 18rpx;
                    }
                }
                .utlName{
                    background: #31312D;
                    border-radius: 20rpx;
                    color: #fff;
                    width: fit-content;
                    padding: 4rpx 10rpx;
                    font-size: 28rpx;
                    image{
                        width: 28rpx;
                        height: 28rpx;
                        vertical-align: middle;
                        margin-right: 2rpx;
                    }
                }
            }
        }
        .uBot{
            margin-top: 60rpx;
            display: flex;
            .ubView{
                position: relative;
                flex: 1;
                text-align: center;
                .ubvTop{
                    font-size: 32rpx;
                    font-weight: 500;
                }
                .ubvBot{
                    font-size: 28rpx;
                    color: #999999;
                    margin-top: 12rpx;
                }
            }
            .ubView:nth-child(1)::after{
                content: '';
                position: absolute;
                right: 0;
                top: 0;
                bottom: 0;
                margin: auto;
                width: 2rpx;
                height: 56rpx;
                background: #DCDCDC;
            }
        }
    }
    .myOrder{
        margin-top: 32rpx;
        .oTop{
            display: flex;
            .otLeft{
                font-size: 28rpx;
                font-weight: 800;
            }
            .otRight{
                margin-left: auto;
                font-size: 24rpx;
                color: #333333;
                .icon{
                    margin-left: 8rpx;
                }
            }
        }
        .oBot{
            margin-top: 32rpx;
            display: flex;
            .obLi{
                text-align: center;
                font-size: 24rpx;
                color: #333333;
                margin: auto;
                image{
                    width: 48rpx;
                    height: 48rpx;
                }
            }
        }
    }
    .myView{
        margin-top: 32rpx;
        .myTop{
            display: flex;
            .mytLeft{
                font-size: 28rpx;
                font-weight: 800;
            }
        }
        .myBot{
            margin-top: 20rpx;
            .myLi{
                margin-bottom: 32rpx;
                display: flex;
                font-size: 24rpx;
                align-items: center;
                justify-content: center;
                image{
                    width: 48rpx;
                    height: 48rpx;
                }
                text{
                    margin-left: 16rpx;
                }
                .icon{
                    margin-left: auto;
                }
            }
            .myLi:last-child{
                margin-bottom: 0;
            }
        }
    }
</style>
