var app = getApp()
import * as map from '../../untils/common'
//var map = require("../../untils/common")
Page({
  data: {
    text: 'init data',
    array: [
      {msg: '1'},
       {msg: '2'}
    ],
    currentData:"",
    golabData:''
  },
  onShow:function(){
    console.log(app.globalData.data)
    this.setData.golabData = app.globalData.data
  },
  onLoad: function(){
    wx.createIntersectionObserver().relativeToViewport().observe('.target-class', (res) => {
      // res.id // 目标节点 id
      // res.dataset // 目标节点 dataset
      // res.intersectionRatio // 相交区域占目标节点的布局区域的比例
      // res.intersectionRect // 相交区域
      // res.intersectionRect.left // 相交区域的左边界坐标
      // res.intersectionRect.top // 相交区域的上边界坐标
      // res.intersectionRect.width // 相交区域的宽度
      // res.intersectionRect.height // 相交区域的高度

      console.log(res,"res")
    })
  },
  changeDate:function(){
    const data =  JSON.stringify(new Date())
    console.log(app.globalData.data,'data')
    app.globalData.data =data+'aaaa'
    this.setData({
      currentData:data,
      golabData:app.globalData.data
    }),
    console.log(map.fn)
    map.fn.sayHello('zwsss')
   // common.sayHello('zws')
  // map.fn('zws')
  }
})