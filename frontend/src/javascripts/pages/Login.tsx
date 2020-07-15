

import * as React from 'react';
import { Link } from 'react-router-dom';

// export const Login = () => {
//   return <h1>hoge</h1>;
// };

// import React, { Component } from 'react';
// import { Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import { useState, useEffect } from 'react';

// import { Button } from '@zeit-ui/react'
import * as H from 'history';

import { Grid, Row, Note, Button } from '@zeit-ui/react';

type LoginProps = {
  email: '';
  password: '';
  errMessage: '';
  history: H.History;
  message: string;
};

export const Login = (props: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMessage, setErrMessage] = useState('');

  useEffect(() => {
    // User.set('isLoggedIn', false.toString());

  }, []);
  const onClickLogin = async () => {


    try {
      // await User.login(email, password);

      props.history.push('/');
    } catch (e) {
      setErrMessage('メールアドレスかパスワードが違います');
    }
  };

  // const onClickFacebook = async () => {
  //   try {
  //     await facebookLogin;
  //     if (process.env.NODE_ENV !== 'production') {
  //       console.log(User.isLoggedIn());
  //     }
  //     props.history.push('/');
  //   } catch (e) {
  //     setErrMessage('SNSログインに失敗しました。');
  //   }
  // };
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  // const facebookUrl: string = process.env.REACT_APP_API_URL_SNS_LOGIN + '/facebook';
  // const githubUrl: string = process.env.REACT_APP_API_URL_SNS_LOGIN + '/github';
  // const twitterUrl: string = process.env.REACT_APP_API_URL_SNS_LOGIN + '/twitter';


  return (
    <Grid.Container gap={-10} justify="center">
      <Row className="justify-content-md-center">
        <h3>未ログイン状態です</h3>
        <a
          href="/users/sign_in"
          className="block px-4 py-2 sm:test-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          ログインする
        </a>
        <Link
          to="/"
          className="text-lg text-white ml-4 px-3 py-2 rounded-md sm:sm:test-sm font-medium hover:text-white bg-blue-700 hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
        >
          ログインせずに見る。
        </Link>
      </Row>
    </Grid.Container>
  );
};
