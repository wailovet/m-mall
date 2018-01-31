
var base_url = "http://cms.v.wailovet.com"
export default {
  get: (url, funcall) => {
    wx.request({
      url: base_url + url,
      method: "GET",
      dataType: "json",
      success: function (res) {
        funcall(res.data)
      }
    })
  }
}