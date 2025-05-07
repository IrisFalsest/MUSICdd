<template>
    <view class="">
        <view class="header">
            <u-tabs :list="list" active-color='#FAB06C' :is-scroll="false" :current="current" @change="change"></u-tabs>
        </view>
        <view class="jian"></view>
        
        <view class="singList" v-for="(v,i) in cList">
            <view class="slView" v-for="(item,index) in v" :key='index'>
                <view v-if="i==current" @click="doItem(item)">
                    <view class="slvTop">
                        <view class="slvCover" >
                            <image class="slvcImg" :src="item.songCoverPhotoUrl||item.carouselChart||'../../static/logo.png'"></image>
                            <image v-if="current==0" class="slvcPlay" src="@/static/icon/play.png"></image>
                        </view>
                        <view class="slvMain">
                            <view class="slvmTit">{{item.songName||item.studioName}}</view>
                            <view class="slvmTxt">
                                <text></text>{{item.studioAddress||''}}
                            </view>
                            <view class="slvmTxt1">
                                <text class="price">￥{{item.currentPrice}}</text>
                                <text class="orPrice">￥{{item.originalPrice}}</text>
                            </view>
                        </view>
                        <view class="slvBtn" @click.stop="delCollection(item,index)">取消收藏</view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
    		data() {
    			return {
                    cList:[[],[]],
    				list: [{
    					name: '歌单收藏'
    				}, {
    					name: '录音棚收藏'
    				}],
    				current: 0,
    			}
    		},
            onLoad() {
                this.getStudioCollection()
                this.getSongCollection()
            },
    		methods: {
                //跳转操作
                doItem(item){
                    if(this.current==0){
                        //跳转播放
                        this.toUrl(`/pages/play/play?item=${JSON.stringify(item)}`)
                    }else{
                        //跳转录音棚
                        uni.navigateTo({
                            url:`/pages/tabbar/recording/details?id=${item.id}`
                        })
                    }
                },
                //取消收藏
                delCollection(item,index){
                    let url;
                    let postData = {
                        userId:uni.getStorageSync('userInfo').id
                    }
                    if(this.current==0){
                        // 歌单
                        url = 'userSongCollection/deleteUserSongCollection'
                        postData.songId = item.id
                    }else{
                        //录音棚
                        url = 'userStudioCollection/deleteUserStudioCollection'
                        postData.studioId = item.id
                    }
                    
                    this.$req.post(url,postData,'form').then(res=>{
                        if(res.code==200){
                            this.cList[this.current].splice(index)
                        }
                        uni.showToast({
                            title:res.msg,
                            icon:'none'
                        })
                    })
                },
                getStudioCollection(){
                    this.$req.get('userStudioCollection/acquisitionUserStudioCollection',{userId:uni.getStorageSync('userInfo').id}).then(res=>{
                        this.$set(this.cList,1,res.data)
                        
                    })
                },
                getSongCollection(){
                    this.$req.get('userSongCollection/acquisitionUserSongCollection',{userId:uni.getStorageSync('userInfo').id}).then(res=>{
                        this.$set(this.cList,0,res.data)
                    })
                },
    			change(index) {
    				this.current = index;
    			}
    		}
    	}

</script>

<style lang="scss" scoped>
    .header{
        width: 100vw;
        position: fixed;
        height: 100rpx;
    }
    .jian{
        height: 100rpx;
    }
    .singList{
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
                    margin-left: auto;
                    padding: 0 10rpx;
                    height: 48rpx;
                    line-height: 48rpx;
                    text-align: center;
                    border-radius: 8rpx;
                    background: #FC3758;
                    color: #fff;
                    font-size: 28rpx;
                    margin-right: 32rpx;
                }
            }
            
        }
    }
</style>