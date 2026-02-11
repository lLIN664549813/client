<template>
    <view class="wallet-page">
        <!-- 顶部导航栏 -->
        <!-- 引入公共导航栏 -->
        <nav-bar title="我的钱包" bgColor="#ffffff" textColor="#333333">
            <!-- 右侧自定义内容：账单图标 -->
            <template v-slot:right>
                <image class="bill-icon" src="/static/images/bill_icon.png" @click="goToBill" mode="aspectFit"></image>
            </template>
        </nav-bar>

        <!-- 主体内容区 -->
        <scroll-view class="wallet-content">
            <!-- 钱包插画 -->
            <view class="wallet-illustration">
                <image src="/static/images/wallet_illustration.png" mode="aspectFit"></image>
            </view>

            <!-- 资产标题 -->
            <text class="asset-title">我的资产</text>

            <!-- 资产列表 -->
            <view class="asset-list">
                <!-- REP资产 -->
                <view class="asset-item">
                    <text class="asset-type">REP</text>
                    <text class="asset-value">{{ assetData.rep }}</text>
                </view>
                <!-- USDT资产 -->
                <view class="asset-item">
                    <text class="asset-type">USDT</text>
                    <text class="asset-value">{{ assetData.usdt }}</text>
                </view>
            </view>

            <!-- 功能按钮组 -->
        </scroll-view>
        <view class="btn-group">
            <button class="wallet-btn button-primary" @click="goToRecharge">充值</button>
            <button class="wallet-btn transfer-btn" @click="goToTransfer">转账</button>
        </view>
    </view>
</template>

<script>
import NavBar from "@/components/nav-bar/nav-bar.vue";
import { getAccountAssets } from "@/api/mine";
export default {
    components: {
        NavBar
    },
    data() {
        return {
            // 资产数据
            assetData: {
                rep: "0.0000",
                usdt: "0.0000"
            }
        };
    },
    onShow() {
        this.loadAssets();
    },
    methods: {
        async loadAssets() {
            try {
                const res = await getAccountAssets();
                const assets = res && res.data ? res.data : {};
                this.assetData.rep = this.formatAmount(assets.repAmt);
                this.assetData.usdt = this.formatAmount(assets.balance);
            } catch (e) {
                this.assetData.rep = "0.0000";
                this.assetData.usdt = "0.0000";
            }
        },
        formatAmount(value) {
            const amount = Number(value);
            if (Number.isNaN(amount)) {
                return "0.0000";
            }
            return amount.toFixed(4);
        },
        // 跳转到账单/明细页面
        goToBill() {
            uni.navigateTo({ url: '/pages/mine/wallet/transfer-record' });
        },
        // 跳转到充值页面
        goToRecharge() {
            uni.navigateTo({
                url: '/pages/mine/top-up/index' // 关联之前开发的充值页面
            });
        },
        // 跳转到转账页面
        goToTransfer() {
            uni.navigateTo({
                url: '/pages/mine/transfer/index' // 关联之前开发的转账页面
            });
        }
    }
};
</script>

<style scoped>
/* 页面整体样式 */
.wallet-page {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #ffffff;
}


.back-icon {
    color: #333;
}

.bill-icon {
    width: 50rpx;
    height: 50rpx;
}

.header-title {
    font-size: 32rpx;
    font-weight: bold;
    color: #333;
}

/* 主体内容区 */
.wallet-content {
    flex: 1;
    padding: 40rpx 30rpx;
    box-sizing: border-box;
    text-align: center;
}

/* 钱包插画 */
.wallet-illustration {
    margin-bottom: 40rpx;
}

/* 资产标题 */
.asset-title {
    display: block;
    margin-bottom: 30rpx;
    text-align: left;
    font-weight: 400;
    font-size: 36rpx;
    color: #0B1526;
    line-height: 50rpx;
}

/* 资产列表 */
.asset-list {
    background-color: #fff;
    border-radius: 16rpx;
    padding: 30rpx;
    margin-bottom: 60rpx;
    text-align: left;
}

.asset-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80rpx;
}

.asset-item:last-child {
    border-bottom: none;
}

.asset-type {
    
    font-weight: 600;
    font-size: 36rpx;
    color: #121212;
    line-height: 96rpx;
}

.asset-value {
    font-weight: 600;
    font-size: 30rpx;
    color: #121212;
    line-height: 96rpx;
}

/* 功能按钮组 */
.btn-group {
    position: fixed;
    bottom: 40rpx;
    left: 0; 
    right: 0;
    width: 100%;
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
</style>
