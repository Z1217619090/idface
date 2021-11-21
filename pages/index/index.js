// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"hello word"

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    wx.getSystemInfo({
      // success: (){} 同等于 success:function name(params) {}
      success: (res) => {
        console.log(res);

        console.log(res.brand);
        console.log(res.system);
        console.log(res.model);
        console.log(res.benchmarkLevel);

        this.setData({
          b:res.brand,
          s:res.system,
          m:res.model,
          bl:res.benchmarkLevel
        })
      }
    })
    
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
    wx.vibrateShort();
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