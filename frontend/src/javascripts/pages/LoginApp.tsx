import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Login } from '../pages/Login';
// import { Logout } from '../pages/Logout';
// import { Signup } from '../pages/Signup';

import { HomePage } from '../components/HomePage';

import { Auth } from '../components/Auth';
import { PostsApp } from './PostsApp';
import { useState, useEffect } from 'react';
import { FetchData } from '../api/FetchData';

export const LoginApp = () => {
  const [currentUserData, setCurrentUserData] = useState({
    id: 0,
    email: '',
    name: '',
  })

  const getInitialDataUrl: string = '/initial_data/show';

  useEffect(() => {
    FetchData(getInitialDataUrl).then((res) => {
      setCurrentUserData(res.data);
      console.log('getInitialDataUrl', getInitialDataUrl);
      console.log('res.data', res.data);
      console.log('currentUserData', currentUserData);
      console.log('currentUserData');
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/users/sign_in" component={Login} />
        {/* <Route exact path="/logout" component={Logout} /> */}
        {/* <Route exact path="/signup" component={Signup} /> */}

        {/* 本番では削除（このままでは非ログイン状態でもAppにアクセスできてしまう。） */}
        {/* <Route exact path="/app" component={App} /> */}
        {/* いいね機能実装の為、一時的に/appのコンポーネント変更 */}
        {/* <Route exact path="/app" component={PostsApp} /> */}

        <Auth current_user={currentUserData}>
          <Switch>
            {/* <Route exact path="/list" component={List} /> */}
            {/* <Redirect from="/" to="/list" /> */}

            <Route exact path="/" component={HomePage} />
            <Redirect from="/" to="/" />
          </Switch>
        </Auth>
      </Switch>
    </Router>
  );
};
