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
import { useToasts } from '@zeit-ui/react';

export const HomePage = () => {
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
      console.log('HomePageのcurrentUserData', currentUserData);
      console.log('currentUserData');
    });
  }, []);


  // toast関連

  const [toasts, setToast] = useToasts()
  useEffect(() => {
    var notice = document.getElementById("notice");

    if (notice.innerHTML) {
      setToast({ text: notice.innerHTML })
    }
  }, []);
  // toast関連

  console.log('HomePageのcurrentUserData', currentUserData);

  return (
    <BrowserRouter>
      <Header currentUserData={currentUserData} />

      <Switch>
        <Route exact path="/"
          render={() => <PostsApp currentUserData={currentUserData} />}
        />
        <Route exact path="/pickup" component={Pickup} />
        <Route exact path="/about" component={About} />
        <Route path="/profilepage/:id" component={ProfilePage} />
        <Route exact path="/MemberListApp" component={MemberListApp} />
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};
