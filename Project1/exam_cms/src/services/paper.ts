import { request } from 'umi';
import {ILogin} from '@/utils/interface'

// 登陆接口
export function login(data: ILogin){
  return request('/user/login', {
    method: 'POST',
    data
  });
}
