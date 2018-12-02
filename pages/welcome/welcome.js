Page({
  onTap: function () {
    wx.redirectTo({
      url: '../posts/post'
    })
  },

  // onUnload: function() {
  //   console.log(1);//消失redirectTo
  // },

  // onHide: function() {
  //   console.log(2);//隐藏navigateTo
  // }
})