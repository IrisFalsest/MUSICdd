<template>
    <view class="content">
        <view class="title" :style="{paddingTop: titleHeight+'px'}">
            <u-icon @click="toBack()" name="arrow-left"></u-icon>
            <image class="icon" src="@/static/icon/sing_icon.png"></image>
        </view>
        <view class="pTit">您好</view>
        <view class="pTxt">欢迎留下意见/建议</view>
        
        <view class="sings">
            <view class="jian">
                <view class="formView">
                    <view class="fvTop">
                        <image src="@/static/icon/upuser_3.png"></image>
                        <view>手机号码</view>
                    </view>
                    <view class="fvBot">
                        <input v-model="form.phoneNumber" placeholder="请输入手机号码" />
                    </view>
                </view>
                <view class="formView">
                    <view class="fvTop">
                        <image src="@/static/icon/upuser_4.png"></image>
                        <view>建议内容</view>
                    </view>
                    <view class="fvBot ">
                        <textarea v-model="form.content" placeholder="请输入备注" cols="30" rows="10"></textarea>
                    </view>
                </view>
            
                <view class="formSubmit" @click="submit">确定</view>
                
                <!-- 协议 -->
                <view class="clause">
                    <u-checkbox-group @change="checkboxGroupChange">
                        <u-checkbox 
                            @change="checkboxChange" 
                            v-model="item.checked" 
                            v-for="(item, index) in list" :key="index" 
                            shape="circle"
                            active-color="#E9C19C"
                        >
                        <text class="txt1">我已阅读并同意</text>
                        </u-checkbox>
                    </u-checkbox-group>
                    <text class="txt2">《用户协议》</text>
                    <text>和</text>
                    <text class="txt2">《隐私协议》</text>
                </view>
            </view>
        </view>
        
    </view>
</template>

<script>
    export default {
    	data() {
    		return {
    		    list: [
    		        {
    		            checked: false,
    		            disabled: false
    		        }
    		    ],
                form:{
                    phoneNumber:'15080976915',
                    content:'',
                },
    		}
    	},
        computed: {
            titleHeight: function () {
                return getApp().globalData.titleHeight
            },
            userInfo:()=>{
                return uni.getStorageSync('userInfo')
            }
        },
    	onLoad() {
            
    	},
    	methods: {
            submit(){
                if(this.validate()){
                    let postData = JSON.parse(JSON.stringify(this.form))
                    postData.userId	= this.userInfo.id
                    
                    this.$req.post('system/records',postData).then(res=>{
                        if(res.code==200){
                            uni.showToast({
                                title:'提交成功！',
                                icon:'none',
                                success:()=>{
                                    setTimeout(()=>{
                                        uni.navigateBack()
                                    },1000)
                                }
                            })
                        }else{
                            uni.showToast({
                                title:'请求失败!请稍后重试！',
                                icon:'none',
                            })
                        }
                    })
                }
            },
            validate(){
                let flag = true //true验证通过 false失败
                let showTxt = ''
                let {form} = this 
                
                //非空
                if(!form.content){
                    showTxt = '建议内容不能为空哦！'
                    flag = false
                }
                if(form.phoneNumber.length!=11&&form.phoneNumber.length!=6){
                    showTxt = '手机号输入有误！'
                    flag = false
                }
                
                if(!flag){
                    uni.showToast({
                        title:showTxt,
                        icon:'none'
                    })
                }
                
                return flag
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
        .pTit{
            margin-top: 105rpx;
            text-indent: 64rpx;
            font-size: 40rpx;
            color: #231815;
            font-weight: 800;
        }
        .pTxt{
            margin-top: 30rpx;
            text-indent: 64rpx;
            font-size: 40rpx;
            color: #231815;
            font-weight: 800;
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
            .jian{
                padding: 60rpx 64rpx;
                border-radius: 20rpx;
                box-shadow: inset 0 0 20rpx #EDC8A5;
                .formView{
                    margin-bottom: 42rpx;
                    .fvTop{
                        display: flex;
                        align-items: center;
                        font-size: 32rpx;
                        font-weight: 500;
                        color: #231815;
                        image{
                            margin-right: 16rpx;
                            width: 48rpx;
                            height: 48rpx;
                        }
                    }
                    .fvBot{
                        width: 100%;
                        padding: 10rpx 0;
                        input{
                            font-size: 24rpx;
                            width: 100%;
                            border-bottom: 2rpx solid #999;
                        }
                    }
                }
                .formView:last-child{
                    margin-bottom: 0;
                }
                .formSubmit{
                    height: 96rpx;
                    line-height: 96rpx;
                    text-align: center;
                    font-size: 40rpx;
                    font-weight: 800;
                    color: #FFFFFF;
                    border: 4rpx solid #FEA14A;
                    border-radius: 58rpx;
                    background: linear-gradient( 92deg, #FFD0A4 0%, #FAB06C 33%, #FAB06C 73%, #FFC996 100%);
                }
            }
        }
        .clause{
            margin: 80rpx auto 0;
            display: flex;
            justify-content: center;
            align-items: center;
            .txt1{
                font-size: 24rpx;
            }
            text{
                font-size: 24rpx;
            }
            .txt2{
                color: #E9C19C;
            }
        }
    }
</style>