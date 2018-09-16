var app = getApp()
var postdata = require('../../utils/localData.js')
Page({
  data: {
    navLeftItems: [],
    navRightItems: [],
    curNav: 1,
    curIndex: 0
  },
  onLoad: function() {
    console.log(postdata.postList.data)
    this.setData({
      navLeftItems: postdata.postList.data,
      navRightItems: postdata.postList.data
    }) ;
    console.log(this.data.navLeftItems)
  },

  //事件处理函数
  switchRightTab: function(e) {
    console.log(e.target.dataset)
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    this.setData({
      curNav: id,
      curIndex: index
    })
  }

})