const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,

    AJAX : function( url='',data = '',method = "get", fn,  header = {}){
        wx.request({
            url: config.API_HOST + data,
            method : method ? method : 'get',
            data: {},
            header: header ? header : {"Content-Type":"application/json"},
            success: function( res ) {
                fn( res );
            }
        });
    },
}
