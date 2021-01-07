import React,{useState, useEffect} from 'react'
import Header from './components/Header'
import Body from './components/Body'

const App: React.FC = ()=>{
  let [content, setContent] = useState<string>('');

  useEffect(()=>{
    console.log('context...', content);
  }, [content]);

  return <div>
    <Header setContent={setContent}></Header>
    <Body content={content}></Body>
  </div>
}

export default App;