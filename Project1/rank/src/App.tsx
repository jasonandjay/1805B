import React from 'react'
import RouterView from './router/RouterView';
import routes from './router/config';
import {HashRouter} from 'react-router-dom'
// 引入store
import store from './store/index';
import StoreContext from './context/StoreContext';

const App: React.FC = ()=>{
  return <StoreContext.Provider value={store}>
    <HashRouter> 
      <RouterView routes={routes}/>
    </HashRouter>
  </StoreContext.Provider>
}

export default App;