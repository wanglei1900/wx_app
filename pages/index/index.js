// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: '测试数据',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   /*  console.log('load');
    this.setData({
      msg:'修改之后的数据'
    }) */
  console.log(this.data.msg);
  },
 /*  handlerParent(){
    console.log('父级点击触发');
  },
  handlerChild(){
     console.log('子级点击被触发');
  }, */
  // 点击调整logs页面  
  toLogs(){
    // 异步
    wx.redirectTo({
      url: '/pages/logs/logs'
    })
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