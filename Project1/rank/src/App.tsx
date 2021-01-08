import React from 'react'
import RouterView from './router/RouterView';
import routes from './router/config';
import {HashRouter} from 'react-router-dom'

const App: React.FC = ()=>{
  return <HashRouter> 
    <RouterView routes={routes}/>
  </HashRouter>
}

export default App;