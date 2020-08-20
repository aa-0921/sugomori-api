import * as React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Header } from './header';
import { PostsApp } from '../pages/PostsApp';
import { ProfilePage } from '../pages/ProfilePage';
import { MemberListApp } from '../pages/MemberListApp';
import { FetchData } from '../api/FetchData';
import { useState, useEffect } from 'react';
import { useToasts } from '@zeit-ui/react';
import { FeedApp } from '../pages/FeedApp';
import { Skroller } from '../pages/Skroller';
import { userData } from '../../javascripts/interfaces/user'

export const HomePage = (props: any) => {
  const [currentUserData, setCurrentUserData] = useState<userData>({
    id: 0,
    email: '',
    name: '',
  })
  let nowLoading: boolean;
  let setNowLoading: any;
  [nowLoading, setNowLoading] = useState<boolean>(false)
  const getInitialDataUrl: string = '/initial_data/show';

  useEffect(() => {
    setNowLoading(true);
    FetchData(getInitialDataUrl).then((res) => {
      setCurrentUserData(res.data);
    });
    setNowLoading(false);
  }, []);

  // toast関連
  const [, setToast] = useToasts()
  useEffect(() => {
    var notice: HTMLElement | null = document.getElementById("notice");
    if (!notice) return;
    setToast({
      text: notice.innerHTML,
      type: 'success',
    })
  }, []);
  // toast関連

  return (
    <React.Fragment>
      {nowLoading ? (

        <div className="loadingDiv z-50  bg-black absolute opacity-50 h-screen w-screen flex justify-center flex-col items-center">
          <div className="loader"></div>
          <div className="loadingShadow"></div>
        </div>
      ) : (
          <React.Fragment></React.Fragment>
        )}
      <React.Fragment>
        <BrowserRouter>
          <Header currentUserData={currentUserData} />
          <Switch>
            <Route exact path="/"
              render={(props) =>
                <PostsApp
                  {...props}
                  currentUserData={currentUserData}
                  setNowLoading={setNowLoading}
                  nowLoading={nowLoading}
                />}
            />
            <Route exact path="/feed"
              render={(props) =>
                <FeedApp
                  {...props}
                  currentUserData={currentUserData}
                  setNowLoading={setNowLoading}
                  nowLoading={nowLoading}
                />}
            />
            <Route path="/profilepage/:id"
              render={(props) =>
                <ProfilePage
                  {...props}
                  currentUserData={currentUserData}
                />}
            />
            <Route exact path="/UserList"
              render={(props) =>
                <MemberListApp
                  {...props}
                  currentUserData={currentUserData}
                  component={MemberListApp}
                  setNowLoading={setNowLoading}
                />}
            />
            {/* <Route exact path="/background" component={BackGroundVanta} /> */}
            <Route exact path="/About" component={Skroller} />
          </Switch>
          {/* <Footer /> */}
        </BrowserRouter >
      </React.Fragment>
    </React.Fragment>
  );
};
