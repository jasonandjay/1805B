import request from '../utils/request';
import { IUserInfo, IMobileInfo } from '../utils/interface';

// 获取用户信息
export let getUserInfo = () => {
    return request.post('/api/service/info', { mid: 'fa291cbd52aa40d2b47ba96c8ec59c99' });
}

// 文件上传接口
export let fileUpload = (form: FormData) => {
    return request.post('/api/service/fileUpload', form);
}

// 更新用户信息接口
export let changeInfo = (info: Partial<IUserInfo>) => {
    return request.post('/api/service/changeInfo', info)
}

// 发送手机验证码
export let getAuthCode = (mobile: string) => {
    return request.post("/api/service/getAuthCode", {
        uid: "fa291cbd52aa40d2b47ba96c8ec59c99",
        type: "3",
        mobile
    })
}

// 修改手机号
export let changeMobile = (info: IMobileInfo)=>{
    return request.post('/api/service/changeMobile', info)
}

// 退出登录
export let logout = (mid = 'fa291cbd52aa40d2b47ba96c8ec59c99')=>{
    return request.post('/api/service/logout', {mid})
}