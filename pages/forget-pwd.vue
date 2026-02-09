<template>
  <view class="normal-login-container">
    <view>
        <uni-icons type="left" size="24" color="#333333" @click="goBack()"></uni-icons>
    </view>
    <view class="login-form-content">
      <view class="logo-content align-center justify-center flex">
        <text class="title">忘记密码</text>
      </view>
      <view class="input-item flex align-center">
        <input
          v-model="registerForm.username"
          class="input"
          type="text"
          placeholder="请输入您的邮箱"
          maxlength="30"
        />
      </view>
      <view class="input-item flex align-center">
        <input
          v-model="registerForm.password"
          type="password"
          class="input"
          placeholder="验证码"
          maxlength="20"
        />
        <text class="get-code">获取验证码</text>
      </view>
      <view class="input-item flex align-center">
        <input
          v-model="registerForm.confirmPassword"
          type="password"
          class="input"
          placeholder="密码（字母及数字不少于8位）"
          maxlength="20"
        />
      </view>
      <view class="input-item flex align-center">
        <input
          v-model="registerForm.confirmPassword"
          type="password"
          class="input"
          placeholder="确认密码"
          maxlength="20"
        />
      </view>
      <view class="action-btn">
        <button
          @click="handleRegister()"
          class="register-btn button-primary"
        >
          确认
        </button>
      </view>
    </view>
  </view>
</template>

<script>
import { getCodeImg, register } from "@/api/login";

export default {
  data() {
    return {
      codeUrl: "",
      captchaEnabled: true,
      globalConfig: getApp().globalData.config,
      registerForm: {
        username: "",
        password: "",
        confirmPassword: "",
        code: "",
        uuid: "",
      },
    };
  },
  created() {
    this.getCode();
  },
  methods: {
    // 用户登录
    handleUserLogin() {
      this.$tab.navigateTo(`/pages/login`);
    },
    // 获取图形验证码
    getCode() {
      getCodeImg().then((res) => {
        this.captchaEnabled =
          res.captchaEnabled === undefined ? true : res.captchaEnabled;
        if (this.captchaEnabled) {
          this.codeUrl = "data:image/gif;base64," + res.img;
          this.registerForm.uuid = res.uuid;
        }
      });
    },
    // 注册方法
    async handleRegister() {
      if (this.registerForm.username === "") {
        this.$modal.msgError("请输入您的账号");
      } else if (this.registerForm.password === "") {
        this.$modal.msgError("请输入您的密码");
      } else if (this.registerForm.confirmPassword === "") {
        this.$modal.msgError("请再次输入您的密码");
      } else if (
        this.registerForm.password !== this.registerForm.confirmPassword
      ) {
        this.$modal.msgError("两次输入的密码不一致");
      } else if (this.registerForm.code === "" && this.captchaEnabled) {
        this.$modal.msgError("请输入验证码");
      } else {
        this.$modal.loading("注册中，请耐心等待...");
        this.register();
      }
    },
    // 用户注册
    async register() {
      register(this.registerForm)
        .then((res) => {
          this.$modal.closeLoading();
          uni.showModal({
            title: "系统提示",
            content:
              "恭喜你，您的账号 " + this.registerForm.username + " 注册成功！",
            success: function (res) {
              if (res.confirm) {
                uni.redirectTo({ url: `/pages/login` });
              }
            },
          });
        })
        .catch(() => {
          if (this.captchaEnabled) {
            this.getCode();
          }
        });
    },
    goBack() {
      // 返回上一个页面
      uni.navigateBack({
        delta: 1,
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
  padding: 54rpx;
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
      margin-top: 34rpx;
      padding: 40rpx 32rpx;

      .input {
        width: 100%;
        font-size: 40rpx;
        line-height: 48rpx;
        text-align: left;
      }
      .get-code {
        font-weight: 500;
        font-size: 32rpx;
        color: #9757d7;
        line-height: 48rpx;
        white-space: nowrap;
      }
    }

    .register-btn {
      margin: 40rpx;
    }
  }
}
</style>
