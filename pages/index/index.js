Page({
  data: {
    message: '你好!',
    is_true:true,
    id: 0,
    condition: true,
    a: 1,
    b: 2,
    array:[1,2,3,4,5,6,7,8,9]
  },
  hehe:function(){
    // console.log(66666)
    this.setData({
      message:'just soso',
      is_true:!this.data.is_true,

    })
  },
  onLoad:function(){
    console.log(222);
  },

})