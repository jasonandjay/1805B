import React from 'react';
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

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);