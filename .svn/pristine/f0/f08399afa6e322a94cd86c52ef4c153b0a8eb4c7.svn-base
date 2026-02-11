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
import { getAccountBills } from "@/api/mine";
export default {
    components: {
        NavBar
    },
    data() {
        return {
            // 流水类型：buy-买入，sell-卖出
            flowType: "buy",
            // 交易流水
            flowList: []
        };
    },
    onShow() {
        this.loadTradeFlows();
    },
    computed: {
        // 根据类型筛选流水
        filterdFlows() {
            return this.flowList.filter(item => item.type === this.flowType);
        }
    },
    methods: {
        async loadTradeFlows() {
            try {
                const res = await getAccountBills({ pageNum: 1, pageSize: 50 });
                const rows = this.extractRows(res);
                this.flowList = rows.map(item => {
                    const amount = Number(item.amount);
                    const type = amount >= 0 ? 'buy' : 'sell';
                    return {
                        type,
                        title: item.dealTypeName || item.dealName || item.transactionType || '交易流水',
                        desc: item.transactionNo ? `流水号: ${item.transactionNo}` : '',
                        amount: `${item.assetType || 'USDT'} ${amount >= 0 ? '+' : ''}${Number.isNaN(amount) ? item.amount : amount}`,
                        time: this.formatTime(item.createTime)
                    };
                });
            } catch (e) {
                this.flowList = [];
            }
        },
        extractRows(res) {
            if (!res || !res.data) {
                return [];
            }
            if (Array.isArray(res.data)) {
                return res.data;
            }
            if (Array.isArray(res.data.rows)) {
                return res.data.rows;
            }
            if (Array.isArray(res.rows)) {
                return res.rows;
            }
            return [];
        },
        formatTime(value) {
            if (!value) {
                return '--';
            }
            const date = new Date(value);
            if (Number.isNaN(date.getTime())) {
                return String(value);
            }
            const pad = (num) => String(num).padStart(2, '0');
            return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
        },
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
