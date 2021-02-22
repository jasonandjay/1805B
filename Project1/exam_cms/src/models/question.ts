import { getExamType, getExamSubject, getQuestionType, submitQuestion } from '@/services';
import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import { IQuestionType, IExamType, ISubject } from '@/utils/interface'

export interface QuestionModelState {
  questionTypes: IQuestionType[],
  subjects: ISubject[],
  examTypes: IExamType []
}
export interface QuestionModelType {
  namespace: 'question';
  state: QuestionModelState;
  effects: {
    getQuestionType: Effect;
    getExamSubject: Effect;
    getExamType: Effect;
    submitQuestion: Effect;
  };
  reducers: {
    save: Reducer<QuestionModelState>;
  };
}
const QuestionModel: QuestionModelType = {
  namespace: 'question',
  state: {
    questionTypes: [],
    subjects: [],
    examTypes: []
  },
  // 异步操作，理解为vuex中的action, async/await理解为generator函数的语法糖
  effects: {
    *getQuestionType({ payload }, { call, put }) {
      let result = yield call(getQuestionType);
      if (result.data) {
        yield put({
          type: 'save',
          payload: { questionTypes: result.data }
        })
      }
    },
    *getExamSubject({ payload }, { call, put }) {
      let result = yield call(getExamSubject);
      if (result.data) {
        yield put({
          type: 'save',
          payload: { subjects: result.data }
        })
      }
    },
    *getExamType({ payload }, { call, put }) {
      let result = yield call(getExamType);
      if (result.data) {
        yield put({
          type: 'save',
          payload: { examTypes: result.data }
        })
      }
    },
    *submitQuestion({payload}, {call, put}) {
      let result = yield call(submitQuestion, payload);
      return result;
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
  }
};
export default QuestionModel;
