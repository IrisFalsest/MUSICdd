<template>
    <view class="content">
        <!-- <view class="title" :style="{paddingTop: titleHeight+'px'}">
            <u-icon @click="toBack()" name="arrow-left"></u-icon>
            <image class="icon" src="@/static/icon/sing_icon.png"></image>
        </view> -->
        <heads :haveBack='true' :haveLogo='false'></heads>
        <view class="userName">您好，{{userInfo.nickName||'歌窝里'}}！</view>
        <view class="userNum">
            累计上传<text>{{list.length||0}}</text>首作品！
        </view>
        
        <!-- 作品 -->
        <view class="sings">
            <view class="jian">
                <!-- 无作品 -->
                <view class="none" v-if="!list.length">
                    <image src="@/static/icon/sing_none.png"></image>
                    <view class="txt">暂无数据</view>
                    <view class="btn" @click="upMp3">上传作品</view>
                </view>
                
                <!-- 有作品 -->
                <view class="haveSing" v-else>
                    <view class="btn" @click="upMp3">上传作品</view>
                    <view class="singList" :style="{height: listHeight+'px'}">
                        <view class="slView" v-for="(item,index) in list" :key='index'>
                            <view class="slvTop">
                                <view class="slvCover">
                                    <image class="slvcImg" :src="item.songCoverPhotoUrl||'../../static/logo.png'"></image>
                                    <image class="slvcPlay" src="@/static/icon/play.png"></image>
                                </view>
                                <view class="slvMain">
                                    <view class="slvmTit">{{item.songName}}</view>
                                    <view class="slvmTxt">
                                        <text>制作人：</text>{{item.createBy||''}}
                                    </view>
                                    <view class="slvmTxt1">
                                        <text class="price">￥{{item.currentPrice}}</text>
                                        <text class="orPrice">￥{{item.originalPrice}}</text>
                                    </view>
                                </view>
                                <view class="slvBtn status2" v-if="item.reviewStatus==2">
                                    <!-- <u-switch 
                                    @change = 'changeStatus(item)'
                                    v-model="item.status"
                                    active-value='0'
                                    inactive-value='1'
                                    ></u-switch> -->
                                    审核通过
                                </view>
                                <view class="slvBtn status1" v-else-if="item.reviewStatus==1">审核中</view>
                                <view class="slvBtn status3" v-else>审核不通过</view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        
        <!-- 没入驻 -->
        <view class="bot" v-if="userInfo.producerReviewStatus!=3&&userInfo.musiciansReviewStatus!=3">
            <view class="bTit">您还未入驻歌窝里音乐人，立即入驻,获得更多收益!</view>
            <view class="bBtn" @click="toUrl('/pages/upUserInfo/upUserInfo')"><text>立即入驻</text></view>
            <view class="bUl">
                <view class="buLi">
                    <image src="@/static/icon/singer1.png"></image>
                    <view class="bulTxt">更多买家</view>
                </view>
                <view class="buLi">
                    <image src="@/static/icon/singer2.png"></image>
                    <view class="bulTxt">音乐人社区</view>
                </view>
                <view class="buLi">
                    <image src="@/static/icon/singer3.png"></image>
                    <view class="bulTxt">厂牌合作</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
    	data() {
    		return {
                list:[]
    		}
    	},
        computed: {
            // titleHeight: function () {
            //     return getApp().globalData.titleHeight
            // },
            userInfo:()=>{
                return uni.getStorageSync('userInfo')
            },
        },
    	onShow() {
            this.getUserSong()
    	},
    	methods: {
            changeStatus(item,key){
                console.log(item);
                console.log(key);
            },
            getUserSong(){
                this.$req.get('mobileEndUser/mobileEndUserWorks',{userId:this.userInfo.id}).then(res=>{
                    this.list = res.data
                })
            },
            upMp3(){
                if(this.userInfo.producerReviewStatus!=3&&this.userInfo.musiciansReviewStatus!=3){
                    uni.showToast({
                        title:'您还没有入驻成为歌手！',
                        icon:'none'
                    })
                    setTimeout(()=>{
                        this.toUrl('/pages/upUserInfo/upUserInfo')
                    },2000)
                }else{
                    this.toUrl('/pages/upSong/index')
                }
                
            }
    	}
    }
</script>

<style lang="scss" scoped>
    .content{
        width: 100vw;
        height: 100vh;
        overflow: auto;
        background: url('https://image-file2024.oss-cn-beijing.aliyuncs.com/geWoLiMusicMall/backgroundImage/image5.jpg');
        background-size: 100% 100%;
        .title{
            line-height: 70rpx;
            font-size: 36rpx;
            margin-left: 36rpx;
            position: relative;
        }
        .userName{
            margin-top: 105rpx;
            text-indent: 64rpx;
            font-size: 40rpx;
            color: #231815;
            font-weight: 800;
        }
        .userNum{
            margin-top: 30rpx;
            text-indent: 64rpx;
            font-size: 24rpx;
            color: #231815;
            font-weight: 500;
            text{
                font-size: 40rpx;
                margin: 0 5rpx;
            }
        }
        .icon{
            width: 378rpx;
            height: 322rpx;
            position: absolute;
            right: 20rpx;
            top: 50rpx;
        }
        .sings{
            margin-top: 32rpx;
            border-radius: 20rpx;
            border: 4rpx solid #FFFFFF;
            background: linear-gradient( 180deg, rgba(255,255,255,0.67) 0%, rgba(255,255,255,0.56) 100%);
            box-shadow: 0 0 20rpx #fff;
            .none{
                text-align: center;
                image{
                    width: 326rpx;
                    height: 326rpx;
                    margin-top: 32rpx;
                }
                .txt{
                    font-size: 24rpx;
                    font-weight: 500;
                    color: #191919;
                    margin-top: 16rpx;
                }
            }
            .haveSing{
                text-align: center;
                .btn{
                    margin-bottom: 20rpx;
                }
                .singList{
                    text-align: left;
                    width: 686rpx;
                    margin: 0 auto 0;
                    overflow: auto;
                    .slView{
                        margin-bottom: 10rpx;
                        // padding: 22rpx 32rpx 32rpx;
                        border-radius: 20rpx;
                        background: #fff;
                        box-shadow: 0rpx 0rpx 62rpx 0rpx rgba(255,239,223,0.5);
                        .slvTop{
                            display: flex;
                            align-items: center;
                            padding-top: 22rpx;
                            padding-bottom: 22rpx;
                            border-bottom: 2rpx solid #ECECEC;
                            .slvCover{
                                width: 156rpx;
                                height: 156rpx;
                                border-radius: 78rpx;
                                overflow: hidden;
                                position: relative;
                                margin-left: 32rpx;
                                .slvcImg{
                                    width: 156rpx;
                                    height: 156rpx;
                                }
                                .slvcPlay{
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
                            .slvMain{
                                width: 320rpx;
                                height: 156rpx;
                                display: flex;
                                justify-content: space-between;
                                margin-left: 20rpx;
                                flex-direction: column;
                                .slvmTit{
                                    font-size: 24rpx;
                                    font-weight: 800;
                                }
                                .slvmTxt{
                                    color: #000000;
                                    font-size: 20rpx;
                                }
                                .slvmTxt1{
                                    .price{
                                        font-size: 28rpx;
                                        color: #FB3758;
                                        font-weight: 800;
                                    }
                                    .orPrice{
                                        text-decoration: line-through;
                                        font-size: 20rpx;
                                        color: rgba(153,153,153,0.6);
                                        margin-left: 10rpx;
                                    }
                                }
                            }
                            .slvBtn{
                                white-space:nowrap;
                                margin-left: auto;
                                padding: 0 10rpx;
                                height: 48rpx;
                                line-height: 48rpx;
                                text-align: center;
                                border-radius: 8rpx;
                                
                                color: #fff;
                                font-size: 28rpx;
                                margin-right: 32rpx;
                            }
                            .status1{
                                background: #FFA14A;
                            }
                            .status2{
                                background: #18b566;
                            }
                            .status3{
                                background: #dd6161;
                            }
                        }
                    }
                }
            }
            .btn{
                display: inline-block;
                margin: 32rpx auto 0;
                border-radius: 48rpx;
                padding: 20rpx 76rpx;
                color: #FFFFFF;
                font-size: 40rpx;
                font-weight: 800;
                border: 4rpx solid #FFA14A;
                background: linear-gradient( 92deg, #FFD0A4 0%, #FAB06C 33%, #FAB06C 73%, #FFC996 100%);
            }
        }
        .jian{
            padding-bottom: 42rpx;
            border-radius: 20rpx;
            box-shadow: inset 0 0 20rpx #EDC8A5;
        }
        .bot{
            margin-top: -20rpx;
            position: fixed;
            width: 100vw;
            height: 684rpx;
            background: #FFFFFF;
            border-radius: 20rpx 20rpx 0 0 ;
            text-align: center;
            .bTit{
                font-size: 24rpx;
                font-weight: 500;
                margin-top: 32rpx;
            }
            .bBtn{
                display: inline-block;
                margin: 38rpx auto 32rpx;
                border-radius: 58rpx;
                padding: 20rpx 76rpx;
                border: 4rpx solid #FEB26C;
                text{
                    background: linear-gradient(43.53120893660711deg, #FFD3AA 0%, rgba(216,113,73,0.5) 100%);
                    font-size: 40rpx;
                    font-weight: 800;
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                }
            }
            .bUl{
                display: flex;
                .buLi{
                    margin: auto;
                    image{
                        width: 100rpx;
                        height: 100rpx;
                    }
                    .bulTxt{
                        font-size: 24rpx;
                        font-weight: 500;
                    }
                }
            }
        }
    }
</style>