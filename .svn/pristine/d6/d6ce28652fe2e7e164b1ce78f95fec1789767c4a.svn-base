<template>
    <!-- 导航栏容器：适配状态栏高度，兼容多端 -->
    <view class="nav-bar-container" :style="{ backgroundColor: bgColor }">
        <!-- 状态栏占位：适配手机顶部状态栏高度 -->
        <view class="status-bar" :style="{ height: statusBarHeight + 'px' }"></view>

        <!-- 导航栏主体 -->
        <view class="nav-bar-main" :style="{ height: navBarHeight + 'px' }">
            <!-- 左侧：返回按钮 -->
            <view class="nav-bar-left" v-if="showBack">
                <uni-icons type="left" size="24" :color="textColor" class="back-icon" @click="handleBack"></uni-icons>
            </view>
            <!-- 左侧占位（无返回按钮时对齐） -->
            <view class="nav-bar-left" v-else></view>

            <!-- 中间：标题 -->
            <view class="nav-bar-center">
                <text class="nav-bar-title" :style="{ color: textColor }">{{ title }}</text>
            </view>

            <!-- 右侧：自定义内容（slot） -->
            <view class="nav-bar-right">
                <slot name="right"></slot>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: "NavBar",
    props: {
        // 导航栏标题（必填）
        title: {
            type: String,
            default: ""
        },
        // 是否显示返回按钮（默认显示）
        showBack: {
            type: Boolean,
            default: true
        },
        // 导航栏背景色（默认白色）
        bgColor: {
            type: String,
            default: "#ffffff"
        },
        // 文字/图标颜色（默认黑色）
        textColor: {
            type: String,
            default: "#333333"
        },
        // 自定义返回按钮点击事件（可选）
        backCallback: {
            type: Function,
            default: null
        }
    },
    data() {
        return {
            statusBarHeight: 0, // 状态栏高度
            navBarHeight: 44 // 导航栏主体高度（默认44px，适配大部分端）
        };
    },
    created() {
        // 获取系统信息，适配状态栏高度（多端兼容）
        this.getSystemInfo();
    },
    onLoad() {
        // 获取系统信息，适配状态栏高度（多端兼容）
        this.getSystemInfo();
    },
    methods: {
        // 获取系统信息，处理多端适配
        getSystemInfo() {
            const systemInfo = uni.getSystemInfoSync();
            // 状态栏高度（所有端通用）
            this.statusBarHeight = systemInfo.statusBarHeight;

            // 适配微信小程序/QQ小程序的导航栏高度
            if (systemInfo.platform === "ios" || systemInfo.platform === "android") {
                // 微信小程序专属配置
                if (uni.getMenuButtonBoundingClientRect) {
                    const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
                    // 计算导航栏高度（适配胶囊按钮）
                    this.navBarHeight = menuButtonInfo.height + (menuButtonInfo.top - systemInfo.statusBarHeight) * 2;
                }
            }
            // App/H5端使用默认44px即可
        },
        // 处理返回逻辑
        handleBack() {
            // 优先执行自定义回调
            if (this.backCallback) {
                this.backCallback();
                return;
            }
            // 默认返回上一页（兼容多端导航逻辑）
            uni.navigateBack({
                delta: 1,
                fail: () => {
                    // 回退失败时（如首页），不做操作或自定义处理
                    console.log("已是首页，无法返回");
                }
            });
        }
    }
};
</script>

<style scoped>
/* 导航栏容器：包含状态栏+主体 */
.nav-bar-container {
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    /* 底部分隔线，可选 */
}

/* 状态栏占位：高度动态计算 */
.status-bar {
    width: 100%;
}

/* 导航栏主体：flex布局，水平均分 */
.nav-bar-main {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 30rpx;
}

/* 左侧区域：返回按钮 */
.nav-bar-left {
    width: 80rpx;
    height: 100%;
    display: flex;
    align-items: center;
}

.back-icon {
    cursor: pointer;
}

/* 中间区域：标题 */
.nav-bar-center {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.nav-bar-title {
    font-weight: 400;
    font-size: 36rpx;
    color: #0B1526;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* 右侧区域：自定义内容 */
.nav-bar-right {
    width: 80rpx;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
</style>