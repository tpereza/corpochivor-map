import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <div class="logo">
      <img src="/logo-cor.png" alt="Logo Corpochivor" />
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
