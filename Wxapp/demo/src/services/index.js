import request from '../utils/request';

// 请求轮播图
export function getCarousel(){
    return request.get('/yili_applets/homeCarousel/getGuangPage')
}