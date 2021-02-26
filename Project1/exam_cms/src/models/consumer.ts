import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import { IMenu } from '../utils/interface';
import { getConsumerList, getViewAuthority, getIdentifyList, getApiAuthority, getIdentityViewAuthorityRelation, getIdentityApiAuthorityRelation } from '@/services';

export interface ConsumerModelState {
  consumerList: [];
  identifyList: [];
  apiAuthorityList: [];
  viewAuthorityList: [];
  identityApiAuthorityRelation: [];
  identityViewAuthorityRelation:  [];
}
export interface ConsumerModelType {
  namespace: 'consumer';
  state: ConsumerModelState;
  effects: {
    getConsumerList: Effect;
    getIdentifyList: Effect;
    getApiAuthority: Effect;
    getViewAuthority: Effect;
    getIdentityViewAuthorityRelation: Effect;
    getIdentityApiAuthorityRelation: Effect;
  };
  reducers: {
    save: Reducer<ConsumerModelState>;
  };
}
const consumerModel: ConsumerModelType = {
  namespace: 'consumer',
  state: {
    consumerList: [],
    identifyList: [],
    apiAuthorityList: [],
    viewAuthorityList: [],
    identityApiAuthorityRelation: [],
    identityViewAuthorityRelation:  []
  },
  // 异步操作，理解为vuex中的action, async/await理解为generator函数的语法糖
  effects: {
    *getConsumerList({ payload }, { call, put }) {
      let result = yield getConsumerList();
      if (result.data) {
        yield put({
          type: 'save',
          payload: { consumerList: result.data }
        })
      }
    },
    *getIdentifyList({ payload }, { call, put }) {
      let result = yield getIdentifyList();
      if (result.data) {
        yield put({
          type: 'save',
          payload: { identifyList: result.data }
        })
      }
    },
    *getApiAuthority({ payload }, { call, put }) {
      let result = yield getApiAuthority();
      if (result.data) {
        yield put({
          type: 'save',
          payload: { apiAuthorityList: result.data }
        })
      }
    },
    *getViewAuthority({ payload }, { call, put }) {
      let result = yield getViewAuthority();
      if (result.data) {
        yield put({
          type: 'save',
          payload: { consumerList: result.data }
        })
      }
    },
    *getIdentityViewAuthorityRelation({ payload }, { call, put }) {
      let result = yield getIdentityViewAuthorityRelation();
      if (result.data) {
        yield put({
          type: 'save',
          payload: { identityViewAuthorityRelation: result.data }
        })
      }
    },
    *getIdentityApiAuthorityRelation({ payload }, { call, put }) {
      let result = yield getIdentityApiAuthorityRelation();
      if (result.data) {
        yield put({
          type: 'save',
          payload: { identityApiAuthorityRelation: result.data }
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
    }
  },
};
export default consumerModel;
