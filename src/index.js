import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom';
import LanguageWrapper from './contexts/LanguageContext';
import App from './App';
import './index.scss';

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



