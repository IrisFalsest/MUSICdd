<template>
	<view>
		<view class="items">
			<view class="" style="height: 10rpx;"></view>
			<view class="items-list" v-for="(item,i) in myAdressList" :key="i" @click="tapAdd(item)">
				<view class="items-list-left">
					<view class="items-list-left-top">
						<view class="">
							<text v-if="item.isDefault" class="moren">默认</text>
                            <text class="saf">{{item.provinceState}}{{item.city}}{{item.area}}{{item.addressLine}}</text>
						</view>
					</view>
					<view class="items-list-left-right">
						<view class="items-list-left-right-one">
							{{item.recipientName}}
						</view>
						<view class="items-list-left-right-two">
							{{item.phoneNumber}}
						</view>
					</view>
				</view>
				<view class="items-list-right" @click.stop="upAdd(item)">
                    <image class="imagsssss" src="@/static/icon/edit.png" mode=""></image>
				</view>
			</view>
            <view class="baocun" @click="toUrl('/pages/address/edidAdress')">添加地址</view>
        </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
                take:false,//true从确认订单页过来选地址的 false个人中心进来
				myAdressList: []
			}
		},
		onLoad({take}) {
            this.take = take
		},
        onShow() {
            this.init()
        },
		methods: {
            tapAdd(item){
                if(!this.take){
                    //带参修改
                    console.log(item);
                    this.upAdd(item)
                }else{
                    //拿上地址id跳回确认订单页
                    var pages = getCurrentPages();
                    var prevPage = pages[pages.length - 2]; //上一个页面
                    prevPage.setData({
                    	addressObj: item
                    })
                    uni.navigateBack({
                    	delta: 1
                    });
                    // uni.$emit('returnData', item)
                    // uni.navigateBack({
                    //     delta: 1
                    // })
                }
            },
            init(){
                this.$req.get('userAddress/acquisitionUserAddress',{userId:uni.getStorageSync('userInfo').id}).then(res=>{
                    this.myAdressList = res.data
                })
            },
            upAdd(item){
                let addData = {}
                addData.id = item.id
                addData.add = `${item.provinceState},${item.city},${item.area}`
                addData.address = item.addressLine
                addData.value = item.sex==0?'先生':'女士'
                addData.phoneNumber = item.phoneNumber
                addData.recipientName = item.recipientName
                addData.isDefault = item.isDefault?true:false
                this.toUrl(`/pages/address/edidAdress?dataObj=${JSON.stringify(addData)}?take=${this.take}`)
            }
		}
	}
</script>

<style lang="scss" scoped>
	.imagsssss{
		width: 28rpx;
		height: 28rpx;
	}
	.saf {
        // width: 400rpx;
        overflow: hidden;
		// text-indent: 30rpx;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
	}
.safas{
	width: 20rpx;
	color: white;
}
	.moren {
		width: 60rpx;
		height: 60rpx;
		border-radius: 8rpx;
		background: var(--btn-bg);
		text-align: center;
		font-size: 25rpx;
		// line-height: 32rpx;
		border: 1px solid (--btn-bg);
		padding: 0 10rpx 0 10rpx;
		color: var(--btn-color);
		// margin-top: 20rpx;
	}

	.items {
		width: 100%;
		height: 100vh;
		background: #F7F7F7;
	}

	.items-list {
		width: 712rpx;
		// height: 212rpx;
		margin: auto;
		border-radius: 16rpx;
		// border: 1px solid red;
		margin-top: 20rpx;
		padding: 30rpx;
		background: white;
		display: flex;

		.items-list-left {
			width: 560rpx;
			// height: 172rpx;
			// border: 1px solid red;

			.items-list-left-top {
				font-size: 32rpx;
				font-weight: bold;
				margin-top: 10rpx;
				// display: flex;
			}

			.items-list-left-right {
				display: flex;
				height: 40rpx;
				margin-top: 35rpx;
				// border: 1px solid red;
				align-items: center;

				.items-list-left-right-one {
					font-size: 24rpx;

				}

				.items-list-left-right-two {
					font-size: 24rpx;
					margin-left: 20rpx;
				}
			}
		}

		.items-list-right {
 display: flex;
 align-items: center;
 
 justify-content: flex-end;
			width: 100rpx;
			height: 172rpx;
			// border: 1px solid red;

		}
	}
    .baocun {
        width: 686rpx;
        height: 96rpx;
        line-height: 96rpx;
        text-align: center;
        border: 4rpx solid #FE8414;
        color: #fff;
        font-size: 32rpx;
        font-weight: 800;
        background: linear-gradient( 92deg, #FFD0A4 0%, #FAB06C 33%, #FAB06C 73%, #FFC996 100%);
        border-radius: 48rpx;
    	margin: auto;
    	margin-top: 100rpx;
    }
</style>