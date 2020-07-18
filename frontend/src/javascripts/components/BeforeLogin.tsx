import * as React from 'react';


import { Home } from '../pages/Home';
import { Pickup } from '../pages/Pickup';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Header } from './header';
import { BeforeLoginPosts } from '../pages/BeforeLoginPosts';


export const BeforeLogin = () => {
  const currentUserData = null;
  console.log('BeforeLoginのcurrent_user')
  return (
    <BrowserRouter>
      <Header currentUserData={currentUserData} />
      <Switch>
        <Route exact path="/" component={BeforeLoginPosts} />
      </Switch>
    </BrowserRouter>
  );
};
