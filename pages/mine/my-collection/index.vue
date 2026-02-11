<template>
    <view class="collection-page">
        <!-- 顶部导航栏 -->
        <NavBar title="我的收款"></NavBar>

        <!-- 主体内容区 -->
        <scroll-view class="collection-content" scroll-y>
            <!-- 收款卡片 -->
            <uni-card :is-shadow="true" :border-radius="20" class="collection-card" v-for="item in walletList"
                :key="item.walletId">
                <view class="card-title flex justify-between algin-center">
                    <view class="card-title-one">
                        <image style="width: 54rpx;height: 54rpx;" src="/static/images/dui.png" @click="setDefault(item)"></image>
                        <text class="tag-text">{{ item.defaultFlag === 'Y' ? '默认收款' : '设为默认' }}</text>
                    </view>
                    <view class="card-title-two">{{ item.walletName || '--' }}</view>
                    <view class="card-title-one">
                        <uni-icons type="trash" size="40" color="#FB0B0B" @click="openDeletePopup(item)"></uni-icons>
                        <text style="color: #FB0B0B;margin-top: 20rpx;">删除</text>
                    </view>
                </view>
                <!-- 收款二维码 -->
                <image class="qrcode-img" :src="item.walletQrcode || '/static/images/profile.jpg'" mode="aspectFit"></image>
                <!-- 收款地址 -->
                <text class="address-text">{{ item.walletAddr || '--' }}</text>
            </uni-card>

            <view v-if="walletList.length === 0" class="empty-wrap">暂无收款方式</view>
        </scroll-view>

        <!-- 删除钱包确认弹窗 -->
        <uni-popup ref="deletePopup" type="center" :mask-click="false">
            <view class="delete-popup">
                <view class="popup-title flex justify-center">提示</view>
                <text class="popup-desc">删除后无法收复，请确认是否删除？</text>
                <view class="popup-btn-group">
                    <button class="popup-btn reset-btn" @click="closeDeletePopup">重置</button>
                    <button class="popup-btn button-primary" @click="confirmDelete">确认</button>
                </view>
            </view>
        </uni-popup>
    </view>
</template>

<script>
import { listMemberWallets, removeReceiveWallet, setDefaultWallet } from "@/api/mine";

export default {
    data() {
        return {
            walletList: [],
            deleteWalletId: null
        };
    },
    onShow() {
        this.loadWallets();
    },
    methods: {
        async loadWallets() {
            try {
                const res = await listMemberWallets();
                const list = res && res.data ? res.data : [];
                this.walletList = Array.isArray(list) ? list : [];
            } catch (e) {
                this.walletList = [];
            }
        },
        // 打开删除弹窗
        openDeletePopup(item) {
            this.deleteWalletId = item.walletId;
            this.$refs.deletePopup.open();
        },
        // 关闭删除弹窗
        closeDeletePopup() {
            this.$refs.deletePopup.close();
        },
        // 确认删除
        async confirmDelete() {
            if (!this.deleteWalletId) {
                return;
            }
            uni.showLoading({ title: "删除中..." });
            try {
                await removeReceiveWallet(this.deleteWalletId);
                uni.hideLoading();
                uni.showToast({ title: "删除成功", icon: "success" });
                this.closeDeletePopup();
                this.loadWallets();
            } catch (e) {
                uni.hideLoading();
            }
        },
        async setDefault(item) {
            if (!item || !item.walletId) {
                return;
            }
            try {
                await setDefaultWallet(item.walletId);
                uni.showToast({ title: "默认收款已更新", icon: "success" });
                this.loadWallets();
            } catch (e) {
                // 请求层已处理错误提示
            }
        }
    }
};
</script>

<style scoped lang="scss">
/* 页面整体样式 */
.collection-page {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #ffffff;
}

/* 顶部导航栏 */
.collection-header {
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
.collection-content {
    flex: 1;
    padding: 40rpx 30rpx;
    box-sizing: border-box;
}

/* 收款卡片 */
.collection-card {
    background-color: #fff;
    border-radius: 16rpx;
    padding: 30rpx;
    text-align: center;
    position: relative;

    .card-title-one {
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    .card-title-two {
        width: 212rpx;
        height: 44rpx;
        font-weight: 300;
        font-size: 30rpx;
        color: #2A2C24;
        line-height: 44rpx;
        text-align: center;
        background: #F1F1F1;
        border-radius: 56rpx 56rpx 56rpx 56rpx;
        margin-top: 48rpx;
    }

    .tag-text {
        font-weight: 700;
        font-size: 24rpx;
        color: #141416;
        line-height: 48rpx;
    }
}

/* 默认标签 */
.default-tag {
    position: absolute;
    top: 30rpx;
    left: 30rpx;
    display: flex;
    align-items: center;
    background-color: #9933ff;
    color: #fff;
    padding: 4rpx 12rpx;
    border-radius: 12rpx;
    font-size: 20rpx;
}

.tag-icon {
    margin-right: 4rpx;
}

/* 卡片标签 */
.card-label {
    position: absolute;
    top: 30rpx;
    right: 60rpx;
    font-size: 24rpx;
    color: #666;
}

/* 二维码 */
.qrcode-img {
    width: 240rpx;
    height: 240rpx;
    margin: 40rpx auto 20rpx;
}

/* 收款地址 */
.address-text {
    display: block;
    font-weight: 900;
    font-size: 30rpx;
    color: #1B1E26;
    line-height: 40rpx;
    word-break: break-all;
}

.empty-wrap {
    text-align: center;
    color: #999;
    font-size: 28rpx;
    padding: 80rpx 0;
}

/* 删除确认弹窗 */
.delete-popup {
    width: 80%;
    background-color: #fff;
    border-radius: 16rpx;
    padding: 30rpx;
}

.popup-title {
    font-size: 44rpx;
    font-weight: bold;
    color: #333;
    text-align: center;
    margin-bottom: 52rpx;
}

.popup-desc {
    font-weight: 400;
    font-size: 40rpx;
    color: #0B1526;
    line-height: 44rpx;
    text-align: justify;
    text-align: center;
    margin-bottom: 30rpx;
}

.popup-btn-group {
    display: flex;
    gap: 20rpx;
    margin-top: 30rpx;
}

.popup-btn {
    flex: 1;
    height: 70rpx;
    width: 280rpx;
    line-height: 70rpx;
    border-radius: 20rpx;
    font-size: 28rpx;
    border: none;
}

.reset-btn {
    background-color: #fff;
    color: #404040;
    border: 2px solid #9933ff;
}
</style>
