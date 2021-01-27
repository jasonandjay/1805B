import React, {useEffect} from 'react'
import {getQuestionType} from '@/services/index'

const QuestionType: React.FC = ()=>{
  useEffect(()=>{
    getQuestionType().then(res=>{
      console.log('res...', res);
    });
  }, []);

  return (
    <div>
      <h1>试题分类</h1>
    </div>
  );
}

export default  QuestionType;
