export interface ILogin{
  user_name: string,
  user_pwd: string
}

export interface IQuestionType{
  questions_type_id: string,
  questions_type_text: string,
  questions_type_sort: number
}

export interface ISubject{
  subject_id: string,
  subject_text: string
}

export interface IExamType{
  exam_id: string,
  exam_name: string
}
