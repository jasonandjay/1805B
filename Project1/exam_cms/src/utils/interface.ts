export interface ILogin {
  user_name: string,
  user_pwd: string
}

export interface IQuestionType {
  questions_type_id: string,
  questions_type_text: string,
  questions_type_sort: number
}

export interface ISubject {
  subject_id: string,
  subject_text: string
}

export interface IExamType {
  exam_id: string,
  exam_name: string
}

export interface IQuestionForm {
  questions_type_id: string,
  questions_stem: string,
  subject_id: string,
  exam_id: string,
  user_id: string,
  questions_answer: string,
  title: string,
}

interface IMenuItem{
  path: string,
  name: string,
  meta: {
    title: string,
    show: boolean,
    view_id: string
  }
}
export interface IMenu{
  name: string,
  meta: {
    icon: any,
    title: string,
    show: boolean
  },
  children?: IMenuItem[]
}

