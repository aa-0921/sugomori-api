import User from './User';
import React, { useState, useEffect } from 'react';

type LoginParams = {
  email: string;
  password: string;
};
// const [responseUserData, setResponseUserData] = useState([]);

export const sessionApiLogin = async ({ email, password }: LoginParams) => {
  console.log('process.env.NODE_ENV:', process.env.NODE_ENV);
  const csrf = sessionStorage.getItem('X-CSRF-Token');

  // const headers = new Headers();
  // if (csrf) {
  //   console.log('csrf(sessionApiLogin.tsx):', csrf);

  //   // headers.append('X-CSRF-Token', csrf);
  //   headers.append('X-CSRF-Token', 'abababababa');

  //   headers.append('Content-Type', 'application/json');
  //   console.log('appendedHeaders(sessionApiLogin.tsx) :', headers);
  //   console.log('headers.token(sessionApiLogin.tsx):', headers.get('X-CSRF-Token'));
  // }
  type headersType = {
    'X-CSRF-Token': any;
  };

  const headers = {
    // 'X-CSRF-Token': csrf,
    'X-CSRF-Token': 'abababababa',
    'Content-Type': 'application/json',
  } as headersType;

  console.log('headers(sessionApiLogin.tsx):', headers);

  const obj = {
    email: email,
    password: password,
  };
  const method = 'POST';
  const body = JSON.stringify(obj);
  const credentials = 'include';
  const mode = 'cors';

  console.log('csrf(fetch前):', csrf);

  // const headers = {
  //   'Content-Type': 'application/json',
  //   // 'X-CSRF-Token': csrf,
  // };
  const loginUrl: string = process.env.REACT_APP_API_URL + '/sign_in';
  console.log('loginUrl:', loginUrl);

  // if (process.env.NODE_ENV !== 'production') {
  console.log('process.env.NODE_ENV:', process.env.NODE_ENV);
  console.log('loginUrl:', loginUrl);
  console.log('process.env.REACT_APP_API_URL_SIGN_IN!:', process.env.REACT_APP_API_URL_SIGN_IN!);
  console.log('process.env.REACT_APP_API_URL_POSTS!:', process.env.REACT_APP_API_URL_POSTS!);
  // }

  // return await fetch(loginUrl, { method: 'POST', headers, body, mode, credentials })
  return await fetch(loginUrl, { method: 'POST', headers, body, mode })
    .then((response) => {
      console.log('user.Login');
      console.log('response:', response);
      console.log('response.body:', response.body);
      console.log('response.status:', response.status);

      if (response.status == 200) {
        User.set('isLoggedIn', 'true');

        console.log('response.headers.get(x-auth-token):', response.headers.get('x-auth-token'));

        return response.json().then((response) => {
          const currentUserId = response.data.id;
          console.log('currentUserId:', currentUserId);
          // setResponseUserData(responseData);
          User.set('currentUserId', JSON.stringify(currentUserId));
        });
      } else {
        User.set('isLoggedIn', 'false');
        if (process.env.NODE_ENV !== 'production') {
        }
      }
    })
    .catch((error) => {
      User.set('isLoggedIn', 'false');
      if (process.env.NODE_ENV !== 'production') {
        console.log('isLoggedIn(catch後):', User.isLoggedIn());
        console.log('errorの内容', JSON.stringify(error.json));
      }
    });
};
