import { getToken } from '@/utils/auth'

// 登录页面
const loginPage = "/pages/login"
// 启动页面
const startupPage = "/pages/startup-page"
  
// 页面白名单
const whiteList = [
  '/pages/login', '/pages/register', '/pages/common/webview/index','/pages/startup-page', '/pages/forget-pwd'
]

// 检查地址白名单
function checkWhite(url) {
  const path = url.split('?')[0]
  return whiteList.indexOf(path) !== -1
}

// 页面跳转验证拦截器
let list = ["navigateTo", "redirectTo", "reLaunch", "switchTab"]
list.forEach(item => {
  uni.addInterceptor(item, {
    invoke(to) {
      return true
      // if (getToken()) {
      //   if (to.url === startupPage) {
      //     uni.reLaunch({ url: "/" })
      //   }
      //   return true
      // } else {
      //   if (checkWhite(to.url)) {
      //     return true
      //   }
      //   uni.reLaunch({ url: startupPage })
      //   return false
      // }
    },
    fail(err) {
      console.log(err)
    }
  })
})
