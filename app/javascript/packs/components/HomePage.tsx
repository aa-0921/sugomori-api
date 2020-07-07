import React, { useState, useEffect } from 'react';

import { Home } from '../pages/Home';
import { Pickup } from '../pages/Pickup';
import { ZeitSample } from '../pages/zeit-sample';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Header } from './header';
import { About } from '../pages/About';
import { PostsApp } from '../pages/PostsApp';
import ProfilePage from '../pages/ProfilePage';
import { MemberListApp } from '../pages/MemberListApp';
import { FetchData } from '../scripts/api/FetchData';

export const HomePage = () => {
  // interface ISquareProps {
  //     id: number,
  //     email: string,
  //     name: string,

  // const [currentUserData, setCurrentUserData] = useState<{}>({})
  // }  // const [currentUserData, setCurrentUserData] = useState({
  //   id: 0,
  //   email: '',
  //   name: '',
  // })

  // const getInitialDataUrl: string = 'http://localhost:3000/initial_data/show';

  // useEffect(() => {
  //   FetchData(getInitialDataUrl).then((res) => {
  //     setCurrentUserData(res.data);
  //     console.log('getInitialDataUrl', getInitialDataUrl);
  //     console.log('res.data', res.data);
  //     console.log('currentUserData', currentUserData);
  //     console.log('currentUserData');
  //   });
  // }, []);

  // console.log('currentUserData', currentUserData);

  return (
    <BrowserRouter>
      {/* <Header currentUserData={currentUserData}/> */}
      <Header />

      <Switch>
        <Route exact path="/" component={PostsApp} />
        <Route exact path="/pickup" component={Pickup} />
        <Route exact path="/zeit-sample" component={ZeitSample} />
        <Route exact path="/about" component={About} />
        <Route exact path="/profilepage/:id" component={ProfilePage} />
        <Route exact path="/MemberListApp" component={MemberListApp} />

        <Route exact path="/postsApp" component={PostsApp} />
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};
