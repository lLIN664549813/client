<template>
    <view class="flow-page">
        <!-- 顶部导航栏 -->
        <nav-bar title="交易流水"></nav-bar>
        <!-- 买入/卖出切换标签 -->
        <view class="tab-group">
            <view class="tab-item" :class="{ active: flowType === 'buy' }" @click="switchType('buy')">
                <text>买入</text>
            </view>
            <view class="tab-item" :class="{ active: flowType === 'sell' }" @click="switchType('sell')">
                <text>卖出</text>
            </view>
        </view>
        <!-- 主体内容区 -->
        <scroll-view class="flow-content" scroll-y>

            <!-- 交易流水列表 -->
            <view class="flow-list">
                <view class="flow-item" v-for="(item, index) in filterdFlows" :key="index">
                    <view class="flex justify-between algin-center">
                        <!-- 记录标题 -->
                        <text>{{ item.title }}</text>
                        <!-- 补充信息（如对方账户） -->
                        <text style="font-size: 30rpx;">{{ item.amount }}</text>
                    </view>
                    <view v-if="item.desc">{{ item.desc }}</view>
                    <!-- 金额+时间 -->
                    <text class="flow-time">{{ item.time }}</text>
                </view>
            </view>

        </scroll-view>
        <!-- 无更多数据提示 -->
        <text class="no-more">无更多数据</text>
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
            // 流水类型：buy-买入，sell-卖出
            flowType: "buy",
            // 模拟交易流水数据
            flowList: [
                {
                    type: "buy",
                    title: "买入REP",
                    amount: "REP -3 7272.663",
                    time: "2025-11-20 15:45:52"
                },
                {
                    type: "sell",
                    title: "卖出REP",
                    desc: "卖出REP: QTY:2, FEE:1 7228.663",
                    amount: "USDT -150",
                    time: "2025-11-20 15:45:52"
                },
                {
                    type: "buy",
                    title: "交易撤销退还",
                    amount: "REP +18 7260.663",
                    time: "2025-11-20 15:45:52"
                }
            ]
        };
    },
    computed: {
        // 根据类型筛选流水
        filterdFlows() {
            return this.flowList.filter(item => item.type === this.flowType);
        }
    },
    methods: {
        // 切换流水类型
        switchType(type) {
            this.flowType = type;
        }
    }
};
</script>

<style scoped lang="scss">
/* 页面整体样式 */
.flow-page {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: #ffffff;
}


/* 主体内容区 */
.flow-content {
    flex: 1;
    padding: 30rpx;
    box-sizing: border-box;
}

/* 切换标签组 */
.tab-group {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20rpx;
    margin-bottom: 18rpx;
    margin-top: 52rpx;

    .tab-item {
        width: 208rpx;
        height: 98rpx;
        background: #EDEEF0;
        border-radius: 12rpx 12rpx 12rpx 12rpx;
        border: 0rpx solid rgba(237, 238, 240, 0.8784);
        line-height: 98rpx;
        font-weight: 400;
        font-size: 28rpx;
        color: #0B1526;
        text-align: center;
    }

    .tab-item.active {
        background: #F4F0FF;
        border-radius: 12rpx 12rpx 12rpx 12rpx;
        border: 2rpx solid #5E28FF;
        color: #5F2AFF;
    }
}


/* 流水列表 */
.flow-list {
    margin-bottom: 40rpx;
}

.flow-item {
    background-color: #fff;
    padding: 20rpx 30rpx;
    margin-bottom: 48rpx;
    
    font-weight: 600;
    font-size: 32rpx;
    color: #343434;
    line-height: 48rpx;
    box-shadow: 0rpx 8rpx 60rpx 0rpx rgba(54, 41, 183, 0.07);
    border-radius: 20rpx;
}



.flow-time {
    font-weight: 600;
    font-size: 30rpx;
    color: #979797;
    line-height: 32rpx;
}

/* 无更多数据 */
.no-more {
    display: block;
    text-align: center;
    font-weight: 400;
    font-size: 36rpx;
    color: #0B1526;
    line-height: 50rpx;
    padding: 54rpx 0;
}
</style>