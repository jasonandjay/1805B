import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'umi'
import { Form, Input, Button, Checkbox, Select, message } from 'antd';
import Editor from 'for-editor'
import {IQuestionType, ISubject, IExamType, IQuestionForm} from '@/utils/interface'

const {Option} = Select;
const AddQuestion: React.FC = () => {
  // 通过useDispatch拿到派发redux的dispatch
  const dispatch = useDispatch();
  const {questionTypes, subjects, examTypes, user_id} = useSelector(models=>{return {...models.question, ...models.user.userInfo}});

  useEffect(() => {
    dispatch({
      type: 'question/getQuestionType'
    })
    dispatch({
      type: 'question/getExamSubject'
    })
    dispatch({
      type: 'question/getExamType'
    })
  }, []);

  const inputLayout = {
    wrapperCol: {span: 12 }
  };

  const editorLayout = {
    wrapperCol: {span: 6 }
  }

  function onFinish(values: IQuestionForm){
    // debugger;
    let result = dispatch({
      type: 'question/submitQuestion',
      payload: {...values, user_id}
    });
    (result as unknown as Promise<{code: number, msg: string}>).then(res=>{
      if (res.code === 1){
        message.success(res.msg)
      }else{
        message.error(res.msg);
      }
    })
  }

  return (
    <div>
      <Form onFinish={onFinish}>
        <h3>题目信息</h3>
        <label htmlFor="">题干</label>
        <Form.Item
          {...inputLayout}
          name="title"
          rules={[{ required: true, message: '请输入试题题干!' }]}
        >
          <Input />
        </Form.Item>
        <label htmlFor="">题目主题</label>
        <Form.Item
          name="questions_stem"
          rules={[{ required: true, message: '请输入试题主题!' }]}
        >
          <Editor/>
        </Form.Item>
        <label htmlFor="">请选择考试类型：</label>
        <Form.Item
          name="exam_id"
          initialValue={examTypes[0]?.exam_id}
          {...editorLayout}
        >
          <Select>{
              (examTypes as IExamType[]).map(item=>{
                return <Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Option>
              })
          }</Select>
        </Form.Item>

        <label htmlFor="">请选择课程类型：</label>
        <Form.Item
          name="subject_id"
          {...editorLayout}
        >
          <Select defaultValue={subjects[0]?.subject_id}>{
              (subjects as ISubject[]).map(item=>{
                return <Option key={item.subject_id} value={item.subject_id}>{item.subject_text}</Option>
              })
          }</Select>
        </Form.Item>

        <label htmlFor="">请选择题目类型：</label>
        <Form.Item
          name="questions_type_id"
          {...editorLayout}
        >
          <Select defaultValue={questionTypes[0]?.questions_type_id}>{
              (questionTypes as IQuestionType[]).map(item=>{
                return <Option key={item.questions_type_id} value={item.questions_type_id}>{item.questions_type_text}</Option>
              })
          }</Select>
        </Form.Item>

        <label htmlFor="">答案信息</label>
        <Form.Item
          name="questions_answer"
          rules={[{ required: true, message: '请输入试题答案!' }]}
        >
          <Editor/>
        </Form.Item>

        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form>
    </div>
  );
}

export default AddQuestion;
