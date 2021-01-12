import request from '../utils/request';

// 消息列表
export let getUserInfo = ()=>{
    return request.post('/api/service/info', {mid: 0});
}