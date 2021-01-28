import { RequestConfig } from 'umi';
import { createLogger } from 'redux-logger';
import {message} from 'antd'
import {getToken} from '@/utils'

export const request: RequestConfig = {
  timeout: 1000,
  errorConfig: {},
  middlewares: [],
  requestInterceptors: [(url, options) => {
    // const baseURL = 'http://127.0.0.1:7002';
    const baseURL = 'http://123.206.55.50:7002';
    let authorization = getToken() as string;
    return {
      url: `${baseURL+url}`,
      options: { ...options, interceptors: true, headers: {...options.headers, authorization} },
    };
  }],
  responseInterceptors: [response => {
    const codeMaps:{[key:number]:string} = {
      401: '鉴权失败',
      404: '请求接口不存在',
      502: '网关错误',
      503: '服务不可用，服务器暂时过载或维护',
      504: '网关超时',
    };
    if (response.status !== 200){
      message.error(codeMaps[response.status]);
    }
    return response;
  }],
};


export const dva = {
  config: {
    onAction: createLogger(),
    onError(e: Error) {
      message.error(e.message, 3);
    },
  },
};
