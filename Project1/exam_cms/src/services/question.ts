import { request } from 'umi';

// 获取试题列表
export function getQuestionType(){
  return request('/exam/getQuestionsType');
}
