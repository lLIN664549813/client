<template>
    <view class="record-page">
        <!-- 顶部导航栏 -->
        <nav-bar title="转账记录"></nav-bar>

        <!-- 收入/支出切换标签 -->
        <view class="tab-group">
            <view class="tab-item" :class="{ active: recordType === 'income' }" @click="switchType('income')">
                <text>收入</text>
            </view>
            <view class="tab-item" :class="{ active: recordType === 'expense' }" @click="switchType('expense')">
                <text>支出</text>
            </view>
        </view>
        <!-- 主体内容区 -->
        <scroll-view class="record-content" scroll-y>

            <!-- 转账记录列表 -->
            <view class="record-list">
                <view class="record-item" v-for="(item, index) in filterdRecords" :key="index">
                    <view class="flex justify-between algin-center">
                        <!-- 记录标题 -->
                        <text>{{ item.title }}</text>
                        <!-- 补充信息（如对方账户） -->
                        <text>{{ item.amount }}</text>
                    </view>
                    <view v-if="item.desc">{{ item.desc }}</view>
                    <!-- 金额+时间 -->
                    <view class="record-time">{{ item.time }}</view>
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
            // 记录类型：income-收入，expense-支出
            recordType: "income",
            // 模拟转账记录数据
            recordList: [
                {
                    type: "income",
                    title: "账户充值",
                    amount: "USDT +150",
                    time: "2025-11-20 15:45:52"
                },
                {
                    type: "expense",
                    title: "账户转账",
                    desc: "对方账户: 61954657",
                    amount: "USDT -150",
                    time: "2025-11-20 15:45:52"
                },
                {
                    type: "expense",
                    title: "实名认证",
                    amount: "USDT -1",
                    time: "2025-11-20 15:45:52"
                }
            ]
        };
    },
    computed: {
        // 根据类型筛选记录
        filterdRecords() {
            return this.recordList.filter(item => item.type === this.recordType);
        }
    },
    methods: {
        // 切换记录类型
        switchType(type) {
            this.recordType = type;
        }
    }
};
</script>

<style scoped lang="scss">
/* 页面整体样式 */
.record-page {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: #ffffff;
}


/* 主体内容区 */
.record-content {
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


/* 记录列表 */
.record-list {
    margin-bottom: 40rpx;
}

.record-item {
    background-color: #fff;
    padding: 20rpx 30rpx;
    margin-bottom: 48rpx;
    
    font-weight: 600;
    font-size: 32rpx;
    color: #343434;
    line-height: 48rpx;
    box-shadow: 0rpx 8rpx 60rpx 0rpx rgba(54,41,183,0.07);
    border-radius: 20rpx;
}


.record-time {
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