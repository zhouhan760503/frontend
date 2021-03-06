//app.js
import {
  User
} from "api/User.js";

const objUser = new User();

App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          console.log(res.code);
          objUser.login({
            code: res.code
          })
            .then((res) => {
              console.log('BEFORE');
              wx.setStorageSync("token", res.data.Token);
              console.log(res.data.Token);
              wx.setStorageSync("uId", res.data.UserId);
              console.log(res.data.UserId);
              console.log('成功');

            })
            .catch((err) => {
              wx.showToast({
                title: err.message,
                icon: "none"
              })
            });
        } else {
          wx.showToast({
            title: '登录失败',
            icon: "none"
          })
        }
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})