import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <header>
      <div className="logo-ventanilla">
        {/* <img src="/logo-cor.png" alt="Logo Corpochivor" /> */}
      </div>
      <div className="logo" >
        <span className="logo-text">Geo<span className="text-alt">CHYSQUY</span></span>
      </div>
    </header>
    <div className="App">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
