<template>
	<view class="content" @scroll='scrollMain'>
        <!-- heads -->
        <heads class="head" :sTop='scrollTop' :title='"录音棚"'></heads>
        
        <!-- 搜索 -->
        <view class="tabView">
            <u-search @change='search' v-model="searchTxt" :style="{width: 686+'rpx'}" placeholder="请输入编号或名称" shape="round" :clearabled="true" :show-action='false'></u-search>
        </view>
        
        <!-- 搜索列表 -->
        <view class="recordingList" v-if="isSearch" :style="{height: listHeight+'px'}">
            <template v-if="searchList.length>0">
                <view class="rLi" v-for="(item,index) in list" :key="index" @click="toDetalis(item.id)">
                    <image class="rlLeft" :src="item.coverPhotoUrl||'../../../static/logo.png'"></image>
                    <view class="rlRight">
                        <view class="rlrTop">
                            <text>{{item.studioName}}</text>
                            <view class="rlrtRight">
                                <image src="@/static/sing/hot_0.png"></image>
                                {{item.studioHeat}}
                            </view>
                        </view>
                        
                        <view class="rlrTxt">
                            {{item.studioArea}}㎡ | {{item.facing}}
                        </view>
                        
                        <view class="rlrTags">
                            <view class="rTag" v-for="(v,i) in labelFun(item.studioLabel)">{{v}}</view>
                        </view>
                        
                        <view class="rlrAddress">
                            <image src="@/static/icon/addrees.png"></image>
                            <text>{{item.studioAddress}}</text>
                        </view>
                        
                        <view class="rlrPrice">
                            <text class="red rTxt1">￥</text>
                            <text class="red rTxt2">{{item.currentPrice}}</text>
                            <text class="blak rTxt3">￥</text>
                            <text class="blak rTxt3">{{item.originalPrice}}</text>
                        </view>
                    </view>
                </view>
            </template>
            <template v-if="searchList.length==0">
                <view style="padding-top: 20vh;">
                    <u-empty text="没有搜索到录音棚" mode="list"></u-empty>
                </view>
            </template>
        </view>
        
        <!-- 列表 -->
        <view class="recordingList" v-if="!isSearch" :style="{height: listHeight+'px'}">
            <view class="rLi" v-for="(item,index) in list" :key="index" @click="toDetalis(item.id)">
                <image class="rlLeft" :src="item.coverPhotoUrl||'../../../static/logo.png'"></image>
                <view class="rlRight">
                    <view class="rlrTop">
                        <text>{{item.studioName}}</text>
                        <view class="rlrtRight">
                            <image src="@/static/sing/hot_0.png"></image>
                            {{item.studioHeat}}
                        </view>
                    </view>
                    
                    <view class="rlrTxt">
                        {{item.studioArea}}㎡ | {{item.facing}}
                    </view>
                    
                    <view class="rlrTags">
                        <view class="rTag" v-for="(v,i) in labelFun(item.studioLabel)">{{v}}</view>
                    </view>
                    
                    <view class="rlrAddress">
                        <image src="@/static/icon/addrees.png"></image>
                        <text>{{item.studioAddress}}</text>
                    </view>
                    
                    <view class="rlrPrice">
                        <text class="red rTxt1">￥</text>
                        <text class="red rTxt2">{{item.currentPrice}}</text>
                        <text class="blak rTxt3">￥</text>
                        <text class="blak rTxt3">{{item.originalPrice}}</text>
                    </view>
                </view>
            </view>
            
        </view>
        
        <!-- tabbar -->
        <u-tabbar :list="tabbar" :mid-button="true" height='58px' active-color='#FFD3AA'></u-tabbar>
    </view>
</template>

<script>
	export default {
		data() {
			return {
                timerId:null,//搜索函数防抖
                searchTxt:'',
                isSearch:false,
                searchList:[],
                scrollTop:0,
                windowHeight:0,
                headHeight:0,
                tabViewHeight:0,
                list:[]
			}
		},
        computed: {
            listHeight: function () {
                let num = this.windowHeight - this.headHeight - this.tabViewHeight - 50
                return num.toFixed(2)
            },
            tabbar: function () {
                return getApp().globalData.tabbar
            }
            
        },
		onLoad() {
            this.getList()
            
            uni.getSystemInfo({
              success: (res=> {
                this.windowHeight = res.windowHeight; // 窗口高度
              })
            });
            
            const query = uni.createSelectorQuery().in(this);
                  
            query.select('.head').boundingClientRect(data => {
                if (data) {
                  this.headHeight = data.height
                }
            }).exec();
            
            query.select('.tabView').boundingClientRect(data => {
                if (data) {
                    this.tabViewHeight = data.height
                }
            }).exec(); // 执行查询
            
		},
		methods: {
            //搜索
            search(){
                clearTimeout(this.timerId)
                this.timerId = setTimeout(() => {
                    if(this.searchTxt){
                        this.isSearch = true
                        this.$req.get('system/song/list',{songName:this.searchTxt}).then(res=>{
                            this.searchList = res.rows
                        })
                    }else{
                        this.isSearch = false
                    }
                },500)
            },
            toDetalis(id){
                uni.navigateTo({
                    url:'/pages/tabbar/recording/details?id='+id
                })
            },
            getList(){
                this.$req.get('system/studio/list').then(res=>{
                    this.list = res.rows
                })
            },
            labelFun(e){
                return e.split(',')
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
    .tabView{
        width: 686rpx;
        margin: 40rpx auto 32rpx;
        color: #999;
        display: flex;
        align-items: center;
    }
    .recordingList{
        width: 686rpx;
        margin: 0 auto 0;
        overflow: auto;
        .rLi{
            border-radius: 40rpx;
            overflow: hidden;
            display: flex;
            margin-bottom: 20rpx;
            background: #fff;
            box-shadow: 0rpx 0rpx 62rpx 0rpx rgba(255,239,223,0.5);
            .rlLeft{
                width: 250rpx;
                height: 242rpx;
            }
            .rlRight{
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                width: 436rpx;
                padding: 20rpx 40rpx 18rpx 22rpx;
                .rlrTop{
                    display: flex;
                    font-size: 24rpx;
                    font-weight: 500;
                    color: #000000;
                    .rlrtRight{
                        margin-left: auto;
                        font-size: 22rpx;
                        line-height: 44rpx;
                        color: #999999;
                        font-weight: 500;
                        image{
                            width: 31rpx;
                            height: 31rpx;
                            vertical-align: middle;
                            margin-right: 12rpx;
                        }
                    }
                }
                .rlrTxt{
                    color: #999999;
                    font-size: 20rpx;
                }
                .rlrTags{
                    display: flex;
                    .rTag{
                        margin-right: 12rpx;
                        padding: 4rpx 10rpx;
                        background: #E5E5E5;
                        border-radius: 20rpx;
                        color: #999999;
                        font-size: 20rpx;
                    }
                }
                .rlrAddress{
                    font-size: 20rpx;
                    color: #999999;
                    display: flex;
                    align-items: center;
                    image{
                        width: 36rpx;
                        height: 36rpx;
                    }
                }
                .rlrPrice{
                    .red{
                        color: #FC3758;
                        font-size: 28rpx;
                    }
                    .blak{
                        font-size: 20rpx;
                        text-decoration: line-through;
                        color: rgba(153,153,153,0.6);
                    }
                    .rTxt2{
                        display: inline-block;
                        margin-right: 5rpx;
                    }
                }
            }
        }
    }
    
    
</style>
