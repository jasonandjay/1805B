import { request } from 'umi';
import {ILogin} from '@/utils/interface'

// 登陆接口
export function login(data: ILogin){
  return request('/user/login', {
    method: 'POST',
    data
  });
}

// 获取用户信息接口
export function getUserInfo(){
  return request('/user/userInfo');
}

// 获取用户视图权限
export function getViewAuthority(){
  return request('/user/view_authority');
}
