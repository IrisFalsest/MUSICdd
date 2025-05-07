<template>
	<view class="cantal">
		<u-toast ref="uToast" />
		<u-form :model="form" ref="uForm">
			<view class="safSG">

			</view>
			<view class="top">
				<u-form-item label-width='120' label="联系人" prop="recipientName">
					<view class="wisf">
						<view class="viewwidths">
							<u-input placeholder="请输入联系人" v-model="form.recipientName" />
						</view>
                        <!-- 性别 -->
						<!-- <u-radio-group active-color='#FE8414' v-model="form.value" @change="radioGroupChange">
							<u-radio icon-size="20" shape="circle" @change="radioChange"
								v-for="(item, index) in list" :key="index" :name="item.name" :disabled="item.disabled">
								{{item.name}}
							</u-radio>
						</u-radio-group> -->
					</view>
				</u-form-item>
				<u-form-item prop="phoneNumber" label-width='120' label="手机号码">
                    <u-input placeholder="请输入手机号" v-model="form.phoneNumber" />
                </u-form-item>
				<u-form-item label-width='120' label="所在地区">
                    <u-input @click='show=true' placeholder="请选择地址" v-model="form.add" disabled="" />
                    <u-picker @confirm='takeAdd' mode="region" v-model="show"></u-picker>
                </u-form-item>
				<u-form-item prop="address" label-width='120' label="详细地址" style="position: relative;">
                    <u-input  placeholder="详细地址" v-model="form.address"   />
                </u-form-item>
			</view>
			<view class="center">
				<view class="center-left">
					默认地址
				</view>
				<view class="center-right">
					<u-switch active-color="#FE8414" v-model="form.isDefault"></u-switch>

				</view>
			</view>
			<view class="baocun" @click="baocuns">
				保存地址
			</view>
		</u-form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
                isUpd:false,//true修改 false增加
                show:false,
				rules: {
					recipientName: [{
						required: true,
						message: '请输入联系人',
						// 可以单个或者同时写两个触发验证方式 
						trigger: ['change', 'blur'],
					}],
					phoneNumber: [{
						required: true,
						message: '请输入手机号码',
						// 可以单个或者同时写两个触发验证方式 
						trigger: ['change', 'blur'],
					}],
					address: [{
						required: true,
						message: '请输入详细地址',
						// 可以单个或者同时写两个触发验证方式 
						trigger: ['change', 'blur'],
					}],
				},
				list: [{
						name: '先生',
						disabled: false
					},
					{
						name: '女士',
						disabled: false
					}
				],
				form: {
                    isDefault: false,
                    recipientName:'',
                    address:'',
                    phoneNumber:'',
                    label:'',
                    add:''
				},
			}
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		onLoad({dataObj}) {
            if(dataObj){
                uni.setNavigationBarTitle({
                    title: '编辑地址'
                });
                let obj = JSON.parse(dataObj)
                this.form = obj
                this.isUpd = true
            }else{
                uni.setNavigationBarTitle({
                    title: '添加地址'
                });
            }
		},
		methods: {
            takeAdd(e){
                this.form.add = `${e.province.label},${e.city.label},${e.area.label}`
                
            },
            add(){
                let postData = {}
                let arr = this.form.add.split(',')
                postData.addressLine = this.form.address
                postData.provinceState = arr[0]
                postData.city = arr[1]
                postData.area = arr[2]
                postData.recipientName = this.form.recipientName
                postData.phoneNumber = this.form.phoneNumber
                postData.isDefault = this.form.isDefault?1:0
                postData.userId = uni.getStorageSync('userInfo').id
                if(!this.isUpd){
                    //添加
                    this.$req.put('userAddress/addUserAddress',postData,'form').then(res=>{
                        uni.showToast({
                            title:res.message,
                            icon:'none'
                        })
                        setTimeout(()=>{
                            uni.navigateBack()
                        },2000)
                    })
                }else{
                    //修改
                    postData.id = this.form.id
                    this.$req.post('userAddress/modifyUserAddress',postData,'form').then(res=>{
                        uni.showToast({
                            title:res.msg,
                            icon:'none'
                        })
                        setTimeout(()=>{
                            uni.navigateBack()
                        },2000)
                    })
                }
            },
			baocuns() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
                        if(this.form.add){
                            this.add()
                        }
					} else {
						console.log('验证失败');
					}
				});
			},
			radioGroupChange(e) {
				console.log(e);

			},
			radioChange(e) {
				console.log(e);
			},
		}
	}
</script>

<style lang="scss">
	.safSG {
		height: 20rpx;
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
		margin: auto;
		margin-top: 100rpx;
	}

	.center {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 20rpx;
		padding: 20rpx 40rpx 20rpx 40rpx;
		background: white;
		height: 100rpx;

		// border: 1px solid red;

		.center-left {
			color: #333333;
			font-size: 28rpx;
		}
	}

	.top {
		// margin-top: 20rpx;
		padding: 20rpx 40rpx 20rpx 40rpx;
		background: white;

		// border: 1px solid red;
	}

	.wisf {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.cantal {
		// padding: 0 40rpx 0 40rpx;
		height: 100vh;
		background: #F7F7F7;
	}

	.viewwidths {
		width: 300rpx;
		// border: 1px solid red;
	}
</style>