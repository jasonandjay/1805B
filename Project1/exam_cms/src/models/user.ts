import { login, getUserInfo } from '@/services';
import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import { setToken, getToken } from '@/utils/index';
let hasUserInfo = false;

export interface IndexModelState {
  isLogin: boolean,
  userInfo: { [key: string]: any }
}
export interface IndexModelType {
  namespace: 'user';
  state: IndexModelState;
  effects: {
    login: Effect;
    getUserInfo: Effect;
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
    *login({ payload }, { call, put }) {
      let result = yield call(login, payload);
      if (result.token) {
        setToken(result.token);
        // 存储token
        yield put({
          type: 'save',
          payload: { isLogin: true }
        })
      }
    },
    *getUserInfo({ payload }, { call, put }) {
      let result = yield call(getUserInfo);
      if (result.data) {
        hasUserInfo = true;
        // 存储用户信息
        yield put({
          type: 'save',
          payload: { userInfo: result.data }
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
        /* 登陆相关逻辑 */
        let authorization = getToken();
        // 首页重定向
        if (pathname === '/') {
          history.replace('/main');
          return;
        }
        // 登录页重定向
        if (authorization) {
          if (pathname === '/login') {
            history.replace('/main');
          }
        } else {
          if (pathname !== '/login') {
            history.replace(`/login?redirect=${encodeURIComponent(pathname)}`);
          }
        }

        /* 获取用户信息相关逻辑 */
        if (!hasUserInfo && authorization) {
          dispatch({
            type: 'getUserInfo'
          })
        }
      });
    }
  }
};
export default UserModel;
