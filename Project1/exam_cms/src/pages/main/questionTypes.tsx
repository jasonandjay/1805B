import React, {useEffect} from 'react'
import {useDispatch} from 'umi'

const QuestionType: React.FC = ()=>{
  // 通过useDispatch拿到派发redux的dispatch
  const dispatch  = useDispatch();

  useEffect(()=>{
    dispatch({
      type: 'question/getQuestionType'
    })
  }, []);

  return (
    <div>
      <h1>试题分类</h1>
    </div>
  );
}

export default  QuestionType;
