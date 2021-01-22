import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// 引入样式重置
import './scss/index.scss';
// 引入store
import store from './store/index';
import StoreContext from './context/StoreContext';
// 引入mockjs
// import './mock/index'
// 引入路由
import { HashRouter as Router } from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
     <Suspense fallback={<div>Loading...</div>}>
      <StoreContext.Provider value={store}>
        <Router>
          <App />
        </Router>
      </StoreContext.Provider>
     </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);