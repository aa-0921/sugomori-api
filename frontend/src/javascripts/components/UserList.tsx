import * as React from 'react';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
import { Grid, Row, Note, Button, Divider, Spacer, Card } from '@zeit-ui/react';
import * as Icon from '@zeit-ui/react-icons';
import { FollowButton } from './FollowButton';

export const UserList = (props: any) => {
  const onClickFollow = async (userId: any) => {
    const csrf = sessionStorage.getItem('X-CSRF-Token');
    const obj = {
      current_user_id: props.currentUserData.id,
      'X-CSRF-Token': csrf,
    };
    const body = JSON.stringify(obj);
    const method = 'PUT';
    const postUrl: string = '/users/follow/' + userId;

    await fetch(postUrl, { method, body })
      .then((response) => {
        console.log(response.status);
        // if (response.status == 204) {
        if (response.status == 200) {
          props.pushToFollowUsers(props.user.id);
        } else {
          throw new Error();
        }
      })
      .catch((error) => { });
  };
  const onClickUnFollow = async (userId: any) => {
    const obj = {
      current_user_id: props.currentUserData.id,
    };

    const body = JSON.stringify(obj);
    const method = 'PUT';
    const postUrl: string = '/users/unfollow/' + userId;

    await fetch(postUrl, { method, body })
      .then((response) => {
        console.log(response.status);
        // if (response.status == 204) {
        if (response.status == 200) {
          props.removeFromFollowUsers(props.user.id);
        } else {
          throw new Error();
        }
      })
      .catch((error) => { });
  };
  const buttonSize = "small"

  const goProfile = () => {
    props.history.push('/profilepage/' + props.user.id);
    addHeader();
  };
  const addHeader = () => {
    const target = document.getElementById('header')
    target.classList.remove('head-animation');
  };

  return (
    <React.Fragment>
      <Router>

        {/* <Row> */}
        <Card hoverable>
          <div className="flex items-center ml-8">
            <div className="flex-1  text-center">
              <li key={props.user.id} style={{ color: 'white' }} className="flex items-center justify-center m-auto">
                <div className="flex justify-between w-4/5">
                  <div className="mr-20">
                    <Link
                      to={'/profilepage/' + props.user.id}
                      onClick={() => goProfile()}
                    >{props.user.name}&emsp;</Link>
                  </div>
                  {props.currentUserData.id != props.user.id ? (
                    <div>
                      <FollowButton
                        onClickFollow={onClickFollow}
                        onClickUnFollow={onClickUnFollow}
                        followUsersList={props.followUsersList}
                        user={props.user}
                        buttonSize={buttonSize}
                      />
                    </div>
                  ) : (
                      <div></div>
                    )}
                </div>
              </li>
            </div>
          </div>
        </Card>
        {/* </Row> */}
        {/* <Divider /> */}
        <Spacer y={0.4} />
      </Router>

    </React.Fragment>

  );
};
