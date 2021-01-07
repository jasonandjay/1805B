import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// 引入mock
import './mock/index'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);