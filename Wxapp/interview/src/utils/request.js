const Fly = require("flyio/dist/npm/wx")
const fly = new Fly

//设置超时
fly.config.timeout = 10000;
//设置请求基地址
fly.config.baseURL = "https://sign.jasonandjay.com"

//添加请求拦截器
fly.interceptors.request.use((request) => {
    //给所有请求添加自定义header
    let openid = wx.getStorageSync('openid');
    if (openid){
        request.headers["openid"] = "openid";
    }
    //打印出请求体
    console.log(request.body)
    //终止请求
    //var err=new Error("xxx")
    //err.request=request
    //return Promise.reject(new Error(""))

    //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
    return request;
})

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
    (response) => {
        //只将请求结果的data字段返回
        if (response.data.code == "200"){
            return response.data.result
        }else{
            wx.showToast({
              title: response.data.message, //提示的内容,
              icon: 'none', //图标,
            });
            return response.data
        }
    },
    (err) => {
        //发生网络错误后会走到这里
        //return Promise.resolve("ssss")
    }
)

export default fly;