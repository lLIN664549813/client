<template>
  <view class="message">
    <!-- 自定义导航栏 -->
    <nav-bar title="消息" :showBack="false"></nav-bar>
    <uni-list :border="true">
      <!-- 显示圆形头像 -->
      <uni-list-chat :avatar-circle="true" title="uni-app"
        avatar="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png" note="您收到一条新的消息"
        time="2020-02-02 20:20" badge-positon="left" badge-text="99" link @click="goToChat"></uni-list-chat>

    </uni-list>

  </view>
</template>

<script>
import NavBar from "@/components/nav-bar/nav-bar.vue";
export default {
  components: {
    NavBar,
  },
  data() {
    return {};
  },
  methods: {
    goToChat() {
      // 跳转到消息详情页面，并传递参数
      uni.navigateTo({
        url: '/pages/message/details?id=1&name=张三',
      });
    }
  }
};
</script>

<style scoped lang="scss"></style>
