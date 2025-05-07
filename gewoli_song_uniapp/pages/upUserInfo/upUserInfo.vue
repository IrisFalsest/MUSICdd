<template>
	<view class="content">
		<view class="title" :style="{ paddingTop: titleHeight + 'px' }">
			<u-icon @click="toBack()" name="arrow-left"></u-icon>
			<image class="icon" src="@/static/icon/sing_icon.png"></image>
		</view>
		<view class="pTit">您好，{{ loginType == '2' ? '音乐人' : '制作人' }}</view>
		<view class="pTxt">请完善个人信息</view>

		<view class="sings">
			<view class="jian">
				<view class="formView">
					<view class="fvTop">
						<image src="@/static/icon/upuser_1.png"></image>
						<view>姓名</view>
					</view>
					<view class="fvBot">
						<input v-model="form.name" placeholder="请输入姓名" />
					</view>
				</view>
				<!-- <view class="formView">
                    <view class="fvTop">
                        <image src="@/static/icon/singer2.png"></image>
                        <view>头像</view>
                    </view>
                    <view class="fvBot">
                        <view style="background: #fff;"><uni-file-picker @select="select" :limit='1'></uni-file-picker></view>
                    </view>
                </view> -->
				<view class="formView">
					<view class="fvTop">
						<image src="@/static/icon/upuser_2.png"></image>
						<view>身份证号</view>
					</view>
					<view class="fvBot">
						<input v-model="form.cardNo" placeholder="请输入身份证号" />
					</view>
				</view>
				<view class="formView">
					<view class="fvTop">
						<image src="@/static/icon/upuser_3.png"></image>
						<view>手机号码</view>
					</view>
					<view class="fvBot">
						<input v-model="form.reviewPhone" placeholder="请输入手机号码" />
					</view>
				</view>
				<view class="formView">
					<view class="fvTop">
						<image src="@/static/icon/upuser_4.png"></image>
						<view>备注</view>
					</view>
					<view class="fvBot">
						<input v-model="form.remark" placeholder="请输入备注" />
					</view>
				</view>
				<view class="formView">
					<view class="fvTop">
						<image src="@/static/icon/edit_s_name.png"></image>
						<view>艺名</view>
					</view>
					<view class="fvBot">
						<input v-model="form.stageName" placeholder="请输入艺名" />
					</view>
				</view>
				<view class="formView">
					<view class="fvTop">
						<image src="@/static/icon/sex.png"></image>
						<view>性别</view>
					</view>
					<view class="fvBot">
						<!-- 			        <input v-model="form.remark" placeholder="请输入性别" /> -->
						<u-radio-group v-model="form.sex">
							<u-radio name="1">男</u-radio>
							<u-radio name="2">女</u-radio>
						</u-radio-group>
					</view>
				</view>
				<view class="formView">
					<view class="fvTop">
						<image src="@/static/icon/work_address.png"></image>
						<view>工作单位</view>
					</view>
					<view class="fvBot">
						<input v-model="form.workUnit" placeholder="请输入工作单位" />
					</view>
				</view>
				<view class="formView">
					<view class="fvTop">
						<image src="@/static/icon/edit_declaration.png"></image>
						<view>参赛宣言</view>
					</view>
					<view class="fvBot">
						<input v-model="form.entryDeclaration" placeholder="请输入参赛宣言" />
					</view>
				</view>
				<view class="formView">
					<view class="fvTop">
						<image src="@/static/icon/zone.png"></image>
						<view>比赛赛区</view>
					</view>
					<view class="fvBot">
						<input :disabled="true" v-model="form.competitionZone" placeholder="请输入比赛赛区" @click="pickerShow = true" />
						<u-picker @confirm="takeAdd" mode="region" v-model="pickerShow"></u-picker>
					</view>
				</view>
				<view class="formView">
					<view class="fvTop">
						<image src="@/static/icon/birthday.png"></image>
						<view>出生年月</view>
					</view>
					<view class="fvBot">
						<input @click="calendarShow = true" v-model="form.birthDate" placeholder="请输入出生年月" disabled="true" />
						<!-- <view @clic k="calendarShow = true">请输入出生年月</view>  -->
					</view>
				</view>
				<view class="formView">
					<view class="fvTop">
						<image src="@/static/icon/addImg.png"></image>
						<view>上传照片</view>
					</view>
					<view class="fvBot">
						<u-upload max-count="1" ref="uUpload" :header="header" :name="name" :action="action" :file-list="fileList" @on-success="imageUploadSuccess"></u-upload>
					</view>
				</view>

				<view class="formSubmit" @click="submit">确定</view>

				<u-calendar v-model="calendarShow" mode="date" @change="calendarChange"></u-calendar>

				<!-- 协议 -->
				<view class="clause">
					<u-checkbox-group @change="checkboxGroupChange">
						<u-checkbox @change="checkboxChange" v-model="item.checked" v-for="(item, index) in list" :key="index" shape="circle" active-color="#E9C19C">
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
import { userInfo } from 'os';
import { BASEURL } from '@/common/configure.js';
export default {
	data() {
		return {
			list: [
				{
					checked: false,
					disabled: false
				}
			],
			form: {
				birthDate: '',
				cardNo: '',
				competitionZone: '',
				entryDeclaration: '',
				name: '',
				participatingPhoto: '',
				remark: '',
				reviewPhone: '',
				sex: 0,
				stageName: '',
				workUnit: ''
			},
			loginType: 0,
			calendarShow: false,
			action: BASEURL + '/file/ossUpload?type=1',
			header: {
				Authorization: 'Bearer ' + uni.getStorageSync('token') || ''
			},
			name: 'file',
			twoElementsFlag: false,
			twoElementsText: '',
			pickerShow: false
		};
	},
	computed: {
		titleHeight: function () {
			return getApp().globalData.titleHeight;
		},
		userInfo: () => {
			return uni.getStorageSync('userInfo');
		}
	},
	onLoad({ loginType }) {
		this.loginType = loginType;
	},
	methods: {
		takeAdd(e) {
			this.form.competitionZone = `${e.province.label},${e.city.label},${e.area.label}`;
		},
		twoElements() {
			let data = {
				cardNo: this.form.cardNo,
				name: this.form.name
			};
			this.$req.post('user/auth', data).then((res) => {});
		},
		imageUploadSuccess(e) {
			this.form.participatingPhoto = e.msg;
		},
		calendarChange(e) {
			console.log(e);
			this.form.birthDate = e.result;
		},
		async submit() {
			if (!this.validate()) return false;

			this.form.id = uni.getStorageSync('userInfo').id;
			let { form } = this;
			let url = 'user/musiciansSubmit'; // 音乐人
			if (this.loginType == '3') {
				url = 'user/producerSubmit'; // 制作人
			}

			let data = {
				name: form.name,
				cardNo: form.idCard
			};

			let authdata = {
				cardNo: this.form.cardNo,
				name: this.form.name
			};
			this.$req.post('user/auth', authdata).then((res) => {
				if (res.data.msg == '身份证号和姓名一致') {
					this.$req.post(url, this.form).then((res) => {
						if (res.code == 200) {
							uni.showToast({
								title: '提交成功！',
								icon: 'none'
							});
							setTimeout(() => {
								uni.navigateBack();
							}, 1000);
						} else {
							uni.showToast({
								title: '请求失败!请稍后重试！',
								icon: 'none'
							});
						}
					});
				}
				uni.showToast({
					title: res.data.msg,
					icon: 'none'
				});
			});
		},
		validate() {
			let flag = true; //true验证通过 false失败
			let showTxt = '';
			let { form } = this;

			// 非空检查
			if (
				!form.birthDate ||
				!form.cardNo ||
				!form.competitionZone ||
				!form.entryDeclaration ||
				!form.name ||
				!form.participatingPhoto ||
				!form.remark ||
				!form.reviewPhone ||
				!form.sex ||
				!form.stageName ||
				!form.workUnit
			) {
				showTxt = '请完善信息';
				flag = false;
				console.log(this.form);
			}

			if (!flag) {
				uni.showToast({
					title: showTxt,
					icon: 'none'
				});
			}
			return flag;
		}
	}
};
</script>

<style lang="scss" scoped>
.content {
	width: 100vw;
	height: 100vh;
	overflow: auto;
	background: url('https://image-file2024.oss-cn-beijing.aliyuncs.com/geWoLiMusicMall/backgroundImage/image5.jpg');
	background-size: 100% 100%;
	.title {
		line-height: 70rpx;
		font-size: 36rpx;
		margin-left: 36rpx;
		position: relative;
	}
	.pTit {
		margin-top: 105rpx;
		text-indent: 64rpx;
		font-size: 40rpx;
		color: #231815;
		font-weight: 800;
	}
	.pTxt {
		margin-top: 30rpx;
		text-indent: 64rpx;
		font-size: 40rpx;
		color: #231815;
		font-weight: 800;
	}
	.icon {
		width: 378rpx;
		height: 322rpx;
		position: absolute;
		right: 20rpx;
		top: 50rpx;
	}
	.sings {
		margin-top: 32rpx;
		border-radius: 20rpx;
		border: 4rpx solid #ffffff;
		background: linear-gradient(180deg, rgba(255, 255, 255, 0.67) 0%, rgba(255, 255, 255, 0.56) 100%);
		box-shadow: 0 0 20rpx #fff;
		.jian {
			padding: 60rpx 64rpx;
			border-radius: 20rpx;
			box-shadow: inset 0 0 20rpx #edc8a5;
			.formView {
				margin-bottom: 42rpx;
				.fvTop {
					display: flex;
					align-items: center;
					font-size: 32rpx;
					font-weight: 500;
					color: #231815;
					image {
						margin-right: 16rpx;
						width: 48rpx;
						height: 48rpx;
					}
				}
				.fvBot {
					width: 100%;
					padding: 10rpx 0;
					input {
						font-size: 24rpx;
						width: 100%;
						border-bottom: 2rpx solid #999;
					}
				}
			}
			.formView:last-child {
				margin-bottom: 0;
			}
			.formSubmit {
				height: 96rpx;
				line-height: 96rpx;
				text-align: center;
				font-size: 40rpx;
				font-weight: 800;
				color: #ffffff;
				border: 4rpx solid #fea14a;
				border-radius: 58rpx;
				background: linear-gradient(92deg, #ffd0a4 0%, #fab06c 33%, #fab06c 73%, #ffc996 100%);
			}
		}
	}
	.clause {
		margin: 80rpx auto 0;
		display: flex;
		justify-content: center;
		align-items: center;
		.txt1 {
			font-size: 24rpx;
		}
		text {
			font-size: 24rpx;
		}
		.txt2 {
			color: #e9c19c;
		}
	}
}
</style>
