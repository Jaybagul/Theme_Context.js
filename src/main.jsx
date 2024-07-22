
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MainTheme } from './Components/Context'; 

ReactDOM.render(
  <MainTheme>
    <App />
  </MainTheme>,
  document.getElementById('root')
);
