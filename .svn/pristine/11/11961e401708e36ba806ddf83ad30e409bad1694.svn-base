<template>
    <!-- 底部导航栏容器：适配iOS安全区 + 固定底部 -->
    <view class="custom-tabbar" :style="{ paddingBottom: safeAreaBottom + 'px' }">
        <!-- 左侧Tab项：首页、订单 -->
        <view class="tab-group tab-group-left">
            <view class="tab-item" @click="switchTab('/pages/home/index')">
                <uni-icons type="home" size="24" :color="activePath === '/pages/home/index' ? '#9933ff' : '#666'" />
                <text class="tab-text"
                    :style="{ color: activePath === '/pages/home/index' ? '#9933ff' : '#666' }">首页</text>
            </view>
            <view class="tab-item" @click="switchTab('/pages/order/order')">
                <uni-icons type="list" size="24" :color="activePath === '/pages/order/index' ? '#9933ff' : '#666'" />
                <text class="tab-text"
                    :style="{ color: activePath === '/pages/order/index' ? '#9933ff' : '#666' }">订单</text>
            </view>
        </view>

        <!-- 中间突出按钮（核心） -->
        <view class="middle-btn-wrap">
            <view class="middle-btn" @click="handleMiddleClick">
                <!-- <uni-icons type="plus" size="28" color="#fff" /> -->
                <image class="middle-btn-image" src="/static/images/tabbar/add_order.png" mode="aspectFill"></image>
            </view>
        </view>

        <!-- 右侧Tab项：消息、我的 -->
        <view class="tab-group tab-group-right">
            <view class="tab-item" @click="switchTab('/pages/message/index')">
                <uni-icons type="chat" size="24" :color="activePath === '/pages/message/index' ? '#9933ff' : '#666'" />
                <text class="tab-text"
                    :style="{ color: activePath === '/pages/message/index' ? '#9933ff' : '#666' }">消息</text>
            </view>
            <view class="tab-item" @click="switchTab('/pages/mine/index')">
                <uni-icons type="person" size="24" :color="activePath === '/pages/mine/index' ? '#9933ff' : '#666'" />
                <text class="tab-text"
                    :style="{ color: activePath === '/pages/mine/index' ? '#9933ff' : '#666' }">我的</text>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: "CustomTabBar",
    data() {
        return {
            activePath: "", // 当前激活的Tab页面路径
            safeAreaBottom: 0 // 底部安全区高度（适配iOS小黑条）
        };
    },
    created() {
        // 1. 获取当前页面路径，初始化选中状态
        this.updateActivePath();
        // 2. 获取底部安全区高度，适配App端
        this.getSafeArea();
    },
    onShow() {
        // 页面切换后更新选中状态
        this.updateActivePath();
    },
    methods: {
        // 更新当前激活的Tab路径
        updateActivePath() {
            const pages = getCurrentPages();
            const currentPage = pages[pages.length - 1];
            this.activePath = `/${currentPage.route}`;
        },
        // 获取底部安全区高度（App端核心适配）
        getSafeArea() {
            const systemInfo = uni.getSystemInfoSync();
            if (systemInfo.safeArea) {
                this.safeAreaBottom = systemInfo.screenHeight - systemInfo.safeArea.bottom;
            }
        },
        // 切换Tab页（首页/订单/消息/我的）
        switchTab(path) {
            uni.switchTab({ url: path });
        },
        // 中间突出按钮点击事件（触发弹窗，而非跳转）
        handleMiddleClick() {
            uni.showModal({
                title: "操作中心",
                content: "这是中间突出按钮触发的弹窗",
                confirmText: "确认操作",
                cancelText: "取消",
                success: (res) => {
                    if (res.confirm) {
                        // 这里写中间按钮的业务逻辑（如发布、添加等）
                        uni.showToast({ title: "操作成功", icon: "success" });
                    }
                }
            });
        }
    }
};
</script>

<style scoped lang="scss">
/* 导航栏容器：固定底部 + 基础样式 */
.custom-tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 90rpx;
    background: #fff;
    border-top: 1px solid #eee;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    z-index: 999;
    /* 确保在页面内容上层 */
}

/* 左右侧Tab组：均分宽度 */
.tab-group {
    width: 40%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
}

/* 单个Tab项：垂直布局 */
.tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}

/* Tab文字样式 */
.tab-text {
    font-size: 20rpx;
    margin-top: 4rpx;
}

/* 中间按钮容器：占位 + 居中 */
.middle-btn-wrap {
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

/* 中间突出按钮：核心样式（圆形 + 向上偏移 + 阴影） */
.middle-btn {
    position: absolute;
    top: -25rpx;
    /* 向上偏移25rpx，实现“突出”效果 */
    width: 140rpx;
    height: 140rpx;
    border-radius: 50%;
    /* 圆形 */
    background: #9933ff;
    /* 紫色主色，匹配UI */
    display: flex;
    align-items: center;
    justify-content: center;
    /* box-shadow: 0 4rpx 12rpx rgba(153, 51, 255, 0.4); */
    /* 阴影增强突出感 */
    transition: transform 0.2s;

    .middle-btn-image {

        width: 100%;
        height: 100%;
    }
}

.middle-btn:active {
    transform: scale(0.95);
    /* 点击时轻微缩小 */
}
</style>