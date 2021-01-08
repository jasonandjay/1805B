import request from '../utils/request';

// 首页数据
export let getIndexNav = ()=>{
    return request.post('/api/service/home', {mid: 0, phoneTerminal: 2});
}