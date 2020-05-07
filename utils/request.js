import { Config } from "config.js";

class Req{
  constructor(){
    this.baseRestUrl = Config.baseUrl;
  }

  /* 
  请求数据接口封装
  params = {
      url:url,//接口地址
      data:{},//请求参数
      type:GET/POST,//请求类型，默认为POST
      sCallBack(value){},//成功回调  -100表示未登录/登录过期
      eCallBack(value){}//失败回调
  }
  */
  request(params){
    let url = this.baseRestUrl + params.url;
    // 默认 POST 请求
    if (!params.type){
      params.type = "POST";
    }
    if (!params.data) {
      params.data = {};
    }

    params.data.token = wx.getStorageSync('token');

    wx.request({
      url: url,
      data: params.data,
      header: {
        'content-type': 'application/json'
      },
      method: params.type,
      // dataType: 'json',
      // responseType: 'text',
      success: function (res) { 
        if (res.statusCode.toString().charAt(0) == 2){
          // if(res.data.flag === 1){
            params.sCallBack && params.sCallBack(res.data);
          // } else if (res.data.flag === -100) {
            // todo  微信登录相关
          // } else{
            // params.eCallBack && params.eCallBack(res.data);
          // }
        } else {
          params.eCallBack && params.eCallBack(res.data);
        }
      },
      fail: function (res) { 
        params.eCallBack && params.eCallBack(res.data);
      },
      // complete: function (res) { },
      
    })

  }

}

export {Req};
