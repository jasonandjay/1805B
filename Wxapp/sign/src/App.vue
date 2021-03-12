<script>
import { login } from "./services/index";
export default {
  onLaunch: function () {
    wx.login({
      success: async (res) => {
        if (res.code) {
          let result = await login(res.code);
          console.log("result...", result);
          if (result.openid) {
            wx.setStorageSync("openid", result.openid);
          }
        }
      },
      fail: () => {},
      complete: () => {},
    });
  },
  onUnload(){
	  wx.clearStorageSync('auth');
  }
};
</script>

<style>
/*每个页面公共css */
</style>
