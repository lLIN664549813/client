<template>
    <!-- 预览容器：整体外层，负责定位 -->
    <view class="image-preview-wrap" v-if="visible">
        <!-- 遮罩层：仅作为背景，层级低于图片容器，不干扰图片布局 -->
        <view class="preview-mask" @click="closeHandle"></view>

        <!-- 图片容器：独立层级，高于遮罩层，专注图片展示 -->
        <view class="preview-content">
            <!-- 多图滑动容器 -->
            <swiper class="preview-swiper" :current="currentIndex" @change="handleSwiperChange" :duration="300"
                circular>
                <swiper-item class="preview-swiper-item" v-for="(img, index) in imageList" :key="index">
                    <!-- 图片缩放容器 -->
                    <view class="img-scale-wrap" ref="scaleWrap" :style="{
                        transform: `scale(${scale}) translate(${offsetX}px, ${offsetY}px)`,
                        transition: isMoving ? 'none' : 'transform 0.2s ease'
                    }" @touchstart="handleTouchStart" @touchmove="handleTouchScale" @touchend="handleTouchEnd">
                        <!-- 加载中/失败占位 -->
                        <view class="img-loading" v-if="!loadedList[index] && !errorList[index]">
                            <text class="loading-text">加载中...</text>
                        </view>
                        <view class="img-error" v-if="errorList[index]">
                            <text class="error-text">图片加载失败</text>
                        </view>
                        <!-- 预览图片 -->
                        <image class="preview-img" :src="img" mode="widthFix" @load="handleImgLoad(index)"
                            @error="handleImgError(index)" lazy-load />
                    </view>
                </swiper-item>
            </swiper>
        </view>

        <!-- 操作按钮：独立层级，不干扰图片 -->
        <view class="close-btn" @click="closeHandle">×</view>
        <view class="page-tip" v-if="imageList.length > 1">
            <text class="tip-text">{{ currentIndex + 1 }}/{{ imageList.length }}</text>
        </view>
    </view>
</template>

<script>
export default {
    name: "ImagePreview",
    props: {
        visible: { type: Boolean, default: false },
        imageList: { type: Array, default: () => [] },
        currentIndex: { type: Number, default: 0 }
    },
    data() {
        return {
            scale: 1,
            offsetX: 0,
            offsetY: 0,
            startX: 0,
            startY: 0,
            startScale: 1,
            startDistance: 0,
            isMoving: false,
            loadedList: [],
            errorList: []
        };
    },
    watch: {
        currentIndex() { this.resetTransform(); },
        visible(newVal) {
            if (newVal) {
                this.resetTransform();
                this.loadedList = new Array(this.imageList.length).fill(false);
                this.errorList = new Array(this.imageList.length).fill(false);
            }
        }
    },
    methods: {
        resetTransform() {
            this.scale = 1;
            this.offsetX = 0;
            this.offsetY = 0;
            this.isMoving = false;
        },
        closeHandle() { this.$emit("close"); },
        handleSwiperChange(e) {
            this.$emit("change", e.detail.current);
            this.currentIndex = e.detail.current;
        },
        calcDistance(touches) {
            const x = touches[1].clientX - touches[0].clientX;
            const y = touches[1].clientY - touches[0].clientY;
            return Math.sqrt(x * x + y * y);
        },
        handleTouchStart(e) {
            this.isMoving = true;
            const touches = e.touches;
            if (touches.length === 1) {
                this.startX = touches[0].clientX;
                this.startY = touches[0].clientY;
            } else if (touches.length === 2) {
                this.startDistance = this.calcDistance(touches);
                this.startScale = this.scale;
            }
        },
        handleTouchScale(e) {
            const touches = e.touches;
            if (touches.length === 1 && this.scale > 1) {
                this.offsetX = e.touches[0].clientX - this.startX + this.offsetX;
                this.offsetY = e.touches[0].clientY - this.startY + this.offsetY;
                this.startX = e.touches[0].clientX;
                this.startY = e.touches[0].clientY;
            } else if (touches.length === 2) {
                const currentDistance = this.calcDistance(touches);
                this.scale = (currentDistance / this.startDistance) * this.startScale;
                this.scale = Math.max(1, Math.min(3, this.scale));
            }
        },
        handleTouchEnd() {
            this.isMoving = false;
            const wrapWidth = uni.getSystemInfoSync().windowWidth;
            const maxOffsetX = (this.scale - 1) * wrapWidth / 2;
            this.offsetX = Math.max(-maxOffsetX, Math.min(maxOffsetX, this.offsetX));
            const wrapHeight = uni.getSystemInfoSync().windowHeight;
            const maxOffsetY = (this.scale - 1) * wrapHeight / 2;
            this.offsetY = Math.max(-maxOffsetY, Math.min(maxOffsetY, this.offsetY));
        },
        handleImgLoad(index) { this.loadedList[index] = true; },
        handleImgError(index) { this.errorList[index] = true; }
    }
};
</script>

<style lang="scss" scoped>
// 全局变量
$close-btn-size: 80rpx;
$text-white: #fff;
$mask-bg: rgba(0, 0, 0, 0.9);
$animation-duration: 0.3s;

// 预览外层容器：仅负责整体定位，不干扰内部布局
.image-preview-wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 99999;
    overflow: hidden;

    // 1. 遮罩层：纯背景，层级最低，无内边距/边距，不影响图片
    .preview-mask {
        position: absolute; // 绝对定位，作为底层背景
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: $mask-bg;
        z-index: 1; // 层级低于图片容器
        // 移除所有可能干扰布局的样式
        margin: 0;
        padding: 0;
        border: none;
    }

    // 2. 图片内容容器：独立层级，居中展示，不被遮罩层干扰
    .preview-content {
        position: relative; // 相对定位，承载图片swiper
        z-index: 2; // 层级高于遮罩层
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        margin: 0;

        // swiper容器：填满内容容器，专注图片展示
        .preview-swiper {
            width: 100%;
            height: 100%;

            .preview-swiper-item {
                display: flex;
                align-items: center;
                justify-content: center;

                // 图片缩放容器：仅负责图片交互，无多余样式
                .img-scale-wrap {
                    touch-action: none;
                    transform-origin: center center;
                    will-change: transform;
                    position: relative;
                    z-index: 3; // 高于内容容器

                    // 预览图片：自适应，无变形，不被遮挡
                    .preview-img {
                        max-width: 100%;
                        max-height: 100vh;
                        display: block;
                        // 移除所有可能导致变形的样式
                        border: none;
                        margin: 0;
                        padding: 0;
                    }

                    // 加载/失败占位：居中显示，不干扰图片
                    .img-loading,
                    .img-error {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        z-index: 4;

                        .loading-text,
                        .error-text {
                            font-size: 28rpx;
                            color: $text-white;
                        }
                    }
                }
            }
        }
    }

    // 3. 操作元素：独立层级，不干扰图片
    .close-btn {
        position: absolute;
        top: 40rpx;
        right: 40rpx;
        width: $close-btn-size;
        height: $close-btn-size;
        line-height: $close-btn-size;
        text-align: center;
        font-size: 48rpx;
        color: $text-white;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        z-index: 10; // 最高层级，不遮挡图片

        &:active {
            background-color: rgba(0, 0, 0, 0.7);
        }
    }

    .page-tip {
        position: absolute;
        bottom: 40rpx;
        left: 50%;
        transform: translateX(-50%);
        padding: 8rpx 20rpx;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 20rpx;
        z-index: 10;

        .tip-text {
            font-size: 28rpx;
            color: $text-white;
        }
    }
}
</style>