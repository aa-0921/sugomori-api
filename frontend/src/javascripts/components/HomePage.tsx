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

export const HomePage = (props: any) => {


  return (
    <BrowserRouter>
      <Header currentUserData={props.currentUserData} />
      <Switch>
        <Route exact path="/" component={PostsApp} currentUserData={props.currentUserData} />
        <Route exact path="/pickup" component={Pickup} />
        {/* <Route exact path="/zeit-sample" component={ZeitSample} /> */}
        <Route exact path="/about" component={About} />
        <Route path="/profilepage/:id" component={ProfilePage} />
        {/* <Route path="/profilepage" component={ProfilePage} /> */}
        <Route exact path="/MemberListApp" component={MemberListApp} />
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};
