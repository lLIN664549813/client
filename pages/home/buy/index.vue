<template>
    <view class="publish-buy-page">
        <!-- 发布买单主页面 -->
        <NavBar title="买入REP"></NavBar>


        <scroll-view scroll-y class="content">
            <view class="image-content">
                <text class="overlay left">0.823</text>
                <text class="overlay right">0.852</text>
            </view>
            <!-- 表单输入区域 -->
            <view class="form-section">
                <view class="flex align-center">
                    <view class="name-content">
                        <text class="name-text">be</text>
                    </view>
                    <text class="name-value">61954777</text>
                </view>
                <!-- 单价 -->
                <view class="form-item">
                    <text class="form-label">单价</text>
                    <text class="form-value">{{ unitPrice }}</text>
                </view>
                <!-- 数量 -->
                <view class="form-item">
                    <text class="form-label">数量</text>
                    <text class="form-value">{{ totalAmount }} USDT</text>
                    <!-- <input class="form-input" type="number" placeholder="请输入数量" v-model="quantity"
                        @input="calcTotalAmount" /> -->
                </view>
                <!-- 交易总额 -->
                <view class="form-item">
                    <text class="form-label">交易总额</text>
                    <text class="form-value">{{ totalAmount }} USDT</text>
                </view>
            </view>
            <view class="form-info">

                <!-- <view class="form-label">交易方式</view>
                <view class="zhanghu-info flex justify-between algin-middle">
                    <uni-icons type="wallet-filled" color="#4E4B66" size="40" />
                    <view>
                        <view>账户支付</view>
                        <view>可用余额：REP 300.5285</view>
                    </view>
                    <image style="width: 54rpx; height: 54rpx;" src="/static//images/dui.png"></image>

                </view>
                <view class="form-item border-top">
                    <text class="form-label">手续费</text>
                    <text class="form-value">{{ unitPrice }}</text>
                </view> -->
                <view class="form-item">
                    <text class="form-label">交易密码</text>
                    <input class="form-input" type="password" placeholder="输入您的交易密码" v-model="tradePwd" />
                </view>
            </view>
            <!-- 提交订单按钮 -->
            <view class="btn-group">
                <button class="wallet-btn transfer-btn">取消</button>
                <button class="wallet-btn button-primary" @click="submitOrder">确认买入</button>
            </view>
        </scroll-view>

    </view>
</template>

<script>
export default {
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
            uni.navigateTo({ url: '/pages/order/order-details/index' })
            // 简单校验
            // if (!this.tradePwd) {
            //     uni.showToast({
            //         title: "请输入交易密码",
            //         icon: "none",
            //         duration: 1500
            //     });
            //     return;
            // }

            // 模拟接口提交（实际开发替换为uni.request）
            // setTimeout(() => {
            //     this.successPopupVisible = true; // 打开成功弹窗
            // }, 800);
        }
    }
};
</script>

<style scoped lang="scss">
/* 页面基础样式 */
.publish-buy-page {
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
    // padding: 20rpx;
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


.image-content {
    width: 100%;
    position: relative;
    height: 224rpx;
    background-image: url("/static/images/home-title.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    margin-top: 56rpx;
    flex-shrink: 0;
}

/* 覆盖文字：使用百分比 + transform 保证在不同屏幕上位置保持相对稳定 */
.image-content .overlay {
    position: absolute;
    top: 18%;
    transform: translate(-50%, -50%);
    color: #ffffff;
    font-size: 36rpx;
    line-height: 1;
    -webkit-text-size-adjust: none;
}

.image-content .left {
    left: 31%;
}

.image-content .right {
    right: 11%;
}

@media (max-width: 360px) {
    .image-content .overlay {
        font-size: 30rpx;
    }
}

/* 表单区域 */
.form-section {
    margin: 0 50rpx;
    padding: 14rpx 58rpx;
    background: #FFFFFF;
    box-shadow: 0rpx 8rpx 60rpx 0rpx rgba(54, 41, 183, 0.07);
    text-align: center;
    border-radius: 20rpx;

    .form-tip {
        display: block;

        font-weight: 400;
        font-size: 24rpx;
        color: #0B1526;
        line-height: 40rpx;
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
        font-weight: 700;
        font-size: 30rpx;
        color: #151940;
        line-height: 50rpx;
        margin-left: 32rpx;
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
    color: #000000;
}

.form-value {
    color: #151940;
}

.form-input {
    font-size: 28rpx;
    color: #333;
    text-align: right;
    width: 60%;
}

/* 功能按钮组 */
.btn-group {
    position: fixed;
    bottom: 40rpx;
    left: 50%;
    right: 0;
    transform: translateX(-50%);
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