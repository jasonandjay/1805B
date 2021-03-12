import request from '../utils/request';

// 请求轮播图
export function login(code){
    return request.post('/user/code2session', {code})
}