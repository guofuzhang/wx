const util=require('./../../utils/util.js');


Page({


  onShow:function(){
  },

   data: {
    message: '还没有输入任何城市'
  },







  formSubmit: function(e) {
    var that=this;
    // console.log('form发生了submit事件，携带数据为：', e.detail.value.input)
    var city=e.detail.value.input;
    // console.log(city.length);
  
  if(city.length>1){

   // util.AJAX('https://www.sojson.com/open/api/weather/json.shtml',city,'get',function(res){
   //  console.log(1111);
   // });
  


          wx.request({
    url: 'https://www.sojson.com/open/api/weather/json.shtml', //仅为示例，并非真实的接口地址
    method:'get',

    data: {
      city:city,
    },
    success: function (res) {
       // console.log(that.data.controls);
      var w_arr=res.data.data.forecast;
      console.log(w_arr[0]);
      that.setData({
      message:w_arr,
    })

      }
  })
  }
  
  },
})