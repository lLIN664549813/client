<template>
    <!-- 弹窗遮罩层：点击可关闭（可配置） -->
    <view class="popup-mask" v-if="props.visible" :class="{ 'mask-animate': animate }" @click="maskClickHandle">
        <!-- 弹窗主体：支持居中/底部弹起两种模式 -->
        <view class="popup-container" :class="[
            position,
            { 'container-animate': animate },
            { 'safe-area-bottom': position === 'bottom' }
        ]" @click.stop>
            <!-- 弹窗标题（可选） -->
            <view class="popup-header" v-if="title">
                <text class="popup-title">{{ title }}</text>
                <!-- 关闭按钮（可选） -->
                <view class="close-btn" v-if="showClose" @click="closeHandle">×</view>
            </view>

            <!-- 弹窗内容区：支持自定义插槽 -->
            <view class="popup-content">
                <slot name="content">
                    <text class="default-content">{{ content }}</text>
                </slot>
            </view>

            <!-- 弹窗按钮组（可选）：支持单/双按钮 -->
            <view class="popup-footer" v-if="buttons.length > 0">
                <view class="popup-btn" v-for="(btn, index) in buttons" :key="index" :class="[
                    btn.type || 'default',
                    { 'single-btn': buttons.length === 1 }
                ]" @click="btnClickHandle(btn, index)">
                    <text class="btn-text">{{ btn.text }}</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: "CustomPopup",
    props: {
        // 核心控制：弹窗显示/隐藏
        visible: {
            type: Boolean,
            default: true
        },
        // 弹窗位置：center（居中）/ bottom（底部弹起）
        position: {
            type: String,
            default: "center",
            validator: val => ["center", "bottom"].includes(val)
        },
        // 弹窗标题（可选）
        title: {
            type: String,
            default: ""
        },
        // 弹窗默认内容（可选，优先用插槽）
        content: {
            type: String,
            default: ""
        },
        // 是否显示关闭按钮
        showClose: {
            type: Boolean,
            default: false
        },
        // 是否开启动画
        animate: {
            type: Boolean,
            default: true
        },
        // 点击遮罩层是否关闭弹窗
        maskClose: {
            type: Boolean,
            default: true
        },
        // 按钮配置：[{ text: '确认', type: 'primary' }, { text: '取消', type: 'default' }]
        buttons: {
            type: Array,
            default: () => []
        }
    },
    watch: {
        // 深度监听
        visible: {
            deep: true,
            handler(val) {
                // 监听按钮配置变化，重置按钮类型
                console.log(val,'9999');
                
            }
        }
    },
    methods: {
        // 关闭弹窗（向父组件传参）
        closeHandle() {
            this.$emit("close");
        },
        // 遮罩层点击事件
        maskClickHandle() {
            if (this.maskClose) {
                this.closeHandle();
            }
        },
        // 按钮点击事件
        btnClickHandle(btn, index) {
            this.$emit("btnClick", { btn, index });
            // 按钮点击后自动关闭（可通过btn.noClose控制）
            if (!btn.noClose) {
                this.closeHandle();
            }
        }
    }
};
</script>

<style lang="scss" scoped>
// 全局变量：适配App端的颜色/尺寸/动画
$primary-color: #9933ff; // 主题紫（匹配之前的UI风格）
$default-color: #666; // 默认按钮色
$cancel-color: #999; // 取消按钮色
$text-color: #333; // 正文色
$title-color: #111; // 标题色
$border-color: #eee; // 边框色
$popup-radius: 16rpx; // 弹窗圆角
$animation-duration: 0.3s; // 动画时长

// 遮罩层样式
.popup-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    opacity: 0;
    visibility: hidden;

    // 动画效果
    &.mask-animate {
        transition: all $animation-duration ease;
        opacity: 1;
        visibility: visible;
    }

    // 弹窗容器
    .popup-container {
        background-color: #fff;
        border-radius: $popup-radius;
        width: 80%; // 居中弹窗宽度
        max-width: 600rpx;
        transform: scale(0.8) translateZ(0);
        opacity: 0;
        visibility: hidden;

        // 居中弹窗
        &.center {
            margin: 0 20rpx;
        }

        // 底部弹窗
        &.bottom {
            width: 100%;
            border-radius: $popup-radius $popup-radius 0 0;
            margin: 0;
            transform: translateY(100%) translateZ(0);
            align-self: flex-end;
        }

        // 动画效果
        &.container-animate {
            transition: all $animation-duration ease;
            transform: scale(1) translateZ(0);
            opacity: 1;
            visibility: visible;
        }

        // 底部弹窗适配iOS安全区（小黑条）
        &.safe-area-bottom {
            padding-bottom: env(safe-area-inset-bottom);
            box-sizing: border-box;
        }

        // 弹窗头部
        .popup-header {
            padding: 30rpx 30rpx 10rpx;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1rpx solid $border-color;

            .popup-title {
                font-size: 32rpx;
                font-weight: bold;
                color: $title-color;
            }

            .close-btn {
                font-size: 36rpx;
                color: $default-color;
                width: 60rpx;
                height: 60rpx;
                line-height: 60rpx;
                text-align: center;
            }
        }

        // 弹窗内容区
        .popup-content {
            padding: 30rpx;
            min-height: 100rpx;

            .default-content {
                font-size: 28rpx;
                color: $text-color;
                line-height: 1.6;
                text-align: center;
            }
        }

        // 弹窗按钮组
        .popup-footer {
            display: flex;
            border-top: 1rpx solid $border-color;

            .popup-btn {
                flex: 1;
                height: 88rpx;
                line-height: 88rpx;
                text-align: center;
                font-size: 30rpx;

                // 单按钮样式
                &.single-btn {
                    flex: none;
                    width: 100%;
                }

                // 按钮文字
                .btn-text {
                    color: #fff;
                }

                // 按钮类型：默认/主要/取消
                &.default {
                    background-color: $default-color;
                }

                &.primary {
                    background-color: $primary-color;
                }

                &.cancel {
                    background-color: $cancel-color;
                    border-right: 1rpx solid $border-color;
                }
            }
        }
    }
}
</style>