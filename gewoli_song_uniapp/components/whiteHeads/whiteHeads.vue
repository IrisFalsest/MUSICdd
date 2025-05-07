<template>
    <view class="">
        <!-- logo/头 -->
        <view class="head" v-if="haveJian" :style="{paddingTop: titleHeight+'px'}"></view>
        <view class="p">
            <view class="title" :style="{paddingTop: titleHeight+'px',color:color}">
                <image v-if="haveLogo" src="@/static/logo.png"></image>
                <u-icon v-if="haveBack" @click="toBack()" class="icon" name="arrow-left"></u-icon>
                <view>{{title}}</view>
            </view>
            <view class="jian" :style="{paddingTop: titleHeight+'px',opacity:sTop/100}"></view>
        </view>
    </view>
</template>

<script>
    export default {
        props: {
        	title: {
        		type: String,
        		default: ""
        	},
            sTop:{
                type: Number,
                default: 0
            },
            haveLogo:{
                type:Boolean,
                default:false
            },
            haveJian:{
                type:Boolean,
                default:true
            },
            haveBack:{
                type:Boolean,
                default:false
            }
        },
        computed: {
            titleHeight: function () {
                return getApp().globalData.titleHeight
            }
        },
        data(){
            return{
                color:"#fff"
            }
        },
        watch:{
            sTop(val){
                if(val>50){
                    this.color = '#000'
                }else{
                    this.color = '#fff'
                }
            }
        },
    	methods: {
    
    	}
    }
</script>

<style lang="scss" scoped>
    .head{
        width: 100vw;
        height: 72rpx;
        box-sizing: content-box;
    }
    .p{
        position: fixed;
        top: 0;
        z-index: 999;
    }
    .title{
        display: flex;
        align-content: center;
        justify-content: center;
        position: relative;
        width: 100vw;
        font-size: 40rpx;
        font-weight: 400;
        z-index: 2;
        image,.icon{
            position: absolute;
            width: 72rpx;
            height: 72rpx;
            left: 52rpx;
        }
        view{
            height: 72rpx
        }
    }
    .jian{
        position: fixed;
        top: 0;
        background: #fff;
        width: 100vw;
        height: 72rpx;
        box-sizing: content-box;
        box-shadow: 0 0 10rpx #EDC7A7;
    }
</style>