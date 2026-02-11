<template>
    <view class="add-collection-page">

        <!-- 顶部导航栏 -->
        <NavBar title="我的收款"></NavBar>

        <!-- 主体内容区 -->
        <scroll-view class="add-content" scroll-y>
            <!-- 表单区域 -->
            <view class="form-list">
                <!-- 标签输入 -->
                <view class="form-item">
                    <text class="form-label">标签</text>
                    <input class="form-input" type="text" placeholder="请输入标签名字" v-model="form.label" />
                </view>

                <!-- 地址输入 -->
                <view class="form-item">
                    <text class="form-label">地址</text>
                    <input class="form-input" type="text" placeholder="请输入钱包地址" v-model="form.address" />
                </view>

                <!-- 联系方式（非必填） -->
                <view class="form-item">
                    <text class="form-label">联系方式（非必填）</text>
                    <input class="form-input" type="text" placeholder="请输入联系方式" v-model="form.contact" />
                </view>

                <!-- 二维码上传 -->
                <view class="form-item qrcode-upload">
                    <text class="form-label">二维码</text>
                    <view class="upload-area" @click="chooseQrcode">
                        <uni-icons type="cloud-upload" size="40" class="upload-icon"></uni-icons>
                    </view>
                </view>

                <!-- 红色提示文字 -->
                <text class="warn-text">
                    *特别提醒：仅限添加官方地址，若因您的收款信息错误、失效等原因导致付款资金未到账，损失由您承担！
                </text>
            </view>

            <!-- 确认按钮 -->
            <button class="confirm-btn" @click="submitForm">确认</button>
        </scroll-view>
    </view>
</template>

<script>
import { addReceiveWallet, uploadCommonFile } from "@/api/mine";

export default {
    data() {
        return {
            // 表单数据
            form: {
                label: "",
                address: "",
                contact: "",
                qrcode: ""
            }
        };
    },
    methods: {
        // 返回上一页
        goBack() {
            uni.navigateBack();
        },
        // 选择二维码图片
        chooseQrcode() {
            uni.chooseImage({
                count: 1,
                sizeType: ["original", "compressed"],
                sourceType: ["album", "camera"],
                success: (res) => {
                    this.form.qrcode = res.tempFilePaths[0];
                    uni.showToast({ title: "二维码选择成功", icon: "success" });
                }
            });
        },
        // 提交表单
        async submitForm() {
            // 校验必填项
            if (!this.form.label.trim()) {
                uni.showToast({ title: "请输入标签", icon: "none" });
                return;
            }
            if (!this.form.address.trim()) {
                uni.showToast({ title: "请输入钱包地址", icon: "none" });
                return;
            }
            uni.showLoading({ title: "提交中..." });
            try {
                let qrcodeUrl = "";
                if (this.form.qrcode) {
                    const uploadRes = await uploadCommonFile(this.form.qrcode);
                    const uploadData = uploadRes && uploadRes.data ? uploadRes.data : {};
                    qrcodeUrl = uploadData.url || uploadData.fileName || uploadData.path || "";
                }

                await addReceiveWallet({
                    walletName: this.form.label.trim(),
                    walletAddr: this.form.address.trim(),
                    walletQrcode: qrcodeUrl,
                    defaultFlag: 'N'
                });

                uni.hideLoading();
                uni.showToast({ title: "添加成功", icon: "success" });
                this.goBack();
            } catch (e) {
                uni.hideLoading();
            }
        }
    }
};
</script>

<style scoped>
/* 页面整体样式 */
.add-collection-page {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #f5f5f5;
}

/* 顶部导航栏 */
.add-header {
    display: flex;
    align-items: center;
    height: 88rpx;
    padding: 0 30rpx;
    background-color: #fff;
    border-bottom: 1px solid #eee;
}

.back-icon {
    color: #333;
    margin-right: 20rpx;
}

.header-title {
    font-size: 32rpx;
    font-weight: bold;
    color: #333;
}

/* 主体内容区 */
.add-content {
    flex: 1;
    padding: 30rpx;
    box-sizing: border-box;
}

/* 表单区域 */
.form-list {
    background-color: #fff;
    border-radius: 16rpx;
    padding: 30rpx;
    margin-bottom: 40rpx;
}

.form-item {
    display: flex;
    flex-direction: column;
    margin-bottom: 30rpx;
}

.form-label {
    font-size: 28rpx;
    color: #666;
    margin-bottom: 10rpx;
}

.form-input {
    height: 70rpx;
    border: 1px solid #eee;
    border-radius: 8rpx;
    padding: 0 20rpx;
    font-size: 28rpx;
    color: #333;
}

/* 二维码上传 */
.qrcode-upload {
    margin-bottom: 20rpx;
}

.upload-area {
    height: 120rpx;
    border: 1px dashed #eee;
    border-radius: 8rpx;
    display: flex;
    align-items: center;
    justify-content: center;
}

.upload-icon {
    color: #999;
}

/* 红色提示 */
.warn-text {
    display: block;
    font-size: 22rpx;
    color: #ff3333;
    line-height: 1.4;
    margin-top: 10rpx;
}

/* 确认按钮 */
.confirm-btn {
    width: 100%;
    height: 88rpx;
    line-height: 88rpx;
    background: linear-gradient(90deg, #9933ff 0%, #cc66ff 100%);
    color: #fff;
    border-radius: 44rpx;
    font-size: 32rpx;
    border: none;
}
</style>
