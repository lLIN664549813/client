<template>
  <view class="startup-page">
    <view class="startup-content">
      <text class="title">GateT</text>
      <button class="button login-button button-primary" @click="handleLogin()">登录</button>
      <button class="button register-button" @click="handleUserRegister()">
        注册
      </button>
      <view class="startup-agreement">
        <text @click="handlePrivacy()">隐私条款</text>
        <text>|</text>
        <text @click="handleUserAgrement()">服务条款</text>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      globalConfig: getApp().globalData.config,
    };
  },
  created() {},
  onLoad() {
    //#ifdef H5
    if (getToken()) {
      this.$tab.reLaunch("/pages/home/index");
    }
    //#endif
  },
  methods: {
    // 用户登录
    handleLogin() {
      this.$tab.navigateTo(`/pages/login`);
    },
    // 用户注册
    handleUserRegister() {
      this.$tab.navigateTo(`/pages/register`);
    },
    // 隐私协议
    handlePrivacy() {
      let site = this.globalConfig.appInfo.agreements[0];
      this.$tab.navigateTo(
        `/pages/common/webview/index?title=${site.title}&url=${site.url}`,
      );
    },
    // 用户协议
    handleUserAgrement() {
      let site = this.globalConfig.appInfo.agreements[1];
      this.$tab.navigateTo(
        `/pages/common/webview/index?title=${site.title}&url=${site.url}`,
      );
    },
  },
};
</script>
<style scoped lang="scss">
.startup-page {
  width: 100%;
  height: 100vh;
  background-image: url("/static/images/startuo-page-bg.png");
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: top right;
  position: relative;
  .startup-content {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-weight: 400;
    font-size: 40rpx;
    .title {
      font-weight: 700;
      font-size: 80rpx;
      color: #141416;
      line-height: 112rpx;
    }
    .button {
      width: 600rpx;
      height: 92rpx;
      border-radius: 20rpx;
      line-height: 92rpx;
    }
    .login-button {
      margin-top: 94rpx;
      margin-bottom: 32rpx;
    }
    .register-button {
      color: #404040;
      margin-bottom: 32rpx;
      background-image: url("/static/images/button-bg.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }
    .startup-agreement {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30rpx;
      color: #979797;
      line-height: 36rpx;

      text {
        margin: 0 72rpx;
        white-space: nowrap;
      }
    }
  }
}
</style>
