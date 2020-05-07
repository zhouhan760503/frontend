// import { Req } from "../utils/request.js"

//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    catList: [
      {
        id: 0,
        name: "Cookie（社长）",
        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588430772322&di=f9fb3acfb81babf6bd3cfcc6a5712a58&imgtype=0&src=http%3A%2F%2Fimg5.goumin.com%2Fattachments%2Fbbs%2F201905%2F05%2F201905051109154456.jpg"
      },
      {
        id: 1,
        name: "11",
        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588485729767&di=90a2e57be22c82d6e02d192ea9243cbc&imgtype=0&src=http%3A%2F%2Ft2.58cdn.com.cn%2Fbidding%2Fbig%2Fn_v29911e4db9626414e9b40a905f9e57411.jpg"
      },
      
    ],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  searchCat: function (e) {
    console.log("e.detail.value")
    console.log(e.detail.value)

    if(e.detail.value){
      // todo 
      wx.navigateTo({

        url: '/pages/cats/cats',
      })

    }

    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }


})

