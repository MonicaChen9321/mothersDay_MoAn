// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })


    wx.BaaS = requirePlugin('sdkPlugin')
    //让插件帮助完成登录、支付等功能
    // wx.BaaS.wxExtend(wx.login,
    //  wx.getUserInfo,
    //  wx.requestPayment)

    wx.BaaS.init('18438c9f2fa33a667e41')
    wx.BaaS.auth.loginWithWechat() // 静默登录



  },

  globalData: {
    userInfo: null
  }
})
