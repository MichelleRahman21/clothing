import React from 'react';
import ReactDOM from 'react-dom';
//is a component that wraps arround our application and gives all the functionality that the
//react router dom provides
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById('root')
);
