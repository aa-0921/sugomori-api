import { sessionApiLogin } from './sessionApiLogin';
import { sessionApiLogout } from './SessionApiLogout';
import { registrationApiSignup } from './registrationApiSignup';

// import { useState } from 'react';
import Cookies from 'js-cookie';

class User {
  isLoggedIn = () => Cookies.get('isLoggedIn') === 'true';

  set = (key: string, value: string) => Cookies.set(key, value);
  get = (key: string) => Cookies.get(key);

  login = async (email: string, password: string) => {
    console.log('user.Login');

    if (process.env.NODE_ENV !== 'production') {
      console.log(email);
      console.log(password);
    }
    await sessionApiLogin({ email, password }).then((res) => {
      console.log('res:' + res);

      // this.set('responseData', JSON.stringify(res));

      console.log("this.get('currentUserId'):" + this.get('currentUserId'));
    });

    if (process.env.NODE_ENV !== 'production') {
      console.log('isLoggedIn(User.tsxログイン処理後):' + this.isLoggedIn());
      console.log('this.get(User.tsx):', this.get('isLoggedIn'));
    }
    return true;
  };

  logout = async () => {
    if (this.isLoggedIn()) {
      this.set('isLoggedIn', false.toString());
      sessionApiLogout;
    }
  };
  signup = async (email: string, password: string, password_confirmation: string, name: string) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(email);
      console.log(password);
      console.log(password_confirmation);
      console.log(name);
    }
    await registrationApiSignup({ email, password, name });
    if (process.env.NODE_ENV !== 'production') {
      console.log('isLoggedIn(User.tsxサインアップ処理後):' + this.isLoggedIn());
    }
    return true;
  };
}

export default new User();
