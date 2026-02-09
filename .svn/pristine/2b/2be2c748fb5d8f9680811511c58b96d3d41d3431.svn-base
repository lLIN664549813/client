<template>
    <view class="order-details-page">
        <!-- 发布买单主页面 -->
        <NavBar title="订单详情">
            <template #right>
                <view class="flex align-center">
                    <uni-icons type="personadd" color="#4E4B66" size="40" />
                </view>
            </template>
        </NavBar>


        <scroll-view scroll-y class="content">
            <!-- 表单输入区域 -->
            <view class="form-section">
                <view class="form-item">
                    <view class="flex align-center">
                        <view class="name-content">
                            <text class="name-text">be</text>
                        </view>
                        <text class="name-value">61954777</text>
                    </view>
                    <text class="form-value">{{ unitPrice }}</text>
                </view>
                <!-- 单价 -->
                <view class="form-item">
                    <text class="form-label">交易金额</text>
                    <text class="form-value">{{ unitPrice }}</text>
                </view>
                <!-- 数量 -->
                <view class="form-item">
                    <text class="form-label">交易数量</text>
                    <text class="form-value">{{ totalAmount }} USDT</text>
                    <!-- <input class="form-input" type="number" placeholder="请输入数量" v-model="quantity"
                        @input="calcTotalAmount" /> -->
                </view>
                <!-- 交易总额 -->
                <view class="form-item">
                    <text class="form-label">订单号</text>
                    <text class="form-value">{{ totalAmount }} USDT</text>
                </view>
                <view class="form-item">
                    <text class="form-label">订单时间</text>
                    <text class="form-value">{{ totalAmount }} USDT</text>
                </view>
            </view>
            <!-- 卖家id区域 -->
            <view class="form-section">
                <view class="form-item">
                    <text class="form-label">卖家ID</text>
                    <text class="form-value">{{ unitPrice }}</text>
                </view>
                <view class="form-item">
                    <text class="form-label">联系方式</text>
                    <text class="form-value">{{ unitPrice }}</text>
                </view>
            </view>

            <!-- 二维码区域 -->

            <view class="form-section">
                <view class="form-qr-code">
                    <text class="form-tip form-tip-danger">注意：请核对钱包地址进行转账！</text>
                    <image class="form-image" src="/static/images/profile.jpg"></image>
                    <text class="form-tip">此地址只接受 USDT</text>
                    <text class="form-copy">7386djshdfkk1dfga253</text>
                    <button class="form-copy form-copy-btn" @click="copyId()">复制</button>
                </view>

            </view>

            <view class="form-section">
                <view class="form-item">
                    <text class="form-label">卖家ID</text>
                    <text class="form-value">{{ unitPrice }}</text>
                </view>
                <view class="form-upload">
                    <text class="form-label">*交易截屏</text>
                    <text class="form-label form-upload-text">待上传交易截屏</text>
                    <view class="upload-content">
                        <view v-if="uploadedImage">
                            <view class="bexample-img">
                                <uni-icons class="del-icon" type="trash" color="#FA3E3E" @click="deleteImage"
                                    size="20" />
                                <image class="img-content" @click="lookImage" :src="uploadedImage" mode="aspectFill">
                                </image>
                            </view>
                        </view>
                        <view class="bexample-ody" @click="uploadImage">
                            <uni-icons type="plusempty" color="#000000" size="48" />
                            <!-- <uni-file-picker limit="9">
                            </uni-file-picker> -->
                        </view>
                    </view>
                </view>
                <view class="input-content">
                    <text class="form-label">交易哈希值</text>
                    <input class="form-input" type="text" placeholder="请填写转账哈希值" v-model="tradePwd" />
                </view>
            </view>
            <!-- 提交订单按钮 -->
            <view class="btn-group">
                <button class="wallet-btn transfer-btn">等待买家付款</button>
                <!-- <button class="wallet-btn transfer-btn">取消订单</button>
                <button class="wallet-btn button-primary">确认支付</button> -->
            </view>
        </scroll-view>
        <ImagePreview v-if="previewVisible" :visible="previewVisible" :imageList="[uploadedImage]" :currentIndex="0"
            @close="closePreview">
        </ImagePreview>

    </view>
</template>

<script>
import ImagePreview from "@/components/image-preview/index.vue";
export default {
    components: {
        ImagePreview
    },
    data() {
        return {
            // 滑块值（联动单价）
            sliderValue: 0.823,
            // 表单数据
            unitPrice: 0.823, // 单价
            quantity: "", // 数量
            totalAmount: 0, // 交易总额
            tradePwd: "", // 交易密码
            // 弹窗状态
            inputPopupVisible: false, // 输入单价/数量弹窗
            successPopupVisible: false, // 提交成功弹窗
            // 弹窗输入值
            popupUnitPrice: "",
            popupQuantity: "",
            userId: "61953174",
            uploadedImage: null, // 已上传的图片路径
            previewVisible: false, // 图片预览弹窗状态


        };
    },
    methods: {
        // 复制账号ID
        copyId() {
            uni.setClipboardData({
                data: this.userId,
                success: () => {
                    uni.showToast({ title: "复制成功", icon: "success" });
                }
            });
        },
        // 计算交易总额（单价 * 数量）
        calcTotalAmount() {
            if (!this.quantity) {
                this.totalAmount = 0;
                return;
            }
            this.totalAmount = (Number(this.unitPrice) * Number(this.quantity)).toFixed(2);
        },
        // 关闭成功提示弹窗
        closeSuccessPopup() {
            this.successPopupVisible = false;
            // 弹窗关闭后可跳转至“我要卖列表”（匹配UI备注）
            // uni.switchTab({
            //     url: "/pages/order-list/order-list" // 替换为实际列表页路径
            // });
        },
        // 提交订单核心逻辑
        submitOrder() {
            // 简单校验
            if (!this.tradePwd) {
                uni.showToast({
                    title: "请输入交易密码",
                    icon: "none",
                    duration: 1500
                });
                return;
            }

            // 模拟接口提交（实际开发替换为uni.request）
            setTimeout(() => {
                this.successPopupVisible = true; // 打开成功弹窗
            }, 800);
        },
        // 上传
        uploadImage() {
            uni.chooseImage({
                count: 1,
                success: (res) => {
                    console.log(res, 'shangchaun');

                    this.uploadedImage = res.tempFilePaths[0];
                }
            });
        },
        // 查看图片
        lookImage() {
            this.previewVisible = true;
            console.log('查看图片', this.previewVisible, this.uploadedImage);
        },
        // 关闭图片预览
        closePreview() {
            console.log('调用页面关闭方法');

            this.previewVisible = false;
        },
        // 删除图片
        deleteImage() {
            console.log('删除图片');

            this.uploadedImage = null;
        },
        copyId() {
            uni.setClipboardData({
                data: this.userId,
                success: () => {
                    uni.showToast({ title: "复制成功", icon: "success" });
                }
            });
        },
    }
};
</script>

<style scoped lang="scss">
/* 页面基础样式 */
.order-details-page {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: #ffffff;
    overflow: hidden;
    /* 隐藏页面整体滚动条 */
    box-sizing: border-box;
}

.content {
    flex: 1;
    padding: 40rpx 0rpx;
    box-sizing: border-box;
    overflow: hidden;

    .form-info {
        margin-top: 38rpx;
        padding: 0 80rpx;

        .zhanghu-info {
            padding: 38rpx 0;
        }
    }

    .border-top {
        border-top: 2rpx solid #D9DBE9;

    }
}

/* 表单区域 */
.form-section {
    margin: 14rpx 50rpx;
    padding: 14rpx 58rpx;
    background: #FFFFFF;
    box-shadow: 0rpx 8rpx 60rpx 0rpx rgba(54, 41, 183, 0.07);
    text-align: center;
    border-radius: 20rpx;

    .form-qr-code {
        .form-tip {
            display: block;

            font-weight: 400;
            font-size: 24rpx;
            color: #0B1526;
            line-height: 40rpx;
        }

        .form-tip-danger {
            font-weight: 900;
            font-size: 24rpx;
            color: #FA3E3E;
            line-height: 40rpx;
            margin: 20rpx 0;
        }

        .form-copy {
            display: block;

            font-weight: 900;
            font-size: 28rpx;
            color: #1B1E26;
            line-height: 40rpx;
        }

        .form-copy-btn {
            border: none;
            background-color: #ffffff;
            padding: 26rpx;
        }

        .form-image {
            width: 398rpx;
            height: 398rpx;
            background: #FFFFFF;
            border-radius: 40rpx 40rpx 40rpx 40rpx;
            border: 2rpx solid #E5E5E5;
            padding: 24rpx;
        }
    }

    .name-content {
        width: 88rpx;
        height: 88rpx;
        border-radius: 20rpx 20rpx 20rpx 20rpx;
        padding: 20rpx;
        box-shadow: 0rpx 30rpx 60rpx 0rpx rgba(49, 75, 206, 0.15);
        display: flex;
        align-items: center;
        justify-content: center;

        .name-text {
            flex-shrink: 0;
            background: #1769FF;
            color: #fff;
            display: block;
            font-weight: bold;
            border-radius: 88rpx;
            width: 68rpx;
            height: 68rpx;
            line-height: 68rpx;

        }

    }

    .name-value {
        font-size: 30rpx;
        color: #151940;
        line-height: 50rpx;
        margin-left: 32rpx;
    }
}

.input-content {
    text-align: left;
    padding-bottom: 20rpx;
}




.form-upload {
    text-align: left;

    .form-upload-text {
        font-size: 30rpx;
        color: #FA3E3E;
        display: block;
    }

    .upload-content {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 20rpx;

        .bexample-img {
            width: 160rpx;
            height: 200rpx;
            border-radius: 16rpx 16rpx 16rpx 16rpx;
            overflow: hidden;
            position: relative;

            .del-icon {
                position: absolute;
                top: 10rpx;
                right: 10rpx;
                z-index: 1;
                width: 20rpx;
                height: 20rpx;
            }

            .img-content {
                width: 100%;
                height: 100%;
            }
        }

        .bexample-ody {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 160rpx;
            height: 200rpx;
            background: #F1F1F1;
            border-radius: 16rpx 16rpx 16rpx 16rpx;
        }
    }

}

.form-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20rpx 0;
    font-weight: 500;
    font-size: 28rpx;
    color: #000000;
    line-height: 50rpx;
}

.border-top {
    border-top: 2rpx solid #D9DBE9;
    ;
}

.form-label {
    font-weight: 600;
    font-size: 32rpx;
    color: #343434;
    line-height: 48rpx;
}

.form-value {
    font-weight: 600;
    font-size: 30rpx;
    color: #979797;
    line-height: 32rpx;
}

.form-input {
    margin-top: 20rpx;
    font-size: 28rpx;
    color: #333;
    width: 100%;
    border-bottom: 4rpx solid #E4E4E4;
    height: 34rpx;
    line-height: 34rpx;
}

/* 功能按钮组 */
.btn-group {
    // position: fixed;
    // bottom: 40rpx;
    // left: 50%;
    // right: 0;
    // transform: translateX(10%);
    width: 80%;
    display: flex;
    gap: 30rpx;
    padding: 0 20rpx;
}

.wallet-btn {
    flex: 1;
    height: 80rpx;
    line-height: 80rpx;
    border-radius: 20rpx;
    font-size: 40rpx;
    border: none;

}

.transfer-btn {
    background-color: #fff;
    color: #404040;
    border: 2px solid #9933ff;
}


/* 去除uniapp默认按钮边框 */
button::after {
    border: none;
}
</style>