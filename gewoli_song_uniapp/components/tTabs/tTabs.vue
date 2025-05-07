<template>
    <view class="tab">
        <scroll-view class="scroll-view_H" scroll-x="true" :style="{width:tWidth}+'px'" >
            <view class="tab" v-for="(item,index) in tabList" :key="index" :class="{ active: index==activeIndex}" @click="changeAIndex(index)">
                <view>{{item.tName||item.typeName}}</view>
                <image v-if="index==activeIndex" src="@/static/icon/aTab.png"></image>
            </view>
        </scroll-view>
    </view>
</template>

<script>
    export default {
        props: {
            tWidth:{
                type: Number,
                default: 100
            },
        	tabList: {
        		type: Array,
        		default: ()=>{
        		    return [
                        {
                            tName:'在售歌单',
                            type:1,
                        },
                        {
                            tName:'热歌榜',
                            type:2,
                        },
                        {
                            tName:'新歌榜',
                            type:3,
                        }
                    ];
        		}
        	}
        },
        data(){
            return {
                activeIndex:0
            }
        },
    	methods: {
            changeAIndex(index){
                this.activeIndex = index
                //返回父组件带参
                
                this.$emit('changeTab',index)
            }
    	}
    }
</script>

<style lang="scss" scoped>
    .scroll-view_H{
        white-space: nowrap;
        // width: 50vw;
    }
    .tab{
        font-size: 26rpx;
        color: #999;
        margin-right: 20rpx;
        line-height: 48rpx;
        position: relative;
        display: inline-block;
        image{
            position: absolute;
            left: 0;
            right: 0;
            margin: auto;
            width: 32rpx;
            height: 20rpx;
        }
    }
    .active{
        font-size: 30rpx;
        color: #191919;
    }
</style>