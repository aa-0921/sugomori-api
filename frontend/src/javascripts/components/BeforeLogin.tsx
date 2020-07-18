import * as React from 'react';

// import React, { useState, useEffect } from 'react';

import { Home } from '../pages/Home';
import { Pickup } from '../pages/Pickup';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Header } from './header';
import { About } from '../pages/About';
import { PostsApp } from '../pages/PostsApp';
import { ProfilePage } from '../pages/ProfilePage';
import { MemberListApp } from '../pages/MemberListApp';
import { FetchData } from '../api/FetchData';
import { useState, useEffect } from 'react';

export const BeforeLogin = () => {

  const currentUserData = null;
  return (
    <BrowserRouter>
      <Header currentUserData={currentUserData} />
      <Switch>
        <Route exact path="/" component={BeforeLoginPosts} />
      </Switch>
    </BrowserRouter>
  );
};
