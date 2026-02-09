<template>
  <view class="normal-login-container">
    <view class="login-form-content">
      <view class="logo-content align-center justify-center flex">
        <text class="title">登录</text>
      </view>
      <view class="input-item flex align-center">
        <input
          v-model="loginForm.username"
          class="input"
          type="text"
          placeholder="请输入账号"
          maxlength="30"
        />
      </view>
      <view class="input-item flex align-center">
        <input
          v-model="loginForm.password"
          type="password"
          class="input"
          placeholder="请输入密码"
          maxlength="20"
        />
      </view>
      <view class="flex justify-end">
        <text class="forget-password" @click="goForgetPwd()">忘记密码？</text>
      </view>
      <view class="action-btn">
        <view class="flex justify-center">
          <text class="no-account">没有账户？</text>
          <text @click="handleUserRegister()" class="register-link">注册</text>
        </view>
        <button @click="handleLogin()" class="login-btn block lg button-primary">登录</button>
      </view>
    </view>
  </view>
</template>

<script>
import { getCodeImg } from "@/api/login";
import { getToken } from "@/utils/auth";

export default {
  data() {
    return {
      codeUrl: "",
      captchaEnabled: true,
      // 用户注册开关
      register: false,
      globalConfig: getApp().globalData.config,
      loginForm: {
        username: "admin",
        password: "admin123",
        code: "",
        uuid: "",
      },
    };
  },
  created() {
    this.getCode();
  },
  onLoad() {
    //#ifdef H5
    if (getToken()) {
      this.$tab.reLaunch("/pages/home/index");
    }
    //#endif
  },
  methods: {
    // 用户注册
    handleUserRegister() {
      this.$tab.navigateTo(`/pages/register`);
    },
    // 忘记密码
    goForgetPwd() {
      this.$tab.navigateTo(`/pages/forget-pwd`);
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
    // 获取图形验证码
    getCode() {
      getCodeImg().then((res) => {
        this.captchaEnabled =
          res.captchaEnabled === undefined ? true : res.captchaEnabled;
        if (this.captchaEnabled) {
          this.codeUrl = "data:image/gif;base64," + res.img;
          // 获取图片上面的运算结果
          this.loginForm.code = res.uniqueKey;

          this.loginForm.uuid = res.uuid;
        }
      });
    },
    // 登录方法
    async handleLogin() {
      // 暂时注释掉验证码验证逻辑，直接登录
      this.$tab.reLaunch("/pages/home/index");
      return
      if (this.loginForm.username === "") {
        this.$modal.msgError("请输入账号");
      } else if (this.loginForm.password === "") {
        this.$modal.msgError("请输入密码");
      } else if (this.loginForm.code === "" && this.captchaEnabled) {
        this.$modal.msgError("请输入验证码");
      } else {
        this.$modal.loading("登录中，请耐心等待...");
        this.pwdLogin();
      }
    },
    // 密码登录
    async pwdLogin() {
      this.$store
        .dispatch("Login", this.loginForm)
        .then(() => {
          this.$modal.closeLoading();
          this.loginSuccess();
        })
        .catch(() => {
          if (this.captchaEnabled) {
            this.getCode();
          }
        });
    },
    // 登录成功后，处理函数
    loginSuccess(result) {
      // 设置用户信息
      this.$store.dispatch("GetInfo").then((res) => {
        this.$tab.reLaunch("/pages/home/index");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.normal-login-container {
  width: 100%;
  height: 100vh;
  background-image: url("/static/images/login-bg.png");
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 70%;
  padding: 60rpx 48rpx;
  position: relative;

  .login-form-content {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    margin: 0 auto;
    width: 80%;
    .logo-content {
      .title {
        font-weight: 700;
        font-size: 50rpx;
        color: #141416;
        line-height: 80rpx;
      }
    }

    .input-item {
      height: 112rpx;
      background: #fcfcfd;
      border-radius: 20rpx;
      margin-bottom: 56rpx;
      padding: 40rpx 32rpx;

      .input {
        width: 100%;
        font-size: 40rpx;
        line-height: 48rpx;
        text-align: left;
      }
    }
    .forget-password {
      font-weight: 500;
      font-size: 32rpx;
      color: #9757d7;
      line-height: 32rpx;
    }
    .register-link {
      color: #9757d7;
      margin-left: 10rpx;
      font-size: 30rpx;
    }
    .no-account {
      font-size: 30rpx;
      color: #979797;
    }

    .login-btn {
      margin-top: 40rpx;
    }
  }
  .action-btn {
    margin-top: 100rpx;
  }
}
</style>
