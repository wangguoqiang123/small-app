var postsData = require('../../data/posts-data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

    // this.data.postList = postsData.postList
    this.setData({
      postList: postsData.postList
    });
  },
  onPostTap: function (event) {
    var postId = event.currentTarget.dataset.postid;
    //得到每个元素的postId
    // console.log(postId);
    wx.navigateTo({
      url: "post-detail/post-detail?id=" + postId
    })
  },
  onSwiperTap: function (event) {
    //这里是target,target指的是点击的组件 而 currentTarget 指的是事件捕获的组件
    //这里的换image就是target, swiper就是currentTarget
    var postId = event.target.dataset.postid;
    wx.navigateTo({
      url: "post-detail/post-detail?id=" + postId
    })
  }
})