var app = getApp()
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
  changeDate:function(){
    const data =  JSON.stringify(new Date())
    console.log(app.globalData.data,'data')
    app.globalData.data =data+'aaaa'
    this.setData({
      currentData:data,
      golabData:app.globalData.data
    })
    
  }
})