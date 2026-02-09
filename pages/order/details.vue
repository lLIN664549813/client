<template>
    <view class="order-detail-page">
        <!-- 详情头部 -->
        <NavBar title="订单详情" />

        <!-- 详情内容 -->
        <view class="detail-content">
            <view class="flex justify-between align-center">
                <view class="flex align-center">
                    <image src="/static/images/profile.jpg" mode="scaleToFill" class="avatar" />
                    <text class="order-no">{{ orderNo }}（自己）</text>
                </view>
                <view>等待匹配</view>
            </view>
            <view class="detail-item">
                <text class="label">交易金额</text>
                <text class="value">$ 150</text>
            </view>
            <view class="detail-item">
                <text class="label">交易数量</text>
                <text class="value">{{ orderNo }}</text>
            </view>
            <view class="detail-item">
                <text class="label">订单号</text>
                <text class="value">1000 REP</text>
            </view>
            <view class="detail-item">
                <text class="label">订单时间</text>
                <text class="value">$150</text>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: "OrderDetail",
    data() {
        return {
            orderNo: "",
            orderType: "buy",
            statusClass: "paying-tag"
        };
    },
    onLoad(options) {
        this.orderNo = options.orderNo; // 获取跳转传参的订单号
    },
    methods: {
    }
};
</script>

<style lang="scss" scoped>
.order-detail-page {
    min-height: 100vh;
    background-color: #ffffff;
    padding-bottom: calc(90rpx + env(safe-area-inset-bottom));
    
    .detail-content {
        margin: 60rpx 48rpx;
        padding: 32rpx 26rpx;
        box-shadow: 0rpx 8rpx 60rpx 0rpx rgba(54, 41, 183, 0.07);
        font-weight: 400;
        font-size: 28rpx;
        color: #000000;
        line-height: 32rpx;
        border-radius: 16rpx;

        .avatar {
            width: 48rpx;
            height: 48rpx;
            border-radius: 1200rpx 1200rpx 1200rpx 1200rpx;
            margin-right: 34rpx;
        }

        .detail-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #fff;
            padding: 20rpx;
            border-radius: 16rpx;
            margin-bottom: 20rpx;

            .label {
                font-weight: 600;
                font-size: 32rpx;
                color: #343434;
                line-height: 48rpx;
            }

            .value {
                font-weight: 600;
                font-size: 30rpx;
                color: #979797;
                line-height: 32rpx;
            }
        }
    }
}
</style>