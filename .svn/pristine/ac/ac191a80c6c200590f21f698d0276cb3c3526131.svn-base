<template>
    <view class="recharge-page">
        <!-- 自定义导航栏 -->
        <nav-bar title="充值"></nav-bar>

        <!-- 主体内容区 -->
        <scroll-view class="recharge-content" scroll-y>
            <!-- 二维码卡片 -->
            <uni-card :is-shadow="true" :border-radius="20" class="qrcode-card">
                <!-- 二维码图片 -->
                <image class="qrcode-img" :src="qrcodeUrl" mode="aspectFit"></image>
                <!-- 收款提示 -->
                <text class="qrcode-tip">此地址只接受USDT</text>
                <!-- 收款地址 -->
                <text class="address-text">{{ address }}</text>
                <!-- 复制地址按钮 -->
                <button class="copy-btn" @click="copyAddress">复制地址</button>
                <!-- 红色提示文字 -->
                <text class="red-tip">仅用于兑换水晶</text>
            </uni-card>

            <!-- 充值信息列表 -->
            <text class="info-label">充值方式</text>
            <view class="info-list">
                <!-- 充值方式 -->
                <view class="info-item">
                    <text class="info-label">钱包</text>
                    <view>
                        <image style="width: 54rpx; height: 54rpx;" src="/static/images/dui.png" mode="aspectFit">
                        </image>
                    </view>
                </view>
                <!-- 充值货币 -->
                <view class="info-item">
                    <text class="info-label">充值货币</text>
                    <text class="info-value">USDT</text>
                </view>
                <!-- 充值网络 -->
                <view class="info-item">
                    <text class="info-label">充值网络</text>
                    <text class="info-value">BEP20</text>
                </view>
                <!-- 最小充值金额 -->
                <view class="info-item">
                    <text class="info-label">最小充值金额</text>
                    <text class="info-value">1 USDT</text>
                </view>
            </view>

            <!-- 到账提示 -->
            <text class="arrival-tip">充值到账时间约1-3分钟，请耐心等待。</text>

            <!-- 保存至相册按钮 -->
            <button class="save-btn button-primary" @click="saveToAlbum">保存至相册</button>
        </scroll-view>
    </view>
</template>

<script>
import NavBar from "@/components/nav-bar/nav-bar.vue";
export default {
    components: {
        NavBar
    },
    data() {
        return {
            // 二维码图片地址（替换为实际二维码地址）
            qrcodeUrl: "/static/images/profile.jpg",
            // 收款地址
            address: "teawcnaoiaVAVNOAWdfhaffvaoefj1"
        };
    },
    methods: {
        // 复制收款地址
        copyAddress() {
            uni.setClipboardData({
                data: this.address,
                success: () => {
                    uni.showToast({
                        title: "地址复制成功",
                        icon: "success"
                    });
                },
                fail: () => {
                    uni.showToast({
                        title: "复制失败，请重试",
                        icon: "none"
                    });
                }
            });
        },
        // 保存二维码到相册
        async saveToAlbum() {
            try {
                // 1. 下载二维码图片到本地
                const downloadRes = await uni.downloadFile({
                    url: this.qrcodeUrl // 需确保图片地址是外网可访问的，本地图片需处理
                });
                if (downloadRes.statusCode !== 200) {
                    throw new Error("图片下载失败");
                }
                // 2. 保存图片到相册
                const saveRes = await uni.saveImageToPhotosAlbum({
                    filePath: downloadRes.tempFilePath
                });
                uni.showToast({
                    title: "保存至相册成功",
                    icon: "success"
                });
            } catch (err) {
                // 处理权限拒绝等异常
                if (err.errMsg.includes("auth deny")) {
                    uni.showModal({
                        title: "权限提示",
                        content: "请开启相册访问权限后重试",
                        confirmText: "去设置",
                        success: (res) => {
                            if (res.confirm) {
                                uni.openSetting(); // 打开应用设置页面
                            }
                        }
                    });
                } else {
                    uni.showToast({
                        title: `保存失败：${err.errMsg || err.message}`,
                        icon: "none"
                    });
                }
            }
        }
    }
};
</script>

<style scoped lang="scss">
/* 页面整体样式 */
.recharge-page {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: #ffffff;

    overflow: hidden; /* 隐藏页面整体滚动条 */
}


/* 主体内容区 */
.recharge-content {
    flex: 1;
    padding: 30rpx;
    box-sizing: border-box;
    overflow: hidden; /* 确保scroll-view是唯一的滚动区域 */
}

/* 二维码卡片 */
.qrcode-card {
    background-color: #fff;
    text-align: center;
    margin-bottom: 30rpx;

    .qrcode-img {
        width: 240rpx;
        height: 240rpx;
        margin: 0 auto 20rpx;
        border-radius: 40rpx 40rpx 40rpx 40rpx;
        border: 2rpx solid #E5E5E5;
        padding: 20rpx;
    }

    .qrcode-tip {
        display: block;
        font-weight: 400;
        font-size: 40rpx;
        color: #000000;
        line-height: 46rpx;
        margin-bottom: 36rpx;
    }

    .address-text {
        display: block;
        color: #333;
        word-break: break-all;
        margin-bottom: 44rpx;
        font-weight: 400;
        font-size: 40rpx;
        color: #000000;
        line-height: 46rpx;
    }

    .copy-btn {
        display: block;
        width: 190rpx;
        height: 84rpx;
        line-height: 84rpx;
        background: #FFFFFF;
        border-radius: 18rpx 18rpx 18rpx 18rpx;
        border: 2rpx solid #ccc;
        margin-bottom: 44rpx;
    }
}



.red-tip {
    display: block;
    font-weight: 500;
    font-size: 36rpx;
    color: #FB0B0B;
    line-height: 54rpx;
}

/* 充值信息列表 */
.info-list {
    background-color: #fff;
    border-radius: 16rpx;
    margin-bottom: 30rpx;
    margin-top: 32rpx;
}

.info-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #F6F7FB;
    border-radius: 24rpx 24rpx 24rpx 24rpx;
    padding: 28rpx 16rpx;
    margin-bottom: 16rpx;
}


.info-label {
    font-weight: 400;
    font-size: 40rpx;
    color: #000000;
    line-height: 46rpx;
}

.info-value {
    font-weight: 400;
    font-size: 40rpx;
    color: #9CA2AD;
    line-height: 46rpx;
}

/* 到账提示 */
.arrival-tip {
    display: block;
    font-weight: 400;
    font-size: 40rpx;
    color: #F80A0A;
    line-height: 46rpx;
    text-align: center;
    margin-bottom: 40rpx;
}

/* 保存至相册按钮 */
.save-btn {
    width: 100%;
    height: 88rpx;
    line-height: 88rpx;
    color: #fff;
    font-size: 32rpx;
    border: none;
}
</style>