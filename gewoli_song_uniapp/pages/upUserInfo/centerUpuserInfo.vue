<template>
    <view class="form-wrap">
        <view class="avatar-wrap">
            <button class="avatar-wrapper" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
                <image class="avatar" :src="avatarUrlValue||'../../static/logo.png'"></image>
            </button>
        </view>
        <view class="nickname-wrap">
            <view class="title">昵称</view>
            <input type="nickname" class="weui-input" v-model="form.nickName" placeholder="请输入昵称" />
        </view>
        <u-button @click="submit">提交</u-button>
    </view>
</template>

<script>
import { BASEURL } from '@/common/configure.js';
export default {
	data() {
		return {
			form: {
				nickName: '',
                avatar: '',
			},
            avatarUrlValue:'',//头像临时路径
            changeUrl:false
		};
	},
    onLoad() {
        // 回填数据
        console.log(uni.getStorageSync('userInfo'));
        let userInfo = uni.getStorageSync('userInfo')
        this.avatarUrlValue = userInfo.avatar
        this.form.nickName = userInfo.nickName
    },
    methods:{
        onChooseAvatar(e){
            this.avatarUrlValue = e.detail.avatarUrl
            this.changeUrl = true
        },
        submit(){
            if(this.changeUrl){
                //有修改头像
                uni.uploadFile({
                    url:BASEURL+'/file/ossUpload?type=1' ,
                    filePath: this.avatarUrlValue,
                    fileType: 'image',
                    name: 'file',
                    header: {
                        "Authorization": 'Bearer '+uni.getStorageSync('token') || ''
                    },
                    success: (imgRes) => {
                        let data = JSON.parse(imgRes.data)
                        if(data.code==200){
                            this.form.avatar = data.msg
                            this.updUser()
                        }else{
                            uni.showToast({
                                title:'请求失败，请稍后充实',
                                icon:'none'
                            })
                        }
                    }
                })
            }else{
                // 没有修改头像 不上传文件
                this.updUser()
            }
        },
        updUser(){
            let putData = {
                id:uni.getStorageSync('userInfo').id,
                nickName:this.form.nickName
            }
            if(this.changeUrl){
                putData.avatar = this.form.avatar
            }
            this.$req.put('system/mobile/user',putData).then(res=>{
                console.log(res);
            })
        }
    }
};
</script>

<style scoped lang="scss">
    .form-wrap{
        width: 92vw;
        margin:  20rpx auto;
        >view{
            margin-bottom: 50rpx;
        }
        .avatar-wrap{
            margin-top: 20vh;
            .avatar-wrapper{
                image{
                    width: 150rpx;
                    height: 150rpx;
                    border-radius: 50%;
                }
            }
        }
        .title{
            // margin-bottom: 10rpx;
        }
    }
    button{
        background: 0 !important;
        border: 0 !important;
    }
    button::after{
        background: 0 !important;
        border: 0 !important;
    }
	// .nickname-wrap{
	// 	display: flex;
	// 	align-items: center;
	// 	view{
	// 		margin-right: 30rpx;
	// 	}
	// 	input{
	// 		border: 1rpx ;
	// 	}
	// }
</style>