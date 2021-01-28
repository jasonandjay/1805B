import { login } from '@/services';
import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import {setToken, getToken} from '@/utils/index';

export interface IndexModelState {
  isLogin: boolean,
  userInfo: {[key:string]:any}
}
export interface IndexModelType {
  namespace: 'user';
  state: IndexModelState;
  effects: {
    login: Effect;
  };
  reducers: {
    save: Reducer<IndexModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<IndexModelState>;
  };
  subscriptions: { setup: Subscription };
}
const UserModel: IndexModelType = {
  namespace: 'user',
  state: {
    isLogin: false,
    userInfo: {}
  },
  // 异步操作，理解为vuex中的action, async/await理解为generator函数的语法糖
  effects: {
    *login({payload}, {call, put}){
      let result = yield call(login, payload);
      if(result.token){
        setToken(result.token);
        // 存储token
        yield put({
          type: 'save',
          payload: {isLogin: true}
        })
      }
    }
  },
  // 同步操作，理解为vuex中的mutation
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        let authorization = getToken();
        // 首页重定向
        if (pathname === '/') {
          history.replace('/main');
          return;
        }
        // 登录页重定向
        if (authorization){
          if (pathname === '/login'){
            history.replace('/main');
          }
        }else{
          if (pathname !== '/login'){
            history.replace(`/login?redirect=${encodeURIComponent(pathname)}`);
          }
        }
      });
    }
  }
};
export default UserModel;
