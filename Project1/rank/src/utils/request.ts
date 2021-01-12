import axios from 'axios'
import store from '../store';
import {toast} from './toast'

const erros = {
    400: '客户端请求错误',
    401: '请求未经授权',
    404: '未找到资源',
    500: '服务器内部错误',
    502: '网关错误',
    503: '服务不可用'
}

const instance = axios.create({
    // baseURL: 'http://47.92.71.239/',
    timeout: 30000
});

// 请求拦截器
instance.interceptors.request.use(function (config) {
    store.global.showLoading();
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// 相应拦截器
instance.interceptors.response.use(function (response) {
    store.global.hideLoading();
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // 1. 处理网络请求错误
    if (response.status != 200){
        toast(erros[response.status]);
        return;
    }
    // 2. 处理业务逻辑错误
    if (response.data.result !== '0'){
        toast(response.data.resultNote);
        return;
    }
    return response;
}, function (error) {
    store.global.hideLoading();
    toast(error.toString());
    return;
});

export default instance;