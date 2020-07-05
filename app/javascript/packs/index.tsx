import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './scss/index.scss';
import { LoginApp } from './pages/LoginApp';

import 'font-awesome/css/font-awesome.min.css';

const mode = 'cors';
const headers = {
  'Content-Type': 'application/json',
};
const getTokenUrl: string = process.env.REACT_APP_API_URL_USERS + '/token/get';
console.info('getTokenUrl:::', getTokenUrl);

fetch(getTokenUrl, { headers, mode }).then((response) => {
  const headers: any = response.headers;
  console.info('headers:::', headers);

  const token = headers.get('X-CSRF-Token');
  console.info('token:::', token);
  if (token) {
    // window.localStorage.setItem('csrf-token', token);
    sessionStorage.setItem('X-CSRF-Token', token);
    // const csrf = window.localStorage.getItem('csrf-token');
    const csrf = sessionStorage.getItem('X-CSRF-Token');

    console.log('csrf:::', csrf);
    console.log('response.headers:', headers);
  }
});

const target = document.getElementById('app');
ReactDOM.render(<LoginApp />, target);
