<script>
	import {login} from './services/index'
	export default {
		onLaunch: function() {
			wx.login({
			  success: async res => {
				  debugger;
				  if (res.code){
					  let result = await login(res.code);
					  //   wx.setStorageSync({
				// 	key: 'openid',
				// 	data: res.data.openid
				//   });
				  }
			  },
			  fail: () => {},
			  complete: () => {}
			});
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
