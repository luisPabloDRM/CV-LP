import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.scss';
import LanguageWrapper from './contexts/LanguageContext'

ReactDOM.render(
  <React.StrictMode>
    <LanguageWrapper>
    <Router>
      <App />
    </Router>
    </LanguageWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);



