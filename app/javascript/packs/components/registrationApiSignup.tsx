require('dotenv').config();

import User from './User';

type RejistrationParams = {
  email: string;
  password: string;
  // password_confirmation: string;
  name: string;
};

export const registrationApiSignup = ({ email, password, name }: RejistrationParams) => {
  const csrf = sessionStorage.getItem('X-CSRF-Token');

  const registrationFormData = {
    email: email,
    password: password,
    name: name,
    confirm_success_url: 'http://localhost:8000/App',
    'X-CSRF-Token': csrf,
  };
  const signupUrl: string = process.env.REACT_APP_API_URL!;
  if (process.env.NODE_ENV !== 'production') {
    console.log('signupUrl:', signupUrl);
  }

  const method = 'POST';
  const body = JSON.stringify(registrationFormData);
  const headers = {
    'Content-Type': 'application/json',
  };
  return fetch(signupUrl, { method, headers, body })
    .then((response) => {
      if (response.status == 200) {
        User.set('isLoggedIn', 'true');
        if (process.env.NODE_ENV !== 'production') {
          console.log('isLoggedIn(registrationApiSignup.tsx):', User.isLoggedIn());
        }
      } else {
        User.set('isLoggedIn', 'false');
        if (process.env.NODE_ENV !== 'production') {
          console.log('isLoggedIn(else後):', User.isLoggedIn());
          console.log('body:', JSON.stringify(registrationFormData));
        }

        throw new Error();
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
