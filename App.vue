<script>
import config from './config'
import { getToken } from '@/utils/auth'
export default {
  onLaunch: function () {
    this.initApp()
    uni.onTabBarMidButtonTap(() => {
      // this.showDialog = true
      console.log(this.showDialog, '中间按钮被点击');
      //跳转到非TabBar页面
      uni.navigateTo({ url: '/pages/work/index' });
      //或者跳转到其他TabBar页面
      // uni.switchTab({ url:'/pages/work/index' });
    })
  },
  methods: {
    onConfirm() {
      console.log('点击了确认按钮');
      this.showDialog = false
    },
    onCancel() {
      console.log('点击了取消按钮');
      this.showDialog = false
    },
    // 初始化应用
    initApp() {
      // 初始化应用配置
      this.initConfig()
      // 检查用户登录状态
      //#ifdef H5
      this.checkLogin()
      //#endif
    },
    initConfig() {
      this.globalData.config = config
    },
    checkLogin() {
      if (!getToken()) {
        this.$tab.reLaunch('/pages/login')
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/static/scss/index.scss';

page {
  font-family: Inter, Inter;
  font-size: 32rpx;
}
</style>
