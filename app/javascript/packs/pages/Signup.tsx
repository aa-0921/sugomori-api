// import * as React from 'react';

// export const Login = () => {
//   return <h1>hoge</h1>;
// };

import * as React from 'react';
// import React, { Component } from 'react';
// import { Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import User from '../components/User';
import { useState, useEffect } from 'react';

// import { Button } from '@zeit-ui/react'
import * as H from 'history';
import { App } from '../../src/App';
import { Grid, Row, Note, Button } from '@zeit-ui/react';

type SignupProps = {
  name: '';
  email: '';
  password: '';
  errMessage: '';
  history: H.History;
  message: string;
};

export const Signup = (props: SignupProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState('');
  const [name, setName] = useState('');

  const [errMessage, setErrMessage] = useState('');

  useEffect(() => {
    User.set('isLoggedIn', false.toString());
    if (process.env.NODE_ENV !== 'production') {
      console.log('isLoggedIn(Login.tsx):', User.isLoggedIn());
    }
  }, []);
  const onClickSignup = async () => {
    try {
      await User.signup(email, password, password_confirmation, name);
      if (process.env.NODE_ENV !== 'production') {
        console.log(User.isLoggedIn());
      }
      props.history.push('/');
    } catch (e) {
      // setErrMessage('メールアドレスかパスワードが違います');
    }
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleChangeConfirmationpass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword_confirmation(e.target.value);
  };

  return (
    <Grid.Container gap={-10} justify="center">
      <Row className="justify-content-md-center">
        <form>
          {props.errMessage && <Note type="warning">{props.message}</Note>}
          <p>
            <b>Signup</b>
          </p>
          <div className="form-group">
            <label className="form-label">ニックネーム</label>
            <input
              type="name"
              placeholder="ニックネームを入力"
              onChange={handleChangeName}
              value={props.name}
            />
          </div>
          <div className="form-group">
            <label className="form-label">メールアドレス</label>
            <input
              type="email"
              placeholder="メールアドレスを入力"
              onChange={handleChangeEmail}
              value={props.email}
            />
          </div>
          <div className="form-group">
            <label className="form-label">パスワード</label>
            <input
              type="password"
              placeholder="パスワードを入力"
              onChange={handleChangePassword}
              value={props.password}
            />
          </div>
          <div className="form-group">
            <label className="form-label">確認用パスワード</label>
            <input
              type="password"
              placeholder="パスワードを再入力"
              onChange={handleChangeConfirmationpass}
              value={props.password}
            />
          </div>
          <Button type="success" ghost onClick={onClickSignup}>
            Signup
          </Button>
        </form>
      </Row>
    </Grid.Container>
  );
};
