<template>
    <div>
        <p>我是我的页面</p>
        <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">手机号获取</button>
    </div>
</template>

<script>
import {decrypt} from '../../services/index'
export default {
    methods:{
        async getPhoneNumber(e){
            console.log('e...', e);
            if (e.target.errMsg === "getPhoneNumber:ok"){
                let {iv, encryptedData} = e.target;
                let result = await decrypt(iv, encryptedData);
                console.log('result...', result);
            }
        }
    }
}
</script>