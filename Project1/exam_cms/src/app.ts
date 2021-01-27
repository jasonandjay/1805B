import { RequestConfig } from 'umi';
import {message} from 'antd'

export const request: RequestConfig = {
  timeout: 1000,
  errorConfig: {},
  middlewares: [],
  requestInterceptors: [(url, options) => {
    // const baseURL = 'http://127.0.0.1:7002';
    const baseURL = 'http://123.206.55.50:7002';
    const authorization = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWduVGltZSI6MTYxMTczNTE2MDMyMSwidXNlcl9pZCI6Inc2bDZuLWNidmw2cyIsInVzZXJfbmFtZSI6ImNoZW5tYW5qaWUiLCJpZGVudGl0eV9pZCI6IjYzbm85cC04eTBrNCIsImlkZW50aXR5X3RleHQiOiLnrqHnkIblkZgiLCJpYXQiOjE2MTE3MzUxNjB9.Yi6v3vfS5A3P_rmsSG_txy0A4Umvj3crZgm_I4AOOf8';
    console.log('options...', options);
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
