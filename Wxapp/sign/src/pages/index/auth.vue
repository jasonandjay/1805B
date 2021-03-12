<template>
  <p @click="auth">{{auths.length?`点击触发${auths[0]==='facial'?'人脸':'指纹'}识别`: '您的当前设备不支持生物识别'}}</p>
</template>

<script>
export default {
  data() {
    return {
      auths: [],
    };
  },
  methods: {
      auth(){
          if (this.auths.length){
              wx.startSoterAuthentication({
                  requestAuthModes: this.auths.slice(0, 1),
                  challenge: '123456',
                  authContent: '登陆认证',
                  complete(res){
                      if (res.errCode === 0){
                          wx.setStorageSync('auth', 'true');
                          wx.navigateBack();
                      }
                  }
              })

          }
      }
  },
  mounted() {
    wx.checkIsSupportSoterAuthentication({
      complete: (res)=>{
        console.log('res...', res, res.supportMode);
        if (res.supportMode){
            this.auths = res.supportMode;
            // res.supportMode = [] 不具备任何被SOTER支持的生物识别方式
            // res.supportMode = ['fingerPrint'] 只支持指纹识别
            // res.supportMode = ['fingerPrint', 'facial'] 支持指纹识别和人脸识别
        }
      }
    });
  },
};
</script>