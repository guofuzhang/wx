//app.js
App({
  // onLaunch: function () {
  //   console.log("i am commitg")
  //   // 展示本地存储能力
  //   var logs = wx.getStorageSync('logs') || []
  //   logs.unshift(Date.now())
  //   wx.setStorageSync('logs', logs)

  //   // 登录
  //   wx.login({
  //     success: res => {
  //       // 发送 res.code 到后台换取 openId, sessionKey, unionId
  //     }
  //   })
  //   // 获取用户信息
  //   wx.getSetting({
  //     success: res => {
  //       if (res.authSetting['scope.userInfo']) {
  //         // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
  //         wx.getUserInfo({
  //           success: res => {
  //             // 可以将 res 发送给后台解码出 unionId
  //             this.globalData.userInfo = res.userInfo

  //             // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //             // 所以此处加入 callback 以防止这种情况
  //             if (this.userInfoReadyCallback) {
  //               this.userInfoReadyCallback(res)
  //             }
  //           }
  //         })
  //       }
  //     }
  //   })
  // },
  // globalData: {
  //   userInfo: null,
  //   name:'xiaoming'
  // },
  // data: {
  //   text: "This is page data."
  // },
  // onLoad: function (options) {
  //   // Do some initialize when page load.
  // },
  // onReady: function () {
  //   // Do something when page ready.
  // },
  // onShow: function () {
  //   // Do something when page show.
  //   console.log(this.globalData);
  // },
  // onHide: function () {
  //   console.log("后台切换");
  //   // Do something when page hide.
  // },
  // onUnload: function () {
  //   // Do something when page close.
  // },
  // onPullDownRefresh: function () {
  //   // Do something when pull down.
  // },
  // onReachBottom: function () {
  //   // Do something when page reach bottom.
  // },
  // onShareAppMessage: function () {
  //   // return custom share data when user share.
  // },
  // onPageScroll: function () {
  //   // Do something when page scroll
  // },
  // onTabItemTap(item) {
  //   console.log(item.index)
  //   console.log(item.pagePath)
  //   console.log(item.text)
  // },
  // // Event handler.
  // viewTap: function () {
  //   this.setData({
  //     text: 'Set some data for updating view.'
  //   }, function () {
  //     // this is setData callback
  //   })
  // },
  // customData: {
  //   hi: 'MINA'
  // }
})