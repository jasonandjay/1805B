import request from '../utils/request';

// 消息列表
export let getMessageList = (pageNo: number)=>{
    return request.post('/api/service/messagePage', {mid: 0, pageNo});
}