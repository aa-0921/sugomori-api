import * as React from 'react';


import { Home } from '../pages/Home';
import { Pickup } from '../pages/Pickup';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Header } from './header';
import { BeforeLoginPosts } from '../pages/BeforeLoginPosts';
import { useToasts } from '@zeit-ui/react';
import { useState, useEffect } from 'react';


export const BeforeLogin = () => {

  // toast関連

  const [toasts, setToast] = useToasts()
  useEffect(() => {
    var notice = document.getElementById("notice");

    if (notice.innerHTML) {
      setToast({ text: notice.innerHTML })
    }
  }, []);
  // toast関連


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
