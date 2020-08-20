import * as React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Header } from './header';
import { BeforeLoginPosts } from '../pages/BeforeLoginPosts';
import { useToasts } from '@zeit-ui/react';
import { useEffect } from 'react';
import { Skroller } from '../pages/Skroller';

export const BeforeLogin = () => {
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

  const currentUserData = null;
  return (
    <BrowserRouter>
      <Header currentUserData={currentUserData} />
      <Switch>
        <Route exact path="/" component={BeforeLoginPosts} />
        <Route exact path="/About" component={Skroller} />
      </Switch>
    </BrowserRouter>
  );
};
