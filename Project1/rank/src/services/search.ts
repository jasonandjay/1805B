import request from '../utils/request';

// 热门搜索列表
export let getHotList = ()=>{
    return request.post('/api/service/hotList', {mid: 0});
}

// 搜索接口
export let getSearchList = (keyword: string)=>{
    return request.post('/api/service/search', {mid: 0, keyword});
}

// 关键词提示
export let getSearchTips = (keyword: string)=>{
    return request.post('/api/service/searchTips', {keyword});
}