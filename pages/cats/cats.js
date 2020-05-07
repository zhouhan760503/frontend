Page({
  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    catname:"Cookie（社长）",
    gender: "男",
    birthday: "2018年5月左右",
    //绝育情况
    sterilization: "已绝育",   
    //领养情况
    adopt: "未领养",
    //性格
    temperament: "恬不知耻型，偏欠打",
    //外貌特征
    appearance: "狸花色，胸前是白色，鼻梁有一道白，后腿先天畸形有些弯，体型中等",
    //猫生概述
    experience: "是三花花的一窝孩子的其中之一，被志愿者捡到救助站喂养，在救助站长大，同一窝的其他孩子都散布天涯，只有他安心守着救助站，冬天与一只小橘恩爱缠绵，后来小橘不见了，它也出走四栋，成为了一只差不多的普通猫",
    // 当前状况
    situation: "从四栋门口进到了四栋里面，在寝室徘徊，而且脾气开始有些暴躁，偶尔会打人",
    // 新手建议
    advice: "建议先试探感情，之前它脾气很好，是个拖拉机，近些日子在外不知性情如何，总体来说亲人给撸"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    });
    //todo 
    console.log(options.id);

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})

