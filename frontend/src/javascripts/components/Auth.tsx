import * as React from 'react';
import { Redirect } from 'react-router-dom';


interface AuthProps {
  children: JSX.Element;
  current_user: any;
}

export const Auth = (props: AuthProps) => {
  return props.current_user ? props.children : <Redirect to={'/users/sign_in'} />;
  // return User.isLoggedIn() ? props.children : <Redirect to={'/app'} />;
};
