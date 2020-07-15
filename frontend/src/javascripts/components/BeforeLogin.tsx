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
    <BrowserRouter>
      <Header currentUserData={currentUserData} />
      <Switch>
        <Route exact path="/" component={PostsApp} currentUserData={currentUserData} />
      </Switch>
    </BrowserRouter>
  );
};
