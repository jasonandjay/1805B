import request from '../utils/request';

// 首页导航数据
export let getIndexNav = ()=>{
    return request.post('/api/service/home', {mid: 0, phoneTerminal: 2});
}

// 首页轮播数据
export let getCarouselList = ()=>{
    return request.post('/api/service/carouselList', {mid: 0, phoneTerminal: 2});
}

// 首页排名数据
export let getRankList = ()=>{
    return request.post('/api/service/rankPage', {mid: 0, phoneTerminal: 2});
}