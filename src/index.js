import React from 'react';
import GlobalContext from '../Context';
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <GlobalContext>
   <App/>
  </GlobalContext>
  </React.StrictMode>
)
