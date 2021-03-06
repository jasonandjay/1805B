import { IQuestionForm } from '@/utils/interface';
import { request } from 'umi';

// 获取试题列表
export function getQuestionType(){
  return request('/exam/getQuestionsType');
}

// 获取所有课程
export function getExamSubject(){
  return request('/exam/subject');
}

// 获取所有考试类型
export function getExamType(){
  return request('/exam/examType');
}
// 添加试题
export function submitQuestion(data: IQuestionForm){
  return request('/exam/questions', {
    method: 'POST',
    data
  })
}
