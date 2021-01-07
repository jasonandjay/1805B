import React,{useState} from 'react'
import Header from './components/Header'
// import Body from './components/Body'

const App: React.FC = ()=>{
  let [content, setContent] = useState<string>('');

  return <div>
    <Header setContent={setContent}></Header>
  </div>
}

export default App;