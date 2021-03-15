import request from '../utils/request';

// 登陆
export function login(code){
    return request.post('/user/code2session', {code})
}

// 解密手机号
export function decrypt(iv, encryptedData){
    return request.post('/user/decrypt', {iv, encryptedData})
}

// 获取面试列表
export function getSignList(params){
    return request.get('/sign')
}

// 获取面试详情
export function getSignDetail(id){
    return request.get(`/sign/${id}`)
}