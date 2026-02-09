<template>
  <!-- 无实际内容，仅用于触发弹窗 -->
  <view class="work">
    <view class="popup-mask" v-if="popupVisible" @click="handleModel()">
      <view class="popup-content" @click.stop>
        <!-- 弹窗标题 -->
        <view class="popup-title">发布订单</view>

        <!-- 买单/卖单切换按钮 -->
        <view class="type-switch-group">
          <button class="switch-btn" :class="{ active: activeType === 'buy' }" @click="activeType = 'buy'">
            发布买单
          </button>
          <button class="switch-btn" :class="{ active: activeType === 'sell' }" @click="activeType = 'sell'">
            发布卖单
          </button>
        </view>

        <!-- 操作按钮组 -->
        <view class="btn-group">
          <button class="reset-btn" @click="handleReset">重置</button>
          <button class="confirm-btn button-primary" @click="handleConfirm">确认</button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      popupVisible: true, // 弹窗显示/隐藏状态
      activeType: "buy" // 默认选中「发布买单」，可选值：buy/sell
    };
  },
  onLoad() {
    this.popupVisible = true;
  },
  methods: {
    // 切换为发布买单/卖单的重置逻辑
    handleReset() {
      this.activeType = "buy"; // 重置为默认的发布买单
      uni.showToast({
        title: "已重置为发布买单",
        icon: "none", 
        duration: 1500
      });
      uni.navigateBack({
        delta: 1,
      });
      // uni.navigateTo({ url: '/pages/home/index' });
    },
    handleModel() { 
      uni.navigateBack({
        delta: 1,
      });
    },
    // 确认发布逻辑
    handleConfirm() {
      if(this.activeType === "sell"){

        uni.navigateTo({ url: '/pages/work/publish-sale/index' })
      }else{
        uni.navigateTo({ url: '/pages/work/publish-payment/index' })
      }
    }
  },
  onShow() {
    // 1. 获取页面栈，找到点击中间按钮前的活跃Tab页
    // const pages = getCurrentPages();
    // let prevTabIndex = 0; // 默认切回首页
    // if (pages.length > 1) {
    //   const prevPagePath = `/${pages[pages.length - 2].route}`;
    //   // 匹配TabBar的索引（首页0/订单1/中间2/消息3/我的4）
    //   prevTabIndex = [
    //     "/pages/home/home",
    //     "/pages/order/order",
    //     "/pages/message/message",
    //     "/pages/mine/mine"
    //   ].findIndex(path => path === prevPagePath);
    //   if (prevTabIndex === -1 || prevTabIndex === 2) prevTabIndex = 0;
    // }

    // 2. 触发弹窗（可替换为自定义弹窗组件）
    // uni.showModal({
    //   title: "操作中心",
    //   content: "这是中间按钮触发的弹窗",
    //   confirmText: "确认操作",
    //   cancelText: "取消",
    //   success: (res) => {
    //     if (res.confirm) {
    //       // 弹窗确认后的业务逻辑（如发布、添加等）
    //       uni.showToast({ title: "操作成功", icon: "success" });
    //     }
    //     // 3. 弹窗关闭后，切回之前的Tab页
    //     uni.switchTab({
    //       url: [
    //         "/pages/home/index",
    //         "/pages/order/index",
    //         "/pages/message/index",
    //         "/pages/mine/index"
    //       ][prevTabIndex]
    //     });
    //   }
    // });
    // 在占位页的onShow中添加
    // uni.createSelectorQuery()
    //   .select('.uni-tabbar__item:nth-child(3)') // 中间按钮的原生class
    //   .node()
    //   .exec(res => {
    //     if (res[0].node) {
    //       res[0].node.style.transform = 'scale(1.1)';
    //       setTimeout(() => {
    //         res[0].node.style.transform = 'scale(1)';
    //       }, 200);
    //     }
    //   });

  }
};
</script>
<style lang="scss" scoped>
.work {
  .popup-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* 灰色半透明背景，匹配UI */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }

  /* 弹窗内容容器 */
  .popup-content {
    width: 70%;
    /* 适配UI的弹窗宽度 */
    background-color: #fff;
    border-radius: 16rpx;
    padding: 40rpx 30rpx;
    box-sizing: border-box;
  }

  /* 弹窗标题 */
  .popup-title {
    font-size: 36rpx;
    font-weight: bold;
    text-align: center;
    margin-bottom: 40rpx;
    color: #333;
  }

  /* 买单/卖单切换按钮组 */
  .type-switch-group {
    display: flex;
    justify-content: center;
    gap: 20rpx;
    margin-bottom: 40rpx;
  }

  .switch-btn {
    padding: 22rpx 36rpx;
    background: #F6F7FB;
    border: none;
    border-radius: 20rpx;
    font-weight: 400;
    font-size: 40rpx;
    color: #9B9AA0;
    line-height: 46rpx;
    white-space: nowrap;
  }

  /* 选中的切换按钮样式（匹配UI的高亮） */
  .switch-btn.active {
    background: #FFFFFF;
    box-shadow: 0rpx 8rpx 20rpx 0rpx rgba(0, 0, 0, 0.3);
    border-radius: 20rpx 20rpx 20rpx 20rpx;
    border: 4rpx solid #FFFFFF;
  }

  /* 操作按钮组 */
  .btn-group {
    display: flex;
    justify-content: space-between;
    gap: 20rpx;
  }

  /* 重置按钮样式（紫色边框+白色背景） */
  .reset-btn {
    flex: 1;
    height: 70rpx;
    line-height: 70rpx;
    background-color: #fff;
    color: #404040;
    border: 2rpx solid #9933ff;
    border-radius: 8rpx;
    font-size: 28rpx;
  }

  /* 确认按钮样式（紫色渐变背景） */
  .confirm-btn {
    flex: 1;
    height: 70rpx;
    line-height: 70rpx;
    /* 紫色渐变，匹配UI */
    color: #fff;
    border: none;
    border-radius: 8rpx;
    font-size: 28rpx;
  }

  /* 去除uniapp默认按钮样式 */
  button::after {
    border: none;
  }
}
</style>